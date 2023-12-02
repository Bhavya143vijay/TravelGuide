import './index.css'

const TravelPlacesList = props => {
  const {eachPlace} = props
  const {imageUrl, description, name} = eachPlace

  return (
    <li className="list-location">
      <img src={imageUrl} alt={name} className="image" />

      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelPlacesList
