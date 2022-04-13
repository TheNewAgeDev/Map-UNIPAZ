import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import App from './App'
import Map from './map'

const RouterComponent = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<App />} />
        <Route path='map' element={<Map />} />
      </Routes>

    </Router>
  )
}

export default RouterComponent
