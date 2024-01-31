import React from "react"
import clsx from "clsx"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  type: 'button' | 'submit' | 'reset',
  variant: 'primary' | 'secondary' | 'secondary-outline',
  shape?: 'pill' | 'round'
  func?: () => void,
  mx_auto?: boolean,
  children: React.ReactNode,
}

const Button = (props: ButtonProps) => {
  const { type, variant, shape = 'pill', func, mx_auto, children, ...other } = props

  const btnClassnames = clsx(
    'block font-bold border-2 rounded-full transition-colors',
    {'mx-auto': mx_auto === true},
    {'py-2 px-3': shape === 'pill'},
    {'p-2': shape === 'round'},
    {
      'text-white': variant === 'primary' || variant === 'secondary',
      'bg-blue-500 border-blue-500 hover:bg-blue-600': variant === 'primary',
      'bg-gray-500 border-gray-500 hover:bg-gray-600': variant === 'secondary',
      'hover:bg-gray-100 border-gray-300': variant === 'secondary-outline',
    }
  )

  return(<>
    <button type={type} className={btnClassnames} onClick={func} {...other}>{children}</button>
  </>)
}

export default Button