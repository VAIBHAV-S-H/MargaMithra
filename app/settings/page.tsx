import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Settings } from "@/components/Settings"

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-pewter-400">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Header />
        <Settings />
      </main>
    </div>
  )
}