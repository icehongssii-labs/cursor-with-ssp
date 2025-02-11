import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "무료 체험 기간은 얼마인가요?",
    answer: "14일 동안 모든 기능을 무료로 체험해보실 수 있습니다. 신용카드 정보 없이도 가입이 가능합니다.",
  },
  {
    question: "요금제는 언제든지 변경할 수 있나요?",
    answer: "네, 언제든지 자유롭게 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 다음 결제 주기부터 적용됩니다.",
  },
  {
    question: "기술 지원은 어떻게 받을 수 있나요?",
    answer: "이메일, 실시간 채팅, 전화 등 다양한 채널을 통해 기술 지원을 제공하고 있습니다. 프로 플랜 이상의 고객은 24/7 우선 지원을 받으실 수 있습니다.",
  },
  {
    question: "데이터는 안전하게 보관되나요?",
    answer: "모든 데이터는 은행급 보안 시스템으로 암호화되어 저장됩니다. ISO 27001, GDPR 등 국제 보안 인증을 준수하고 있습니다.",
  },
  {
    question: "기업 규모가 커지면 어떻게 되나요?",
    answer: "우리의 시스템은 완벽한 확장성을 제공합니다. 엔터프라이즈 플랜을 통해 맞춤형 솔루션과 전담 지원을 받으실 수 있습니다.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            고객들이 자주 문의하시는 내용을 모았습니다
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 