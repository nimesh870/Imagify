import { useState, useEffect } from 'react'
import Container from '../Container/Container'
import { Navigate, useNavigate , useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' , active : true },
    { name: 'Feed', path: '/feed' , active : authStatus },
    { name: 'Create Post', path: '/create-post' , active : authStatus },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a0533]/90 backdrop-blur-2xl shadow-lg shadow-purple-900/20'
          : 'bg-[#1a0533]/60 backdrop-blur-md'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4 sm:gap-10">
            <button onClick={() => navigate('/')} className="text-2xl font-extrabold tracking-tight
             bg-linear-to-r from-purple-400 via-purple-500 to-rose-400
              bg-clip-text text-transparent">
              Imagify
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                item.active ? (
                  <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`relative px-4 py-2 text-md font-medium text-[#fef3c7]/70
                   hover:text-[#fef3c7] transition-colors duration-300 group 
                   ${location.pathname === item.path ? 'text-yellow-300' : 'text-[#fef3c7]/70'}`}
                  >
                  {item.name}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0
                   w-0 h-0.5 bg-linear-to-r from-purple-400 to-rose-400
                    group-hover:w-full transition-all duration-300" />
                </button>
                ) : null
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate('/login')}
              className="px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium
               text-[#fef3c7]/80 hover:text-white border border-purple-500/30
               rounded-xl hover:border-purple-500/50 transition-all duration-300"
            >
              Log In
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest
               text-white bg-linear-to-r from-purple-500 to-rose-500
               rounded-xl hover:scale-105 transition-all duration-300 shadow-lg
               shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
