import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

function AnimatedSection({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

const inputStyle = {
  background: '#18180E',
  border: '1px solid #2A2A1A',
  color: '#F5F0E8',
  fontFamily: "'Libre Franklin', sans-serif",
  fontWeight: 200,
  fontSize: '0.9rem',
  padding: '16px 20px',
  width: '100%',
  outline: 'none',
  letterSpacing: '0.04em',
  transition: 'border-color 0.3s',
}

const labelStyle = {
  fontFamily: "'Libre Franklin', sans-serif",
  fontWeight: 400,
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#C9A84C',
  display: 'block',
  marginBottom: 8,
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('https://formspree.io/f/xnjbrgeb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      alert('Something went wrong. Please try again.')
    }
  }

  const focusStyle = (name) => ({
    ...inputStyle,
    borderColor: focused === name ? '#C9A84C' : '#2A2A1A',
  })

  return (
    <div style={{ paddingTop: 80 }}>

      {/* Page Header */}
      <div style={{
        width: '100%',
        height: '40vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/SAHEL.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,10,7,0.7)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              fontFamily: "'Secular One', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              color: '#F5F0E8',
              letterSpacing: '0.3em',
              textShadow: '0 4px 30px rgba(0,0,0,0.8)',
            }}
          >
            CONTACT
          </motion.h1>
        </div>
      </div>

      {/* Form Section */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '80px 32px 100px' }}>
        <AnimatedSection>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontWeight: 200,
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            Bookings & Inquiries
          </motion.p>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Secular One', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#F5F0E8',
              letterSpacing: '0.15em',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            GET IN TOUCH
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontWeight: 200,
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: '#B8B099',
              textAlign: 'center',
              marginBottom: 56,
            }}
          >
            SAHEL is available as a full band, trio, or solo performance led by Jean-Francis Varre.
            Reach out to discuss availability, pricing, and what configuration fits your event best.
          </motion.p>

          <motion.div variants={fadeUp}>
            <hr style={{
              border: 'none',
              height: 1,
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              marginBottom: 56,
            }} />
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                textAlign: 'center',
                padding: '60px 32px',
                border: '1px solid #C9A84C',
                background: '#18180E',
              }}
            >
              <p style={{
                fontFamily: "'Secular One', sans-serif",
                fontSize: '1.5rem',
                color: '#C9A84C',
                letterSpacing: '0.2em',
                marginBottom: 16,
              }}>
                MESSAGE SENT
              </p>
              <p style={{
                fontFamily: "'Libre Franklin', sans-serif",
                fontWeight: 200,
                fontSize: '0.95rem',
                color: '#B8B099',
                lineHeight: 1.8,
              }}>
                Thank you for reaching out. We'll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={stagger}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
            >
              {/* Name */}
              <motion.div variants={fadeUp}>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  style={focusStyle('name')}
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  style={focusStyle('email')}
                  required
                />
              </motion.div>

              {/* Subject Dropdown */}
              <motion.div variants={fadeUp}>
                <label style={labelStyle}>Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...focusStyle('subject'),
                    appearance: 'none',
                    cursor: 'pointer',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 20px center',
                    paddingRight: 48,
                  }}
                  required
                >
                  <option value="" disabled>Select an inquiry type</option>
                  <option value="full-band">Full Band Inquiry</option>
                  <option value="trio">Trio Inquiry</option>
                  <option value="solo">Solo — Sahel Inquiry</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp}>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your event — date, location, type of event, and any other details."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...focusStyle('message'),
                    minHeight: 160,
                    resize: 'vertical',
                  }}
                  required
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeUp}>
                <motion.button
                  type="submit"
                  whileHover={{ backgroundColor: '#C9A84C', color: '#0A0A07' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '18px 32px',
                    background: 'transparent',
                    border: '1px solid #C9A84C',
                    color: '#C9A84C',
                    fontFamily: "'Libre Franklin', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.7rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, color 0.3s',
                  }}
                >
                  Send Message
                </motion.button>
              </motion.div>

            </motion.form>
          )}

        </AnimatedSection>
      </div>
    </div>
  )
}