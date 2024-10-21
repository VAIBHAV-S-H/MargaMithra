"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function Settings() {
  const [settings, setSettings] = useState({
    companyName: "MargaMithra Inc.",
    email: "contact@margamithra.com",
    notificationsEnabled: true,
    darkModeEnabled: false,
  })

  const handleSettingChange = (setting: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [setting]: value }))
  }

  const handleSave = () => {
    // Here you would typically send the settings to your backend
    console.log("Settings saved:", settings)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings and preferences.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={settings.companyName}
            onChange={(e) => handleSettingChange("companyName", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={settings.email}
            onChange={(e) => handleSettingChange("email", e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="notifications"
            checked={settings.notificationsEnabled}
            onCheckedChange={(checked) => handleSettingChange("notificationsEnabled", checked)}
          />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>

      </CardContent>
      <CardFooter>
        <Button onClick={handleSave}>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}