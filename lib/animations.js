export const animations = {
  fadeInUp: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" } },
  fadeInDown: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" } },
  staggerContainer: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } },
  staggerItem: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  heroStagger: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } },
  heroFadeInUp: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" } }
};