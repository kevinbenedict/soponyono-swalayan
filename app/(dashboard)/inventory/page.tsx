'use client'

import React from "react"
import Card from "@/components/card"
import SearchBar from "@/components/searchbar"
import Button from "@/components/buttons"
import styles from 'modules/table.module.css'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import InfoIcon from '@mui/icons-material/Info'
import DetailItem from "./detail"
import RightSection from "./right-section"

const cols = [
  {
    name: 'Merk',
  },
  {
    name: 'Ukuran (ml)',
  },
  {
    name: 'Stok',
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
    customer: [
      {
        customer_name: 'Joni',
        price_sell: '3000',
      },
      {
        customer_name: 'Bambang',
        price_sell: '3100',
      },
      {
        customer_name: 'Prayitno',
        price_sell: '3050',
      },
    ]
  },
  {
    brand: 'Alamo',
    size: '600',
    qty: '300',
    price: '2500',
    customer: []
  },
  {
    brand: 'Alamo',
    size: '1500',
    qty: '100',
    price: '5500',
    customer: [
      {
        customer_name: 'Bryan',
        price_sell: '6000',
      },
    ]
  },
]

// to fulfill type assertion req in right-section.tsx
type Mode = 'view' | 'add' | 'edit'

export default function DashboardHome() {
  // right section mode
  const [mode, setMode] = React.useState<Mode>('view')
  const [sectionOpen, setSectionOpen] = React.useState(false)
  const [data, setData] = React.useState(null)

  const openViewMode = (item: any) => {
    setData(item)
    setMode('view')
    setSectionOpen(true)
  }

  const openAddMode = () => {
    setData(null)
    setSectionOpen(true)
    setMode('add')
  }

  const openEditMode = (item: any) => {
    setData(item)
    setSectionOpen(true)
    setMode('edit')
  }

  const closeSection = () => {
    setSectionOpen(false)
  }

  return(<>
    <Card fullWidth>
      <div className="flex justify-between pb-4">
        <SearchBar />
        <Button type="button" variant="primary" func={openAddMode}>
          <AddIcon />
          <span className="ms-1 align-middle">Tambah</span>
        </Button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {cols.map((item, index) => (
              <th key={index}>{item.name}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.size}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td className={styles.contentRight}>
                <Button type="button" variant="secondary-outline" shape='round' func={() => openViewMode(item)}>
                  <InfoIcon />
                </Button>
                <span className="p-1"></span>
                <Button type="button" variant="secondary-outline" func={() => openEditMode(item)}>
                  <EditIcon className="me-1 transition-colors" />
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>

    {sectionOpen && <RightSection mode={mode} item={data} closeFunc={closeSection} />}
  </>)
}