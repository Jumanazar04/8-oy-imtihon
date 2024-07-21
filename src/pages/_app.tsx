import GeneralLayout from "@/components/GeneralLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
  );
}
