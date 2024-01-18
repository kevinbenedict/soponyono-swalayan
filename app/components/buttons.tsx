import React from "react"
import clsx from "clsx"

interface ButtonProps {
  type: 'button' | 'submit' | 'reset',
  variant: 'primary' | 'secondary',
  func?: () => void,
  mx_auto?: boolean,
  children: string,
}

const Button = (props: ButtonProps) => {
  const { type, variant, func, mx_auto, children } = props

  const btnClassnames = clsx(
    'block py-2 px-4 font-bold rounded-full',
    {'mx-auto': mx_auto === true},
    {
      'bg-blue-500': variant === 'primary',
      'hover:bg-blue-600': variant === 'primary',
      'text-white': variant === 'primary' || variant === 'secondary',
      'bg-gray-500': variant === 'secondary',
      'hover:bg-gray-600': variant === 'secondary',
    }
  )

  return(<>
    <button type={type} className={btnClassnames} onClick={func}>{children}</button>
  </>)
}

export default Button