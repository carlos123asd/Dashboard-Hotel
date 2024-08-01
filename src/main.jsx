import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Room from './pages/Room'
import Booking from './pages/Booking'
import Guest from './pages/Guest'
import Concierge from './pages/Concierge'
import Main from './pages/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Dashboard />}>
        <Route path='/' element={<Main />} />
        <Route path='/room' element={<Room />} />
        <Route path='/bookings' element={<Booking />} />
        <Route path='/guest' element={<Guest />} />
        <Route path='/concierge' element={<Concierge />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
