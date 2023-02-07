// import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";

const monteserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        html {
          font-family: ${monteserrat.style.fontFamily};
        }
      `}</style>
    </>
  );
}
