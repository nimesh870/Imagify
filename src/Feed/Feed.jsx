import axios from 'axios'
import Container from '../Container/Container'
import { v4 as uuidv4 } from 'uuid';
import { useState , useEffect } from 'react'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    axios.get("http://localhost:8000/feed")
    .then( (res) =>  {
      setPosts(res.data.data)
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#1a0533] pt-28 pb-20">
      <Container>
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#fef3c7]">
            Explore
          </h1>
          <div className="mt-2 w-24 h-1 bg-linear-to-r from-purple-500 to-rose-500 rounded-full" />
        </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {posts.map( (post) => (
            <div key={post._id}
            className="group bg-[#0d0218] border border-purple-500/10 rounded-2xl
            overflow-hidden cursor-pointer transition-all duration-500
            hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-900/20"
            >
              <div className="overflow-hidden">
                <img
                  src={post.imgURI}
                  alt={post.caption}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-sm sm:text-base font-semibold text-white line-clamp-2">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-32">
          <p className="text-lg text-[#fef3c7]/60">No posts available to view.</p>
        </div>
      )}

      </Container>
    </div>
  )
}

export default Feed
