import {Component} from 'react'
import './index.css'
import HistoryList from '../HistoryList'

class SearchHistory extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelete = id => {}

  render() {
    const {searchInput} = this.state
    const {historyList} = this.props
    const searchResults = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="nav-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <div className="input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              placeholder="Search here"
              value={searchInput}
              className="search-box"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="history-section">
          <ul className="history-card">
            {searchResults.map(eachHistory => (
              <HistoryList
                historyItem={eachHistory}
                key={eachHistory.id}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchHistory
