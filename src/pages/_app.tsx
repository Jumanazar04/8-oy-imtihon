import GeneralLayout from "@/components/GeneralLayout";
import store from "@/Redux Toolkit/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeneralLayout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GeneralLayout>
  );
}
