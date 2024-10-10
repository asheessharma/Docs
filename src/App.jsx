
import React from "react"
import Background from "./assets/components/Background"
import Foreground from "./assets/components/Foreground"

export default function App() {

  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}
