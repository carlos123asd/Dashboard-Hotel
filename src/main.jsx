import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Room from './pages/Room'
import Booking from './pages/Booking'
import Guest from './pages/Guest'
import Concierge from './pages/Concierge'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/room' element={<Room />} />
      <Route path='/bookings' element={<Booking />} />
      <Route path='/guest' element={<Guest />} />
      <Route path='/concierge' element={<Concierge />} />
    </Routes>
  </BrowserRouter>
)
