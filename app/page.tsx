"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRight, Sparkles, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function LunchBoxLanding() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const scrollRef = useRef<NodeJS.Timeout | null>(null)
  const mouseRef = useRef<NodeJS.Timeout | null>(null)
  const [showMilestonesModal, setShowMilestonesModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Check system preference on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  // Handle scroll for morphing animation with debounce
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        clearTimeout(scrollRef.current)
      }

      scrollRef.current = setTimeout(() => {
        setScrollY(window.scrollY)
      }, 10) // Small debounce for smoother performance
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      if (scrollRef.current) clearTimeout(scrollRef.current)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Track mouse position for magnetic effects with debounce
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRef.current) {
        clearTimeout(mouseRef.current)
      }

      mouseRef.current = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }, 10) // Small debounce for smoother performance
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      if (mouseRef.current) clearTimeout(mouseRef.current)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Calculate morphing progress based on scroll - simplified
  const getShapeProgress = () => {
    if (typeof window === "undefined") return { borderRadius: "50%", rotation: "0deg" }

    const windowHeight = window.innerHeight
    const totalScrollHeight = document.documentElement.scrollHeight - windowHeight

    // Avoid division by zero
    if (totalScrollHeight <= 0) return { borderRadius: "50%", rotation: "0deg" }

    // First transition: circle to square (0% to 40% of scroll)
    const firstTransition = Math.min(scrollY / (totalScrollHeight * 0.4), 1)

    // Second transition: square back to circle (60% to 100% of scroll)
    const secondTransitionStart = totalScrollHeight * 0.6
    const secondTransition = Math.max(0, Math.min((scrollY - secondTransitionStart) / (totalScrollHeight * 0.4), 1))

    // Calculate border radius
    let borderRadius = "50%"
    if (secondTransition > 0) {
      // Morphing back to circle
      borderRadius = `${secondTransition * 50}%`
    } else {
      // Morphing to square
      borderRadius = `${(1 - firstTransition) * 50}%`
    }

    // Calculate rotation - simplified
    const rotation = `${firstTransition * 20 - secondTransition * 20}deg`

    return { borderRadius, rotation }
  }

  const { borderRadius, rotation } = getShapeProgress()

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe1eTaWQaWvbBSqIqmrAzpAxGccGhlYLE1pQqBnrmkIEkbYpA/viewform?usp=dialog"

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-500"
    >
      {/* Custom CSS for enhanced UX - simplified */}
      <style jsx global>{`
        ::selection {
          background: ${isDarkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(147, 51, 234, 0.2)"};
          color: ${isDarkMode ? "#ffffff" : "#1f2937"};
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? "rgba(15, 23, 42, 0.1)" : "rgba(243, 244, 246, 0.5)"};
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(147, 51, 234, 0.3)"};
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? "rgba(168, 85, 247, 0.5)" : "rgba(147, 51, 234, 0.5)"};
        }

        /* Breathing animation - simplified */
        @keyframes subtle-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        
        .subtle-breathe {
          animation: subtle-breathe 6s ease-in-out infinite;
          will-change: transform;
        }

        /* Hardware acceleration for performance */
        .hw-accelerate {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>

      {/* Artistic Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),rgba(0,0,0,0))]" />
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[5%] w-32 md:w-64 h-32 md:h-64 rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl subtle-breathe" />
        <div
          className="absolute top-[40%] right-[10%] w-40 md:w-80 h-40 md:h-80 rounded-full bg-gradient-to-r from-pink-500/5 to-orange-500/5 dark:from-pink-500/10 dark:to-orange-500/10 blur-3xl subtle-breathe"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[15%] left-[15%] w-36 md:w-72 h-36 md:h-72 rounded-full bg-gradient-to-r from-green-500/5 to-cyan-500/5 dark:from-green-500/10 dark:to-cyan-500/10 blur-3xl subtle-breathe"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Responsive Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10" role="navigation" aria-label="Main navigation">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5 flex items-center gap-[3px]"
                  >
                    PROGRAM
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-36 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/program/track1')}
                  >
                    TRACK 1
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/program/track2')}
                  >
                    TRACK 2
                  </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5 flex items-center gap-[3px]"
                    >
                      CREWS
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                  >
                    <DropdownMenuItem
                      className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                      onClick={() => router.push('/crews/google')}
                    >
                      GGOOGLE
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 whitespace-nowrap"
                      onClick={() => router.push('/crews/miracle-morning')}
                    >
                      MIRACLE MORNING
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PROGRAM
                  </Button>
                  {/* 하위 메뉴 - 항상 표시, 들여쓰기, 글머리 기호 */}
                  <div className="pl-8 mb-2 space-y-1">
                    <button
                      onClick={() => {
                        router.push('/program/track1')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      TRACK 1
                    </button>
                    <button
                      onClick={() => {
                        router.push('/program/track2')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      TRACK 2
                    </button>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CREWS
                  </Button>
                  {/* 하위 메뉴 - 항상 표시, 들여쓰기, 글머리 기호 */}
                  <div className="pl-8 mb-2 space-y-1">
                    <button
                      onClick={() => {
                        router.push('/crews/google')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      GGOOGLE
                    </button>
                    <button
                      onClick={() => {
                        router.push('/crews/miracle-morning')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      MIRACLE MORNING
                    </button>
                  </div>
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

        {/* Creative Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 relative pt-20 pb-12 md:pt-0 md:pb-0">
          {/* Morphing Circles/Squares - simplified with CSS variables */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] border border-gray-200 dark:border-white/5 transition-all duration-500 ease-out hw-accelerate"
            style={{
              borderRadius,
              transform: `translate(-50%, -50%) rotate(${rotation})`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[450px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] border border-gray-200 dark:border-white/10 transition-all duration-500 ease-out hw-accelerate"
            style={{
              borderRadius,
              transform: `translate(-50%, -50%) rotate(${rotation === "0deg" ? "0deg" : `-${rotation}`})`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] border border-gray-300 dark:border-white/20 transition-all duration-500 ease-out hw-accelerate"
            style={{
              borderRadius,
              transform: `translate(-50%, -50%) rotate(${rotation === "0deg" ? "0deg" : `${Number.parseFloat(rotation) * 0.5}deg`})`,
            }}
          />

          <div className="w-full max-w-screen-xl mx-auto text-center relative flex flex-col items-center px-4 md:px-8 lg:px-12">
            <Badge
              variant="outline"
              className="inline-flex mb-6 md:mb-12 text-xs md:text-sm font-light border-gray-300 dark:border-white/20 text-gray-600 dark:text-white/80 px-3 md:px-4 py-1.5 md:py-2 items-center"
            >
              <Sparkles className="w-3 h-3 mr-2" />
              창업? 더이상 어렵지 않아요
            </Badge>

            <h1 className="w-full text-3xl sm:text-4xl md:text-[7.5rem] lg:text-[9rem] font-bold leading-tight sm:leading-none tracking-tighter mb-4 sm:mb-6 md:mb-12 group cursor-default">
              <span className="block text-gray-900 dark:text-white group-hover:tracking-wide transition-all duration-500 mb-1">
                inha venture
              </span>
              <span className="block bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent group-hover:tracking-wide transition-all duration-500">
                club
              </span>
            </h1>

            <p className="w-full text-base sm:text-lg md:text-xl text-gray-700 dark:text-white/80 mb-6 sm:mb-8 md:mb-16 max-w-3xl mx-auto leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words font-light px-2 sm:px-4">
              꿈꾸는 자들이 현실을 바꾸는 곳, 인하대학교 유일 실전 창업 동아리 – 인하벤처클럽. 30년의 전통과 실행력으로, 우리는 &apos;아이디어&apos;를 &apos;가치&apos;로 바꿉니다.
            </p>

            <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] p-[1px] rounded-full group hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <Button
                className="w-full sm:w-auto rounded-full bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black/90 px-6 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl group flex items-center justify-center min-h-[44px]"
                onClick={() => window.open(googleFormUrl, "_blank")}
              >
                <img src="/images/ivc-logo.svg" alt="IVC Logo" className="h-5 sm:h-6 md:h-7 w-auto mr-2" />
                클럽 시작하기
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

          </div>
        </section>

        {/* Creative Call to Action */}
        <section
          className="min-h-screen flex flex-col items-center justify-center relative py-16 sm:py-24 md:py-32"
          aria-labelledby="cta-heading"
        >
          {/* Final morphed circles - back to original state */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[250px] sm:w-[300px] md:w-[500px] lg:w-[600px] h-[250px] sm:h-[300px] md:h-[500px] lg:h-[600px] rounded-full border border-gray-200 dark:border-white/10 subtle-breathe" />
            <div
              className="w-[350px] sm:w-[400px] md:w-[650px] lg:w-[800px] h-[350px] sm:h-[400px] md:h-[650px] lg:h-[800px] rounded-full border border-gray-100 dark:border-white/5 absolute subtle-breathe"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="w-[450px] sm:w-[500px] md:w-[800px] lg:w-[1000px] h-[450px] sm:h-[500px] md:h-[800px] lg:h-[1000px] rounded-full border border-gray-300 dark:border-white/3 absolute subtle-breathe"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="w-full max-w-screen-xl mx-auto text-center px-4 md:px-8 lg:px-12 relative z-10 flex flex-col items-center">
            <h2
              id="cta-heading"
              className="w-full text-2xl sm:text-3xl md:text-[52.5px] lg:text-[60px] font-bold mb-6 sm:mb-8 md:mb-16 leading-tight text-gray-900 dark:text-white"
            >
              Time to{" "}
              <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                Play
              </span>
              ?
            </h2>
            <p className="w-full text-base sm:text-lg md:text-[18px] lg:text-[22.5px] text-gray-700 dark:text-white/70 mb-8 sm:mb-12 md:mb-20 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words">
              고민은 당신의 성공을 늦출 뿐입니다. 지금, 시작하세요.
            </p>

            <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] p-[1px] rounded-full group hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <Button
                className="w-full sm:w-auto rounded-full bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black/90 px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-2xl group flex items-center justify-center min-h-[44px]"
                onClick={() => window.open(googleFormUrl, "_blank")}
              >
                <img src="/images/ivc-logo.svg" alt="IVC Logo" className="h-6 sm:h-7 md:h-8 w-auto mr-2 sm:mr-3" />
                클럽 지원하기
                <ArrowRight className="ml-2 sm:ml-2 md:ml-3 h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>

      </main>
      {/* Milestones Modal */}
      {showMilestonesModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowMilestonesModal(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setShowMilestonesModal(false)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2tt_milestone-9ZhAVtdY78eNqjII7jzFNz8sPSaNIo.png"
              alt="2025 Q2 Milestones"
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      {/* Image Modal */}
      {showImageModal && selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
