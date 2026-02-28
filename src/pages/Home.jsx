import { motion } from 'framer-motion'

const letters = "SAHEL".split("")

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
}

const letterVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
}

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1.2,
      ease: 'easeOut',
    }
  }
}

export default function Home() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    }}>

      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/SAHEL.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,7,0.3) 0%, rgba(10,10,7,0.5) 60%, rgba(10,10,7,0.95) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
      }}>

        {/* Letter by letter SAHEL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{
            display: 'flex',
            gap: '0.15em',
          }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              style={{
                fontFamily: "'Secular One', sans-serif",
                fontSize: 'clamp(5rem, 15vw, 12rem)',
                color: '#F5F0E8',
                textShadow: '0 8px 40px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)',
                lineHeight: 1,
                display: 'inline-block',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={taglineVariants}
          initial="hidden"
          animate="show"
          style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontWeight: 200,
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            textAlign: 'center',
          }}
        >
          Where African rhythm meets the world
        </motion.p>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, #C9A84C, transparent)',
          }}
        />
      </motion.div>

    </div>
  )
}