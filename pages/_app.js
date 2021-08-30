import Router from "next/router";
import { useEffect } from 'react';

import "styles/reset.scss";
import "styles/globals.scss";

import { GA_TRACKING_ID, pageview } from "lib/gtag";

if (GA_TRACKING_ID) {
  Router.events.on("routeChangeComplete", (url) => pageview(url));
}

Router.events.on("routeChangeStart", loadStart);
Router.events.on("routeChangeComplete", loadDone);
Router.events.on("routeChangeError", loadDone);

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    let vh_bar = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh_bar', `${vh_bar}px`);

    vh();
    window.addEventListener('resize', vh);
  }, [])

  function vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

function loadStart() {
  document.getElementById("loadbar").className = "start";
}
function loadDone() {
  document.getElementById("loadbar").className = "done";
}
