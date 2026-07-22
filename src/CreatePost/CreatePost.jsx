import Container from '../Container/Container'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const categories = ['Nature', 'Architecture', 'Portrait', 'Abstract', 'Travel', 'Fashion', 'Street', 'Minimal']

const pillBase = 'px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300'

const CreatePost = () => {
  // Placeholder: in real app, these would be state
  const activeCategory = 'Nature'
  const errors = { caption: 'Caption is required', tags: '' }
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const formData = new FormData(event.target)
      await axios.post("http://localhost:8000/create-post", formData)
      console.log("Posted successfully")
      navigate('/feed')
    } catch (error) {
        console.log("Error:", error.message)
        alert("Cannot add files.")
    }
  }

  return (
    <div className="min-h-screen bg-[#1a0533] pt-28 pb-20">
      <Container>
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-purple-300 to-rose-400 bg-clip-text text-transparent">
            Create Post
          </h1>
          <p className="text-[#fef3c7]/60 mt-2">Share your vision with the world</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* ─── Left Column: Upload ─── */}
          <div className="space-y-6">
            {/* Upload zone */}
            <div
              onClick={() => {}}
              className="relative group cursor-pointer"
            >
              {/* Animated dashed border using a gradient trick */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #f43f5e, #7c3aed, #f43f5e)',
                  backgroundSize: '300% 300%',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px',
                  animation: 'gradientShift 4s ease infinite',
                }}
              />
            </div>

            {/* Preview placeholder */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://picsum.photos/400/300?random=99"
                alt="Preview"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a0533]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-rose-500 flex items-center justify-center text-white text-xs font-bold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#fef3c7]">preview-image.jpg</p>
                    <p className="text-xs text-[#fef3c7]/50">2.4 MB &middot; 1920x1080</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#0d0218] rounded-2xl p-8 border border-purple-500/10 space-y-6">
            <form action="#" onSubmit={handleSubmit}>
                      <label className="cursor-pointer">
                      <div className="relative bg-[#0d0218] rounded-2xl py-20 px-8 mb-1.5 flex flex-col items-centerjustify-center
                      border-2 border-dashed border-purple-500/30 group-hover:border-purple-400/60
                     group-hover:bg-purple-500/5 transition-all duration-500">

                        <div className="w-full max-w-md h-16 text-center rounded-md bg-linear-to-br
                       from-purple-500/20 to-rose-500/20 flex mx-auto justify-evenly items-center
                        mb-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <input
                          id='fileUpload'
                          type="file"
                          name="imgURI"
                          accept="image/*"
                          className="text-white"
                        />

                        {/* Icon */}
                        <svg
                          className="w-8 h-8 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                      </div>

                    <p className="text-lg font-bold text-[#fef3c7] mb-1">Drop your image here</p>
                    <p className="text-sm text-[#fef3c7]/50">or click to browse</p>
                    <p className="text-xs text-[#fef3c7]/30 mt-4">PNG, JPG, WebP up to 10MB</p>
                    </div>
                    </label>
            {/* Caption */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-purple-400 mb-2">
                Caption
              </label>
              <input
                type='text'
                name='caption'
                placeholder="Tell the story behind your image..."
                className={`w-full bg-[#1a0533] text-[#fef3c7] placeholder-[#fef3c7]/30 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                  errors.caption ? 'border-rose-500/60 focus:ring-rose-500/30' : 'border-purple-500/20 focus:ring-purple-500/30 focus:border-purple-500/50'
                }`}
              />
            </div>
            {/* Submit */}
            <button
              type='submit'
              className="w-full py-4 text-sm font-bold uppercase tracking-widest
               text-white bg-linear-to-r from-purple-500 to-rose-500 rounded-xl hover:scale-[1.02] 
               transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50
                flex items-center justify-center gap-2 mt-2"
            >
              Publish Now
            </button>
          </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CreatePost
