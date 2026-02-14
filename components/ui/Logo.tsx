import Image from "next/image";
import { memo } from "react";

const Logo = memo(function Logo() {
  return (
    <div className="flex items-center justify-center w-full">
      <Image
        src="/logo.png"
        alt="BLOTT - Latest News from the World of Finance"
        width={200}
        height={48.2}
        priority
        quality={90}
        className="h-10 sm:h-12 tablet:h-[48.2px] w-auto object-contain"
      />
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
