import './index.css'

const HistoryList = props => {
  const {historyItem, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const onClickingDeleteIcon = () => {
    onDelete(id)
  }

  return (
    <li className="list-type">
      <div className="time-and-icon-container">
        <p className="time">{timeAccessed}</p>
        <div className="icon-and-title-container">
          <img src={logoUrl} alt="domain-logo" className="app-logo" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete"
        onClick={onClickingDeleteIcon}
      />
    </li>
  )
}

export default HistoryList
