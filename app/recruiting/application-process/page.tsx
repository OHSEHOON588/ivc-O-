"use client"

import Navigation from "@/components/Navigation"

export default function ApplicationProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      <main className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-32">
        <section
          id="application-process"
          className="py-8 md:py-32 relative"
          aria-labelledby="application-process-heading"
        >
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
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

            <div className="text-center py-12 md:py-32">
              <p className="text-base md:text-[15px] lg:text-[18px] text-gray-500 dark:text-white/50 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words">
                내용은 추후 작성 예정입니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

