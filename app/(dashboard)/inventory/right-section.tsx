import React from "react"
import Card from "@/components/card"
import Input from "@/components/input"
import Button from "@/components/buttons"
import CloseIcon from '@mui/icons-material/Close'

interface AddEditProps {
  mode: 'view' | 'add' | 'edit',
  item: any | null,
  closeFunc: () => void,
}

interface SectionItemProps {
  label: string,
  children: React.ReactNode
}

const SectionItem = (props: SectionItemProps) => {
  const { label, children } = props

  return(
  <div className="flex mb-4">
    <div className="w-[150px] font-semibold shrink-0 p-2">
      {label}
    </div>
    {children}
  </div>
  )
}

const RightSection = (props: AddEditProps) => {
  const { mode, item, closeFunc } = props

  const [oldVal, setOldVal] = React.useState(item)    // default val & used for validation
  const [form, setForm] = React.useState({})
  const [disableSubmit, setDisableSubmit] = React.useState<any>(true)

  React.useEffect(() => {
    setOldVal(item)
  }, [item])

  const handleChange = (e: any) => {
    setForm(form => ({...form, [e.name]: e.value}))
    console.log(form)
  }

  return(
    <Card minWidth='small'>
      <div className="flex justify-between cursor-pointer mb-4">
        <h1 className="text-lg font-bold">{mode === 'view' ? 'Detail Barang' : mode === 'add' ? 'Tambah Barang' : 'Edit Barang'}</h1>
        <CloseIcon onClick={closeFunc} />
      </div>

      <form action="">
        {mode === 'edit' || mode === 'view' ? <>
          <h2 className="font-bold mb-4">{item.brand} - {item.size} mL</h2>
          </> : <>
          <SectionItem label="Merk">
            <Input id='brand' type='text' name='brand' required/>
          </SectionItem>
          <SectionItem label="Ukuran">
            {/* put dropdown here */}
            <Input id='size' type='text' name='size' hidden/>
          </SectionItem>
          </>
        }

        <SectionItem label="Stok">
          {mode === 'add' || mode === 'edit' ?
            <Input id='qty' type='text' name='qty' value={oldVal ? oldVal.qty : ''} onChange={handleChange} required/>
          :
            <div className="p-2 border-2 border-transparent">{item.qty}</div>
          }
        </SectionItem>

        <SectionItem label="Harga Beli">
          {mode === 'add' || mode === 'edit' ?
            <Input id='price' type='text' name='price' value={oldVal ? oldVal.price : ''} onChange={handleChange} required/>
          :
            <div className="p-2 border-2 border-transparent">{item.price}</div>
          }
        </SectionItem>

        <Button type='submit' variant='primary' disabled={disableSubmit}>Save</Button>
      </form>
    </Card>
  )
}

export default RightSection