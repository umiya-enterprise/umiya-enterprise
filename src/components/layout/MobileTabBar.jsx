import { House, Images, LayoutGrid, Phone } from 'lucide-react';
import { business } from '../../data/site';
import { WhatsAppIcon } from '../ui/BrandIcons';
import './MobileTabBar.css';

const tabs = [
  { id: 'home', label: 'Home', icon: House, match: ['home', 'about'] },
  { id: 'services', label: 'Services', icon: LayoutGrid, match: ['services'] },
  { id: 'projects', label: 'Work', icon: Images, match: ['projects', 'why-us'] },
];

/** App-style bottom navigation for phones and tablets. */
export default function MobileTabBar({ activeId }) {
  const renderTab = ({ id, label, icon: Icon, match }) => {
    const active = match.includes(activeId);
    return (
      <a
        key={id}
        href={`#${id}`}
        className={`tabbar__item${active ? ' is-active' : ''}`}
        aria-current={active ? 'true' : undefined}
      >
        <Icon size={22} strokeWidth={active ? 2.4 : 2} aria-hidden="true" />
        <span>{label}</span>
      </a>
    );
  };

  return (
    <nav className="tabbar" aria-label="Quick navigation">
      {tabs.slice(0, 2).map(renderTab)}
      <a href={business.phone.href} className="tabbar__call" aria-label={`Call ${business.phone.display}`}>
        <span className="tabbar__call-btn">
          <Phone size={22} strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span>Call</span>
      </a>
      {renderTab(tabs[2])}
      <a href={business.whatsapp.href} target="_blank" rel="noopener noreferrer" className="tabbar__item tabbar__item--wa">
        <WhatsAppIcon size={22} />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}
