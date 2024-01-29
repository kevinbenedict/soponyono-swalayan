'use client'

import React from "react"
import Card from "@/components/card"
import SearchBar from "@/components/searchbar"
import Button from "@/components/buttons"
import styles from 'modules/table.module.css'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import AddEditItem from "./add-item"

const cols = [
  {
    name: 'Merk',
  },
  {
    name: 'Ukuran (ml)',
  },
  {
    name: 'Stok (botol/gelas)',
  },
  {
    name: 'Harga Beli',
  },
]

const rows = [
  {
    brand: 'Alamo',
    size: '300',
    qty: '500',
    price: '1500',
  },
  {
    brand: 'Alamo',
    size: '600',
    qty: '300',
    price: '2500',
  },
  {
    brand: 'Alamo',
    size: '1500',
    qty: '100',
    price: '5500',
  },
]

export default function DashboardHome() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [data, setData] = React.useState(null)

  const openAddSection = () => {
    setData(null)
    setIsOpen(true)
  }

  const openEditSection = (item: any) => {
    setData(item)
    setIsOpen(true)
  }

  const closeSection = () => {
    setIsOpen(false)
  }

  return(<>
    <Card fullWidth>
      <div className="flex justify-between pb-4">
        <SearchBar />
        <Button type="button" variant="primary" func={openAddSection}>
          <AddIcon />
          <span className="ms-1 align-middle">Tambah</span>
        </Button>
      </div>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            {cols.map((item, index) => (
              <th key={index}>{item.name}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {rows.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.size}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>
                <Button type="button" variant="secondary-outline" func={() => openEditSection(item)}>
                  <EditIcon className="me-1 transition-colors" />
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>

    {isOpen == true && <AddEditItem item={data} closeFunc={closeSection} />}
  </>)
}