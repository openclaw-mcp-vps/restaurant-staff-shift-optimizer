import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShiftOpt – Restaurant Staff Shift Optimizer",
  description: "Optimize restaurant staffing based on sales patterns. Reduce labor costs with AI-powered shift scheduling."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="61b7adec-0447-4e08-8444-9214ae19a654"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
