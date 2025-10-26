"use client"

import CourseCard from "./course-card"

interface Course {
  id: string
  title: string
  description: string
  imageUrl: string
  shortUrl: string
}

interface CourseGridProps {
  courses: Course[]
}

export default function CourseGrid({ courses }: CourseGridProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Jelajahi Kursus</h2>
          <p className="text-secondary text-lg">
            Pilih dari berbagai kursus berkualitas tinggi untuk meningkatkan keterampilan Anda
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-secondary text-lg">Tidak ada kursus yang tersedia saat ini</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
