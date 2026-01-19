"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ArrowLeft, Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"

export default function MediaDetailPage() {
  const router = useRouter()
  const params = useParams()
  const date = params.date as string
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  // 이미지 경로 생성 (1.jpg부터 최대 10개까지 확인)
  const imageUrls = []
  for (let i = 1; i <= 10; i++) {
    imageUrls.push(`/images/media/${date}/${i}.jpg`)
  }

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

            {/* Desktop Navigation Menu - 중앙 정렬 */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5 flex items-center gap-[3px]"
                  >
                    ABOUT US
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/about')}
                  >
                    INTRODUCTION
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
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
                    className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5 flex items-center gap-[3px]"
                  >
                    RECRUITING
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/recruiting/application-process')}
                  >
                    APPLICATION PROCESS & TIMELINE
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/recruiting/qa')}
                  >
                    Q&A
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5"
                onClick={() => router.push("/alumni-ventures")}
              >
                ALUMNI VENTURES
              </Button>
              <Button
                variant="ghost"
                className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5"
                onClick={() => router.push("/media")}
              >
                MEDIA
              </Button>
              <Button
                variant="ghost"
                className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5"
                onClick={() => router.push("/contact")}
              >
                CONTACT
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu - 계층 구조로 항상 펼쳐진 상태 */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-white/10 py-2">
              <div className="flex flex-col gap-0">
                {/* ABOUT US 섹션 - 하위 메뉴 항상 펼쳐진 상태 */}
                <div className="flex flex-col">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT US
                  </Button>
                  {/* 하위 메뉴 - 항상 표시, 들여쓰기, 글머리 기호 */}
                  <div className="pl-8 mb-2 space-y-1">
                    <button
                      onClick={() => {
                        router.push('/about')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      INTRODUCTION
                    </button>
                    <button
                      onClick={() => {
                        router.push('/about/leadership')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      LEADERSHIP TEAM
                    </button>
                  </div>
                </div>

                {/* RECRUITING 섹션 */}
                <div className="flex flex-col border-t border-gray-200 dark:border-white/10 mt-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    RECRUITING
                  </Button>
                  {/* 하위 메뉴 - 항상 표시, 들여쓰기, 글머리 기호 */}
                  <div className="pl-8 mb-2 space-y-1">
                    <button
                      onClick={() => {
                        router.push('/recruiting/application-process')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      APPLICATION PROCESS & TIMELINE
                    </button>
                    <button
                      onClick={() => {
                        router.push('/recruiting/qa')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      Q&A
                    </button>
                  </div>
                </div>

                {/* 기타 메뉴 */}
                <div className="flex flex-col border-t border-gray-200 dark:border-white/10 mt-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => {
                      router.push('/alumni-ventures')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    ALUMNI VENTURES
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => {
                      router.push('/media')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    MEDIA
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => {
                      router.push('/contact')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    CONTACT
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
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
                  <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
                    <Image
                      src={imageUrl}
                      alt={`${getTitle(date)} - 이미지 ${index + 1}`}
                      width={900}
                      height={600}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
                      className="w-full h-auto object-contain group-hover:opacity-95 transition-opacity duration-300"
                      loading="lazy"
                      quality={70}
                      priority={index === 0}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      onError={(e) => {
                        // 이미지 로드 실패 시 숨김
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        if (target.parentElement?.parentElement) {
                          target.parentElement.parentElement.style.display = 'none'
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
