// src/app/components/CulturalCommittee.tsx
export default function CulturalCommittee() {
    return (
      <section className="bg-yellow-50 py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/cultural-bg.jpeg"
              alt="Cultural Celebration"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-orange-700 mb-4">Cultural Committee</h2>
            <p className="text-lg text-gray-700">
              Our Cultural Committee celebrates the vibrant heritage of our country. We host cultural
              fests, performances, and engaging activities that bring students together and keep traditions alive.
            </p>
          </div>
        </div>
      </section>
    );
  }
  