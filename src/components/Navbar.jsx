import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/video', label: 'Video' },
    { to: '/contact', label: 'Contact' },
  ]

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: '24px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(to bottom, rgba(10,10,7,0.95), transparent)',
  }

  const linkStyle = (isActive) => ({
    fontFamily: "'Libre Franklin', sans-serif",
    fontWeight: 400,
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: isActive ? '#C9A84C' : '#B8B099',
    textDecoration: 'none',
    transition: 'color 0.3s',
  })

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: "'Secular One', sans-serif",
          fontSize: '1.2rem',
          color: '#C9A84C',
          letterSpacing: '0.3em',
        }}>
          SAHEL
        </span>
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) => linkStyle(isActive)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', padding: 4 }}
      >
        <span style={{ width: 24, height: 1, background: '#C9A84C', display: 'block', transition: 'transform 0.3s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
        <span style={{ width: 24, height: 1, background: '#C9A84C', display: 'block', opacity: open ? 0 : 1, transition: 'opacity 0.3s' }} />
        <span style={{ width: 24, height: 1, background: '#C9A84C', display: 'block', transition: 'transform 0.3s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(10,10,7,0.98)',
              padding: '32px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                style={({ isActive }) => linkStyle(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar