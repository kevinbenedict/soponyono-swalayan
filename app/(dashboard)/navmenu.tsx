import React from "react"
import Card from "@/components/card"
import NavPills from "@/components/navmenu/navpills"

interface HeaderProps {

}

const menu = [
  {
    name: 'Inventory',
    link: '/inventory',
  },
  {
    name: 'List Supplier',
    link: '/list-supplier',
  },
  {
    name: 'List Customer',
    link: '/list-customer',
  },
  {
    name: 'Daftar Transaksi',
    link: '/daftar-transaksi',
  },
]

const NavMenu = (props: HeaderProps) => {
  return(
    <Card px='small' py='small'>
      <ul className="flex gap-2">
        {menu.map((item, index) => (
          <li key={index}>
            <NavPills text={item.name} link={item.link} />
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default NavMenu