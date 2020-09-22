import React from "react"

export default function Header(props) {
  return (
    <h1 style={{ backgroundColor: props.bgColor, color: props.fgColor }}>{props.headerText}</h1>
  )
}