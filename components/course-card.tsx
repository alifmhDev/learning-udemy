"use client"

interface Course {
  id: string
  title: string
  description: string
  imageUrl: string
  shortUrl: string
}

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-card border border-card rounded-xl overflow-hidden card-shadow hover:shadow-[0_8px_24px_var(--color-shadow)] hover:-translate-y-1 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
        <img
          src={course.imageUrl || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = "/course-thumbnail.png"
          }}
        />
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex flex-col h-full">
        <h3 className="text-base sm:text-lg font-bold mb-2 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
          {course.title}
        </h3>

        <p className="text-secondary text-sm sm:text-base mb-4 line-clamp-3 flex-grow">{course.description}</p>

        {/* Button */}
        <button onClick={() => window.open(course.shortUrl, "_blank")} className="w-full btn-primary-sm font-semibold">
          Lihat Kursus
        </button>
      </div>
    </div>
  )
}
