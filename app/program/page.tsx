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

                {/* 구분선 */}
                <div className="border-t border-gray-200 dark:border-white/10 my-6 md:my-8"></div>

                {/* Track 2 섹션 */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    Track 2 - SL (Sincere Lab)
                  </h3>
                  
                  {/* 인용구 */}
                  <blockquote className="text-center">
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed">
                      창업에 진심인 자들의 진실된 연구소
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300 mt-3 italic leading-relaxed">
                      "우리가 진짜로 만들고 싶은 세상에 대해, 끝까지 이야기하는 곳."
                    </p>
                  </blockquote>

                  {/* 모임 소개 */}
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="text-[#dc143c]">•</span>
                      모임 소개
                    </h4>
                    <div className="pl-6 md:pl-8 space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                      <p>
                        SL(Sincere Lab)는 <strong className="text-gray-900 dark:text-white">'창업에 진심인 자들'</strong>이 모여, 각자가 꿈꾸는 창업의 방향성과 삶의 목표를 끈질기게 파고드는 인하벤처클럽의 창업 방향성 연구 소모임입니다.
                      </p>
                      <p>
                        아이템보다 먼저 '나'와 '방향'을 설계하는 것을 중요하게 여기며, 시장 트렌드에 휩쓸리기보다 내가 왜, 무엇을, 어떻게 만들고 싶은지를 차분히 검증하는 것을 목표로 합니다.
                      </p>
                    </div>
                  </div>

                  {/* 주요 활동 */}
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="text-[#dc143c]">•</span>
                      주요 활동
                    </h4>
                    <ul className="pl-6 md:pl-8 space-y-3 md:space-y-4 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <div>
                          <strong className="text-gray-900 dark:text-white">방향 선정</strong>
                          <p className="mt-1">각자가 고민하는 창업 분야·문제의식을 정리하고, 본인이 지향하는 창업의 방향성을 명확한 한 문장으로 정의합니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <div>
                          <strong className="text-gray-900 dark:text-white">깊이 있는 대화</strong>
                          <p className="mt-1">소규모 라운드테이블 형식으로 서로의 방향성을 두고 질문하고 피드백하며, 아이디어가 아닌 '창업가로서의 기준과 철학'을 다집니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <div>
                          <strong className="text-gray-900 dark:text-white">관점 확장</strong>
                          <p className="mt-1">실패·우회 경험, 롤모델, 시장에 대한 시각 등을 공유하며, 서로의 시야를 넓히는 창업가 토론을 진행합니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <div>
                          <strong className="text-gray-900 dark:text-white">방향 재정렬</strong>
                          <p className="mt-1">일정 주기마다 자신의 방향성을 다시 점검하고, 실제 실행 계획(다음 학기/방학 중 할 일)으로 구체화합니다.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* 마무리 문구 */}
                  <div className="space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                    <p>
                      SL에서 다루는 것은 화려한 IR 자료나 스펙이 아니라, "나는 어떤 창업가로 살아가고 싶은가"에 대한 진지한 질문입니다.
                    </p>
                    <p className="text-center font-medium text-gray-900 dark:text-white">
                      지금 당장 창업을 하지 않아도 괜찮지만, 언젠가 반드시 진심으로 창업을 해보고자 하는 마음이 있다면, SL에서 당신의 방향을 함께 설계해 보십시오.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
