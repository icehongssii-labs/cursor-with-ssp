import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";

const navigation = [
  { name: "기능", href: "#features" },
  { name: "가격", href: "#pricing" },
  { name: "고객사례", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-6 h-16" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
              SaaS Platform
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">메인 메뉴 열기</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button variant="outline">로그인</Button>
            <Button>무료로 시작하기</Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
} 