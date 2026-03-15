import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  formTitle: string;
  formType: 'propietarios' | 'empresas' | 'contacto';
  ctaLabel: string;
  successMessage: string;
  thankYouUrl: string;
  fields: {
    name: string;
    whatsapp: string;
    email: string;
    details: string;
    detailsPlaceholder: string;
  };
}

export default function LeadCaptureForm({
  formTitle,
  formType,
  ctaLabel,
  successMessage,
  thankYouUrl,
  fields,
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, boolean> = {};

    if (!data.get('name')) newErrors.name = true;
    if (!data.get('whatsapp')) newErrors.whatsapp = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    // Simulate form submission (frontend-only)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div
      id={`lead-form-${formType}`}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        padding: 'var(--space-8)',
        maxWidth: '520px',
        width: '100%',
      }}
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}
          >
            {/* Check icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              style={{
                width: '64px',
                height: '64px',
                border: '2px solid var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-6)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>
            <p style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-6)',
            }}>
              {successMessage}
            </p>
            <a
              href={thankYouUrl}
              style={{
                display: 'inline-block',
                padding: 'var(--space-3) var(--space-6)',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-bold)',
                textTransform: 'uppercase' as const,
                letterSpacing: 'var(--letter-spacing-wide)',
                textDecoration: 'none',
              }}
            >
              OK
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-6)',
              letterSpacing: 'var(--letter-spacing-tight)',
            }}>
              {formTitle}
            </h3>

            <input type="hidden" name="formType" value={formType} />

            {/* Name */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label htmlFor={`${formType}-name`} style={labelStyle}>{fields.name}</label>
              <motion.input
                id={`${formType}-name`}
                name="name"
                type="text"
                animate={errors.name ? { x: [-4, 4, -4, 4, 0] } : {}}
                transition={{ duration: 0.3 }}
                style={{
                  ...inputStyle,
                  borderColor: errors.name ? '#e53e3e' : 'var(--color-border)',
                }}
              />
            </div>

            {/* WhatsApp */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label htmlFor={`${formType}-whatsapp`} style={labelStyle}>{fields.whatsapp}</label>
              <motion.input
                id={`${formType}-whatsapp`}
                name="whatsapp"
                type="tel"
                placeholder="+56 9 XXXX XXXX"
                animate={errors.whatsapp ? { x: [-4, 4, -4, 4, 0] } : {}}
                transition={{ duration: 0.3 }}
                style={{
                  ...inputStyle,
                  borderColor: errors.whatsapp ? '#e53e3e' : 'var(--color-border)',
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label htmlFor={`${formType}-email`} style={labelStyle}>{fields.email}</label>
              <input
                id={`${formType}-email`}
                name="email"
                type="email"
                style={inputStyle}
              />
            </div>

            {/* Details */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <label htmlFor={`${formType}-details`} style={labelStyle}>{fields.details}</label>
              <textarea
                id={`${formType}-details`}
                name="details"
                rows={4}
                placeholder={fields.detailsPlaceholder}
                style={{
                  ...inputStyle,
                  resize: 'vertical' as const,
                  fontFamily: 'var(--font-family)',
                }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: 'var(--space-4)',
                background: loading ? 'var(--color-muted)' : 'var(--color-accent)',
                color: 'var(--color-bg)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-bold)',
                textTransform: 'uppercase' as const,
                letterSpacing: 'var(--letter-spacing-wider)',
                border: 'none',
                cursor: loading ? 'wait' : 'pointer',
                fontFamily: 'var(--font-family)',
                transition: 'background var(--transition-fast)',
              }}
            >
              {loading ? '...' : ctaLabel}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--space-1)',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: 'var(--space-3)',
  background: 'var(--color-bg)',
  border: '1px solid var(--color-border)',
  color: 'var(--color-text)',
  fontSize: 'var(--font-size-base)',
  fontFamily: 'var(--font-family)',
  outline: 'none',
  transition: 'border-color 150ms ease',
};
