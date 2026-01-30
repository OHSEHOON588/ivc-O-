"use client"

import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-32">
        {/* Contact Section */}
        <section id="contact" className="py-8 md:py-32 relative" aria-labelledby="contact-heading">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-8 md:mb-20 text-center">
              <h2
                id="contact-heading"
                className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  CONTACT
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
              <p className="text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-white/70 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words max-w-3xl mx-auto">
                IVC에 연락이 필요하신 경우 다음을 통해 문의해주세요.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 md:space-y-10">
              {/* Location */}
              <div className="p-4 md:p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 md:gap-8 mb-4 md:mb-6">
                  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <MapPin className="w-5 h-5 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">위치</h3>
                    <p className="text-base md:text-lg text-gray-700 dark:text-white/70 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words">
                      인천광역시 미추홀구 인하로 100
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
                  <Image
                    src="/images/naver-map.png"
                    alt="인하대학교 위치 지도"
                    width={600}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="w-full h-auto"
                    loading="lazy"
                    quality={70}
                  />
                </div>
              </div>

              {/* President Contact */}
              <div className="flex items-start gap-4 md:gap-8 p-4 md:p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 flex items-center justify-center border border-gray-200 dark:border-white/10">
                  <Phone className="w-5 h-5 md:w-7 md:h-7 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">회장</h3>
                  <div className="text-base md:text-lg text-gray-700 dark:text-white/70 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words space-y-1">
                    <p>이름: 황두연</p>
                    <p>
                      전화번호:{" "}
                      <a href="tel:010-3346-0509" className="text-gray-900 dark:text-gray-900 hover:underline">
                        010-3346-0509
                      </a>
                    </p>
                    <p>
                      이메일:{" "}
                      <a
                        href="mailto:dooyeon3927@naver.com"
                        className="text-gray-900 dark:text-gray-900 hover:underline"
                      >
                        dooyeon3927@naver.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 md:gap-8 p-4 md:p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 dark:from-pink-500/20 dark:to-orange-500/20 flex items-center justify-center border border-gray-200 dark:border-white/10">
                  <Mail className="w-5 h-5 md:w-7 md:h-7 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">이메일</h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-white/70 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words">
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

