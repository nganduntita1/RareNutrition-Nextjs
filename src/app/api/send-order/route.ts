import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, address, deliveryOption } = req.body;

  if (!name || !email || !phone || !address || !deliveryOption) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailHtml = `<div>
    <h1>Order Details</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <p>Delivery Option: ${deliveryOption}</p>
  </div>`;

  try {
    const { data } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['rarenutritionshop@gmail.com'],
      subject: `New Order from ${name}`,
      html: emailHtml,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error });
  }
}