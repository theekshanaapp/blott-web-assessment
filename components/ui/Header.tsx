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
        <div style={{ lineHeight: "47px", minHeight: "47px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontFamily: '"Albra", var(--font-albra), "Lora", Georgia, serif',
              fontWeight: 300,
              letterSpacing: "-0.06em",
            }}
          >
            FROM
          </span>
          <span
            style={{
              backgroundColor: "currentColor",
              width: "80px",
              height: "1px",
              flexShrink: 0,
            }}
          />
          <span style={{ whiteSpace: "nowrap" }}>
            THE WORLD
            <sup
              className="inline-flex items-center justify-center align-super"
              style={{
                fontSize: "0.5em",
                lineHeight: "1",
                marginLeft: "0.15em",
                width: "1em",
                height: "1em",
              }}
              aria-label="Bitcoin"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: "block",
                }}
              >
                <circle cx="12" cy="12" r="11" fill="currentColor" />
                <path
                  d="M16.5 9.5C16.8 8.1 16.1 7.2 14.6 6.9L15.2 5L13.8 4.6L13.2 6.5C12.8 6.4 12.4 6.3 12 6.2L12.6 4.3L11.2 3.9L10.6 5.8C10.3 5.7 10 5.7 9.7 5.6L9.1 3.7L7.7 3.3L8.3 5.2C8 5.3 7.7 5.4 7.5 5.5L6.5 5.2L6.1 6.6L7 6.9C6.7 7.4 6.5 8 6.5 8.6C6.5 9.1 6.6 9.5 6.8 9.9L5.8 10.2L6.2 11.6L7.3 11.3C7.6 11.6 8 11.8 8.4 12L7.8 13.9L9.2 14.3L9.8 12.4C10.2 12.5 10.6 12.6 11 12.7L10.4 14.6L11.8 15L12.4 13.1C13.8 13.4 14.9 13.6 15.3 12.7C15.7 11.8 15.4 11.2 14.3 10.9C14.8 10.7 15.2 10.2 15 9.5H16.5ZM13.1 10.8C13.4 11.1 13.2 11.6 12.7 11.7L11.5 11.4C11.3 11.1 11.1 10.8 10.9 10.5L12.1 10.8C12.6 10.9 12.9 10.6 13.1 10.8ZM13.5 8.9C13.8 9.2 13.6 9.7 13.1 9.8L11.7 9.5C11.5 9.2 11.3 8.9 11.1 8.6L12.5 8.9C13 9 13.3 8.7 13.5 8.9Z"
                  fill="#000000"
                  transform="rotate(14 12 12)"
                />
              </svg>
            </sup>
          </span>
        </div>
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
          <span className="desktop-header-line whitespace-nowrap">THE WORLD</span>
          <sup
            className="inline-flex items-center justify-center align-super"
            style={{
              fontSize: "0.5em",
              lineHeight: "1",
              marginLeft: "0.15em",
              width: "1em",
              height: "1em",
            }}
            aria-label="Bitcoin"
          >
             &#174;
          </sup>
        </div>
      </h1>

    </header>
  );
});

Header.displayName = "Header";

export default Header;
