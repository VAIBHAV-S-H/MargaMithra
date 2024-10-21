"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const initialDrivers = [
  { id: 1, name: "John Smith", license: "DL12345", status: "Active", lastDelivery: "2023-07-01" },
  { id: 2, name: "Emma Johnson", license: "DL67890", status: "On Leave", lastDelivery: "2023-06-28" },
  { id: 3, name: "Michael Brown", license: "DL54321", status: "Active", lastDelivery: "2023-07-02" },
]

export function Drivers() {
  const [drivers, setDrivers] = useState(initialDrivers)
  const [newDriver, setNewDriver] = useState({ name: "", license: "", status: "Active", lastDelivery: "" })

  const handleAddDriver = () => {
    setDrivers([...drivers, { ...newDriver, id: drivers.length + 1 }])
    setNewDriver({ name: "", license: "", status: "Active", lastDelivery: "" })
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>License</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Delivery</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.license}</TableCell>
                  <TableCell>{driver.status}</TableCell>
                  <TableCell>{driver.lastDelivery}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Driver</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Driver</DialogTitle>
            <DialogDescription>Enter the details of the new driver.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newDriver.name}
                onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="license" className="text-right">
                License
              </Label>
              <Input
                id="license"
                value={newDriver.license}
                onChange={(e) => setNewDriver({ ...newDriver, license: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lastDelivery" className="text-right">
                Last Delivery
              </Label>
              <Input
                id="lastDelivery"
                type="date"
                value={newDriver.lastDelivery}
                onChange={(e) => setNewDriver({ ...newDriver, lastDelivery: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddDriver}>Add Driver</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}