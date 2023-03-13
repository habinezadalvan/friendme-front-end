import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store, perisistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
        {/* PersistGate delays the rendering of the app until the persisted data is available in the redux store  */}
      <PersistGate loading={null} persistor={perisistor}>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
