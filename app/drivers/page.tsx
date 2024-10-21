import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Drivers } from "@/components/Drivers"

export default function DriversPage() {
  return (
    <div className="flex h-screen bg-pewter-400">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Header />
        <Drivers />
      </main>
    </div>
  )
}