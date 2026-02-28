import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
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

const formats = [
  {
    title: "Full Band",
    description: "The complete SAHEL experience — rhythm section, horns, percussion, and Jean-Francis Varre leading a full ensemble through a world of sound.",
  },
  {
    title: "Trio",
    description: "An intimate configuration that keeps the essence of SAHEL alive — stripped back, focused, and powerfully present.",
  },
  {
    title: "Solo",
    description: "Jean-Francis Varre at his most personal — voice, guitar, and stories that cross continents.",
  },
]

export default function Video() {
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
          backgroundPosition: 'center 60%',
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
            VIDEO
          </motion.h1>
        </div>
      </div>

      {/* Video Section */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 32px' }}>
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
            Live Performance
          </motion.p>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Secular One', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#F5F0E8',
              letterSpacing: '0.15em',
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            SAHEL — Full Band
          </motion.h2>

          {/* Video Embed */}
          <motion.div
            variants={fadeUp}
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              background: '#111109',
              border: '1px solid #2A2A1A',
              overflow: 'hidden',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/-Sn9yTJahKQ"
              title="SAHEL Full Band Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </motion.div>

        </AnimatedSection>
      </div>

      {/* Gold Rule */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
        <hr style={{
          border: 'none',
          height: 1,
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
        }} />
      </div>

      {/* Formats Section */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 32px 100px' }}>
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
            Available For Booking
          </motion.p>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Secular One', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#F5F0E8',
              letterSpacing: '0.15em',
              textAlign: 'center',
              marginBottom: 60,
            }}
          >
            SAHEL PERFORMS AS
          </motion.h2>

          <motion.div
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
            }}
          >
            {formats.map((format, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  background: '#18180E',
                  border: '1px solid #2A2A1A',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'border-color 0.3s',
                }}
                whileHover={{ borderColor: '#C9A84C' }}
              >
                <p style={{
                  fontFamily: "'Secular One', sans-serif",
                  fontSize: '1.1rem',
                  color: '#F5F0E8',
                  letterSpacing: '0.15em',
                }}>
                  {format.title}
                </p>
                <hr style={{
                  border: 'none',
                  height: 1,
                  background: 'linear-gradient(90deg, #C9A84C, transparent)',
                }} />
                <p style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  fontWeight: 200,
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  color: '#B8B099',
                }}>
                  {format.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </AnimatedSection>
      </div>

    </div>
  )
}