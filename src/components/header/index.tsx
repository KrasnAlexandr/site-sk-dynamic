'use client';

import styles from './index.module.css';
import { NavButton } from '@/components/header/components/nav-button';
import { LogoSvg } from '@/components/header/components/logo';
import { COMPANY_EMAIL, COMPANY_PHONE_NUMBER } from '@/_constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NAV_BUTTON: Array<{ label: string; pathname: string }> = [
  { label: 'Главная', pathname: '/' },
  { label: 'Услуги', pathname: '/services' },
  { label: 'Охрана труда', pathname: '/labor-protection' },
  { label: 'Сертификаты', pathname: '/certificates' },
  { label: 'Контакты', pathname: '/contacts' },
];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href='/'>
          <LogoSvg />
        </Link>
        <div className={styles.text}>
          <Link
            className={styles.contact_phone}
            href={`tel:${COMPANY_PHONE_NUMBER}`}
          >
            {COMPANY_PHONE_NUMBER}
          </Link>
          <Link
            className={styles.contact_email}
            type='mailto'
            href={`mailto:${COMPANY_EMAIL}`}
          >
            {COMPANY_EMAIL}
          </Link>
        </div>
      </div>
      <nav className={styles.nav}>
        {NAV_BUTTON.map((button, index) => (
          <NavButton
            onClick={() => router.push(button.pathname)}
            isActive={pathname === button.pathname}
            label={button.label}
            key={index}
          />
        ))}
      </nav>
    </header>
  );
};
