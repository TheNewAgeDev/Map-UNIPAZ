import { Switch, Route } from 'wouter'

import App from './App'
import Map from './map'
import NotFound from './404'

const RouterComponent = () => {
  return (
    <Switch>
      <Route path='/' component={App} />
      <Route path='/map' component={Map} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default RouterComponent
