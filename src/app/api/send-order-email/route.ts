import { NextRequest, NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@getbrevo/brevo';

// Define types for the order data
interface Customer {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  deliveryMethod: 'collection' | 'delivery';
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderData {
  customer: Customer;
  items: CartItem[];
  deliveryMethod: 'collection' | 'delivery';
  deliveryFee: number;
  subtotal: number;
  total: number;
}

interface EmailRequest {
  to: string;
  subject: string;
  orderData: OrderData;
}

// Configure Brevo API client
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Configure API key authorization
const apiKey = process.env.BREVO_API_KEY;
// Set the API key for all API requests
if (apiKey) {
  apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey);
} else {
  console.error('BREVO_API_KEY is not defined in environment variables');
}

// Format the order items into an HTML table
function formatOrderItemsTable(items: CartItem[]): string {
  const tableRows = items.map(item => {
    return `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">${item.name}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Supplement</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${item.quantity}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">R${item.price.toFixed(2)}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">R${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `;
  }).join('');

  return `
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px; border: 1px solid #ddd;">Product</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Category</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Quantity</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Unit Price</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
}

// Generate the email HTML content
function generateEmailContent(orderData: OrderData): string {
  const { customer, items, deliveryMethod, deliveryFee, subtotal, total } = orderData;
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>New Order from ${customer.fullName}</h2>
      
      <h3>Customer Information</h3>
      <p><strong>Name:</strong> ${customer.fullName}</p>
      <p><strong>Phone:</strong> ${customer.phone}</p>
      <p><strong>Address:</strong> ${customer.address}</p>
      <p><strong>City:</strong> ${customer.city}</p>
      <p><strong>Postal Code:</strong> ${customer.postalCode}</p>
      <p><strong>Delivery Method:</strong> ${deliveryMethod === 'collection' ? 'Collection (Free)' : 'Delivery (R100)'}</p>
      
      <h3>Order Details</h3>
      ${formatOrderItemsTable(items)}
      
      <div style="margin-top: 20px; text-align: right;">
        <p><strong>Subtotal:</strong> R${subtotal.toFixed(2)}</p>
        <p><strong>Delivery Fee:</strong> R${deliveryFee.toFixed(2)}</p>
        <p style="font-size: 18px;"><strong>Total:</strong> R${total.toFixed(2)}</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json();
    const { to, subject, orderData } = body;
    
    if (!to || !subject || !orderData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const htmlContent = generateEmailContent(orderData);
    
    const sendSmtpEmail = {
      sender: { name: 'Rare Nutrition', email: 'orders@rarenutrition.co.za' },
      to: [{ email: to }],
      subject: subject,
      htmlContent: htmlContent,
      replyTo: { email: 'rarenutritionshop@gmail.com' }
    };
    
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}