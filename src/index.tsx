import React, { useState, useEffect, useRef } from 'react'

interface Props {
  text: string,
  children: string
  size?: string
  offsetX?: number
  offsetY?: number
  color?: string
  align?: string
  justify?: boolean
  lowerSpacing?: boolean
  lowerCenter?: boolean
  attachAfter?: string
}

const Rubi = ({ text, children, size, offsetX, offsetY, color, align, justify, lowerSpacing, lowerCenter, attachAfter }: Props) => {
  const [lowerWidth, setLowerWidth] = useState(0)
  const upperRef = useRef(null)

  useEffect(() => {
    if (upperRef.current && lowerSpacing || upperRef.current && lowerCenter) {
      setLowerWidth(upperRef.current.getBoundingClientRect().width)
    }
  }, [upperRef])

  const container = {
    display: "inline-block"
  } as React.CSSProperties

  const column = {
    position: "relative"
  } as React.CSSProperties

  const upper = {
    position: "absolute",
    left: offsetX ? `${offsetX}px` : "0px",
    top: offsetY ? `${offsetY * -1}px` : "0px",
    textAlign: align || "center",
    display: "flex",
    justifyContent: justify ? "space-between" : "center",
    fontSize: size || "12px",
    width: lowerSpacing || lowerCenter ? "auto" : "100%",
    whiteSpace: "nowrap",
    color: color || "initial",
    lineHeight: "0px"
  } as React.CSSProperties

  const lower = {
    display: "flex",
    justifyContent: lowerSpacing ? "space-around" : lowerCenter ? "center" : "flex-start"
  } as React.CSSProperties

  const getWidth = {
    width: `${lowerWidth}px`,
  }

  const renderJustify = () => text.split("").map((item, i) => (<span key={i}>{item}</span>))

  const renderSpacing = () => children.split("").map((item, i) => (<span key={i}>{item}{attachAfter}</span>))

  return (
    <div style={container}>
      <div style={column}>
        <div style={upper} ref={upperRef}>{justify ? renderJustify() : text}</div>
        <div style={lowerSpacing || lowerCenter ? { ...lower, ...getWidth } : lower}>{lowerSpacing ? renderSpacing() : children}</div>
      </div>
    </div>
  )
}


export default Rubi