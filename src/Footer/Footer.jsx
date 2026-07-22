import Container from '../Container/Container'

const Footer = () => {
  const socials = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Instagram', icon: '✦' },
    { name: 'Dribbble', icon: '◆' },
    { name: 'GitHub', icon: '⬡' },
  ]

  return (
    <footer className="relative bg-[#0d0218] border-t border-transparent">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-rose-500" />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-12 sm:py-16">
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => {/* Route to / */}} className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-purple-500 to-rose-400 bg-clip-text text-transparent">
              Imagify
            </button>
            <p className="mt-3 text-sm text-[#fef3c7]/60 leading-relaxed">
              Where images tell stories. A dark, moody creative studio for visionary artists.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-4">Navigate</h4>
            <div className="space-y-3">
              {['Home', 'Feed', 'Create Post', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => {/* Route to / */}}
                  className="block text-sm text-[#fef3c7]/60 hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-4">Connect</h4>
            <div className="space-y-3">
              {['Twitter', 'Instagram', 'Dribbble', 'Behance'].map((item) => (
                <button
                  key={item}
                  onClick={() => {}}
                  className="block text-sm text-[#fef3c7]/60 hover:text-rose-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-4">Legal</h4>
            <div className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'DMCA'].map((item) => (
                <button
                  key={item}
                  onClick={() => {}}
                  className="block text-sm text-[#fef3c7]/60 hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 pb-8">
          {socials.map((s) => (
            <button
              key={s.name}
              onClick={() => {}}
              className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#fef3c7]/60 hover:text-purple-300 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 text-sm"
            >
              {s.icon}
            </button>
          ))}
        </div>
      </Container>

      <div className="border-t border-purple-500/10">
        <Container>
          <div className="py-5 text-center">
            <p className="text-xs text-[#fef3c7]/40 bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              &copy; 2026 Imagify. Forged in dark matter.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
