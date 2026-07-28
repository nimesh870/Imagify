import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Container from '../Container/Container'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import authService from '../services/APIService'
import { login } from '../features/authSlice'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await authService.register({
        username : data.username,
        email : data.email,
        password : data.password
      })

      localStorage.setItem('token' , response.token)

      dispatch(login(response.user))

      navigate('/')
      
    } catch (error) {
      console.log("Error:", error.message)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full bg-[#1a0533] text-[#fef3c7] placeholder-[#fef3c7]/30 rounded-xl px-4 py-3 text-sm border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/50 transition-all duration-300'

  const errorClass = 'text-xs text-rose-400 mt-1'

  return (
    <div className="min-h-screen bg-[#1a0533] pt-28 pb-20 flex items-center">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-purple-300 to-rose-400 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-[#fef3c7]/60 mt-2">Join the Imagify community</p>
          </div>

          <div className="bg-[#0d0218] rounded-2xl p-6 sm:p-8 border border-purple-500/10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-purple-400 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Your creative alias"
                  className={inputClass}
                  {...register('username', { required: 'Username is required' })}
                />
                {errors.username && <p className={errorClass}>{errors.username.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-purple-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  })}
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-purple-400 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                  className={inputClass}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Must be at least 6 characters' }
                  })}
                />
                {errors.password && <p className={errorClass}>{errors.password.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm font-bold uppercase tracking-widest
                 text-white bg-linear-to-r from-purple-500 to-rose-500 rounded-xl
                 hover:scale-[1.02] transition-all duration-300 shadow-lg
                 shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-sm text-[#fef3c7]/50 mt-6">
              Already have an account?{' '}
              <button onClick={() => navigate('/login')} className="text-purple-400 hover:text-purple-300 transition-colors">
                Log in
              </button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Register
