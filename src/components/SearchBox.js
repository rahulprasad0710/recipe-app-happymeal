import React, { useState } from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { BsSearch } from "react-icons/bs"

const SearchBox = () => {
  const [food, setFood] = useState("")
  const handleChange = e => {
    setFood(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(food)
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
