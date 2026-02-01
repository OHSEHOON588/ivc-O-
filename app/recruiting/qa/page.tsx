"use client"

import Navigation from "@/components/Navigation"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string | string[]
}

const faqData: FAQItem[] = [
  {
    id: "01",
    question: "인하벤처클럽은 어떤 동아리인가요?",
    answer: "인하벤처클럽은 창업지원단 소속 직할 조직기구로, 1997년 설립된 역사 깊은 창업 클럽으로서 설립자이신 비트컴퓨터 조현정 회장님의 지속적인 후원을 받고 있습니다. 또한, 인하벤처클럽은 창업에 뜻을 가진 다양한 인재들이 모이는 인하대학교 최대 창업 커뮤니티입니다."
  },
  {
    id: "02",
    question: "인하벤처클럽에 합격하면 어떤 활동을 하게 되나요?",
    answer: "합격 후 한 학기 동안 팀 프로젝트를 중심으로 창업·비즈니스 활동에 참여하게 됩니다. 초반에는 네트워킹과 기초 세션을 통해 팀을 구성하고, 이후 아이디어 기획부터 실행까지 직접 경험합니다. 중간 성과 공유와 피드백을 거쳐 프로젝트를 발전시키며, 외부 연계 프로그램과 네트워킹 행사에도 참여할 기회가 주어집니다. 학기 말에는 최종 결과 발표를 통해 한 학기 활동을 정리합니다."
  },
  {
    id: "03",
    question: "정기적으로 참여해야 하는 활동이 있나요?",
    answer: "정기 총회는 목요일 19:00~21:00에 진행됩니다. 부득이한 사정이 없는 한, 해당 시간에는 필수로 참석해야 하며 이 외에도 팀별 활동 및 프로젝트는 팀 내 일정에 따라 자율적으로 진행됩니다."
  },
  {
    id: "04",
    question: "인하벤처클럽을 통해 무엇을 얻어갈 수 있나요?",
    answer: "인하벤처클럽에서는 한 학기 동안 직접 기획하고 실행하는 팀 프로젝트를 통해 실전 경험을 쌓을 수 있습니다. 아이디어를 구체화하는 과정에서 기획력, 문제 해결 능력, 협업 능력을 자연스럽게 기르게 됩니다. 또한 다양한 전공의 사람들과 함께 활동하며 네트워크를 넓힐 수 있고, 창업과 비즈니스에 대한 시야를 키울 수 있습니다. 활동 결과물은 포트폴리오로도 활용할 수 있습니다."
  },
  {
    id: "05",
    question: "창업, 마케팅, 투자 등의 경험이 전혀 없어도 가능한가요?",
    answer: "네 가능합니다. 인하벤처클럽은 경험의 유무보다 활동에 임하는 태도와 열정, 그리고 책임감을 더 중요하게 생각합니다. 동아리 활동을 통해 기초부터 함께 배우고, 직접 경험하며 역량을 쌓아갈 수 있습니다."
  },
  {
    id: "06",
    question: "활동 기간은 어떻게 되나요?",
    answer: "인하벤처클럽의 활동 기간은 한 학기 단위로 진행됩니다."
  },
  {
    id: "07",
    question: "동아리 분위기는 어떤가요?",
    answer: "창업이라는 공통된 관심사를 바탕으로, 각자 다양한 배경과 관심사를 가진 사람들이 모여 아이디어와 경험, 관점을 자유롭고 편하게 나누는 분위기입니다."
  },
  {
    id: "08",
    question: "인하벤처클럽 지원 자격은 어떻게 되나요?",
    answer: "창업 및 스타트업에 열정과 관심이 있으며 정기 총회 일정에 동아리 활동이 가능한 사람, 창업에 대한 열망이 뛰어나고 경험을 통해 성장하는 사람, 활발하게 클럽 활동을 하며 본인의 역량과 잠재력을 폭발적으로 키우고 싶은 사람, 창업에 관심이 있는 다양한 사람들을 만나 함께 성장하고 싶은 사람, 정해진 활동 기간 동안 책임감을 가지고 끝까지 참여할 수 있는 사람이 지원 자격입니다."
  },
  {
    id: "09",
    question: "인하벤처클럽에 들어가기 위해서는 어떤 준비를 해야 하나요?",
    answer: "8번의 지원 자격을 충족하신 분이라면 전공, 학년, 나이 등에 상관 없이 누구나 지원하실 수 있습니다. 모집 기간 내 구글폼을 통해 지원서를 제출해 주시면, 서류 심사를 거쳐 합격자에 한해 면접을 진행할 예정입니다."
  }
]

export default function QAPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      <main className="relative z-10 pt-12 md:pt-20 pb-12 md:pb-32">
        <section id="qa" className="py-8 md:py-16 relative" aria-labelledby="qa-heading">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-6 md:mb-12 text-center">
              <h2 id="qa-heading" className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  Q&A
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((item) => {
                const isOpen = openItems.includes(item.id)
                return (
                  <div
                    key={item.id}
                    className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between text-left gap-4"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-[#dc143c] font-bold text-lg md:text-xl flex-shrink-0">
                          {item.id}.
                        </span>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-relaxed">
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-white/70" />
                        ) : (
                          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-white/70" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 md:px-8 pb-4 md:pb-6 pl-14 md:pl-16">
                        {Array.isArray(item.answer) ? (
                          <ul className="space-y-2 text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                            {item.answer.map((line, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="text-[#dc143c] font-bold mt-1 flex-shrink-0">-</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-gray-300 leading-[1.8] sm:leading-relaxed md:leading-relaxed">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
