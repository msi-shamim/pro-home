import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  sectionTitle: string;
  benefits: Benefit[];
  seeMoreLabel?: string;
  seeLessLabel?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  rates: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  tenants: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  maintenance: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  support: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <rect x="2" y="3" width="20" height="14" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
};

function BenefitCard({ benefit, index, isInView, seeMoreLabel, seeLessLabel }: {
  benefit: Benefit;
  index: number;
  isInView: boolean;
  seeMoreLabel: string;
  seeLessLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      style={{
        border: '1px solid var(--color-border)',
        padding: 'var(--space-8)',
        background: 'var(--color-surface)',
        transition: 'border-color 0.3s var(--ease-out-expo), transform 0.3s var(--ease-out-expo), box-shadow 0.3s var(--ease-out-expo)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--color-accent)';
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = 'var(--shadow-dramatic)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--color-border)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      <div style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
        {iconMap[benefit.icon] || iconMap.support}
      </div>
      <h3 style={{
        fontSize: 'var(--font-size-base)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-accent)',
        marginBottom: 'var(--space-3)',
        lineHeight: 'var(--line-height-tight)',
      }}>
        {benefit.title}
      </h3>

      {/* Description with 2-line clamp */}
      <motion.div
        animate={{ height: 'auto' }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--line-height-relaxed)',
          margin: 0,
          ...(!expanded ? {
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          } : {}),
        }}>
          {benefit.description}
        </p>
      </motion.div>

      {/* See more / See less toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          marginTop: 'var(--space-2)',
          fontSize: 'var(--font-size-xs)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-accent)',
          cursor: 'pointer',
          letterSpacing: 'var(--letter-spacing-wider)',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
      >
        {expanded ? seeLessLabel : seeMoreLabel}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          style={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function BenefitsSection({ sectionTitle, benefits, seeMoreLabel = 'See more', seeLessLabel = 'See less' }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        padding: 'var(--section-padding-y) 0',
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-black)',
            textAlign: 'center',
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-12)',
            letterSpacing: 'var(--letter-spacing-tight)',
          }}
        >
          {sectionTitle}
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {benefits.map((b, i) => (
            <BenefitCard
              key={i}
              benefit={b}
              index={i}
              isInView={isInView}
              seeMoreLabel={seeMoreLabel}
              seeLessLabel={seeLessLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
