import React from "react"

const Footer = () => {
  return (
    <div className="page-footer">
      <h3>
        &copy; 2021{" "}
        <span style={{ color: "#ff4754" }} className="text-yellow">
          HAPPY
        </span>{" "}
        <span className="text-yellow">MEAL</span>
      </h3>
      <h3>
        Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>&nbsp; By:{" "}
        {"  "}
        <span>
          <a style={{ color: "#ff4754" }} href="https://www.google.com/">
            {" "}
            Rahul
          </a>
        </span>
      </h3>
      <h4>All Right Reserved.</h4>
    </div>
  )
}

export default Footer
