"use client"

import Navigation from "@/components/Navigation"

export default function CrewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      <main className="relative z-10 pt-12 md:pt-20 pb-12 md:pb-32">
        {/* GGOOGLE 섹션 */}
        <section id="google" className="py-8 md:py-16 relative" aria-labelledby="google-heading">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-6 md:mb-12 text-center">
              <h2
                id="google-heading"
                className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  GGOOGLE
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            <div className="py-6 md:py-12">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                {/* 인용구 */}
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed">
                    "우리의 경험이 동아리의 역사가 되다"
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
                      꾸글은 <strong className="text-gray-900 dark:text-white">"꾸준히 글쓰다"</strong>라는 의미를 담아, 우리만의 실전 경험과 성장의 과정을 기록하고 체계화하는 인하벤처클럽의 지식 아카이빙 프로젝트 소모임입니다
                    </p>
                    <p>
                      전 세계의 정보를 체계화하여 가치를 창출하는 구글(Google)처럼, 우리가 겪은 방대한 경험을 '우리들만의 백과사전'으로 만들어 누구나 활용할 수 있는 자산으로 구축하는 것을 목표로 합니다.
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
                        <strong className="text-gray-900 dark:text-white">공유</strong>
                        <p className="mt-1">자신의 경험을 자신만의 관점으로 해석하고 공유하며 진짜 내 것으로 만듭니다.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#dc143c] font-bold mt-1">-</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">자산의 축적</strong>
                        <p className="mt-1">우리가 발로 뛴 모든 기록을 지식 아카이브로 구축합니다.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#dc143c] font-bold mt-1">-</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">성장의 선순환</strong>
                        <p className="mt-1">우리가 남긴 기록은 나에게는 독보적인 포트폴리오가 되고, 후배들에게는 시행착오를 줄여주는 실무 가이드북(족보)이 되는 인하벤처클럽만의 전통을 세웁니다.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* 마무리 문구 */}
                <div className="space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                  <p>
                    단순한 기록을 넘어, 우리가 겪는 실전 경험과 치열한 고민을 동아리만의 '인사이트 백과사전'으로 엮어낼 여러분을 기다립니다.
                  </p>
                  <p className="text-center font-medium text-gray-900 dark:text-white">
                    당신의 오늘이 인하벤처클럽의 내일이 됩니다.
                  </p>
                  <p className="text-center font-medium text-gray-900 dark:text-white">
                    지금 꾸글에서 기록을 시작하세요!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEFORE 8 섹션 */}
        <section
          id="before-8"
          className="py-8 md:py-16 relative"
          aria-labelledby="before-8-heading"
        >
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-6 md:mb-12 text-center">
              <h2
                id="before-8-heading"
                className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  BEFORE 8
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            <div className="py-6 md:py-12">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                {/* 모임 소개 */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-[#dc143c]">•</span>
                    모임 소개
                  </h3>
                  <div className="pl-6 md:pl-8 space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                    <p>
                      Before 8은 <strong className="text-gray-900 dark:text-white">8시 이전, 하루의 주도권을 잡다</strong>라는 의미를 담아, 세상이 본격적으로 시작되기 전인 아침 시간을 완벽하게 장악하는 인하벤처클럽의 자기계발 소모임입니다.
                    </p>
                    <p>
                      성공하는 스타트업이 치열한 실행력으로 시장을 선점하듯, 우리는 남들이 하루를 시작하기도 전인 8시 이전에 운동, 학습, 마인드셋을 시작하며 승리한 상태로 세상에 나가는 것을 목표로 합니다. 막연한 꿈을 꾸는 몽상가를 넘어, 매일 아침 자신을 주도적으로 성장시키는 탁월한 실행가가 될 여러분을 기다립니다.
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
                        <strong className="text-gray-900 dark:text-white">주도권 선점</strong>
                        <p className="mt-1">매일 아침(06:00~06:30), 남들보다 앞선 기상 인증을 통해 하루의 주도권을 먼저 가져옵니다. 이 작은 승리의 경험들이 모여 누구도 따라올 수 없는 압도적인 격차를 만듭니다.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#dc143c] font-bold mt-1">-</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">성장 기반 다지기</strong>
                        <p className="mt-1">등교 전(08:00~09:00)까지 나를 다듬는 아침 활동을 인증합니다. 독서, 운동, 명상 등 외부의 개입 없이 오직 나의 의지로 채워지는 이 시간은, 여러분을 가장 날카로운 무기로 성장시킵니다.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* 마무리 문구 */}
                <div className="space-y-3 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                  <p>
                    단순한 기상 인증을 넘어, 무너진 생활 패턴을 리셋하고 인하벤처클럽을 이끌어갈 가장 단단한 실행 근육으로 엮어낼 여러분을 기다립니다.
                  </p>
                  <p className="text-center font-medium text-gray-900 dark:text-white">
                    당신의 완벽한 하루는, 알람을 끄는 그 순간 시작됩니다.
                  </p>
                  <p className="text-center font-medium text-gray-900 dark:text-white">
                    지금, Before 8에서 하루의 방향키를 잡으세요!
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
