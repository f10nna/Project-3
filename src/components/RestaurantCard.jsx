function RestaurantCard({ restaurantInfo }) {
  const { name, location, cuisine, image } = restaurantInfo
  return (
    <div className="restaurant-card">
      <h3>{name}</h3>
    </div>
  )
}

export default RestaurantCard
