"use client"

import Link from 'next/link'
import { Package, Users, LineChart, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardContent() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="routes">Routes</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Drivers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">+2 since yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fuel Efficiency</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5 mpg</div>
              <p className="text-xs text-muted-foreground">+2.4% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO2 Emissions</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-12.5%</div>
              <p className="text-xs text-muted-foreground">Reduction from last quarter</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Route Optimization</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Link href="/route-optimizer" className="block">
                <div className="aspect-[16/9] rounded-md bg-muted relative overflow-hidden group">
                  <img
                    src="/feature-route-optimization.jpg"
                    alt="Route Optimization Preview"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">Open Route Optimizer</span>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Delivery Performance</CardTitle>
              <CardDescription>Daily success rate for the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div className="flex items-center" key={day}>
                    <div className="w-9 text-sm">{day}</div>
                    <div className="w-full">
                      <Progress value={Math.floor(Math.random() * 31) + 70} className="h-2" />
                    </div>
                    <div className="w-9 text-sm text-right">{Math.floor(Math.random() * 31) + 70}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="routes" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Routes</CardTitle>
            <CardDescription>Real-time view of current delivery routes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] rounded-md bg-gray-200 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>Detailed metrics and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] rounded-md bg-gray-200 flex items-center justify-center">
              <LineChart className="h-12 w-12 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}