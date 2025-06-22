import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="container flex flex-col items-center sm:w-full">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout