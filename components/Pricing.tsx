import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "스타터",
    price: "₩29,000",
    description: "소규모 팀을 위한 기본 기능",
    features: [
      "5명의 팀원",
      "기본 분석 기능",
      "10GB 스토리지",
      "이메일 지원",
      "기본 API 접근",
    ],
  },
  {
    name: "프로",
    price: "₩89,000",
    description: "성장하는 기업을 위한 프로페셔널 기능",
    features: [
      "무제한 팀원",
      "고급 분석 기능",
      "100GB 스토리지",
      "24/7 우선 지원",
      "고급 API 접근",
      "맞춤형 보고서",
      "SSO 통합",
    ],
    popular: true,
  },
  {
    name: "엔터프라이즈",
    price: "문의",
    description: "대규모 조직을 위한 맞춤형 솔루션",
    features: [
      "무제한 팀원",
      "맞춤형 분석 기능",
      "무제한 스토리지",
      "전담 지원 매니저",
      "맞춤형 API 개발",
      "온프레미스 지원",
      "SLA 보장",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            합리적인 가격으로 시작하세요
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            비즈니스 규모에 맞는 최적의 요금제를 선택하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    인기
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "문의" && <span className="text-gray-600">/월</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.price === "문의" ? "문의하기" : "시작하기"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 