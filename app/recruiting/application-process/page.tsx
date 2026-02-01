"use client"

import Navigation from "@/components/Navigation"
import { Calendar, Users, FileText, MessageSquare, GraduationCap, MapPin, Presentation } from "lucide-react"

export default function ApplicationProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      <main className="relative z-10 pt-12 md:pt-20 pb-12 md:pb-32">
        <section
          id="application-process"
          className="py-8 md:py-32 relative"
          aria-labelledby="application-process-heading"
        >
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-8 md:mb-20 text-center px-2">
              <h2
                id="application-process-heading"
                className="text-xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  APPLICATION PROCESS & TIMELINE
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            {/* Hero Section */}
            <section className="py-8 md:py-16 relative">
              <div className="mb-8 md:mb-16 text-center">
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 leading-tight px-2">
                  <span className="text-gray-900 dark:text-white md:whitespace-nowrap">
                    IVC 30기 (2026년 1학기) 리크루팅 안내
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-white/80 leading-relaxed max-w-3xl mx-auto mb-6">
                  인하대학교 창업동아리 인하벤처클럽을 찾아주신 여러분 반갑습니다.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-white/70 leading-relaxed max-w-3xl mx-auto">
                  인하벤처클럽의 리크루팅은 <strong className="text-gray-900 dark:text-white">1차 서류전형과 2차 면접전형으로 구성됩니다.</strong>
                </p>
              </div>

              {/* Group Photo Placeholder */}
              <div className="mb-12 md:mb-20 text-center">
                <div className="w-full max-w-4xl mx-auto aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-300 dark:border-white/10">
                  <p className="text-gray-500 dark:text-white/50 text-sm md:text-base">
                    단체사진 (1월 30일 사진 찍고 업로드 예정)
                  </p>
                </div>
              </div>
            </section>

            {/* 모집 대상 */}
            <section className="py-4 md:py-6 relative">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-10 lg:p-12">
                <div className="flex items-start md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#dc143c]/10 to-[#dc143c]/20 dark:from-[#dc143c]/20 dark:to-[#dc143c]/30 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <Users className="w-6 h-6 md:w-7 md:h-7 text-[#dc143c]" />
                  </div>
                  <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    모집 대상
                  </h2>
                </div>
                <div className="pl-0 md:pl-20">
                  <p className="text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                    창업에 관심이 있으며, 방학 포함 한 학기 성실하게 활동할 수 있는 인하대학교 학생.
                  </p>
                  <p className="text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                    전공, 학년, 휴학 제한 없이 아이디어를 실제 실행까지 이어가고 싶은 학생을 환영합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 활동 일시 */}
            <section className="py-4 md:py-6 relative">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-10 lg:p-12">
                <div className="flex items-start md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#dc143c]/10 to-[#dc143c]/20 dark:from-[#dc143c]/20 dark:to-[#dc143c]/30 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <Calendar className="w-6 h-6 md:w-7 md:h-7 text-[#dc143c]" />
                  </div>
                  <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    활동 일시
                  </h2>
                </div>
                <div className="pl-0 md:pl-20 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[120px]">활동 기간:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">2026년 1학기 (2026. 03 ~ 2026. 08)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[120px]">정기 총회:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">매주 목요일 19:00~21:00</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[120px]">개강 총회:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">3/5(목, 1주차) 개강 총회 및 OT</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[120px]">팀빌딩:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">3/19(목, 3주차) 팀빌딩 및 팀 별 회의</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[120px]">비정기 활동:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">MT, 소모임, 주말과 방학을 이용한 각종 창업 활동 및 친목 활동</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[120px]">신입부원 회비:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">5만원</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 서류 지원 */}
            <section className="py-4 md:py-6 relative">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-10 lg:p-12">
                <div className="flex items-start md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#dc143c]/10 to-[#dc143c]/20 dark:from-[#dc143c]/20 dark:to-[#dc143c]/30 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <FileText className="w-6 h-6 md:w-7 md:h-7 text-[#dc143c]" />
                  </div>
                  <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    서류 지원
                  </h2>
                </div>
                <div className="pl-0 md:pl-20 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[160px]">서류 접수 일정:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">
                      2026년 2월 2일 월요일 ~ 2월 18일 수요일 <strong className="text-gray-900 dark:text-white">23:59까지</strong>
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[160px]">1차 서류 합격자 발표:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">2/20 금요일 18시 (개별 안내)</span>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed mt-6">
                    지정된 형식의 폼을 작성하여 지원서를 제출해 주세요.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-white/60 leading-relaxed">
                    개강 총회(OT), 팀빌딩 일정은 필수 참여입니다. 일정을 반드시 확인해주세요.
                  </p>
                </div>
              </div>
            </section>

            {/* 면접 및 합격자 발표 */}
            <section className="py-4 md:py-6 relative">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-10 lg:p-12">
                <div className="flex items-start md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#dc143c]/10 to-[#dc143c]/20 dark:from-[#dc143c]/20 dark:to-[#dc143c]/30 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <MessageSquare className="w-6 h-6 md:w-7 md:h-7 text-[#dc143c]" />
                  </div>
                  <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    면접 및 합격자 발표
                  </h2>
                </div>
                <div className="pl-0 md:pl-20 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[120px]">면접 일정:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">2월 23일 월요일 ~ 2월 26일 목요일</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white min-w-[120px]">합격자 발표:</span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-white/80">2월 27일 금요일 19시 전후 (개별 안내)</span>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                    서류 합격자에 한해 면접이 진행되며, 지원자의 활동 의지와 IVC와의 방향성을 중심으로 간단한 대화를 나눕니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 오리엔테이션 및 개강총회 */}
            <section className="py-4 md:py-6 relative">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-10 lg:p-12">
                <div className="flex items-start md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#dc143c]/10 to-[#dc143c]/20 dark:from-[#dc143c]/20 dark:to-[#dc143c]/30 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <Presentation className="w-6 h-6 md:w-7 md:h-7 text-[#dc143c]" />
                  </div>
                  <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    오리엔테이션 및 개강총회 <span className="text-sm md:text-lg text-gray-700 dark:text-white/80">(필수 참여)</span>
                  </h2>
                </div>
                <div className="pl-0 md:pl-20 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#dc143c] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        3월 5일 (목) 19시 60주년 기념관 106호
                      </p>
                      <p className="text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                        합격자를 대상으로 IVC의 한 학기 운영 방향과 활동 계획을 공유하는 공식 일정입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 팀빌딩 캠프 */}
            <section className="py-4 md:py-6 relative">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-10 lg:p-12">
                <div className="flex items-start md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#dc143c]/10 to-[#dc143c]/20 dark:from-[#dc143c]/20 dark:to-[#dc143c]/30 flex items-center justify-center border border-gray-200 dark:border-white/10">
                    <Users className="w-6 h-6 md:w-7 md:h-7 text-[#dc143c]" />
                  </div>
                  <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    팀빌딩 캠프 <span className="text-sm md:text-lg text-gray-700 dark:text-white/80">(필수 참여)</span>
                  </h2>
                </div>
                <div className="pl-0 md:pl-20 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#dc143c] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        3월 19일 (목) 19:00~21:00 60주년 기념관 B1 월천홀
                      </p>
                      <p className="text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                        IVC 활동의 시작을 함께 팀원을 구성하는 핵심 프로그램으로, 팀빌딩과 문제 해결 중심의 워크숍이 진행됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 모집 최종 완료 */}
            <section className="py-4 md:py-6 relative">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-10 lg:p-12">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    모집 최종 완료
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white/90 leading-relaxed mb-2">
                    인하벤처클럽(IVC)의 새로운 구성원이 된 것을 환영합니다.
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    이제 아이디어를 넘어, 실행으로 나아갈 시간입니다.
              </p>
            </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}
