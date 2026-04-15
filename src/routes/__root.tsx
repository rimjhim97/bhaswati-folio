import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: '#0a0a0a', color: '#fff' }}>
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold" style={{ fontFamily: 'var(--font-family-display)' }}>404</h1>
        <p className="mt-4 text-sm" style={{ color: 'oklch(1 0 0 / 50%)' }}>
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-white text-black transition-all hover:opacity-90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bhaswati Chakraborty — AI Product Manager" },
      { name: "description", content: "MBA candidate at SCMHRD building AI products. More than 3.5 years in enterprise tech. Available for Product Analyst, APM, Business Analyst roles." },
      { name: "author", content: "Bhaswati Chakraborty" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Bhaswati Chakraborty — AI Product Manager" },
      { name: "twitter:title", content: "Bhaswati Chakraborty — AI Product Manager" },
      { property: "og:description", content: "MBA candidate at SCMHRD building AI products. More than 3.5 years in enterprise tech. Available for Product Analyst, APM, Business Analyst roles." },
      { name: "twitter:description", content: "MBA candidate at SCMHRD building AI products. More than 3.5 years in enterprise tech. Available for Product Analyst, APM, Business Analyst roles." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/bfb6c9c5-92d2-47b8-b359-54a1d927b91e" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/bfb6c9c5-92d2-47b8-b359-54a1d927b91e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
