import Router from "next/router";

import "styles/reset.css";
import "styles/globals.scss";

import { GA_TRACKING_ID, pageview } from "../lib/gtag";

if (GA_TRACKING_ID) {
  Router.events.on("routeChangeComplete", (url) => pageview(url));
}

Router.events.on("routeChangeStart", loadStart);
Router.events.on("routeChangeComplete", loadDone);
Router.events.on("routeChangeError", loadDone);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

function loadStart() {
  document.getElementById("loadbar").className = "start";
}
function loadDone() {
  document.getElementById("loadbar").className = "done";
}
