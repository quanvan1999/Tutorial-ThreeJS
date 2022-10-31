import { useEffect, useState } from "react"

export const getDirectionOffset = ({
  w,
  s,
  d,
  a,
}: {
  w: boolean
  s: boolean
  d: boolean
  a: boolean
}) => {
  let directionOffset = 0 // w

  if (w) {
    // plm
  } else if (s) {
    directionOffset = Math.PI // s
  } else if (a) {
    directionOffset = Math.PI / 2 // a
  } else if (d) {
    directionOffset = -Math.PI / 2 // d
  }
  return directionOffset
}

export const usePlayerControls = () => {
  const keys = {
    KeyW: "forward",
    ArrowUp: "forward",
    KeyS: "backward",
    ArrowDown: "backward",
    KeyA: "left",
    ArrowLeft: "left",
    KeyD: "right",
    ArrowRight: "right",
    ShiftLeft: "sprint",
    Space: "jump",
  }
  const moveFieldByKey = (key: keyof typeof keys) => keys[key]

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    attack: false,
    sprint: false,
    jump: false,
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setMovement((movement) => ({
        ...movement,
        [moveFieldByKey(event.code as keyof typeof keys)]: true,
      }))
    }
    const handleKeyUp = (event: KeyboardEvent) => {
      setMovement((movement) => ({
        ...movement,
        [moveFieldByKey(event.code as keyof typeof keys)]: false,
      }))
    }
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])
  return movement
}
