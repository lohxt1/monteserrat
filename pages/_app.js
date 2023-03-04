// import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as Fathom from "fathom-client";

const monteserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("QXSMHHMR", {
      includedDomains: ["montserrat.lohxt.space"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

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
