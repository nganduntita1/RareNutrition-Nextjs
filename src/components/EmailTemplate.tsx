import React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', color: '#333' }}>
      <h1>Hello, {firstName}!</h1>
      <p>Thank you for your order. We are processing it and will update you soon.</p>
      <p>Best regards,</p>
      <p>The Rare Nutrition Team</p>
    </div>
  );
};