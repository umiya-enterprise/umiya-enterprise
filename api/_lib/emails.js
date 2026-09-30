import { business } from '../../src/data/site.js';

const C = {
  red: '#ed1c24',
  redStrong: '#d3141b',
  blue: '#39358b',
  blueSoft: '#c7c5ea',
  blueText: '#dcdbf3',
  ink: '#111827',
  body: '#374151',
  muted: '#6b7280',
  faint: '#9ca3af',
  line: '#e5e7eb',
  light: '#f3f4f6',
  night: '#0a0a12',
};

const FONT = "'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function messageHtml(message) {
  return message ? esc(message).replace(/\r?\n/g, '<br>') : 'No additional message.';
}

export function whatsappNumber(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 ? `91${digits}` : digits;
}

/* ---------- Shared pieces ---------- */

const brandStrip = `
  <tr><td style="padding:0;font-size:0;line-height:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="33%" height="5" style="background-color:${C.red};font-size:0;line-height:0;">&nbsp;</td>
      <td width="47%" height="5" style="background-color:${C.blue};font-size:0;line-height:0;">&nbsp;</td>
      <td width="20%" height="5" style="background-color:${C.faint};font-size:0;line-height:0;">&nbsp;</td>
    </tr></table>
  </td></tr>`;

const logoRow = (width) => `
  <tr><td align="center" style="padding:28px 24px 20px;">
    <img src="cid:logo" alt="${esc(business.name)}" width="${width}"
      style="display:block;width:${width}px;max-width:${width}px;height:auto;border:0;" />
  </td></tr>`;

const label = (text) =>
  `<p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.muted};">${text}</p>`;

function button(href, text, variant = 'red') {
  const base = 'display:inline-block;margin:0 6px 10px 0;font-size:14px;font-weight:700;text-decoration:none;border-radius:8px;';
  if (variant === 'outline') {
    return `<a href="${href}" style="${base}padding:11px 19px;background-color:#ffffff;color:${C.blue};border:1px solid ${C.blueSoft};">${text}</a>`;
  }
  const bg = variant === 'blue' ? C.blue : C.redStrong;
  return `<a href="${href}" style="${base}padding:12px 20px;background-color:${bg};color:#ffffff;">${text}</a>`;
}

function banner(eyebrow, title, subtitle, align = 'left') {
  return `
  <tr><td style="padding:0 24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.blue};border-radius:12px;">
      <tr><td align="${align}" style="padding:${align === 'center' ? '32px' : '24px'} 26px;">
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${C.blueSoft};">${eyebrow}</p>
        <p style="margin:0 0 8px;font-size:${align === 'center' ? 26 : 22}px;line-height:1.3;font-weight:800;color:#ffffff;">${title}</p>
        <p style="margin:0;font-size:${align === 'center' ? 15 : 13}px;line-height:1.6;color:${C.blueText};">${subtitle}</p>
      </td></tr>
    </table>
  </td></tr>`;
}

function shell(title, rows) {
  return `<!doctype html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>${esc(title)}</title></head>
<body style="margin:0;padding:0;background-color:${C.light};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.light};">
    <tr><td align="center" style="padding:28px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
        style="width:100%;max-width:600px;background-color:#ffffff;border-radius:14px;overflow:hidden;font-family:${FONT};color:${C.ink};">
        ${rows}
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ---------- Business notification ---------- */

export function adminEmail(d) {
  const phoneHref = `tel:+${whatsappNumber(d.phone)}`;
  const link = (href, text) => `<a href="${href}" style="color:${C.blue};font-weight:700;text-decoration:none;">${text}</a>`;
  const row = (name, value, last = false) => {
    const border = last ? '' : `border-bottom:1px solid ${C.line};`;
    return `<tr>
      <td width="34%" valign="top" style="padding:13px 16px;font-size:13px;font-weight:700;color:${C.muted};${border}">${name}</td>
      <td style="padding:13px 16px;font-size:15px;line-height:1.6;color:${C.ink};word-break:break-word;${border}">${value}</td>
    </tr>`;
  };

  const html = shell(
    `New Enquiry – ${business.name}`,
    `${brandStrip}
    ${logoRow(130)}
    ${banner('New Website Enquiry', esc(d.requirement), `Received on ${esc(d.submittedAt)}`)}
    <tr><td style="padding:26px 24px 6px;">
      ${label('Customer Details')}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
        style="border:1px solid ${C.line};border-radius:10px;border-collapse:separate;">
        ${row('Name', `<strong>${esc(d.name)}</strong>`)}
        ${row('Phone', link(phoneHref, esc(d.phone)))}
        ${row('Email', link(`mailto:${esc(d.email)}`, esc(d.email)))}
        ${row('Requirement', esc(d.requirement))}
        ${row('Message', messageHtml(d.message), true)}
      </table>
    </td></tr>
    <tr><td style="padding:20px 24px 26px;">
      ${label('Quick Actions')}
      ${button(phoneHref, 'Call Customer')}
      ${button(`https://wa.me/${whatsappNumber(d.phone)}`, 'WhatsApp', 'blue')}
      ${button(`mailto:${esc(d.email)}`, 'Reply by Email', 'outline')}
    </td></tr>`,
  );

  const text = [
    `New website enquiry – ${d.submittedAt}`,
    '',
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Email: ${d.email}`,
    `Requirement: ${d.requirement}`,
    `Message: ${d.message || 'No additional message.'}`,
  ].join('\n');

  return { subject: `New Enquiry: ${d.requirement} – ${d.name}`, html, text };
}

/* ---------- Customer confirmation ---------- */

export function customerEmail(d, siteUrl) {
  const firstName = esc(d.name.split(/\s+/)[0]);
  const summaryRow = (name, value) => `<tr>
    <td width="34%" valign="top" style="padding:5px 0;font-size:13px;font-weight:700;color:${C.muted};">${name}</td>
    <td style="padding:5px 0;font-size:14px;line-height:1.6;color:${C.ink};word-break:break-word;">${value}</td>
  </tr>`;
  const contactCard = (contact) => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 10px;border:1px solid ${C.line};border-radius:10px;">
      <tr>
        <td style="padding:12px 16px;font-size:13px;font-weight:700;color:${C.muted};">${esc(contact.name)}</td>
        <td align="right" style="padding:12px 16px;">
          <a href="${contact.href}" style="font-size:15px;font-weight:700;color:${C.blue};text-decoration:none;">${esc(contact.display)}</a>
        </td>
      </tr>
    </table>`;

  const html = shell(
    `Thank you – ${business.name}`,
    `${brandStrip}
    ${logoRow(150)}
    ${banner('Enquiry Received', `Thank you, ${firstName}!`, 'We&rsquo;ve received your enquiry and our team will get in touch with you shortly.', 'center')}
    <tr><td style="padding:28px 28px 6px;">
      <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:${C.body};">Hi ${firstName},</p>
      <p style="margin:0;font-size:15px;line-height:1.7;color:${C.body};">
        Thank you for contacting <strong style="color:${C.ink};">${esc(business.name)}</strong>. We&rsquo;ll review your
        requirement and call you on <strong style="color:${C.ink};">${esc(d.phone)}</strong> to understand the details and
        plan the next step &mdash; including a site visit for measurement if needed.
      </p>
    </td></tr>
    <tr><td style="padding:22px 24px 6px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
        style="background-color:${C.light};border-radius:10px;border-left:4px solid ${C.red};">
        <tr><td style="padding:20px 22px;">
          ${label('Your Enquiry')}
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            ${summaryRow('Requirement', `<strong>${esc(d.requirement)}</strong>`)}
            ${summaryRow('Phone', esc(d.phone))}
            ${summaryRow('Submitted', esc(d.submittedAt))}
            ${summaryRow('Message', messageHtml(d.message))}
          </table>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:24px 28px 4px;">
      <p style="margin:0 0 6px;font-size:17px;font-weight:800;color:${C.ink};">Need to talk sooner?</p>
      <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:${C.muted};">Call or WhatsApp us directly &mdash; we&rsquo;re happy to help.</p>
      ${business.contacts.map(contactCard).join('')}
      <div style="margin-top:6px;">
        ${button(esc(business.whatsapp.href), 'Chat on WhatsApp')}
        ${siteUrl ? button(esc(siteUrl), 'Visit Website', 'outline') : ''}
      </div>
    </td></tr>
    <tr><td style="padding:14px 28px 6px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.muted};">Visit Us</p>
      <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:${C.body};">${esc(business.address)}</p>
      <a href="${esc(business.mapsHref)}" style="font-size:14px;font-weight:700;color:${C.redStrong};text-decoration:none;">View on Google Maps &rarr;</a>
    </td></tr>
    <tr><td style="padding:26px 0 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.night};">
        <tr><td align="center" style="padding:26px 28px;">
          <p style="margin:0 0 8px;font-size:15px;font-weight:800;color:#ffffff;">${esc(business.name)}</p>
          <p style="margin:0 0 14px;font-size:13px;line-height:1.6;color:${C.faint};">${esc(business.description)}</p>
          <p style="margin:0 0 14px;font-size:13px;">
            <a href="${esc(business.email.href)}" style="color:#ffffff;text-decoration:none;">${esc(business.email.display)}</a>
          </p>
          <p style="margin:0;font-size:11px;line-height:1.6;color:${C.muted};">
            You&rsquo;re receiving this email because you submitted an enquiry on our website.<br />
            &copy; 2026 ${esc(business.name)}. All Rights Reserved.
          </p>
        </td></tr>
      </table>
    </td></tr>`,
  );

  const text = [
    `Hi ${d.name.split(/\s+/)[0]},`,
    '',
    `Thank you for contacting ${business.name}. We have received your enquiry for "${d.requirement}"`,
    `and will call you on ${d.phone} shortly.`,
    '',
    'Need to talk sooner?',
    ...business.contacts.map((c) => `${c.name}: ${c.display}`),
    '',
    business.address,
    `Google Maps: ${business.mapsHref}`,
    '',
    `© 2026 ${business.name}`,
  ].join('\n');

  return { subject: `Thank you for contacting ${business.name}`, html, text };
}
