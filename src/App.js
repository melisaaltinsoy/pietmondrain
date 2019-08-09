import React from "react"

import "./App.css"

const colors = ["#F2F5F1", "#D40920", "#1356A2", "#F7D842"]

function App() {
  const inputArray = Array(7).fill(0)

  const coordinates = inputArray.map((n, i) => {
    const randomX = Math.floor(Math.random() * (7 - 0) + 0) * 100
    const randomY = Math.floor(Math.random() * (7 - 0) + 0) * 100
    return [randomX, randomY]
  })

  console.log(coordinates)

  return (
    <svg width="800" height="800" fill="none">
      <rect
        x="100"
        y="100"
        width="600"
        height="600"
        stroke="black"
        strokeWidth="10"
      />

      {coordinates.map(i => {
        return (
          <rect
            x="100"
            y="100"
            width={`${i[0]}`}
            height={`${i[1]}`}
            stroke="black"
            strokeWidth="10"
          />
        )
      })}
    </svg>
  )
}

export default App
