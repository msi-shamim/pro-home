import { useState } from 'react';
import MobileBottomNav from './MobileBottomNav';
import Drawer from './Drawer';

interface Props {
  lang: 'es' | 'en';
  currentPath: string;
  translations: {
    home: string;
    services: string;
    properties: string;
    contact: string;
    menu: string;
    reserve: string;
    whyProHome: string;
    closeDrawer: string;
  };
}

export default function MobileShell({ lang, currentPath, translations }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const bottomNavItems = [
    { label: translations.home, href: `/${lang}`, icon: 'home' as const },
    { label: translations.services, href: `/${lang}/servicios`, icon: 'services' as const },
    { label: translations.properties, href: `/${lang}/propiedades`, icon: 'properties' as const },
    { label: translations.contact, href: `/${lang}/contacto`, icon: 'contact' as const },
    { label: translations.menu, href: '#', icon: 'menu' as const },
  ];

  const drawerLinks = [
    { label: translations.home, href: `/${lang}` },
    { label: translations.services, href: `/${lang}/servicios` },
    { label: translations.properties, href: `/${lang}/propiedades` },
    { label: translations.whyProHome, href: `/${lang}/por-que-pro-home` },
    { label: translations.contact, href: `/${lang}/contacto` },
    { label: translations.reserve, href: `/${lang}/reservar` },
  ];

  return (
    <div className="mobile-only">
      <MobileBottomNav
        items={bottomNavItems}
        currentPath={currentPath}
        onMenuClick={() => setDrawerOpen(true)}
      />
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        links={drawerLinks}
        currentLang={lang}
        currentPath={currentPath}
        closeLabel={translations.closeDrawer}
      />
    </div>
  );
}
