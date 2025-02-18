import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export default function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href={link}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View Project →
        </Link>
      </div>
    </div>
  )
}