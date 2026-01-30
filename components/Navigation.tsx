"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Navigation() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10" role="navigation" aria-label="Main navigation">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-12 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src="/images/ivc-logo.svg" alt="IVC Logo" className="h-6 md:h-10 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation Menu - 중앙 정렬 */}
          <div className="hidden md:flex items-center gap-[18px] lg:gap-6 flex-1 justify-center">
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
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      router.push('/about')
                    }
                  }}
                >
                  INTRODUCTION
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  onClick={() => router.push('/about/leadership')}
                >
                  LEADERSHIP TEAM
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 whitespace-nowrap"
                  onClick={() => router.push('/about/promotional-video')}
                >
                  PROMOTIONAL VIDEO
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
                  className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 whitespace-nowrap"
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
              onClick={() => router.push("/program")}
            >
              PROGRAM
            </Button>
            <Button
              variant="ghost"
              className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5"
              onClick={() => router.push("/crews")}
            >
              CREWS
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
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu - 계층 구조로 항상 펼쳐진 상태 */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-white/10 py-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-0">
              {/* ABOUT US 섹션 - 하위 메뉴 항상 펼쳐진 상태 */}
              <div className="flex flex-col">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[13px] font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-3 min-h-[44px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT US
                </Button>
                {/* 하위 메뉴 - 항상 표시, 들여쓰기, 글머리 기호 */}
                <div className="pl-8 mb-2 space-y-1">
                  <button
                    onClick={() => {
                      const element = document.getElementById('about')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        router.push('/about')
                      }
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-start text-[12px] text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-1.5 px-3 min-h-[40px] rounded-md transition-colors"
                  >
                    <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                    INTRODUCTION
                  </button>
                  <button
                    onClick={() => {
                      router.push('/about/leadership')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-start text-[12px] text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-1.5 px-3 min-h-[40px] rounded-md transition-colors"
                  >
                    <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                    LEADERSHIP TEAM
                  </button>
                  <button
                    onClick={() => {
                      router.push('/about/promotional-video')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-start text-[12px] text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-1.5 px-3 min-h-[40px] rounded-md transition-colors whitespace-nowrap"
                  >
                    <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                    PROMOTIONAL VIDEO
                  </button>
                </div>
              </div>

              {/* RECRUITING 섹션 */}
              <div className="flex flex-col border-t border-gray-200 dark:border-white/10 mt-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[13px] font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-3 min-h-[44px]"
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
                    className="w-full flex items-center justify-start text-[12px] text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-1.5 px-3 min-h-[40px] rounded-md transition-colors whitespace-nowrap"
                  >
                    <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                    APPLICATION PROCESS & TIMELINE
                  </button>
                  <button
                    onClick={() => {
                      router.push('/recruiting/qa')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-start text-[12px] text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-1.5 px-3 min-h-[40px] rounded-md transition-colors"
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
                  className="w-full justify-start text-[13px] font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-3 min-h-[44px]"
                  onClick={() => {
                    router.push('/alumni-ventures')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  ALUMNI VENTURES
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[13px] font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-3 min-h-[44px]"
                  onClick={() => {
                    router.push('/program')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  PROGRAM
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[13px] font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-3 min-h-[44px]"
                  onClick={() => {
                    router.push('/crews')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  CREWS
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[13px] font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-3 min-h-[44px]"
                  onClick={() => {
                    router.push('/media')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  MEDIA
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[13px] font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-3 min-h-[44px]"
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
  )
}
