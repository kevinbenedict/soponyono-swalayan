'use client'

import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

interface NavPillProps {
  text: string,
  link: string,
}

const NavPills = (props: NavPillProps) => {
  const { text, link } = props

  const pathname = usePathname()

  const navPillClassnames = clsx(
    'inline-block px-4 py-2 rounded-full font-bold',
    {'hover:bg-blue-50 hover:text-slate-600': pathname !== link},
    {'bg-blue-500 text-white': pathname === link},
  )

  return(
    <Link 
      href={link}
      className={navPillClassnames}
    >
      {text}
    </Link>
  )
}

export default NavPills