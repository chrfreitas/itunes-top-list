import * as Sentry from '@sentry/react';
import { Integrations } from "@sentry/tracing";

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'production') {
  const REACT_APP_SENTRY_URL = process.env.REACT_APP_SENTRY_URL;

  Sentry.init({
    dsn: REACT_APP_SENTRY_URL,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}
