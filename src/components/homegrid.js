import React from "react"
import { Link } from "gatsby"

export default function Homegrid() {
  return (
    <div class="grid" id="itemsWrapper">
            <figure class="grid__item">
              <Link to="/about">
                <img class="grid__item-img" src="img/18.jpg" alt="Some image" />
                <img class="grid__item-img grid__item-img--large" src="img/18_large.jpg" />
                <figcaption class="grid__item-caption">
                    <h2 class="grid__item-title">創造主が…</h2>
                    <p class="grid__item-text">
                    In the beginning, God…
                    </p>
                </figcaption>
                </Link>
            </figure>
            <figure class="grid__item">
                <img class="grid__item-img" src="img/16.jpg" alt="Some image" />
                <img class="grid__item-img grid__item-img--large" src="img/16_large.jpg" />
                <figcaption class="grid__item-caption">
                    <h2 class="grid__item-title">最強の敵</h2>
                    <p class="grid__item-text">
                        Our Greatest Enemy
                    </p>
                </figcaption>
            </figure>
            <figure class="grid__item">
                <img class="grid__item-img" src="img/17.jpg" alt="Some image" />
                <img class="grid__item-img grid__item-img--large" src="img/17_large.jpg" />
                <figcaption class="grid__item-caption">
                    <h2 class="grid__item-title">救済の計画</h2>
                    <p class="grid__item-text">
                        God's Rescue Plan
                    </p>
                </figcaption>
            </figure>
            <figure class="grid__item">
              <Link to="/about">
                <img class="grid__item-img" src="img/1.jpg" alt="Some image" />
                <img class="grid__item-img grid__item-img--large" src="img/1_large.jpg" />
                <figcaption class="grid__item-caption">
                    <h2 class="grid__item-title">聖書って何?</h2>
                    <p class="grid__item-text">
                    What is the Bible?
                    </p>
                </figcaption>
                </Link>
            </figure>
            <figure class="grid__item">
                <img class="grid__item-img" src="img/2.jpg" alt="Some image" />
                <img class="grid__item-img grid__item-img--large" src="img/2_large.jpg" />
                <figcaption class="grid__item-caption">
                    <h2 class="grid__item-title">キリストって誰？</h2>
                    <p class="grid__item-text">
                        Who is Jesus Christ?
                    </p>
                </figcaption>
            </figure>
            <figure class="grid__item">
                <img class="grid__item-img" src="img/3.jpg" alt="Some image" />
                <img class="grid__item-img grid__item-img--large" src="img/3_large.jpg" />
                <figcaption class="grid__item-caption">
                    <h2 class="grid__item-title">どうやって祈るの?</h2>
                    <p class="grid__item-text">
                        What is prayer?
                    </p>
                </figcaption>
            </figure>
        </div>
  )
}