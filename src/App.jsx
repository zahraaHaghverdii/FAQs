import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./styled/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import FaqPage from "./pages/FaqPage";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/FAQs" element={<AppLayout />}>
            <Route path="/FAQs" element={<FaqPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 4500 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "15px 24px",
            background: "var( --color-grey-0)",
            color: "var( --color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
