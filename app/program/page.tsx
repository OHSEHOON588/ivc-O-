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

                  {/* 모임 소개 */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                      <p>
                        SL(Sincere Lab)는 창업에 진심인 자들이 모여, 각자가 꿈꾸는 창업의 방향성과 삶의 목표를 끈질기게 파고드는 인하벤처클럽의 창업 방향성 연구 소모임입니다. 아이템보다 먼저 '나'와 '방향'을 설계하는 것을 중요하게 여기며, 시장 트렌드에 휩쓸리기보다 내가 왜, 무엇을, 어떻게 만들고 싶은지를 차분히 검증하는 것을 목표로 합니다.
                      </p>
                    </div>
                  </div>

                  {/* 운영 방식 */}
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="text-[#dc143c]">•</span>
                      운영 방식
                    </h4>
                    <ul className="pl-6 md:pl-8 space-y-4 md:space-y-6 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <div>
                          <strong className="text-gray-900 dark:text-white">Self-Directed Inquiry</strong>
                          <p className="mt-1">매주 각자가 설정한 '내 창업의 핵심 질문'에 대해 답을 찾아가는 과정입니다. "내가 해결하고 싶은 문제는 무엇인가?", "내 창업의 지속 가능한 동력은 무엇인가?" 등 본질적 질문을 통해 창업 방향성을 명확히 합니다. 단순 아이템 발굴이 아닌, 창업가로서의 정체성과 철학을 확립하는 시간입니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <div>
                          <strong className="text-gray-900 dark:text-white">Deep Dialogue</strong>
                          <p className="mt-1">소수 인원으로 구성된 밀도 높은 대화 세션입니다. 각자의 창업 방향성, 가치관, 고민을 깊이 있게 공유하고 서로 질문하며 생각을 확장합니다. 표면적인 네트워킹이 아닌, 진정성 있는 피드백과 통찰을 주고받는 장입니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <div>
                          <strong className="text-gray-900 dark:text-white">Direction Mapping</strong>
                          <p className="mt-1">한 학기 동안의 탐구를 바탕으로 자신만의 '창업 방향성 맵'을 완성합니다. 내가 추구하는 가치, 해결하고 싶은 문제, 강점 및 역량, 실행 가능한 첫 단계를 시각화하여 정리합니다. 이는 향후 구체적인 사업 아이템 기획의 토대가 됩니다.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <div>
                          <strong className="text-gray-900 dark:text-white">Business Plan Completion</strong>
                          <p className="mt-1">SL의 모든 활동은 최종적으로 각자의 방향성이 반영된 사업계획서 1부를 완성하는 것을 목표로 합니다. 자기주도 탐구와 심층 대화에서 나온 인사이트를 바탕으로 문제 정의, 해결 방안, 시장·경쟁 분석, 수익 모델, 실행 계획, 팀 구성까지를 일관된 논리 구조로 문서화합니다. 완성된 사업계획서는 예비창업패키지, 교내·외 창업 경진대회, IR 피치덱 준비 등에 바로 활용 가능한 수준을 지향합니다.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* 프로그램 지원 사항 */}
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      프로그램 지원 사항 (SL 전용)
                    </h4>
                    <ul className="pl-6 md:pl-8 space-y-2 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <span>방향성·가치관 중심 사업계획서 작성 가이드 및 템플릿 제공</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <span>초안–피드백–수정의 단계별 사업계획서 작성 스터디 운영</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <span>예비창업패키지 등 주요 공고 형식(PSST 등)에 맞춘 항목별 코칭</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#dc143c] font-bold mt-1">-</span>
                        <span>완성된 사업계획서를 기반으로 한 IR 피치덱 구성 및 발표 방향 제안</span>
                      </li>
                    </ul>
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
