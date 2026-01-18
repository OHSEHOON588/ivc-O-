"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface MediaCard {
  id: number
  title: string
  author: string
  date: string
  imageUrl: string
}

export default function MediaPage() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const itemsPerPage = 6

  // 미디어 카드 데이터 - 날짜별 폴더 구조 사용
  // 최신 날짜부터 순서대로 (날짜 역순 정렬)
  const mediaCards: MediaCard[] = [
    {
      id: 1,
      title: "2025-09-11 개강총회",
      author: "",
      date: "2025-09-11",
      imageUrl: "/images/media/2025-09-11/1.jpg"
    },
    {
      id: 2,
      title: "2025-09-20 팀빌딩",
      author: "",
      date: "2025-09-20",
      imageUrl: "/images/media/2025-09-20/1.jpg"
    },
    {
      id: 3,
      title: "2025-09-25 정기총회",
      author: "",
      date: "2025-09-25",
      imageUrl: "/images/media/2025-09-25/1.jpg"
    },
    {
      id: 4,
      title: "2025-10-02 정기총회",
      author: "",
      date: "2025-10-02",
      imageUrl: "/images/media/2025-10-02/1.jpg"
    },
    {
      id: 5,
      title: "2025-10-30 정기총회",
      author: "",
      date: "2025-10-30",
      imageUrl: "/images/media/2025-10-30/1.jpg"
    },
    {
      id: 6,
      title: "2025-11-06 정기총회",
      author: "",
      date: "2025-11-06",
      imageUrl: "/images/media/2025-11-06/1.jpg"
    },
    {
      id: 7,
      title: "2025-11-15 숭실대 네트워킹 행사",
      author: "",
      date: "2025-11-15",
      imageUrl: "/images/media/2025-11-15/1.jpg"
    },
    {
      id: 8,
      title: "2025-11-20 정기총회",
      author: "",
      date: "2025-11-20",
      imageUrl: "/images/media/2025-11-20/1.jpg"
    },
    {
      id: 9,
      title: "2025-11-27 정기총회",
      author: "",
      date: "2025-11-27",
      imageUrl: "/images/media/2025-11-27/1.jpg"
    }
  ]

  // 날짜순 정렬 (최신 것부터)
  const sortedCards = [...mediaCards].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const totalPages = Math.ceil(sortedCards.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCards = sortedCards.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Responsive Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img src="/images/ivc-logo.svg" alt="IVC Logo" className="h-8 md:h-10 w-auto" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Navigation Menu - Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm lg:text-base font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-3 py-2 flex items-center gap-1"
                  >
                    ABOUT US
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/about')}
                  >
                    INTRODUCTION
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/about/leadership')}
                  >
                    LEADERSHIP TEAM
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm lg:text-base font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-3 py-2 flex items-center gap-1"
                  >
                    RECRUITING
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/recruiting/application-process')}
                  >
                    APPLICATION PROCESS & TIMELINE
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/recruiting/qa')}
                  >
                    Q&A
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                className="text-sm lg:text-base font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-3 py-2"
                onClick={() => router.push("/alumni-ventures")}
              >
                ALUMNI VENTURES
              </Button>
              <Button
                variant="ghost"
                className="text-sm lg:text-base font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-3 py-2"
                onClick={() => router.push("/media")}
              >
                MEDIA
              </Button>
              <Button
                variant="ghost"
                className="text-sm lg:text-base font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-3 py-2"
                onClick={() => router.push("/contact")}
              >
                CONTACT
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {/* About Us */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                    >
                      ABOUT US
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-[calc(100vw-2rem)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                  >
                    <DropdownMenuItem
                      className="cursor-pointer text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                      onClick={() => {
                        router.push('/about')
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      INTRODUCTION
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                      onClick={() => {
                        router.push('/about/leadership')
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      LEADERSHIP TEAM
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Recruiting */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                    >
                      RECRUITING
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-[calc(100vw-2rem)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                  >
                    <DropdownMenuItem
                      className="cursor-pointer text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                      onClick={() => {
                        router.push('/recruiting/application-process')
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      APPLICATION PROCESS & TIMELINE
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                      onClick={() => {
                        router.push('/recruiting/qa')
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Q&A
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Other Menu Items */}
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                  onClick={() => {
                    router.push("/alumni-ventures")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  ALUMNI VENTURES
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                  onClick={() => {
                    router.push("/media")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  MEDIA
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 min-h-[48px] py-3"
                  onClick={() => {
                    router.push("/contact")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  CONTACT
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16 md:pt-20 pb-24 md:pb-32">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            {/* Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {currentCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => router.push(`/media/${card.date}`)}
                  className="group cursor-pointer bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-white/10"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      onError={(e) => {
                        // 이미지 로드 실패 시 플레이스홀더 표시
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
                              <span class="text-gray-400 dark:text-gray-600 text-sm">이미지 준비 중</span>
                            </div>
                          `
                        }
                      }}
                    />
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 md:p-5">
                      <h3 className="text-white font-bold text-base md:text-lg lg:text-xl leading-tight line-clamp-2">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                aria-label="첫 페이지로"
              >
                <ChevronsLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                aria-label="이전 페이지"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2 md:gap-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="ghost"
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[40px] md:min-w-[48px] h-10 md:h-12 rounded-full transition-all duration-300 ${
                      currentPage === page
                        ? "bg-purple-600 dark:bg-purple-500 text-white font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                    aria-label={`페이지 ${page}`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="ghost"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                aria-label="다음 페이지"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                aria-label="마지막 페이지로"
              >
                <ChevronsRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
