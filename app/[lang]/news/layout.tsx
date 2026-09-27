import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./news-typography.css";
import "./news-academic.css";

// Red Rose has a low Latin cap height. Use the site's original Roboto for
// news titles, with a Latin-only optical adjustment; CJK glyphs stay unchanged.
const newsTitleLatin = localFont({
  src: "../../fonts/Roboto-VariableFont_wdth,wght.ttf",
  weight: "400 900",
  style: "normal",
  variable: "--font-news-title-latin",
  display: "swap",
  adjustFontFallback: false,
  declarations: [
    { prop: "unicode-range", value: "U+0000-024F, U+1E00-1EFF" },
    { prop: "size-adjust", value: "116%" },
  ],
});

export default function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`news-pages news-layout-academic ${newsTitleLatin.variable}`}>
      {children}
    </div>
  );
}
