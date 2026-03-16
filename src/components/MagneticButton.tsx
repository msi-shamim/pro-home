import { useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  as?: 'a' | 'button';
  href?: string;
  onClick?: () => void;
  id?: string;
}

export default function MagneticButton({
  children,
  className = '',
  style = {},
  strength = 0.3,
  as: Tag = 'button',
  href,
  onClick,
  id,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
      whileTap={{ scale: 0.96 }}
    >
      {Tag === 'a' ? (
        <a
          href={href}
          className={className}
          style={style}
          id={id}
          onClick={onClick}
        >
          {children}
        </a>
      ) : (
        <button
          className={className}
          style={style}
          id={id}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return inner;
}
