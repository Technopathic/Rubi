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
    console.log(`${offsetY * -1}px`)
  }, [upperRef])

  const upper = {
    marginLeft: offsetX ? `${offsetX}px` : "0px",
    marginBottom: offsetY ? `${offsetY * -1}px` : "0px",
    display: "flex",
    justifyContent: justify ? "space-between" : align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
    fontSize: size || "12px",
    width: lowerSpacing || lowerCenter ? "auto" : "100%",
    whiteSpace: "nowrap",
    color: color || "initial",
    lineHeight: "normal"
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
    <ruby>
      <rp>(</rp>
      <rt style={upper} ref={upperRef}>{justify ? renderJustify() : text}</rt>
      <rp>)</rp>
      <span style={lowerSpacing || lowerCenter ? { ...lower, ...getWidth } : lower}>{lowerSpacing ? renderSpacing() : children}</span>
    </ruby>
  )
}


export default Rubi