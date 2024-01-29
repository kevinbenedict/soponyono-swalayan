import React from "react"
import clsx from "clsx"

interface CardProps {
  fullWidth?: boolean,
  minWidth?: 'none' | 'small' | 'medium',
  px?: 'none' | 'small' | 'normal' | 'big',
  py?: 'none' | 'small' | 'normal' | 'big',
  bg_color?: 'white' | 'gray',
  border_color?: 'transparent',
  children: React.ReactNode,
}

const Card = (props: CardProps) => {
  const { fullWidth = false, minWidth = 'none', px = 'normal', py = 'normal', bg_color = 'white', border_color = 'transparent', children } = props

  const minWidthVariants = {
    none: 'min-w-0',
    small: 'min-w-[350px]',
    medium: 'min-w-[500px]',
  }

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
    {'w-full': fullWidth},
    `rounded-lg border-2 ${minWidthVariants[minWidth]} ${pxVariants[px]} ${pyVariants[py]} ${bgColorVariants[bg_color]} ${borderColorVariants[border_color]}`,
  )

  return(<>
    <div className={cardClassnames}>
      {children}
    </div>
  </>)
}

export default Card