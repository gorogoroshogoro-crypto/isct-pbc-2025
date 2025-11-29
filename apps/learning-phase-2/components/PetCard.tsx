import { toHumanYears, getAgeCategory } from '../lib/petUtils'

export default function PetCard({ name, species, age, color, breed }: PetCardProps) {
  // Emoji logic
  let emoji = "🐾"
  if (species === "Dog") emoji = "🐕"
  else if (species === "Cat") emoji = "🐱"
  else if (species === "Bird") emoji = "🐦"
  else if (species === "Fish") emoji = "🐠"

  // Determine age category
  let ageCategory = ""
  let ageCategoryColor = ""

  if (age < 2) {
    ageCategory = "Baby"
    ageCategoryColor = "bg-green-100 text-green-800"
  } else if (age < 8) {
    ageCategory = "Adult"
    ageCategoryColor = "bg-blue-100 text-blue-800"
  } else {
    ageCategory = "Senior"
    ageCategoryColor = "bg-purple-100 text-purple-800"
  }

  return (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <span className="text-4xl mr-3">{emoji}</span>
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${ageCategoryColor}`}>
        {ageCategory}
      </span>
    </div>

    <div className="space-y-2">
      <p className="text-gray-700">
        <span className="font-semibold">Species:</span> {species}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Age:</span> {age} years old
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Color:</span> {color}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Breed:</span> {breed}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Age:</span> {age} years old ({toHumanYears(age, species)} in human years)
      </p>
      <p className="text-sm text-gray-600">
        Category: {ageCategory}
      </p>
    </div>

    <div className="mt-4 pt-4 border-t border-gray-200">
      <p className="text-sm text-gray-600 italic">
        {species === "Dog" ? "🦴 Loves playing fetch!" : null}
        {species === "Cat" ? "🐈 Enjoys napping in the sun!" : null}
        {species === "Bird" ? "🎵 Sings beautiful songs!" : null}
        {species === "Fish" ? "💧 Swims gracefully!" : null}
      </p>
    </div>
  </div>
  )
}