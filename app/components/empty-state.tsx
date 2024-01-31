import React from "react"
import clsx from "clsx"

interface EmptyStateProps {
  size: 'small' | 'medium' | 'big',
  children: React.ReactNode,
}

const EmptyState = (props: EmptyStateProps) => {
  const { size, children } = props

  const emptyStateClassnames = clsx(
    'w-full flex justify-center items-center text-center font-bold text-gray-500',
    {'h-[100px]': size === 'small'},
    {'h-[200px]': size === 'medium'},
    {'h-[300px]': size === 'big'},
  )

  return(
    <div className={emptyStateClassnames}>{children}</div>
  )
}

export default EmptyState