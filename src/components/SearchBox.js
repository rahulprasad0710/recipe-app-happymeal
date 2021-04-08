import React, { useState, useContext } from "react"

import { IconContext } from "react-icons"
import { BsSearch } from "react-icons/bs"
import AppContext from "../context/AppContext"

const SearchBox = props => {
  const { searchRecipeFn } = useContext(AppContext)

  const [food, setFood] = useState("")
  const handleChange = e => {
    setFood(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    searchRecipeFn(food)
    setFood("")
  }

  return (
    <form onSubmit={handleSubmit} className="navbar_searchbox">
      <input
        value={food}
        type="text"
        onChange={handleChange}
        className="navbar-input"
        placeholder="Search..."
      />
      <button className="navbar_serach-btn" onSubmit={handleSubmit}>
        <IconContext.Provider
          value={{
            fontWeight: "800",
            className: "navbar_search-btn-icon",
          }}
        >
          <div>
            <BsSearch />
          </div>
        </IconContext.Provider>
      </button>
    </form>
  )
}

export default SearchBox
