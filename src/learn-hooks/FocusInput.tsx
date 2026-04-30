import { useRef } from "react"

function FocusInput() {
  const inputRef = useRef(null)

  function handleClick() {
    // เข้าถึง DOM element โดยตรง!
    inputRef?.current?.focus()
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </>
  )
}

export default FocusInput