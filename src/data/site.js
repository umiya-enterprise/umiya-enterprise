// Business details used across the site (navbar, contact section, footer).

// The first contact is the primary number used where only one number fits (navbar, CTA, WhatsApp).
const contacts = [
  { name: 'Patel Akshay', display: '+91 81540 13534', href: 'tel:+918154013534' },
  { name: 'Patel Pratham', display: '+91 81401 81220', href: 'tel:+918140181220' },
];

const address =
  'Shop No. 16, Sudarshan Saket, Ganesh Parisar Road, Chainpur, Krishnadham Tenament, Chandkheda, Ranip, Ahmedabad, Gujarat – 382470';

export const business = {
  name: 'Umiya Enterprises',
  tagline: 'Aluminium & Glass Solutions',
  description:
    'All types of glass & aluminium work — windows, doors, partitions and custom solutions for home and commercial projects.',
  contacts,
  phone: contacts[0],
  whatsapp: {
    display: contacts[0].display,
    href: 'https://wa.me/918154013534?text=Hello%20Umiya%20Enterprises%2C%20I%20would%20like%20a%20quote.',
  },
  email: {
    display: 'umiyaenterprisealu@gmail.com',
    href: 'mailto:umiyaenterprisealu@gmail.com',
  },
  // Inbox that receives contact form enquiries
  enquiryInbox: 'umiyaenterprisealu@gmail.com',
  address,
  // Google Maps place: Sudarshan Saket, Chandkheda
  mapsHref: 'https://maps.google.com/?cid=8579182759461758245',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.701965409295!2d72.55375789678955!3d23.108003500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e839b01ed5e9d%3A0x770f6143e8dfa525!2sSudarshan%20Saket!5e0!3m2!1sen!2sin!4v1790675189094!5m2!1sen!2sin',
  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', time: 'By appointment' },
  ],
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

export const requirementOptions = [
  'Aluminium Windows',
  'Sliding Windows / Doors',
  'Aluminium Doors',
  'Office Partitions',
  'Glass Partitions',
  'Factory Partitions',
  'Aluminium / Glass Facade',
  'Shopfront / Showroom',
  'Custom Aluminium Fabrication',
  'Site Visit Request',
  'Other',
];
