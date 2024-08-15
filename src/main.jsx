import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Room from './pages/Room'
import Booking from './pages/Booking'
import Guest from './pages/Guest'
import Concierge from './pages/Concierge'
import Main from './pages/Main'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard />}>
          <Route path='/' element={<Main />} />
          <Route path='/room' element={<Room />} />
          <Route path='/bookings' element={<Booking />} />
          <Route path='/users' element={<Guest />} />
          <Route path='/contact' element={<Concierge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
