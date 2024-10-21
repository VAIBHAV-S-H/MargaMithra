import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { FleetManagement } from "@/components/FleetManagement"

export default function FleetPage() {
  return (
    <div className="flex h-screen bg-pewter-400">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Header />
        <FleetManagement />
      </main>
    </div>
  )
}