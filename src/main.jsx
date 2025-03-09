import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , createRoutesFromElements , RouterProvider,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Product from "./Components/Product"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Authorization from './Components/Authorization.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>  
        <Route path="footer" element={<Footer/>}/> 
        <Route path="signup/:val" element={<Authorization/>}/> 
        <Route path="login/:val" element={<Authorization/>}/> 
      </Route>
      
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
