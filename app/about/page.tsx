"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AboutPage() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(true)

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

            {/* Navigation Menu */}
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
                    onClick={() => {
                      const element = document.getElementById('about')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
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
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16 md:pt-20 pb-24 md:pb-32">
        {/* About Us Section with Introduction */}
        <section id="about" className="py-24 md:py-32 relative" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-16 md:mb-20 text-center">
              <h2
                id="about-heading"
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  INTRODUCTION
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            {/* Introduction */}
            <div className="mb-16 md:mb-20">
              
              <div className="relative -ml-4 lg:-ml-8">
                {/* Floating Image - Background Style */}
                <div 
                  className="hidden lg:block float-right ml-8 mb-4 relative z-0 w-[280px] h-[280px]"
                  style={{ 
                    shapeOutside: 'circle(50% at 50% 50%)',
                    shapeMargin: '1rem'
                  }}
                >
                  <Image
                    src="/images/traditional-logo-black.svg"
                    alt="IVC Traditional Logo"
                    width={600}
                    height={605}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden mb-8 flex justify-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src="/images/traditional-logo-black.svg"
                      alt="IVC Traditional Logo"
                      width={600}
                      height={605}
                      className="w-full h-full object-contain opacity-80"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Text Content - Flows around image */}
                <div className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white/80 leading-relaxed break-keep">
                  <p className="mb-6">
                    인하벤처클럽(IVC, Inha Venture Club)은<br />
                    1997년, 대한민국 1세대 벤처기업 비트컴퓨터 창업자 조현정 회장에 의해 설립된<br />
                    인하대학교 최초의 창업 동아리입니다.
                  </p>
                  <p className="mb-6">
                    IVC는 단순한 창업 동아리를 넘어,<br />
                    인하대학교 창업지원단에 소속된 직할 조직으로서 운영되고 있으며<br />
                    현재는 인하대학교 내 최대 규모의 창업 커뮤니티로 자리매김하고 있습니다.
                  </p>
                  <p className="mb-6">
                    설립 이후 IVC는 아이디어 단계에 머무르지 않고,<br />
                    문제 정의–해결–실행까지 이어지는 실전 중심의 창업 활동을 지향해 왔습니다.<br />
                    이를 위해 정기 세미나, 프로젝트 기반 활동, 기업 연계 프로그램,<br />
                    선·후배 간 네트워킹을 통해 실제 창업 경험과 역량을 축적할 수 있는 환경을 만들어가고 있습니다.
                  </p>
                  <p>
                    IVC는 &apos;학생 창업가가 성장할 수 있는 가장 현실적인 커뮤니티&apos;를 목표로,<br />
                    앞으로도 인하대학교 창업 생태계의 중심에서<br />
                    도전과 실행을 이어가는 창업 인재들을 연결하고 지원해 나가고자 합니다.
                  </p>
                </div>
                
                {/* Clear float */}
                <div className="clear-both"></div>
              </div>
            </div>

            {/* Alumni Company Sales Image */}
            <div className="mt-16 md:mt-20">
              <div className="w-full max-w-6xl mx-auto">
                <Image
                  src="/images/alumni-sales-2024.png"
                  alt="2024 Alumni 기업 매출 - 총 163,364,225,842 원"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-contain rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}