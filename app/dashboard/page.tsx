import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { DashboardContent } from "@/components/DashboardContent"


export default function Home() {
  return (
    <div className="flex h-screen bg-pewter-450">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Header />
        <DashboardContent />
      </main>
    </div>
  )
}