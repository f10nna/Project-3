import CuisineInfo from './CuisineInfo'

function RestaurantCard({ restaurantInfo }) {
  const { name, location, cuisine, image } = restaurantInfo
  return (
    <div className="restaurant-card">
      <h3>{name}</h3>
      <CuisineInfo cuisineType={cuisine} />
      <p>{location}</p>
      <img src={image} alt="Restaurant pic" />
    </div>
  )
}

export default RestaurantCard
