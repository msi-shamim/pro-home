import { motion } from 'framer-motion';

interface Props {
  currentLang: 'es' | 'en';
  currentPath: string;
}

export default function LanguageSwitcher({ currentLang, currentPath }: Props) {
  const targetLang = currentLang === 'es' ? 'en' : 'es';
  const targetPath = currentPath.replace(`/${currentLang}`, `/${targetLang}`);
  const label = currentLang === 'es' ? 'EN' : 'ES';

  return (
    <motion.a
      href={targetPath}
      id="language-switcher"
      aria-label={`Switch to ${targetLang === 'es' ? 'Spanish' : 'English'}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        color: 'var(--color-accent)',
        fontFamily: 'var(--font-family)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-bold)',
        letterSpacing: 'var(--letter-spacing-wide)',
        textDecoration: 'none',
        textTransform: 'uppercase' as const,
      }}
    >
      {label}
    </motion.a>
  );
}
