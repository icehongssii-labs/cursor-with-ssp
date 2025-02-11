import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "김민수",
    role: "마케팅 팀장",
    company: "테크스타트",
    image: "/avatars/avatar-1.png",
    content: "이 솔루션을 도입한 후 팀의 생산성이 50% 이상 향상되었습니다. 특히 자동화 기능이 탁월해서 반복적인 업무에 들이는 시간을 크게 줄일 수 있었죠.",
  },
  {
    name: "이지현",
    role: "CEO",
    company: "그로스업",
    image: "/avatars/avatar-2.png",
    content: "처음에는 새로운 시스템 도입을 망설였지만, 지금은 이 선택이 올해 가장 잘한 결정이었다고 생각합니다. 고객 지원팀의 친절하고 전문적인 응대도 인상적이었습니다.",
  },
  {
    name: "박준호",
    role: "개발 팀장",
    company: "넥스트레벨",
    image: "/avatars/avatar-3.png",
    content: "API의 안정성과 확장성이 매우 뛰어납니다. 개발팀이 새로운 기능을 구현하는 데 드는 시간이 크게 단축되었고, 문서화도 잘 되어 있어 매우 만족스럽습니다.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            고객들의 이야기
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            우리의 솔루션을 사용하는 고객들의 실제 후기를 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} @ {testimonial.company}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 