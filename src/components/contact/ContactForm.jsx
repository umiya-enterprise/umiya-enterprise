import { useEffect, useId, useRef, useState } from 'react';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import { business, requirementOptions } from '../../data/site';
import { isEmailConfigured, sendEnquiryEmails } from '../../utils/enquiryEmail';
import Button from '../ui/Button';
import { WhatsAppIcon } from '../ui/BrandIcons';

const EMPTY = { name: '', phone: '', email: '', requirement: '', message: '' };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';

  const digits = values.phone.replace(/\D/g, '');
  if (!digits) errors.phone = 'Please enter your phone number.';
  else if (digits.length < 10 || digits.length > 13 || !/^[+\d\s()-]+$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number (10 digits).';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';

  if (!values.requirement) errors.requirement = 'Please choose your requirement.';
  if (values.message.length > 1000) errors.message = 'Please keep your message under 1000 characters.';
  return errors;
}

/**
 * Enquiry form. Sends branded emails to `enquiryInbox` (data/site.js) and the customer via api/enquiry.js,
 * falling back to FormSubmit when Gmail isn't configured; with no inbox set it runs in demo mode.
 */
export default function ContactForm({ preset }) {
  const uid = useId();
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [result, setResult] = useState({ name: '', email: '', confirmationSent: false });
  const successRef = useRef(null);
  const errorRef = useRef(null);
  const refocusName = useRef(false);

  useEffect(() => {
    if (status === 'sent') {
      successRef.current?.focus();
    } else if (status === 'error') {
      errorRef.current?.focus();
    } else if (status === 'idle' && refocusName.current) {
      refocusName.current = false;
      nameRef.current?.focus();
    }
  }, [status]);

  useEffect(() => {
    if (!preset?.nonce) return;
    setStatus('idle');
    setValues((v) => ({ ...v, requirement: preset.requirement }));
    setErrors((e) => ({ ...e, requirement: undefined }));
    nameRef.current?.focus({ preventScroll: true });
  }, [preset]);

  const id = (field) => `${uid}-${field}`;

  const onChange = (event) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
  };

  const onBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  const finish = (confirmationSent) => {
    setResult({
      name: values.name.trim().split(/\s+/)[0],
      email: values.email.trim(),
      confirmationSent,
    });
    setStatus('sent');
    setValues(EMPTY);
    setTouched({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;

    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, phone: true, email: true, requirement: true, message: true });

    const firstInvalid = Object.keys(EMPTY).find((field) => found[field]);
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('sending');

    // Hidden field only bots fill in: pretend success without sending anything
    if (formRef.current?.elements.namedItem('company')?.value) {
      window.setTimeout(() => finish(false), 800);
      return;
    }

    if (!isEmailConfigured) {
      window.setTimeout(() => finish(false), 1100);
      return;
    }

    try {
      const { confirmationSent } = await sendEnquiryEmails(values);
      finish(confirmationSent);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--success">
        <span className="contact-form__success-icon">
          <CircleCheck size={40} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <h3 ref={successRef} tabIndex={-1}>
          Thank you{result.name ? `, ${result.name}` : ''}!
        </h3>
        <p>
          Your enquiry has been received. Our team will contact you shortly to understand your requirement and plan the
          next step.
        </p>
        {result.confirmationSent && (
          <p className="contact-form__demo-note">
            A confirmation email has been sent to <strong>{result.email}</strong>. Please check your spam folder if you
            don&apos;t see it.
          </p>
        )}
        {!isEmailConfigured && (
          <p className="contact-form__demo-note">
            This is a demo form — no data was sent. For urgent requirements, please call or WhatsApp us.
          </p>
        )}
        <div className="btn-row">
          <Button
            variant="blue"
            onClick={() => {
              refocusName.current = true;
              setStatus('idle');
            }}
          >
            Send Another Enquiry
          </Button>
          <Button href={business.whatsapp.href} variant="outline" icon={WhatsAppIcon}>
            WhatsApp Us
          </Button>
        </div>
      </div>
    );
  }

  const field = (name) => ({
    id: id(name),
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? id(`${name}-error`) : undefined,
  });

  const errorText = (name) =>
    errors[name] ? (
      <p className="contact-form__error" id={id(`${name}-error`)}>
        <CircleAlert size={14} aria-hidden="true" />
        {errors[name]}
      </p>
    ) : null;

  const sending = status === 'sending';

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate aria-labelledby={id('title')}>
      <div className="contact-form__head">
        <h3 id={id('title')}>Send Us Your Requirement</h3>
        <p>Fill in the details and we&apos;ll get back to you with the next steps.</p>
      </div>

      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor={id('name')}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input ref={nameRef} type="text" autoComplete="name" placeholder="Your full name" required {...field('name')} />
          {errorText('name')}
        </div>

        <div className="contact-form__field">
          <label htmlFor={id('phone')}>
            Phone <span aria-hidden="true">*</span>
          </label>
          <input type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" required {...field('phone')} />
          {errorText('phone')}
        </div>

        <div className="contact-form__field">
          <label htmlFor={id('email')}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input type="email" autoComplete="email" placeholder="you@example.com" required {...field('email')} />
          {errorText('email')}
        </div>

        <div className="contact-form__field">
          <label htmlFor={id('requirement')}>
            Requirement <span aria-hidden="true">*</span>
          </label>
          <div className="contact-form__select">
            <select required {...field('requirement')}>
              <option value="" disabled>
                Select a service
              </option>
              {requirementOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {errorText('requirement')}
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor={id('message')}>
            Message <span className="contact-form__optional">(optional)</span>
          </label>
          <textarea rows={4} placeholder="Tell us about your site, sizes, location or timeline" maxLength={1000} {...field('message')} />
          {errorText('message')}
        </div>

        <div className="contact-form__trap" aria-hidden="true">
          <label htmlFor={id('company')}>Company</label>
          <input type="text" id={id('company')} name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === 'error' && (
        <div className="contact-form__alert" role="alert" ref={errorRef} tabIndex={-1}>
          <CircleAlert size={18} aria-hidden="true" />
          <p>
            Sorry, your enquiry could not be sent right now. Please try again, or call{' '}
            <a href={business.phone.href}>{business.phone.display}</a> /{' '}
            <a href={business.whatsapp.href} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
            .
          </p>
        </div>
      )}

      <div className="contact-form__actions">
        <button type="submit" className="btn btn--primary btn--lg" disabled={sending}>
          {sending ? (
            <LoaderCircle className="contact-form__spinner" size={18} aria-hidden="true" />
          ) : (
            <Send size={18} aria-hidden="true" />
          )}
          <span>{sending ? 'Sending…' : 'Send Enquiry'}</span>
        </button>
        <p className="contact-form__privacy">Fields marked * are required. We only use your details to respond to your enquiry.</p>
      </div>
    </form>
  );
}
