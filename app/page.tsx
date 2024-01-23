'use client'

import Card from './components/card'
import Button from './components/buttons'
import Input from './components/input'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/inventory')
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      {/* Login Field */}
      <div className="relative flex place-items-center">
        <Card py='big' >
          <Input id="password" label="Login" label_pos="top" type="password" name="password" placeholder="Masukkan Password"/>
          <Button type="submit" variant='primary' func={handleClick} mx_auto>Masuk</Button>
        </Card>
      </div>

    </main>
  )
}
