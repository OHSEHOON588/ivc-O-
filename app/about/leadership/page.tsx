"use client"

import Navigation from "@/components/Navigation"
import Image from "next/image"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-32">
        {/* Leadership Team Section */}
        <section id="leadership" className="py-8 md:py-32 relative" aria-labelledby="leadership-heading">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-8 md:mb-20 text-center">
              <h2
                id="leadership-heading"
                className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  LEADERSHIP TEAM
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            {/* Group Photo */}
            <div className="mb-12 md:mb-20 text-center">
              <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                <Image
                  src="/images/LEADERSHIP TEAM/LeaderShipTeam_group_photo.jpg"
                  alt="인하벤처클럽 IVC 리더십 팀 단체사진"
                  width={1200}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="w-full h-auto object-cover"
                  priority
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>

            {/* 회장 인사말 - 단체사진과 같은 너비로 제한 */}
            <div className="mb-12 md:mb-20 w-full max-w-4xl mx-auto">
              {/* 첫 번째 행: 사진(왼쪽) + 이름/직책(오른쪽) */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
                {/* 왼쪽: 회장 사진 */}
                <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/LEADERSHIP TEAM/dooyeon.jpg"
                      alt="황두연 회장"
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="w-full h-full object-cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* 오른쪽: 이름과 직책 */}
                <div className="flex items-start md:items-center ml-4 md:ml-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    황두연 (회장)
                  </h3>
                </div>
              </div>

              {/* 두 번째 행: 인사말 내용 (전체 너비) */}
              <div className="w-full">
                <div className="text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-white/80 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words space-y-4 md:space-y-4">
                  <p>
                    인하벤처클럽 홈페이지를 찾아주신 여러분, 반갑습니다.
                    <br />
                    인하벤처클럽 30기 회장을 맡고 있는 황두연입니다.
                  </p>
                  <p>
                    이곳을 방문해 주신 분들 중에는 창업이 막연하게 느껴지는 분도, 이미 아이디어를 가지고 도전을 준비하는 분도 계실 것이라 생각합니다. 저 역시 동아리에 들어오기 전까지는 창업이 나와는 조금 먼 이야기라고 느끼던 평범한 학생이었습니다. 하지만 인하벤처클럽에서 선배님들과 동료들을 만나며, 창업은 특별한 사람만이 하는 일이 아니라 함께 배우고 시도하며 성장하는 과정이라는 것을 깨닫게 되었습니다.
                  </p>
                  <p>
                    특히 선배님들께 받은 수많은 조언과 도움은 제 생각과 선택에 큰 영향을 주었습니다. 그 경험을 통해 저는 창업에서 가장 중요한 가치 중 하나가 &apos;기버(Giver)&apos;의 태도라고 믿게 되었습니다. 먼저 손을 내밀고, 자신의 경험을 나누며, 서로의 성장을 돕는 문화가 있을 때 비로소 진짜 공동체와 창업 생태계가 만들어진다고 생각합니다.
                  </p>
                  <p>
                    그래서 저는 회장으로서, 선배님들께 받았던 도움을 그대로 다음 기수의 동아리원들에게 전하고 싶습니다. 아직은 많이 부족하지만, 동아리원들이 더 많은 기회를 만나고, 더 멀리 도전할 수 있도록 돕는 사람이 되고자 합니다. 인하벤처클럽이 단순한 동아리를 넘어, 서로의 가능성을 끌어올리는 출발점이 되도록 노력하겠습니다.
                  </p>
                  <p>
                    인하벤처클럽은 아이디어의 크기나 경험의 유무보다, 도전하고자 하는 마음을 더 중요하게 생각합니다. 이곳에서 만난 사람들과의 협업, 실패와 성공의 경험, 그리고 서로를 돕는 문화 속에서 여러분만의 길을 찾게 되기를 바랍니다.
                  </p>
                  <p>
                    홈페이지를 찾아주신 여러분께 감사드리며, 인하벤처클럽에서 더 많은 가능성과 기회를 만나시길 바랍니다. 감사합니다.
                  </p>
                  <p className="mt-6 md:mt-8">
                    인하벤처클럽 30기 회장
                    <br />
                    황두연 드림
                  </p>
                </div>
              </div>
            </div>

            {/* 부회장 인사말 - 단체사진과 같은 너비로 제한 */}
            <div className="mb-12 md:mb-20 w-full max-w-4xl mx-auto">
              {/* 첫 번째 행: 이름/직책(왼쪽) + 사진(오른쪽) */}
              <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 mb-6 md:mb-8">
                {/* 오른쪽: 부회장 사진 */}
                <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/LEADERSHIP TEAM/seockyeong.jpg"
                      alt="신석영 부회장"
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="w-full h-full object-cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* 왼쪽: 이름과 직책 */}
                <div className="flex items-start md:items-center mr-4 md:mr-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    신석영 (부회장)
                  </h3>
                </div>
              </div>

              {/* 두 번째 행: 인사말 내용 (전체 너비) */}
              <div className="w-full">
                <div className="text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-white/80 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words space-y-4 md:space-y-4">
                  <p>
                    안녕하세요, 인하벤처클럽 30기 부원 여러분.
                    <br />
                    30기 부회장 신석영입니다.
                  </p>
                  <p>
                    각자의 희망과 열정을 가지고 인하벤처클럽에 합류해 주신
                    30기 활동부원 여러분을 만나 뵙게 되어 진심으로 반갑고 영광입니다.
                  </p>
                  <p>
                    창업이라는 단어가 아직은 막막하게 느껴지는 분들도 있을 것이고,
                    반대로 묵묵히 잘 해내고 있으면서도 더 넓은 시야와 자극 속에서
                    네트워킹과 액셀러레이팅을 경험하고 싶은 분들도 계실 것입니다.
                    혹은 같은 학교에서 좋은 사람들과의 만남과
                    의미 있는 시간을 기대하며 이 자리에 오셨을지도 모르겠습니다.
                  </p>
                  <p>
                    인하벤처클럽은 그 모든 기대를 담을 수 있는 동아리가 되고자 합니다.
                    특정 인원만 성장하는 곳이 아니라,
                    각자의 속도와 방향은 달라도 모두가 만족스러운 경험을 할 수 있는 공동체,
                    혼자가 아닌 팀으로서 함께 얻어가는 깨달음과 연대감,
                    그리고 공동체에 대한 소속감을 느낄 수 있는 동아리를 만들고 싶습니다.
                  </p>
                  <p>
                    형식적인 운영이 아닌, 실제로 도움이 되는 활동을 만들기 위해
                    두 발로 직접 뛰며 고민하겠습니다.
                    또한 부원 한 사람, 한 사람의 생각과 의사표현에 귀 기울이며
                    만족도 높은 동아리 생활을 만들어가겠습니다.
                  </p>
                  <p>
                    앞으로의 1년이 혼자 버티는 시간이 아닌,
                    서로 배우고 자극받으며 함께 성장하는 시간이 되기를 바랍니다.
                    실패와 시행착오마저도 자산이 될 수 있도록
                    30기 운영진이 그 과정을 옆에서 든든하게 뒷받침하겠습니다.
                  </p>
                  <p>
                    올 한 해, 인하벤처클럽에서 좋은 경험 많이 쌓아가시길 바랍니다.
                    감사합니다.
                  </p>
                  <p className="mt-6 md:mt-8">
                    인하벤처클럽 30기 부회장
                    <br />
                    신석영 드림
                  </p>
                </div>
              </div>
            </div>

            {/* 부회장 김진호 인사말 - 단체사진과 같은 너비로 제한 */}
            <div className="mb-12 md:mb-20 w-full max-w-4xl mx-auto">
              {/* 첫 번째 행: 사진(왼쪽) + 이름/직책(오른쪽) */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
                {/* 왼쪽: 부회장 사진 */}
                <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/LEADERSHIP TEAM/jinho.jpg"
                      alt="김진호 부회장"
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="w-full h-full object-cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* 오른쪽: 이름과 직책 */}
                <div className="flex items-start md:items-center ml-4 md:ml-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    김진호 (부회장)
                  </h3>
                </div>
              </div>

              {/* 두 번째 행: 인사말 내용 (전체 너비) */}
              <div className="w-full">
                <div className="text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-white/80 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words space-y-4 md:space-y-4">
                  <p>
                    안녕하세요, 인하벤처클럽 홈페이지를 찾아주신 여러분, 반갑습니다.
                    <br />
                    30기 부회장 김진호입니다.
                  </p>
                  <p>
                    이 글을 읽고 계신 여러분은 아마도 &apos;창업&apos;이라는 단어에 각기 다른 마음을 가지고 계실 거라 생각합니다. 어떤 분께는 설렘일 수도 있고, 어떤 분께는 아직은 낯설고 어려운 도전일 수도 있습니다. 저 역시 처음에는 창업이 거창하고 대단한 사람들만 하는 일처럼 느껴졌습니다. 하지만 인하벤처클럽에서 다양한 사람들을 만나며 생각이 바뀌었습니다. 창업은 혼자 잘해서 되는 일이 아니라, 함께 부딪히고 배우는 과정이라는 것을 이곳에서 처음 알게 되었습니다.
                  </p>
                  <p>
                    동아리 활동을 하며 느낀 가장 큰 배움은 &apos;환경의 힘&apos;이었습니다. 비슷한 고민을 하는 사람들과 같은 공간에 있다는 것만으로도 자연스럽게 시야가 넓어지고, 평소라면 시도하지 않았을 일에도 용기를 내게 됩니다. 누군가의 경험담이 나에게는 방향이 되고, 사소한 대화가 새로운 기회의 시작이 되기도 합니다. 저는 인하벤처클럽이 그런 변화의 출발점이 되는 공간이라고 생각합니다.
                  </p>
                  <p>
                    그래서 30기 부회장으로서의 목표도 분명합니다. 거창한 말보다, 실제로 도움이 되는 경험을 더 많이 만들고 싶습니다. 말로만 창업을 이야기하는 동아리가 아니라, 직접 해보고 느껴볼 수 있는 기회를 제공하는 곳. 아이디어 단계에 머물지 않고 한 걸음이라도 실행해볼 수 있도록 돕는 곳. 그리고 그 과정에서 혼자가 아니라 팀으로 움직일 수 있는 분위기를 만드는 것이 저의 역할이라고 생각합니다.
                  </p>
                  <p>
                    모든 사람이 같은 속도로 성장할 수는 없다고 생각합니다. 하지만 각자의 자리에서 분명히 한 단계는 나아갔다고 느낄 수 있는 1년이라면, 그 시간은 충분히 의미 있다고 믿습니다. 저는 여러분이 그런 경험을 할 수 있도록 뒤에서 묵묵히 기반을 다지는 사람이 되겠습니다. 또한 인하벤처클럽에 들어온 선택이 절대 후회로 남지 않도록, 책임감을 가지고 끝까지 최선을 다하겠습니다.
                  </p>
                  <p>
                    인하벤처클럽에서의 시간이 단순한 동아리 활동이 아니라, 앞으로의 선택에 영향을 주는 소중한 자산으로 남기를 바랍니다.
                    여러분의 도전을 진심으로 응원하겠습니다. 감사합니다.
                  </p>
                  <p className="mt-6 md:mt-8">
                    인하벤처클럽 30기 부회장
                    <br />
                    김진호 드림
                  </p>
                </div>
              </div>
            </div>

            {/* 운영팀장 박나림 - 단체사진과 같은 너비로 제한 */}
            <div className="mb-12 md:mb-20 w-full max-w-4xl mx-auto">
              {/* 이름/직책(왼쪽) + 사진(오른쪽) */}
              <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8">
                {/* 오른쪽: 운영팀장 사진 */}
                <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/LEADERSHIP TEAM/narim.jpg"
                      alt="박나림 운영팀장"
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="w-full h-full object-cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* 왼쪽: 이름과 직책 */}
                <div className="flex items-start md:items-center mr-4 md:mr-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    박나림 (운영팀장)
                  </h3>
                </div>
              </div>
            </div>

            {/* 총무 김민영 - 단체사진과 같은 너비로 제한 */}
            <div className="mb-12 md:mb-20 w-full max-w-4xl mx-auto">
              {/* 사진(왼쪽) + 이름/직책(오른쪽) */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 왼쪽: 총무 사진 */}
                <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/LEADERSHIP TEAM/minyoung.jpg"
                      alt="김민영 총무"
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="w-full h-full object-cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* 오른쪽: 이름과 직책 */}
                <div className="flex items-start md:items-center ml-4 md:ml-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    김민영 (총무)
                  </h3>
                </div>
              </div>
            </div>

            {/* 기획팀장 이채은 - 단체사진과 같은 너비로 제한 */}
            <div className="mb-12 md:mb-20 w-full max-w-4xl mx-auto">
              {/* 이름/직책(왼쪽) + 사진(오른쪽) */}
              <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8">
                {/* 오른쪽: 기획팀장 사진 */}
                <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/LEADERSHIP TEAM/chaeeun.jpg"
                      alt="이채은 기획팀장"
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="w-full h-full object-cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* 왼쪽: 이름과 직책 */}
                <div className="flex items-start md:items-center mr-4 md:mr-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    이채은 (기획팀장)
                  </h3>
                </div>
              </div>
            </div>

            {/* 교육팀장 최선우 - 단체사진과 같은 너비로 제한 */}
            <div className="mb-12 md:mb-20 w-full max-w-4xl mx-auto">
              {/* 사진(왼쪽) + 이름/직책(오른쪽) */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 왼쪽: 교육팀장 사진 */}
                <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/LEADERSHIP TEAM/sunwoo.jpg"
                      alt="최선우 교육팀장"
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="w-full h-full object-cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* 오른쪽: 이름과 직책 */}
                <div className="flex items-start md:items-center ml-4 md:ml-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    최선우 (교육팀장)
                  </h3>
                </div>
              </div>
            </div>

            {/* 기술팀장 오세훈 - 단체사진과 같은 너비로 제한 */}
            <div className="mb-12 md:mb-20 w-full max-w-4xl mx-auto">
              {/* 이름/직책(왼쪽) + 사진(오른쪽) */}
              <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8">
                {/* 오른쪽: 기술팀장 사진 */}
                <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/LEADERSHIP TEAM/sehoon.jpg"
                      alt="오세훈 기술팀장"
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="w-full h-full object-cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>

                {/* 왼쪽: 이름과 직책 */}
                <div className="flex items-start md:items-center mr-4 md:mr-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    오세훈 (기술팀장)
                  </h3>
                </div>
              </div>
            </div>

            {/* Group Photo 2 */}
            <div className="mb-12 md:mb-20 text-center">
              <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg">
                <Image
                  src="/images/LEADERSHIP TEAM/LeaderShipTeam_group_photo2.jpg"
                  alt="IVC Leadership Team 단체사진 2"
                  width={1200}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="w-full h-auto object-cover"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
