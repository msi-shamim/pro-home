import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  currentLang: 'es' | 'en';
  currentPath: string;
  closeLabel: string;
}

export default function Drawer({ isOpen, onClose, links, currentLang, currentPath, closeLabel }: Props) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Trap focus and handle Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            id="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--color-overlay)',
              zIndex: 300,
            }}
          />

          {/* Drawer Panel */}
          <motion.div
            ref={drawerRef}
            id="drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              width: '280px',
              maxWidth: '80vw',
              background: 'var(--color-bg)',
              borderRight: '1px solid var(--color-border)',
              zIndex: 400,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-6)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--font-size-lg)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  color: 'var(--color-accent)',
                }}
              >
                <span style={{ fontWeight: 900 }}>PRO</span>{' '}<span style={{ fontWeight: 300 }}>HOME</span>®
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                aria-label={closeLabel}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  border: '1px solid var(--color-border)',
                  background: 'none',
                  color: 'var(--color-accent)',
                  cursor: 'pointer',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav style={{ flex: 1, padding: 'var(--space-4) 0' }}>
              {links.map((link, index) => {
                const isActive = currentPath.startsWith(link.href);
                const isReserve = link.href.endsWith('/reservar');
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    style={isReserve ? {
                      display: 'block',
                      margin: 'var(--space-4) var(--space-6)',
                      padding: 'var(--space-4) var(--space-6)',
                      background: 'var(--color-accent)',
                      color: 'var(--color-bg)',
                      fontWeight: 'var(--font-weight-bold)',
                      textDecoration: 'none',
                      textAlign: 'center' as const,
                      letterSpacing: 'var(--letter-spacing-wide)',
                      textTransform: 'uppercase' as const,
                      fontSize: 'var(--font-size-sm)',
                      transition: 'all var(--transition-fast)',
                    } : {
                      display: 'block',
                      padding: 'var(--space-4) var(--space-6)',
                      fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                      color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                      borderLeft: isActive ? '3px solid var(--color-accent)' : '3px solid transparent',
                      textDecoration: 'none',
                      transition: 'all var(--transition-fast)',
                      letterSpacing: 'var(--letter-spacing-wide)',
                      textTransform: 'uppercase' as const,
                      fontSize: 'var(--font-size-sm)',
                    }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: 'var(--space-6)',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <ThemeToggle />
              <LanguageSwitcher currentLang={currentLang} currentPath={currentPath} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
