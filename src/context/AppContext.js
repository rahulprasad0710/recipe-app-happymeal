import React, { createContext, useState } from "react"

const AppContext = createContext()

export const AppProvider = props => {
  const [recipe, setRecipe] = useState("")
  const searchRecipeFn = props => {
    setRecipe(props)
  }

  return (
    <AppContext.Provider
      value={{ recipe: recipe, searchRecipeFn: searchRecipeFn }}
    >
      {" "}
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
