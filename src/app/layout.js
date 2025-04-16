"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/animation.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children, bgColor = "red" }) {
  // useEffect(() => {
  //   // Disable right-click
  //   const disableContextMenu = (event) => event.preventDefault();
  //   document.addEventListener("contextmenu", disableContextMenu);

  //   // Disable DevTools shortcuts
  //   const disableDevTools = (event) => {
  //     if (
  //       event.ctrlKey &&
  //       (event.key === "u" ||
  //         event.key === "U" ||
  //         event.key === "i" ||
  //         event.key === "I") // Ctrl+U, Ctrl+I
  //     ) {
  //       event.preventDefault();
  //     }

  //     if (
  //       event.key === "F12" ||
  //       (event.ctrlKey && event.shiftKey && event.key === "I")
  //     ) {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener("keydown", disableDevTools);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableContextMenu);
  //     document.removeEventListener("keydown", disableDevTools);
  //   };
  // }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nklogo.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
