'use client'

import React from "react"
import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {

}

const SearchBar = (props: SearchBarProps) => {

  const inputRef = React.useRef<HTMLInputElement>(null)

  const focusInput = () => {
    inputRef.current?.focus();
  }

  const divClassnames = 'flex items-center rounded-full border-2 border-gray-200 px-2 py-1 hover:border-gray-400 cursor-pointer transition-colors'

  const inputClassnames = 'p-0 border-0 focus:outline-0 cursor-pointer'

  return(
    <div className={divClassnames} onClick={focusInput}>
      <SearchIcon className='fill-gray-500 me-1' />
      <input type="text" name="search" id="search" placeholder="Cari" ref={inputRef} className={inputClassnames} />
    </div>
  )
}

export default SearchBar