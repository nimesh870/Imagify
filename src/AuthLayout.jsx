import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const AuthLayout = ({ children, authentication = true }) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate])

    return loader ? (
        <div className="min-h-screen bg-[#0f0a1a] flex flex-col items-center justify-center gap-6">

            {/* spinning ring */}
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-purple-900 opacity-30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin"></div>
                {/* inner glow dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                </div>
            </div>

            {/* text */}
            <div className="flex flex-col items-center gap-2">
                <p className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 font-bold text-xl tracking-widest uppercase">
                    Imagify
                </p>
                <p className="text-purple-300/60 text-sm tracking-wide animate-pulse">
                    Checking authentication...
                </p>
            </div>

            {/* bottom progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-900/30">
                <div className="h-full bg-linear-to-r from-purple-500 to-pink-500 animate-pulse w-1/2 mx-auto rounded-full"></div>
            </div>

        </div>
    ) : <>{children}</>
}

export default AuthLayout