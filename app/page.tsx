"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import CourseGrid from "@/components/course-grid"
import Footer from "@/components/footer"

interface Course {
  id: string
  title: string
  description: string
  imageUrl: string
  shortUrl: string
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        "https://api.allorigins.win/get?url=" + encodeURIComponent("https://api-coursesqaqaarslan.up.railway.app/"),
      )
      const wrapped = await res.json()
      const data = JSON.parse(wrapped.contents)
      setCourses(data.courses || [])
      setError(null)
    } catch (err) {
      console.error("Error loading courses:", err)
      setError("Gagal memuat data kursus. Silakan coba lagi.")
      setCourses([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)] mb-4"></div>
              <p className="text-secondary">Memuat kursus...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <p className="text-red-500 mb-4">{error}</p>
              <button onClick={loadCourses} className="btn-primary">
                Coba Lagi
              </button>
            </div>
          </div>
        ) : (
          <CourseGrid courses={courses} />
        )}
      </main>
      <Footer />
    </div>
  )
}
