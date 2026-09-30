import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Serves api/enquiry.js at /api/enquiry during `npm run dev` and `npm run preview` (Vercel runs it in production)
function enquiryApi() {
  const mount = (server, load) => {
    server.middlewares.use('/api/enquiry', async (req, res) => {
      let raw = '';
      for await (const chunk of req) raw += chunk;
      try {
        req.body = raw ? JSON.parse(raw) : {};
      } catch {
        req.body = {};
      }
      const { default: handler } = await load();
      await handler(req, res);
    });
  };
  return {
    name: 'enquiry-api',
    // The dev server reloads edits to api/ on every request; preview uses the files as they are
    configureServer: (server) => mount(server, () => server.ssrLoadModule('/api/enquiry.js')),
    configurePreviewServer: (server) => mount(server, () => import('./api/enquiry.js')),
  };
}

export default defineConfig(({ mode }) => {
  // Server-only secrets (no VITE_ prefix) are loaded for the API and never exposed to the browser bundle
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [react(), enquiryApi()],
    server: {
      // A leading dot allows every subdomain, so new ngrok tunnel URLs keep working
      allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io'],
    },
    preview: {
      allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io'],
    },
  };
});
