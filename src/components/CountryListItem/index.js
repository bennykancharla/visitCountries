import './index.css'

const CountryListItem = props => {
  const {name, isVisited, id, onClickVisit} = props

  const onClickVisitBtn = () => {
    onClickVisit(id)
  }
  return (
    <li className="list-item">
      <p className="list-name">{name}</p>

      {isVisited ? (
        <p className="isActive"> Visited </p>
      ) : (
        <button type="button" className="visitedBtn" onClick={onClickVisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryListItem
