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

const initialDeliveries = [
  { id: 1, orderId: "ORD001", customer: "User", address: "123 Main St, Anytown, USA", status: "In Transit" },
  { id: 2, orderId: "ORD002", customer: "Jane Smith", address: "456 Elm St, Othertown, USA", status: "Delivered" },
  { id: 3, orderId: "ORD003", customer: "Bob Johnson", address: "789 Oak St, Somewhere, USA", status: "Pending" },
]

export function Deliveries() {
  const [deliveries, setDeliveries] = useState(initialDeliveries)
  const [newDelivery, setNewDelivery] = useState({ orderId: "", customer: "", address: "", status: "Pending" })

  const handleAddDelivery = () => {
    setDeliveries([...deliveries, { ...newDelivery, id: deliveries.length + 1 }])
    setNewDelivery({ orderId: "", customer: "", address: "", status: "Pending" })
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Deliveries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((delivery) => (
                <TableRow key={delivery.id}>
                  <TableCell>{delivery.orderId}</TableCell>
                  <TableCell>{delivery.customer}</TableCell>
                  <TableCell>{delivery.address}</TableCell>
                  <TableCell>{delivery.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Delivery</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Delivery</DialogTitle>
            <DialogDescription>Enter the details of the new delivery.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="orderId" className="text-right">
                Order ID
              </Label>
              <Input
                id="orderId"
                value={newDelivery.orderId}
                onChange={(e) => setNewDelivery({ ...newDelivery, orderId: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="customer" className="text-right">
                Customer
              </Label>
              <Input
                id="customer"
                value={newDelivery.customer}
                onChange={(e) => setNewDelivery({ ...newDelivery, customer: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                value={newDelivery.address}
                onChange={(e) => setNewDelivery({ ...newDelivery, address: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddDelivery}>Add Delivery</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}