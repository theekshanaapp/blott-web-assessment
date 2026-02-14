import Image from "next/image";
import { memo } from "react";

const Logo = memo(function Logo() {
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="relative w-auto h-10 sm:h-12 tablet:h-[48.2px]"
        style={{
          aspectRatio: "200 / 48.2",
        }}
      >
        <Image
          src="/logo.png"
          alt="BLOTT - Latest News from the World of Finance"
          fill
          priority
          quality={90}
          className="object-contain"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 200px"
        />
      </div>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
