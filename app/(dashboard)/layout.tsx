import NavMenu from "./navmenu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <main className="min-h-screen">
      <div className="mb-3">
        <NavMenu></NavMenu>
      </div>
      <div className="flex gap-3 px-[20px] py-3">
        {children}
      </div>
    </main>
  )
}