import Image from 'next/image'
import { LandingNavbar } from '@/components/LandingNavbar'

const features = [
  { 
    title: 'Dynamic Route Optimization', 
    description: 'Our AI-powered algorithm constantly analyzes traffic patterns, weather conditions, and delivery priorities to provide the most efficient routes in real-time.',
    image: '/feature-route-optimization.jpg'
  },
  { 
    title: 'Fleet Management', 
    description: 'Get a comprehensive overview of your entire fleet, including vehicle status, maintenance schedules, and driver performance metrics.',
    image: '/feature-fleet-management.jpg'
  },
  { 
    title: 'Delivery Tracking', 
    description: 'Provide your customers with real-time updates on their deliveries, including accurate ETAs and live map tracking.',
    image: '/feature-delivery-tracking.jpg'
  },
  { 
    title: 'Analytics Dashboard', 
    description: 'Gain valuable insights into your operations with our powerful analytics tools, helping you make data-driven decisions to improve efficiency.',
    image: '/feature-analytics.jpg'
  },
  { 
    title: 'Mobile App for Drivers', 
    description: 'Equip your drivers with our user-friendly mobile app for easy navigation, delivery confirmation, and communication with the dispatch team.',
    image: '/feature-mobile-app.jpg'
  },
  { 
    title: 'Integration Capabilities', 
    description: 'Seamlessly integrate MargaMithra with your existing systems, including CRM, ERP, and e-commerce platforms for a unified workflow.',
    image: '/feature-integration.jpg'
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main className="container mx-auto px-6 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Our Features</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
              <Image 
                src={feature.image} 
                alt={feature.title} 
                width={600} 
                height={300} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-secondary">{feature.title}</h2>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}