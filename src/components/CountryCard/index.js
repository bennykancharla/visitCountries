import './index.css'

const CountryCard = props => {
  const {cardDetails, onClickRemove} = props
  const {name, id, imageUrl} = cardDetails

  const onClickRemoveBtn = () => {
    onClickRemove(id)
  }

  return (
    <li className="list-card">
      <img className="list-image" src={imageUrl} alt="thumbnail" />
      <div className="name-container">
        <p className="card-name">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryCard
