'use client';

import PetCard from '../components/PetCard'

type Pet = {
  name: string
  species: string
  age: number
  color: string
  breed: string
}

export default function Home() {
  const pets: Pet[] = [
    {
      name: "Pochi",
      species: "Dog",
      age: 3,
      color: "Brown",
      breed: "Golden Retriever",
    },
    {
      name: "Tama",
      species: "Cat",
      age: 5,
      color: "Orange",
      breed: "Persian",
    },
    {
      name: "Piyo",
      species: "Bird",
      age: 2,
      color: "Yellow",
      breed: "Canary",
    },
    {
      name: "Masuo",
      species: "Fish",
      age: 1,
      color: "Blue",
      breed: "Betta",
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🐾 Pet Management App 🐾
          </h1>
          <p className="text-xl text-gray-600">
            Managing {pets.length} wonderful pets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.name} {...pet} />
          ))}
        </div>
      </div>
    </main>
  )
}