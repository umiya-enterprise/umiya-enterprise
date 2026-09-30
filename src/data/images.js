// Central image registry.
//
// Every image on the site is referenced from here, so placeholders can be swapped
// for real project photos in one place. Two formats are supported:
//
//   unsplash('<photo-id>', 'Alt text', ['category'])
//     Royalty-free Unsplash placeholder. Responsive sizes are generated automatically.
//
//   local(importedFile, 'Alt text', ['category'])
//     Your own photo, e.g.  import officeCabin from '../assets/projects/office-cabin.jpg';
//     Put photos in src/assets/projects/ and keep them around 1600px wide.
//
// Categories: residential, commercial, office, factory, windows, doors, partitions, facades, glass

const unsplash = (id, alt, categories = []) => ({ provider: 'unsplash', id, alt, categories });
// eslint-disable-next-line no-unused-vars
const local = (src, alt, categories = []) => ({ provider: 'local', src, alt, categories });

export const images = {
  // Hero & about
  hero: unsplash(
    '1600585154340-be6161a56a0c',
    'Modern home with large aluminium-framed glass windows and doors at dusk',
    ['residential', 'windows'],
  ),
  aboutMain: unsplash(
    '1497215728101-856f4ea42174',
    'Bright office with full-height aluminium-framed glass windows',
    ['office', 'windows'],
  ),
  aboutDetail: unsplash(
    '1503387762-592deb58ef4e',
    'Fabricator marking measurements on a technical drawing',
    ['commercial'],
  ),

  // Aluminium windows
  windowsSliding: unsplash('1493809842364-78817add7ffb', 'Living room with wide sliding aluminium windows', ['residential', 'windows']),
  windowsOpenable: unsplash('1600210491892-03d54c0aaf87', 'Living room with tall openable framed windows', ['residential', 'windows']),
  windowsFixed: unsplash('1618221195710-dd6b41faaea6', 'Lounge with a long fixed glass window', ['residential', 'windows']),
  windowsCustom: unsplash('1600607687644-c7171b42498f', 'Bedroom with custom-size black aluminium framed windows', ['residential', 'windows']),
  windowsResidential: unsplash('1560448204-e02f11c3d0e2', 'Apartment living room with a row of aluminium windows', ['residential', 'windows']),
  windowsCommercial: unsplash('1448630360428-65456885c650', 'Commercial building with a grid of aluminium windows', ['commercial', 'windows']),

  // Sliding systems
  slidingLarge: unsplash('1582268611958-ebfd161ef9cf', 'Home with large glass sliding doors opening onto a pool deck', ['residential', 'doors', 'glass']),
  slidingBalcony: unsplash('1460317442991-0ec209397118', 'Apartment building with glazed balcony sliding windows', ['residential', 'windows']),
  slidingResidential: unsplash('1604014237800-1c9102c219da', 'Living and dining area with sliding glass doors to the patio', ['residential', 'doors']),
  slidingOffice: unsplash('1497366811353-6870744d04b2', 'Office floor with tall aluminium glazing and sliding sections', ['office', 'windows']),

  // Doors
  doorsMain: unsplash('1628744448840-55bdb2497bd4', 'Modern house entrance with an aluminium and glass door', ['residential', 'doors']),
  doorsDetail: unsplash('1512917774080-9991f1c4c750', 'White villa with aluminium framed glass doors', ['residential', 'doors']),

  // Office partitions
  officeGlassCabin: unsplash('1497366754035-f200968a6e72', 'Office with black aluminium framed glass cabins', ['office', 'partitions', 'glass']),
  officeFramePartition: unsplash('1504384308090-c894fdcc538d', 'Open office with aluminium frame partitions', ['office', 'partitions']),
  officeConference: unsplash('1462826303086-329426d1aef5', 'Glass-walled conference room with a long table', ['office', 'partitions', 'glass']),
  officeManager: unsplash('1517502884422-41eaead166d4', 'Manager cabin with glazing and a meeting table', ['office', 'partitions']),
  officeWorkstation: unsplash('1577412647305-991150c7d163', 'Workstation area separated by low partitions', ['office', 'partitions']),
  officeReception: unsplash('1524758631624-e2822e304c36', 'Office reception and lounge area with glass partitions', ['office', 'partitions']),

  // Glass partitions
  glassMain: unsplash('1497366216548-37526070297c', 'Office corridor lined with full-height glass partitions', ['office', 'partitions', 'glass']),
  glassDetail: unsplash('1600573472550-8090b5e0745e', 'Interior with glass balustrade and glazed sliding wall', ['residential', 'glass']),

  // Factory / industrial
  factoryOffice: unsplash('1606857521015-7f9fcf423740', 'Office cabin inside an industrial space with exposed services', ['factory', 'office', 'partitions']),
  factoryWorkspace: unsplash('1504307651254-35680f356dfd', 'Industrial site team working with steel and metal framework', ['factory']),
  factoryFabrication: unsplash('1581091226825-a6a2a5aee158', 'Aluminium profile framework in an industrial work area', ['factory']),
  factoryFloor: unsplash('1531973576160-7125cd663d86', 'Large industrial floor with open workspace divisions', ['factory', 'office']),

  // Facades
  facadeBackdrop: unsplash('1554469384-e58fac16e23a', 'Curved glass facade of a modern commercial building', ['facades', 'glass', 'commercial']),
  facadeCommercial: unsplash('1486406146926-c627a92ad1ab', 'Glass-clad commercial towers', ['facades', 'commercial', 'glass']),
  facadeAluminium: unsplash('1600585154526-990dced4db0d', 'Building with a dark aluminium facade system', ['facades', 'commercial']),
  facadeGlass: unsplash('1431576901776-e539bd916ba2', 'Reflective glass facade seen from below', ['facades', 'glass']),
  facadeShopfront: unsplash('1441986300917-64674bd600d8', 'Retail shopfront interior with glazed frontage', ['commercial', 'glass']),
  facadeOffice: unsplash('1487958449943-2429e8be8625', 'Modern office building with angular glass architecture', ['facades', 'commercial', 'office']),

  // Residential
  residentialMain: unsplash('1613490493576-7fde63acd811', 'Contemporary home with wide glass openings and aluminium frames', ['residential', 'windows', 'doors']),
  residentialFacade: unsplash('1600047509807-ba8f99d2cdde', 'Modern house facade with framed windows', ['residential', 'windows']),
  residentialInterior: unsplash('1600607687939-ce8a6c25118c', 'Living room with floor-to-ceiling glass', ['residential', 'glass']),

  // Commercial
  commercialOffice: unsplash('1497366811353-6870744d04b2', 'Office interior with large aluminium windows', ['commercial', 'office']),
  commercialShop: unsplash('1567401893414-76b7b1e5a7a5', 'Retail shop interior with display fixtures', ['commercial']),
  commercialShowroom: unsplash('1600585152220-90363fe7e115', 'Bright showroom-style interior with clean finishing', ['commercial']),
  commercialFactory: unsplash('1606857521015-7f9fcf423740', 'Factory office area with partitions', ['commercial', 'factory']),
  commercialBuilding: unsplash('1565008447742-97f6f38c985c', 'Glass commercial building under construction', ['commercial', 'facades']),

  // Contact
  contactBackdrop: unsplash('1545324418-cc1a3fa10c00', 'Building facade with aluminium balcony windows', ['residential', 'windows']),
};
