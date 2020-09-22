import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function About() {
  return (
    <div className="" style={{ color: `teal`}}>
      <Link to="/">Home</Link>
      <Header 
        headerText="About Gatsby" 
        bgColor ="teal"
        fgColor ="white"
      />
      <p>Such wow. Very React.</p>
    </div>
  )
}