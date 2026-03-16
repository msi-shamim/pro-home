import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  style?: React.CSSProperties;
}

export default function SplitText({
  text,
  className = '',
  as: Tag = 'h1',
  delay = 0,
  style = {},
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Split into words, then each word into characters
  const words = text.split(' ');

  let charIndex = 0;

  return (
    <Tag ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word.split('').map((char) => {
            const idx = charIndex++;
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 40, rotateX: -40 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: delay + idx * 0.03,
                  ease: [0.16, 1, 0.3, 1], // ease-out-expo
                }}
                style={{
                  display: 'inline-block',
                  transformOrigin: 'bottom',
                }}
                aria-hidden="true"
              >
                {char}
              </motion.span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
