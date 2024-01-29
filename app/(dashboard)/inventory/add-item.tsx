import React from "react"
import Card from "@/components/card"
import Input from "@/components/input"
import Button from "@/components/buttons"
import CloseIcon from '@mui/icons-material/Close'

interface AddEditProps {
  item: any | null,
  closeFunc: () => void,
}

const AddEditItem = (props: AddEditProps) => {
  const { item, closeFunc } = props

  const [oldVal, setOldVal] = React.useState(item)
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
        <h1 className="text-lg font-bold">{item ? 'Edit Barang' : 'Tambah Barang'}</h1>
        <CloseIcon onClick={closeFunc} />
      </div>

      <form action="">
        {item ? <>
          <h2 className="font-bold mb-4">{item.brand} - {item.size} mL</h2>
          </> : <>
          <Input id='brand' label='Merk' label_pos="side" type='text' name='brand' required/>
          {/* put dropdown here */}
          <Input id='size' label='Ukuran (ml)' label_pos="side" type='text' name='size' hidden/>
          </>
        }

        <Input id='qty' label='Stok (botol/gelas)' label_pos="side" type='text' name='qty' value={oldVal ? oldVal.qty : ''} onChange={handleChange} required/>
        <Input id='price' label='Harga Beli' label_pos="side" type='text' name='price' value={oldVal ? oldVal.price : ''} onChange={handleChange} required/>

        <Button type='submit' variant='primary' disabled={disableSubmit}>Save</Button>
      </form>
    </Card>
  )
}

export default AddEditItem