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
        <div className="mb-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#fef3c7]">
            Explore
          </h1>
          <div className="mt-2 w-24 h-1 bg-linear-to-r from-purple-500 to-rose-500 rounded-full" />
        </div>

      {posts.length > 0 ? (
        posts.map( (post) => (
          <div key={post._id}
          className="group relative rounded-2xl overflow-hidden mb-4 break-inside-avoid
          cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
          hover:shadow-purple-900/40"
          >
            <img
              src={post.imgURI}
              alt={post.caption}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <p className="text-xl font-bold text-white mb-3 line-clamp-2">{post.caption}</p>
          </div>
        ))
      ) : (
      <>
        <div className='min-h-screen flex items-center justify-center'>
          <p className='text-md text-white'>No posts available to view.</p>
        </div>
      </>
    )
  }

      </Container>
    </div>
  )
}

export default Feed
