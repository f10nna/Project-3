import './App.css'
import { restaurantData } from './data/data'
import NavBar from './components/NavBar'
import RestaurantList from './components/RestaurantsList'

const App = () => {
  return (
    <div className="main-container">
      <NavBar />
      <RestaurantList restaurants={restaurantData} />
    </div>
  )
}
export default App
