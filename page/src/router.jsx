import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import App from './components/App'
import Map from './components/Map'

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
