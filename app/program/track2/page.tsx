"use client"

import Navigation from "@/components/Navigation"

export default function Track2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      <main className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-32">
        <section id="track2" className="py-8 md:py-32 relative" aria-labelledby="track2-heading">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-8 md:mb-20 text-center">
              <h2
                id="track2-heading"
                className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  TRACK 2
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            <div className="py-6 md:py-12">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
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
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-[#dc143c]">•</span>
                    모임 소개
                  </h3>
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
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-[#dc143c]">•</span>
                    주요 활동
                  </h3>
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
        </section>
      </main>
    </div>
  )
}

