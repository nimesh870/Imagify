import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
      <div className="bg-[#1a0533] min-h-screen">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
  )
}

export default App
