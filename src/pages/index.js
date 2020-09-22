import React from "react"
import Deco from "../components/deco"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
      <Header headerText="Welcome to Gatsby" bgColor="black" fgColor="white" />
      <Header headerText="It's pretty cool" bgColor="teal" fgColor="white" />
      <p>This is the Home Page</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}