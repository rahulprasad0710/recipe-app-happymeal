import React, { useState } from "react"
import { Link } from "gatsby"

const Testing = () => {
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
    <div>
      <h3>Testing</h3>
      <form onSubmit={handleSubmit} className="navbar-searchbox">
        <input
          value={food}
          type="text"
          onChange={handleChange}
          className="navbar-input"
          placeholder="Search..."
        />
        <button onSubmit={handleSubmit}>Search</button>
      </form>
    </div>
  )
}

export default Testing
