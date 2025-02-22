import "../styles/globals.css";
import "../styles/Home.css";
import "../styles/Modal.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
