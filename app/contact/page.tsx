"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, MapPin, Phone, Mail, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function ContactPage() {
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
        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 relative" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="mb-16 md:mb-20 text-center">
              <h2
                id="contact-heading"
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  CONTACT
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white/70 leading-relaxed max-w-3xl mx-auto">
                IVC에 연락이 필요하신 경우 다음을 통해 문의해주세요.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-8 md:space-y-10">
              {/* Location */}
              <div className="p-6 md:p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-6 md:gap-8 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">위치</h3>
                    <p className="text-base md:text-lg text-gray-700 dark:text-white/70 leading-relaxed break-keep">
                      인천광역시 미추홀구 인하로 100
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
                  <Image
                    src="/images/naver-map.jpg"
                    alt="인하대학교 위치 지도"
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </div>

              {/* President Contact */}
              <div className="flex items-start gap-6 md:gap-8 p-6 md:p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 flex items-center justify-center border border-gray-200 dark:border-white/10">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">회장</h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-white/70 leading-relaxed break-keep">
                    이름: 황두연<br />
                    전화번호: <a href="tel:010-3346-0509" className="text-gray-900 dark:text-gray-900 hover:underline">010-3346-0509</a><br />
                    이메일: <a href="mailto:dooyeon3927@naver.com" className="text-gray-900 dark:text-gray-900 hover:underline">dooyeon3927@naver.com</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 md:gap-8 p-6 md:p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 dark:from-pink-500/20 dark:to-orange-500/20 flex items-center justify-center border border-gray-200 dark:border-white/10">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">이메일</h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-white/70 leading-relaxed break-keep">
                    <a href="mailto:inha.venture.club@gmail.com" className="text-gray-900 dark:text-gray-900 hover:underline">
                      inha.venture.club@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
