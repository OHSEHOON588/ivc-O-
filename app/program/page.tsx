"use client"

import Navigation from "@/components/Navigation"

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      <main className="relative z-10 pt-12 md:pt-20 pb-12 md:pb-32">
        {/* PROGRAM 섹션 */}
        <section id="program" className="py-8 md:py-16 relative" aria-labelledby="program-heading">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-6 md:mb-12 text-center">
              <h2
                id="program-heading"
                className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  PROGRAM
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            <div className="py-6 md:py-12">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                {/* Track 1 섹션 */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    Track 1 - SSGP (Start-up Support Group Program) & Networking
                  </h3>
                  
                  <div className="space-y-4 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        창업지원단 프로그램과 네트워킹
                      </h4>
                      <p>
                        3개월간의 체계적인 창업 교육을 통해 '창업가 역량'을 키웁니다.
                      </p>
                    </div>
                    
                    <p>
                      Track 1은 13주 동안 매주 진행되는 실습형 창업 교육 프로그램으로, 창업의 기초부터 실전까지 단계별로 학습하며 최종적으로 팀 프로젝트 협업 매칭 및 마무리를 완성하는 것이 목표입니다.
                    </p>
                    
                    <p>
                      웰컴 데이부터 시작하여 관심사 매칭 데이, 네트워킹, 토크쇼, 중간고사 기간 등을 포함한 13주간의 여정을 통해 창업에 필요한 핵심 역량을 체득하게 됩니다.
                    </p>
                  </div>
                </div>

                {/* Lecture & Activity */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-[#dc143c]">•</span>
                    Lecture & Activity
                  </h4>
                  <div className="pl-6 md:pl-8 space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                    <p>
                      매주 특정 주제에 맞춰 전문가 강연, 워크숍, 네트워킹 등 다양한 형태의 활동이 진행됩니다. 개별 역량(기획/개발/디자인) 심화, 창업 관심사 공유, 성공 박물관·AC/VC의 시각·자생적 확보 전략 등 실무형 주제를 다룹니다.
                    </p>
                  </div>
                </div>

                {/* Networking */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-[#dc143c]">•</span>
                    Networking
                  </h4>
                  <div className="pl-6 md:pl-8 space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                    <p>
                      창업에 관심 있는 동료들과 자신의 아이디어를 공유하고 소통하는 시간입니다. 관심사 매칭 데이, 직군별 피날레 등을 통해 스피드 인사를 나누고 잠재적 파트너를 탐색하며, 팀 빌딩의 기초를 다집니다.
                    </p>
                  </div>
                </div>

                {/* Talk Show */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-[#dc143c]">•</span>
                    Talk Show
                  </h4>
                  <div className="pl-6 md:pl-8 space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                    <p>
                      '성공 박물관', 'AC/VC의 시각', '자생적 확보 전략' 등 실제 창업가와 투자자가 등장해 경험담을 공유하는 세션입니다. 어디 출신·설패 후 성공한 창업가 초청, 현직 투자 심사역 초청, 정부 지원금 너머 실전 생존 기술 등 리얼한 인사이트를 얻을 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* Best Step */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-[#dc143c]">•</span>
                    Best Step (Final Session)
                  </h4>
                  <div className="pl-6 md:pl-8 space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                    <p>
                      한 학기 활동 소감 공유와 방향 계획 논의, 방학 중 프로젝트 협업 매칭 및 마무리를 진행합니다. 그동안 쌓은 네트워크와 역량을 바탕으로 실제 창업 팀 구성 또는 차기 활동 계획을 수립하는 단계입니다.
                    </p>
                  </div>
                </div>

                {/* 구분선 */}
                <div className="border-t border-gray-200 dark:border-white/10 my-6 md:my-8"></div>

                {/* 프로그램 지원 사항 */}
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    프로그램 지원 사항
                  </h4>
                  <ul className="pl-6 md:pl-8 space-y-2 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-[#dc143c] font-bold mt-1">-</span>
                      <span>매주 체계적인 커리큘럼 제공 (웰컴 데이, 토크쇼, 네트워킹, 중간고사 기간 포함)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#dc143c] font-bold mt-1">-</span>
                      <span>전문가 강연 및 워크숍을 통한 실전 역량 강화</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#dc143c] font-bold mt-1">-</span>
                      <span>팀 빌딩 및 협업 매칭 기회 제공</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#dc143c] font-bold mt-1">-</span>
                      <span>창업 아이디어 공유 및 피드백 세션</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
