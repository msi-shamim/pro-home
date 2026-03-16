import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        marginTop: 'var(--space-12)',
      }}
    >
      <motion.span
        style={{
          fontSize: 'var(--font-size-xs)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'rgba(255, 255, 255, 0.4)',
          fontWeight: 500,
        }}
      >
        Scroll
      </motion.span>
      <motion.div
        style={{
          width: '1px',
          height: '40px',
          background: 'rgba(255, 255, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          animate={{ y: ['-100%', '100%'] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: '100%',
            height: '50%',
            background: 'rgba(255, 255, 255, 0.8)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
