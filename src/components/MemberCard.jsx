import { motion } from 'framer-motion'

export default function MemberCard({ name, role, bio, image }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
      }}
      style={{
        background: '#18180E',
        border: '1px solid #2A2A1A',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      whileHover={{ borderColor: '#C9A84C' }}
    >
      {/* Photo */}
      <div style={{
        width: '100%',
        aspectRatio: '3 / 4',
        overflow: 'hidden',
        background: '#111109',
      }}>
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(20%)',
            transition: 'transform 0.6s ease, filter 0.6s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.filter = 'grayscale(0%)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.filter = 'grayscale(20%)'
          }}
          onError={e => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      {/* Text */}
      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{
          fontFamily: "'Secular One', sans-serif",
          fontSize: '1rem',
          color: '#F5F0E8',
          letterSpacing: '0.05em',
        }}>
          {name}
        </h3>
        <p style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 400,
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#C9A84C',
        }}>
          {role}
        </p>
        <p style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 200,
          fontSize: '0.85rem',
          lineHeight: 1.7,
          color: '#B8B099',
          marginTop: 4,
        }}>
          {bio}
        </p>
      </div>
    </motion.div>
  )
}