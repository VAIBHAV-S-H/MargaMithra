import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const notifications = [
  { id: 1, message: "New delivery request received", time: "5 minutes ago" },
  { id: 2, message: "Route optimization complete", time: "1 hour ago" },
  { id: 3, message: "Driver John Smith has completed all deliveries", time: "2 hours ago" },
  { id: 4, message: "System maintenance scheduled for tonight", time: "1 day ago" },
]

export default function NotificationsPage() {
  return (
    <div className="flex h-screen bg-pewter-400">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Header />
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li key={notification.id} className="flex justify-between items-center border-b pb-2">
                  <span>{notification.message}</span>
                  <span className="text-sm text-muted-foreground">{notification.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}