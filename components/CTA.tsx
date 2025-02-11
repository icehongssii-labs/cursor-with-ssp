import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary-foreground">
          지금 바로 시작하세요
        </h2>
        <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          14일 무료 체험으로 우리의 솔루션을 직접 경험해보세요. 
          신용카드 정보가 필요하지 않으며, 설치 없이 바로 시작할 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="gap-2">
            무료로 시작하기
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            데모 요청하기
          </Button>
        </div>
      </div>
    </section>
  );
} 