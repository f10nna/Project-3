import RestaurantCard from './RestaurantCard'
function RestaurantList({ restaurants }) {
  return (
    <div className="restaurant-list-container">
      {restaurants.map((restaurant) => {
        return <RestaurantCard restaurantInfo={restaurant} />
      })}
    </div>
  )
}
export default RestaurantList
