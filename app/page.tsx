import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LandingNavbar } from '@/components/LandingNavbar'

const features = [
  { 
    title: 'Dynamic Route Optimization', 
    description: 'Real-time route adjustments based on traffic and priorities',
    image: '/feature-route-optimization.jpg'
  },
  { 
    title: 'Fleet Management', 
    description: 'Comprehensive overview of your entire fleet',
    image: '/feature-fleet-management.jpg'
  },
  { 
    title: 'Delivery Tracking', 
    description: 'Real-time updates on all your deliveries',
    image: '/feature-delivery-tracking.jpg'
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main className="container mx-auto px-6 py-12 pt-24">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to MargaMithra</h1>
          <p className="text-xl text-muted-foreground mb-8">Optimize your delivery routes with AI-powered technology</p>
          <Button asChild size="lg">
            <Link href="/signup">Get Started</Link>
          </Button>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-primary">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-primary">Ready to optimize your deliveries?</h2>
          <Button asChild size="lg">
            <Link href="/signup">Sign Up Now</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}