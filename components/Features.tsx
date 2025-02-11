import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Zap, Shield, RefreshCcw } from "lucide-react";

const features = [
  {
    title: "실시간 분석",
    description: "비즈니스 데이터를 실시간으로 분석하고 인사이트를 도출하세요.",
    icon: BarChart3,
  },
  {
    title: "빠른 처리 속도",
    description: "최적화된 알고리즘으로 대용량 데이터도 빠르게 처리합니다.",
    icon: Zap,
  },
  {
    title: "강력한 보안",
    description: "엔터프라이즈급 보안으로 중요한 데이터를 안전하게 보호합니다.",
    icon: Shield,
  },
  {
    title: "자동 동기화",
    description: "모든 디바이스에서 실시간으로 데이터가 동기화됩니다.",
    icon: RefreshCcw,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            강력한 기능으로 비즈니스를 성장시키세요
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            필요한 모든 기능이 하나의 플랫폼에 통합되어 있습니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-none shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 