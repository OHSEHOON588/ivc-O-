"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ApplicationProcessPage() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe1eTaWQaWvbBSqIqmrAzpAxGccGhlYLE1pQqBnrmkIEkbYpA/viewform?usp=dialog"

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
                  className="w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
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
        {/* Application Process Section */}
        <section id="application-process" className="py-8 md:py-32 relative" aria-labelledby="application-process-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-8 md:mb-20 text-center">
              <h2
                id="application-process-heading"
                className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  APPLICATION PROCESS & TIMELINE
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            {/* Content Area - 나중에 작성할 영역 */}
            <div className="text-center py-12 md:py-32">
              <p className="text-base md:text-[15px] lg:text-[18px] text-gray-500 dark:text-white/50">
                내용은 추후 작성 예정입니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
