import React from "react"
import clsx from "clsx"

interface CardProps {
  px?: 'none' | 'small' | 'normal' | 'big',
  py?: 'none' | 'small' | 'normal' | 'big',
  bg_color?: 'white' | 'gray',
  border_color?: 'transparent',
  children: React.ReactNode,
}

const Card = (props: CardProps) => {
  const { px = 'normal', py = 'normal', bg_color = 'white', border_color = 'transparent', children } = props

  const pxVariants = {
    none: 'px-0',
    small: 'px-2',
    normal: 'px-6',
    big: 'px-8',
  }

  const pyVariants = {
    none: 'py-0',
    small: 'py-2',
    normal: 'py-6',
    big: 'py-8',
  }

  const bgColorVariants = {
    white: 'bg-white',
    gray: 'bg-gray-400',
  }

  const borderColorVariants = {
    transparent: 'border-transparent',
  }


  const cardClassnames = clsx(
    `${pxVariants[px]} ${pyVariants[py]} ${bgColorVariants[bg_color]} rounded-lg border-2 ${borderColorVariants[border_color]}`,
  )

  return(<>
    <div className={cardClassnames}>
      {children}
    </div>
  </>)
}

export default Card