import { business } from '../data/site';

export const isEmailConfigured = Boolean(business.enquiryInbox);

class EnquiryError extends Error {}

function confirmationText({ name, phone, requirement }) {
  const firstName = name.split(/\s+/)[0];
  const contacts = business.contacts.map((contact) => `${contact.name}: ${contact.display}`).join('\n');

  return [
    `Hi ${firstName},`,
    '',
    `Thank you for contacting ${business.name}! We have received your enquiry for "${requirement}".`,
    `Our team will call you on ${phone} shortly to understand the details and plan the next step.`,
    '',
    'Need to talk sooner? Call or WhatsApp us:',
    contacts,
    '',
    `Address: ${business.address}`,
    '',
    `Team ${business.name}`,
    business.description,
  ].join('\n');
}

/** Branded HTML emails with the logo, sent by api/enquiry.js through Gmail. */
async function sendViaApi(enquiry) {
  const response = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(enquiry),
  });
  const data = await response.json().catch(() => ({}));

  if (data.ok) return { confirmationSent: Boolean(data.confirmationSent) };
  // Validation and rate-limit answers are final; anything else falls back to FormSubmit
  if (response.status === 400 || response.status === 429) throw new EnquiryError(data.error);
  return null;
}

/** Fallback: plain FormSubmit emails, used until Gmail is configured for the API or if it is unavailable. */
async function sendViaFormSubmit(enquiry) {
  const response = await fetch(`https://formsubmit.co/ajax/${business.enquiryInbox}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: `New Enquiry — ${enquiry.name} | ${enquiry.requirement} | ${business.name}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: enquiry.email,
      _autoresponse: confirmationText(enquiry),
      Name: enquiry.name,
      Phone: enquiry.phone,
      // FormSubmit sends the auto-response to the field named exactly `email`
      email: enquiry.email,
      Requirement: enquiry.requirement,
      Message: enquiry.message || 'No additional message.',
      Source: `${business.name} Website — Contact Form`,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.success === false || data.success === 'false') {
    throw new EnquiryError(data.message || 'Unable to send enquiry right now.');
  }
  return { confirmationSent: true };
}

export async function sendEnquiryEmails(values) {
  const enquiry = {
    name: values.name.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    requirement: values.requirement,
    message: values.message.trim(),
  };

  try {
    const result = await sendViaApi(enquiry);
    if (result) return result;
  } catch (error) {
    if (error instanceof EnquiryError) throw error;
  }

  return sendViaFormSubmit(enquiry);
}
