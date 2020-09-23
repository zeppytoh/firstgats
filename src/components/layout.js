import React from "react"
import { Link } from "gatsby"
import "../styles/base.css"

export default function Layout({ children }) {
  return (
    <main class="demo-6">
      <div class="frame">
        <div class="frame__title-wrap">
          <h1 class="frame__title">JesusLoves.Jp</h1>
          <div class="frame__links">
            <Link to="/1">創造主</Link>
            <Link to="/2">敵</Link>
            <Link to="/3">救済</Link>
            <Link to="/4">聖書</Link>
            <Link to="/5">キリスト</Link>
            <Link to="/6">祈り</Link>
          </div>
        </div>
        <div class="frame__demos">
          <a href="/" class="frame__demo frame__demo--current">About</a>
          <a href="index2.html" class="frame__demo">Privacy</a>

        </div>
      </div>
      <div class="deco">
        <div class="deco__text">Jesus Loves Japan</div>
        <div class="deco__text">Jesus Loves Japan</div>
        <div class="deco__text">Jesus Loves Japan</div>
        <div class="deco__text">Jesus Loves Japan</div>
        <div class="deco__text">Jesus Loves Japan</div>
      </div>
      {children}
      
    </main>
  )
}