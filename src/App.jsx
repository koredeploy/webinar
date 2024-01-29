
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
// import RootLayout from './layout/RootLayout'
import LandingPage from './pages/home/LandingPage'
import RootLayout from './layout/RootLayout'
import SalesPage from './pages/sales/SalesPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index path='/' element={<LandingPage/>}/>
      <Route path='/salespage' element={<SalesPage/>} /> 
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
