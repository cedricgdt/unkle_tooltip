import React, { useEffect, useRef } from 'react'
import './Tooltip.scss'

const ToolTip = ({ children, text, position, onHover = false, display = false}) => {

  const gap = 12

  const tooltipElement = useRef()

  useEffect(() => {
    tooltipPosition(display)
  }, [tooltipElement, position, display])

  const tooltipPosition = (scale) => {

    const parentWidth = tooltipElement.current.parentElement.clientWidth
    const parentHeight = tooltipElement.current.parentElement.clientHeight

    if (position === "left") {
      tooltipElement.current.style.transform = `translate3d(calc(${- parentWidth / 2 - gap}px - 50%), calc(${parentHeight / 2}px - 50%), 0) ${scale ? 'scale(1)' : 'scale(0)'}`
    } else if (position === "right") {
      tooltipElement.current.style.transform = `translate3d(${parentWidth + gap}px, calc(${parentHeight / 2}px - 50%), 0) ${scale ? 'scale(1)' : 'scale(0)'}`
    } else if (position === "bottom") {
      tooltipElement.current.style.transform = `translate3d(0, calc(${parentHeight}px + ${gap}px), 0) ${scale ? 'scale(1)' : 'scale(0)'}`
    } else if (position === "top") {
      tooltipElement.current.style.transform = `translate3d(0, calc(-100% - ${gap}px), 0) ${scale ? 'scale(1)' : 'scale(0)'}`
    }
  }

  const mouseEnter = () => {
    if (onHover) tooltipPosition(true)
  }

  const mouseLeave = () => {
    if (onHover) tooltipPosition(false)
  }

  return (
    <div className='tooltip__container' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className={`tooltip__item ${position}`} ref={tooltipElement} dangerouslySetInnerHTML={{ __html: text, }}></div>
      {children}
    </div>
  )
}

export default ToolTip