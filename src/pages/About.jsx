import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MemberCard from '../components/MemberCard'
import { members } from '../data/members'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
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

function About() {
  return (
    <div style={{ paddingTop: 80 }}>

      {/* Hero Banner */}
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
          backgroundPosition: 'center 30%',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,10,7,0.65)',
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
            ABOUT
          </motion.h1>
        </div>
      </div>

      {/* Band Description */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 32px' }}>
        <AnimatedSection>
          <motion.div variants={fadeUp} style={{ marginBottom: 24 }}>
            <hr style={{
              border: 'none',
              height: 1,
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              marginBottom: 48,
            }} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontWeight: 200,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.9,
              color: '#B8B099',
              marginBottom: 32,
            }}
          >
            SAHEL is a living, breathing musical journey across cultures — a band rooted in the soul of Africa and fluent in the languages of the world. Drawing from Zouk, Reggae, Senegalese Mbalax, Samba, Funana, Salsa, and beyond, SAHEL doesn't just play genres — it weaves them into something entirely its own. Every performance is a conversation between traditions, a celebration of where rhythm, heritage, and movement converge.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontWeight: 200,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.9,
              color: '#B8B099',
            }}
          >
            At the heart of SAHEL is Jean-Francis Varre — multilingual vocalist, bandleader, and visionary — whose voice carries the warmth of West Africa and the wandering spirit of a musician who belongs everywhere. Inspired by tradition, driven by evolution, SAHEL is dedicated to music that doesn't just fill a room — it moves the world.
          </motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <hr style={{
              border: 'none',
              height: 1,
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }} />
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Members Section */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 100px' }}>
        <AnimatedSection>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Secular One', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#F5F0E8',
              letterSpacing: '0.2em',
              textAlign: 'center',
              marginBottom: 60,
            }}
          >
            THE BAND
          </motion.h2>

          <motion.div
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 24,
            }}
          >
            {members.map(member => (
              <MemberCard key={member.id} {...member} />
            ))}
          </motion.div>
        </AnimatedSection>
      </div>

    </div>
  )
}

export default About