import React from "react"

export default function ArticleLayout({children}) {
  return (
    <div style="
      display: flex;
      flex-direction: column;
      height: 100%;
    ">
      <header style="flex-shrink: 0;">
          <p>This is the header</p>
      </header>
      <main style="flex-grow: 1;">
          {children}
      </main>
      <footer style="flex-shrink: 0;">
          <p>This is the footer</p>
      </footer>
    </div>
  )
}