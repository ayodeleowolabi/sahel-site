import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        borderTop: '1px solid #2A2A1A',
        background: '#0A0A07',
        padding: '60px 40px 40px',
      }}
    >
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
      }}>

        {/* Logo */}
        <span style={{
          fontFamily: "'Secular One', sans-serif",
          fontSize: '2rem',
          color: '#C9A84C',
          letterSpacing: '0.4em',
        }}>
          SAHEL
        </span>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 200,
          fontSize: '0.7rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#5C5746',
          textAlign: 'center',
        }}>
          Where African rhythm meets the world
        </p>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/video', label: 'Video' },
            { to: '/contact', label: 'Contact' },
          ].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                fontWeight: 400,
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#5C5746',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
              onMouseLeave={e => e.currentTarget.style.color = '#5C5746'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Gold Rule */}
        <hr style={{
          width: '100%',
          border: 'none',
          height: 1,
          background: 'linear-gradient(90deg, transparent, #2A2A1A, transparent)',
        }} />

        {/* Copyright */}
        <p style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          color: '#5C5746',
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} SAHEL — Jean-Francis Varre. All rights reserved.
        </p>

      </div>
    </motion.footer>
  )
}