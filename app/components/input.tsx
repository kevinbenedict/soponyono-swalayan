import React from "react"
import clsx from "clsx"

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string,
  label: string,
  label_pos: 'top' | 'side',
}

const Input = (props: InputProps) => {
  const { id, label, label_pos, ...other } = props

  const labelClassnames = clsx(
    "text-center mb-4 font-bold",
    {"block": label_pos === 'top'}
  )

  const inputClassnames = 'p-2 mb-4 rounded-md  border-2 border-gray-300 focus:border-blue-500 focus:outline-0'

  return(<>
    <div>
      <label htmlFor={id} className={labelClassnames}>{label}</label>
      <input id={id} className={inputClassnames} {...other}/>
    </div>
  </>)
}

export default Input