import {
  BadgeCheck,
  Brush,
  Building,
  ClipboardList,
  Droplets,
  Factory,
  Gem,
  Hammer,
  Handshake,
  House,
  Layers,
  MessageCircle,
  MoveHorizontal,
  Palette,
  PencilRuler,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Store,
  Sun,
  Wrench,
} from 'lucide-react';
import { images } from './images';

export const aboutAudiences = [
  'Residential buildings',
  'Offices',
  'Factories',
  'Commercial properties',
  'Shops',
  'Modern architectural spaces',
];

export const aboutStrengths = [
  'Quality materials',
  'Precision fabrication',
  'Professional installation',
  'Modern designs',
  'Durable finishing',
  'Customer-focused service',
];

export const aboutHighlights = [
  { title: 'Quality Work', text: 'Carefully selected aluminium sections, glass and hardware.', icon: BadgeCheck },
  { title: 'Professional Installation', text: 'Measured, aligned and sealed by an experienced team.', icon: Wrench },
  { title: 'Custom Solutions', text: 'Sizes, finishes and layouts planned around your space.', icon: PencilRuler },
  { title: 'Residential & Commercial', text: 'Homes, offices, shops, showrooms and factories.', icon: Building },
];

export const windowTypes = [
  { title: 'Sliding Windows', text: 'Smooth horizontal sliding that saves space.', image: images.windowsSliding },
  { title: 'Openable Windows', text: 'Side-hung shutters for full ventilation.', image: images.windowsOpenable },
  { title: 'Fixed Windows', text: 'Clean, uninterrupted glass for light and views.', image: images.windowsFixed },
  { title: 'Custom-Size Windows', text: 'Made to fit non-standard openings.', image: images.windowsCustom },
  { title: 'Residential Windows', text: 'For bedrooms, living rooms, kitchens and more.', image: images.windowsResidential },
  { title: 'Commercial Windows', text: 'For offices, shops and commercial buildings.', image: images.windowsCommercial },
];

export const windowBenefits = [
  { title: 'Durable', icon: ShieldCheck },
  { title: 'Low Maintenance', icon: Droplets },
  { title: 'Modern Appearance', icon: Sparkles },
  { title: 'Customizable', icon: SlidersHorizontal },
  { title: 'Weather Resistant', icon: Sun },
  { title: 'Smooth Operation', icon: MoveHorizontal },
];

export const slidingItems = [
  { title: 'Large Glass Sliding Doors', text: 'Wide openings that connect living spaces with balconies, patios and gardens.', image: images.slidingLarge },
  { title: 'Balcony Sliding Windows', text: 'Neat sliding systems for balconies and utility areas.', image: images.slidingBalcony },
  { title: 'Residential Sliding Windows', text: 'Everyday comfort for bedrooms, halls and kitchens.', image: images.slidingResidential },
  { title: 'Office Sliding Systems', text: 'Sliding windows and doors for cabins, counters and offices.', image: images.slidingOffice },
];

export const doorTypes = [
  'Main entrance doors',
  'Openable aluminium doors',
  'Glass panel doors',
  'Sliding doors',
  'Bathroom & utility doors',
  'Office & cabin doors',
  'Shop & showroom doors',
  'Balcony doors',
];

export const officePartitions = [
  { title: 'Glass Cabins', text: 'Private cabins that stay bright and connected.', image: images.officeGlassCabin },
  { title: 'Aluminium Frame Partitions', text: 'Sturdy frames with glass or board infill.', image: images.officeFramePartition },
  { title: 'Conference Room Partitions', text: 'Meeting rooms with a clean, professional look.', image: images.officeConference },
  { title: 'Manager Cabins', text: 'Dedicated cabins sized to your layout.', image: images.officeManager },
  { title: 'Workstation Partitions', text: 'Organised work zones for teams.', image: images.officeWorkstation },
  { title: 'Reception Partitions', text: 'A welcoming, well-defined front area.', image: images.officeReception },
];

export const glassPartitionTypes = [
  { title: 'Full-Height Glass Partitions', text: 'Floor-to-ceiling glass that divides without closing in.' },
  { title: 'Framed Glass Partitions', text: 'Slim aluminium frames in a range of finishes.' },
  { title: 'Frosted & Film Glass', text: 'Privacy where needed, light everywhere else.' },
  { title: 'Glass Doors for Partitions', text: 'Hinged or sliding glass doors that match the partition.' },
];

export const factoryItems = [
  'Factory partitions',
  'Aluminium partitions',
  'Glass partitions',
  'Work area separation',
  'Office cabins inside factories',
  'Industrial workspace divisions',
];

export const facadeTypes = [
  { title: 'Commercial Buildings', image: images.facadeCommercial },
  { title: 'Aluminium Facade Systems', image: images.facadeAluminium },
  { title: 'Glass Facades', image: images.facadeGlass },
  { title: 'Shopfronts', image: images.facadeShopfront },
  { title: 'Office Buildings', image: images.facadeOffice },
];

export const residentialServices = [
  { title: 'Aluminium Windows', text: 'Sliding, openable and fixed windows for every room.' },
  { title: 'Sliding Windows', text: 'Smooth, space-saving sliding systems.' },
  { title: 'Balcony Doors', text: 'Glazed doors that open your home to the outdoors.' },
  { title: 'Sliding Doors', text: 'Wide glass sliding doors for halls and terraces.' },
  { title: 'Glass Work', text: 'Glass railings, shower areas and glass panels.' },
  { title: 'Custom Aluminium Work', text: 'Made-to-measure frames, grills and fittings.' },
  { title: 'Room Partitions', text: 'Glass and aluminium dividers for open layouts.' },
];

export const commercialUseCases = [
  { title: 'Offices', text: 'Partitions, cabins, windows and doors.', icon: Building, image: images.commercialOffice },
  { title: 'Shops', text: 'Shopfronts, glass doors and display areas.', icon: Store, image: images.commercialShop },
  { title: 'Showrooms', text: 'Large glazing that puts products on show.', icon: Gem, image: images.commercialShowroom },
  { title: 'Factories', text: 'Industrial partitions and office cabins.', icon: Factory, image: images.commercialFactory },
  { title: 'Commercial Buildings', text: 'Facades, windows and entrance systems.', icon: Layers, image: images.commercialBuilding },
];

export const whyChooseUs = [
  { title: 'Quality Aluminium Work', text: 'Reliable sections, glass and hardware chosen for each job.', icon: BadgeCheck },
  { title: 'Professional Finishing', text: 'Clean joints, neat sealing and a tidy site after work.', icon: Brush },
  { title: 'Custom Designs', text: 'Layouts, sizes and finishes tailored to your space.', icon: Palette },
  { title: 'Residential & Commercial Solutions', text: 'One team for homes, offices, shops and factories.', icon: House },
  { title: 'Precise Installation', text: 'Accurate measurement and careful fitting on site.', icon: Ruler },
  { title: 'Modern Designs', text: 'Slim profiles and contemporary styles that age well.', icon: Sparkles },
  { title: 'Durable Solutions', text: 'Built for everyday use and long-term performance.', icon: ShieldCheck },
  { title: 'Customer-Focused Service', text: 'Clear communication from first call to handover.', icon: Handshake },
];

export const processSteps = [
  { title: 'Consultation', text: 'We understand your requirement, budget and preferred style.', icon: MessageCircle },
  { title: 'Site Measurement', text: 'Our team visits the site and takes accurate measurements.', icon: Ruler },
  { title: 'Design & Material Selection', text: 'Choose profiles, glass, finishes and hardware with our guidance.', icon: ClipboardList },
  { title: 'Fabrication', text: 'Aluminium sections are cut, assembled and prepared with precision.', icon: Hammer },
  { title: 'Installation', text: 'Careful on-site fitting, alignment, sealing and final checks.', icon: Wrench },
];

export const trustHighlights = [
  { title: 'On-Site Measurement', text: 'Every job starts with measurements taken at your site, not estimates.' },
  { title: 'Clear Quotations', text: 'Work scope, materials and finishes explained before work begins.' },
  { title: 'Quality Materials', text: 'Aluminium sections, glass and hardware selected for the application.' },
  { title: 'Clean Installation', text: 'Neat fitting and finishing with care for your property.' },
];

export const sectors = ['Homes', 'Apartments', 'Offices', 'Factories', 'Shops', 'Showrooms', 'Commercial Buildings'];
