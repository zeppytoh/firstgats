import React from "react"
import "../styles/base.css"

export default function Layout({ children }) {
  return (
    <main class="demo-3">
      <div class="frame">
        <div class="frame__title-wrap">
          <h1 class="frame__title">Jesus Loves 🇯🇵 </h1>
          <div class="frame__links">
            <a href="https://tympanus.net/Development/AnimatedImageColumns/">About Us</a>

          </div>
        </div>
        <div class="frame__demos">
          <span class="frame__demos-title">Read:</span>
          <a href="/" class="frame__demo frame__demo--current">01</a>
          <a href="index2.html" class="frame__demo">02</a>
          <a href="index3.html" class="frame__demo">03</a>
          <a href="index4.html" class="frame__demo">04</a>
          <a href="index5.html" class="frame__demo">05</a>
          <a href="index6.html" class="frame__demo">06</a>
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