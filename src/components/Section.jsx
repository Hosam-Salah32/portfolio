import { motion } from 'framer-motion'

export default function Section({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`section-padding ${className}`}
    >
      <div className="section-container">{children}</div>
    </motion.section>
  )
}
