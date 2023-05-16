import RestaurantCard from './RestaurantCard'
function RestaurantList({ restaurants }) {
  return (
    <div className="restaurant-list-container">
      <h2>Restaurant List</h2>
      {restaurants.map((restaurant) => {
        return <RestaurantCard restaurantInfo={restaurant} />
      })}
    </div>
  )
}
export default RestaurantList
