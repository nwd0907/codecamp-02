import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import "antd/dist/antd.css";
import withApollo from "../src/components/commons/hocs/withApollo";

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");

  return (
    <GlobalContext.Provider value={{ accessToken, setAccessToken }}>
      <Layout>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default withApollo(MyApp);
