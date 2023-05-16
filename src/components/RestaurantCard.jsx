import CuisineInfo from './CuisineInfo'

function RestaurantCard({ restaurantInfo }) {
  const { name, location, cuisine, image } = restaurantInfo
  return (
    <div className="restaurant-card">
      <img src={image} alt="Restaurant pic" />
      <h3>{name}</h3>
      <CuisineInfo cuisineType={cuisine} />
      <p>{location}</p>
    </div>
  )
}

export default RestaurantCard
