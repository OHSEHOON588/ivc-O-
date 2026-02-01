"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"

export default function MediaDetailPage() {
  const router = useRouter()
  const params = useParams()
  const date = params.date as string

  // 날짜에 따른 제목 매핑
  const getTitle = (date: string) => {
    const titleMap: { [key: string]: string } = {
      "2025-09-11": "2025-09-11 개강총회",
      "2025-09-20": "2025-09-20 팀빌딩",
      "2025-09-25": "2025-09-25 정기총회",
      "2025-10-02": "2025-10-02 정기총회",
      "2025-10-30": "2025-10-30 정기총회",
      "2025-11-06": "2025-11-06 정기총회",
      "2025-11-15": "2025-11-15 숭실대 네트워킹 행사",
      "2025-11-20": "2025-11-20 정기총회",
      "2025-11-27": "2025-11-27 정기총회",
    }
    return titleMap[date] || date
  }

  // 날짜별 실제 이미지 개수 매핑 (404 에러 방지)
  const getImageCount = (date: string): number => {
    const countMap: { [key: string]: number } = {
      "2025-09-11": 4,
      "2025-09-20": 4,
      "2025-09-25": 4,
      "2025-10-02": 4,
      "2025-10-30": 4, // 5.jpg부터 10.jpg까지는 없으므로 4개만
      "2025-11-06": 4,
      "2025-11-15": 4,
      "2025-11-20": 4,
      "2025-11-27": 4,
    }
    return countMap[date] || 4 // 기본값 4개
  }

  // 이미지 경로 생성 (실제 존재하는 이미지만)
  const imageCount = getImageCount(date)
  const imageUrls: string[] = []
  for (let i = 1; i <= imageCount; i++) {
    imageUrls.push(`/images/media/${date}/${i}.jpg`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      <main className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-32">
        <section className="py-8 md:py-16 lg:py-20">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => router.push("/media")}
              className="mb-6 md:mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span>목록으로 돌아가기</span>
            </Button>

            {/* Title */}
            <div className="mb-8 md:mb-12 text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {getTitle(date)}
              </h1>
            </div>

            {/* Images List - Vertical */}
            <div className="flex flex-col gap-4 md:gap-8 max-w-4xl mx-auto">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative w-full" style={{ aspectRatio: "auto" }}>
                    <Image
                      src={imageUrl}
                      alt={`${getTitle(date)} - 이미지 ${index + 1}`}
                      width={900}
                      height={600}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
                      className="w-full h-auto object-contain group-hover:opacity-95 transition-opacity duration-300"
                      priority
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        if (target.parentElement?.parentElement) {
                          target.parentElement.parentElement.style.display = "none"
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Back Button - Bottom */}
            <div className="mt-8 md:mt-12 flex justify-center">
              <Button
                variant="ghost"
                onClick={() => router.push("/media")}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                <span>목록으로 돌아가기</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

