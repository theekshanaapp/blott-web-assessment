import { memo } from "react";

const Header = memo(function Header() {
  return (
    <header className="w-full">
      <h1
        className="tablet:hidden uppercase text-main-text-color font-normal text-left"
        style={{
          fontSize: "40px",
          lineHeight: "47px",
          letterSpacing: "0%",
          fontFamily: "var(--font-noto-serif), 'Noto Serif', serif",
          fontWeight: 400,
        }}
      >
        <div style={{ lineHeight: "47px", minHeight: "47px" }}>LATEST NEWS</div>
        <div style={{ lineHeight: "47px", minHeight: "47px" }}>FROM THE</div>
        <div style={{ lineHeight: "47px", minHeight: "47px" }}>WORLD</div>
        <div style={{ lineHeight: "47px", minHeight: "47px" }}>
          OF <span style={{ fontFamily: "var(--font-roboto-mono), 'Roboto Mono', monospace" }}>FINANCE</span>
        </div>
      </h1>

      <h1 className="hidden tablet:block text-70 xl:text-80 leading-[88%] uppercase text-main-text-color">
        <div
          className="font-helvetica-now font-normal desktop-header-line"
          style={{
            letterSpacing: "-0.01em",
          }}
        >
          LATEST NEWS
        </div>
        <div
          className="font-helvetica-now font-normal flex items-center gap-4 desktop-header-line"
          style={{
            letterSpacing: "-0.01em",
          }}
        >
          <span
            className="desktop-header-line"
            style={{
              fontFamily: '"Albra", var(--font-albra), "Lora", Georgia, serif',
              fontWeight: 300,
              fontSize: "80px",
              lineHeight: "88%",
              letterSpacing: "-0.06em",
              textTransform: "uppercase",
              fontFeatureSettings: '"liga" 1, "kern" 1',
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            FROM
          </span>
          <span
            className="bg-main-text-color flex-shrink-0"
            style={{
              width: "193px",
              height: "1px"
            }}
          />
          <span className="desktop-header-line">THE WORLD</span>
          <sup
            className="align-super"
            style={{
              fontSize: "0.6em",
              lineHeight: "0",
            }}
            aria-label="registered trademark"
          >
            ®
          </sup>
        </div>
      </h1>

    </header>
  );
});

Header.displayName = "Header";

export default Header;
