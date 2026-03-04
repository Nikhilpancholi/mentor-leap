import { motion } from 'framer-motion'
import aiAvatarIcon from '../assets/ai-avatar-icon.png'

export default function FloatingAiWidget() {
  return (
    <motion.div
      className="pointer-events-none fixed bottom-5 right-4 z-[60] flex items-end gap-3 sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="rounded-2xl border border-[#d7e8ff] bg-white px-4 py-2 text-sm font-semibold text-[#0F2E6D] shadow-[0_10px_25px_rgba(15,46,109,0.16)]"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        how can i help you
      </motion.div>

      <motion.div
        className="h-14 w-14 overflow-hidden rounded-full border-1 border-blue shadow-[0_10px_24px_rgba(15,46,109,0.78)] sm:h-22 sm:w-22"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.12 }}
      >
        <img
          src={aiAvatarIcon}
          alt="AI assistant"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  )
}
