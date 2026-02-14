import { type ReactNode } from "react";
import { Container } from "@/components/primitives/layout";
import Logo from "@/components/ui/Logo";
import Header from "@/components/ui/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background-main text-main-text-color">
      <Container padding="responsive">
        <div className="pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-10 tablet:pt-20 tablet:pb-12 xl:pt-[44px] xl:pb-12">
          <Logo />
        </div>

        <div className="mb-10 sm:mb-12 md:mb-14 tablet:mb-16 xl:mb-16 xl:mt-[48.8px]">
          <Header />
        </div>

        <main>
          {children}
        </main>
      </Container>
    </div>
  );
}
