import React from "react"
import clsx from "clsx"

const Input = (props: React.ComponentPropsWithoutRef<"input">) => {

  const inputClassnames = 'w-full p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-0'

  return(
    <input className={inputClassnames} {...props}/>
  )
}

export default Input