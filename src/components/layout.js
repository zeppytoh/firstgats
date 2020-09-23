import React from "react"
import "../styles/base.css"

export default function Layout({ children }) {
  return (
    <main class="demo-6">
      <div class="frame">
        <div class="frame__title-wrap">
          <h1 class="frame__title">JesusLoves.Jp</h1>
          <div class="frame__links">
            <a href="https://tympanus.net/Development/AnimatedImageColumns/">About Us</a>

          </div>
        </div>
        <div class="frame__demos">
          <a href="/" class="frame__demo frame__demo--current">創造主</a>
          <a href="index2.html" class="frame__demo">敵</a>
          <a href="index3.html" class="frame__demo">救済</a>
          <a href="index4.html" class="frame__demo">聖書</a>
          <a href="index5.html" class="frame__demo">キリスト</a>
          <a href="index6.html" class="frame__demo">祈り</a>
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