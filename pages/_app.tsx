import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
