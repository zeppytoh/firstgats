import React from "react"
import { Link } from "gatsby"
import Homegrid from "../components/homegrid"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div id="app"></div>
      <Homegrid />
    </Layout>
  );
}