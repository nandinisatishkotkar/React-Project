import Headers from './components/Headers/Header'
import Footer from './components/Footers/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
      <>
      <Headers/>
      <Outlet/>
      <Footer/>
      
      
      </>
    )
}



export default Layout;