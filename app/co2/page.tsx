import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import  CO2EmissionsContent from "@/components/Co2-emissions"

export default function Co2Page() {
  return (
    <div className="flex h-screen bg-pewter-400">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Header />
        <CO2EmissionsContent />
      </main>
    </div>
  )
}