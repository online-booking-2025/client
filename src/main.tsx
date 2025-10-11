import "@/globals.css";
import * as Sentry from "@sentry/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/app";
import Layout from "@/components/shared/layout.tsx";
import { Providers } from "@/components/shared/providers.tsx";

Sentry.init({
  dsn: "https://bfb9134f892be050e35d0ea415c9067f@o4508522520641536.ingest.de.sentry.io/4510161071046736",
  sendDefaultPii: true,
  integrations: [
    Sentry.feedbackIntegration({
      maskAllText: false,
    }),
  ],
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <Layout>
        <App />
      </Layout>
    </Providers>
  </StrictMode>,
);
