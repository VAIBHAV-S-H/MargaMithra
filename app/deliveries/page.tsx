import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Deliveries } from "@/components/Deliveries"

export default function DeliveriesPage() {
  return (
    <div className="flex h-screen bg-pewter-400">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Header />
        <Deliveries />
      </main>
    </div>
  )
}