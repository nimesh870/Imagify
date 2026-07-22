import { useNavigate } from 'react-router-dom'
import Container from '../Container/Container'

const HeroFloatingCard = ({ src, className }) => (
  <div className={`absolute rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-purple-500/10 ${className}`}>
    <img src={src} alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0533]/80 via-transparent to-transparent" />
  </div>
)

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group relative p-8 rounded-2xl bg-[#1a0533]/60 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-rose-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#fef3c7] mb-2">{title}</h3>
      <p className="text-sm text-[#fef3c7]/60 leading-relaxed">{desc}</p>
    </div>
  </div>
)

const StatCard = ({ value, label }) => (
  <div className="relative p-6 rounded-xl bg-[#1a0533]/60 border border-purple-500/10 text-center group hover:border-purple-500/30 transition-all duration-300">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      <p className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">{value}</p>
      <p className="text-xs uppercase tracking-[0.15em] text-[#fef3c7]/50 mt-1">{label}</p>
    </div>
  </div>
)

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#1a0533] min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background layers */}
        <div className="absolute inset-0 bg-[#1a0533]" />
        <div className="absolute inset-0 bg-linear-to-br from-purple-700/30 via-[#1a0533] to-rose-700/20 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute inset-0 bg-linear-to-tr from-violet-800/20 via-transparent to-rose-600/20 animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />

        {/* Floating image cards behind hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <HeroFloatingCard src="https://picsum.photos/400/600?random=1" className="w-40 md:w-56 -top-10 right-[5%] rotate-12 opacity-60" />
          <HeroFloatingCard src="https://picsum.photos/400/600?random=2" className="w-36 md:w-48 top-1/4 -left-4 -rotate-6 opacity-50" />
          <HeroFloatingCard src="https://picsum.photos/400/600?random=3" className="w-32 md:w-44 top-[60%] right-[15%] -rotate-[18deg] opacity-40" />
          <HeroFloatingCard src="https://picsum.photos/400/600?random=4" className="w-28 md:w-40 top-[15%] left-[20%] rotate-[8deg] opacity-35" />
          <HeroFloatingCard src="https://picsum.photos/400/600?random=5" className="w-24 md:w-36 bottom-[10%] left-[10%] rotate-[20deg] opacity-30" />
          <HeroFloatingCard src="https://picsum.photos/400/600?random=6" className="w-32 md:w-44 top-[40%] -right-6 rotate-[-10deg] opacity-45" />
        </div>

        {/* Hero content */}
        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center pt-32 pb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-6 animate-pulse" style={{ animationDuration: '3s' }}>
              Creative Studio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6 bg-gradient-to-r from-purple-300 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              Where Images<br />Tell Stories
            </h1>
            <p className="text-lg md:text-xl text-[#fef3c7]/70 max-w-xl mx-auto mb-10 leading-relaxed">
              A dark, moody sanctuary for visual storytellers. Upload, explore, and inspire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {navigate('/feed')}}
                className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-500 to-rose-500 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                Explore Feed
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-purple-700 to-rose-600" />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        <Container>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Ready to Share Your Vision?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
              Join thousands of creators pushing the boundaries of visual storytelling.
            </p>
            <button
              onClick={() => navigate('/create-post')}
              className="px-10 py-4 text-sm font-bold uppercase tracking-widest text-white bg-[#1a0533] rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Started Free
            </button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Home
