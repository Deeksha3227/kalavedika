import { Navbar } from "@/app/navbar"
import { Footer } from "@/app/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Calendar, Music, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative flex items-center justify-center py-20 md:py-32 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="absolute inset-0 bg-[url('/cultural-bg.jpeg')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-orange-500 animate-fade-in">
              KALAVEDIKA
            </h1>
            <p className="max-w-orange[700px] text-gray-700 md:text-xl">
            Art, culture, and talent shine bright at AJIET!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-700">
                <Link href="/events">
                  Explore Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg">
              <Calendar className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cultural Events</h3>
              <p className="text-gray-600">
                Participate in a variety of cultural events showcasing your talents and creativity.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg">
              <Music className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Artistic Expression</h3>
              <p className="text-gray-600">
                Express yourself through music, dance, art, and various creative performances.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg">
              <Users className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Building</h3>
              <p className="text-gray-600">
                Connect with fellow students and build lasting relationships through cultural activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="max-w-[700px] text-gray-600">
              Celebrating the success of our talented participants in various cultural competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Achievement Card 1 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
 <div className="h-40 bg-orange-100 flex items-center justify-center overflow-hidden">
  <img
    src="/VTU.jpeg"
    alt="VTU Runner Up"
    className="h-full w-full object-cover"
  />
</div>
  <div className="p-6">
    <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full">
      RUNNER UP
    </div>
    <h3 className="text-lg font-bold mb-2">VTU Belgavi</h3>
    <p className="text-sm text-gray-600">2025</p>
  </div>
</div>

            {/* Achievement Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-orange-100 flex items-center justify-center overflow-hidden">
                <Award className="h-20 w-20 text-orange-500" />
              </div>
               <img
                  src="/1.jpg"
                  alt="VTU"
                  className="h-10 w-0 full object-cover"
                />
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full">
                OVERALL CHAMPIONSHIP
                </div>
                <h3 className="text-lg font-bold mb-2">Madva</h3>
                <p className="text-sm text-gray-600">2025</p>
              </div>
            </div>

            {/* Achievement Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-orange-100 flex items-center justify-center">
                <Award className="h-20 w-20 text-orange-500" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full">
                OVERALL CHAMPIONSHIP
                </div>
                <h3 className="text-lg font-bold mb-2">St.Joseph</h3>
                <p className="text-sm text-gray-600">2025</p>
              </div>
            </div>

            {/* Achievement Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-orange-100 flex items-center justify-center">
                <Award className="h-20 w-20 text-orange-500" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full">
                OVERALL CHAMPIONSHIP
                </div>
                <h3 className="text-lg font-bold mb-2">Sri Devi</h3>
                <p className="text-sm text-gray-600">2025</p>
              </div>
            </div>
          </div>
          

          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              <Link href="/about">View All Achievements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-orange-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold">Ready to Showcase Your Talent?</h2>
            <p className="max-w-[700px] text-orange-100">
              Join us and be a part of the cultural community at AJIET
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-4">
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
