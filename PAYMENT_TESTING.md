# Yoco Payment Integration Testing Guide

## Overview
This document provides instructions for testing the Yoco payment integration in the Rare Nutrition e-commerce application.

## Test Environment
The integration is currently set up with Yoco test credentials:
- Public Key: `pk_test_7813b32f49KwGevf3cf4`
- Secret Key: `sk_test_64749f941eZ8qoV0a674cd9b2c6a`

## Testing the Payment Flow

### Prerequisites
1. Ensure the development server is running (`npm run dev`)
2. Access the application at http://localhost:3000

### Test Steps

1. **Add Products to Cart**
   - Browse to the Products page
   - Add one or more products to your cart
   - Verify the cart icon updates with the correct number of items

2. **Proceed to Checkout**
   - Click on the cart icon or navigate to /cart
   - Review your cart items
   - Click "Proceed to Checkout"

3. **Complete Shipping Information**
   - Fill in all required shipping information fields
   - The form will validate that all fields are completed

4. **Initiate Payment**
   - Click "Proceed to Payment" or "Complete Purchase"
   - You will be redirected to the Yoco payment page

5. **Test Card Payment**
   - On the Yoco test payment page, use these test card details:
     - Card Number: `4111 1111 1111 1111`
     - Expiry Date: Any future date (e.g., `12/25`)
     - CVV: Any 3 digits (e.g., `123`)

6. **Complete Test Payment**
   - After submitting the test card details, you should be redirected back to the success page
   - Verify that your cart is cleared
   - You should see a success message

7. **Test Payment Cancellation**
   - Start a new checkout process
   - When on the Yoco payment page, click the cancel button
   - You should be redirected to the cancellation page
   - Verify that your cart items are still preserved

## Troubleshooting

### Common Issues

1. **API Connection Errors**
   - Check that the server is running
   - Verify that the API route is correctly implemented
   - Check browser console for any error messages

2. **Redirect Issues**
   - Ensure the success and cancel URLs are correctly configured
   - Check for any CORS issues in the browser console

3. **Payment Processing Errors**
   - Verify the correct amount is being sent (in cents)
   - Ensure the idempotency key is unique for each request

## Moving to Production

When ready to move to production:

1. Replace the test keys with production keys
2. Update the API URL if necessary
3. Perform thorough testing with real cards in a staging environment
4. Monitor the first few production transactions closely