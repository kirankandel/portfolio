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
    <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary-dark">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-primary-light text-primary-dark rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href={link}
          className="text-primary-dark hover:text-primary font-medium"
        >
          View Project →
        </Link>
      </div>
    </div>
  )
}