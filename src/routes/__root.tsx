import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "City King Spices | शुद्ध मसाले यानी सिटी किंग मसाले | Sah Food Industries Siliguri (cityking.in)" },
      {
        name: "description",
        content:
          "Official Website of City King Spices (cityking.in / citykingspices.in) by Sah Food Industries, Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling (WB – 734001). Founded by Mukesh Kumar Sah. 100% pure cold-ground Haldi, Mirchi, Dhaniya, Jeera, Sabji, Chicken, Meat, Garam Masale and premium CTC Tea. Call +91 98326 53731, +91 98004 92817.",
      },
      {
        name: "keywords",
        content:
          "cityking.in, citykingspices.in, City King, City King Spices, City King Masala, Sah Food Industries, Sah Food Industries Siliguri, Mukesh Kumar Sah, Mukesh kr Sah, Mukesh Masale, Ektiasal Eastern Bypass Road Siliguri, Jalpaiguri Darjeeling Masala Factory, Pure Haldi Powder, Red Chilli Powder, Dhaniya Powder, Jeera Powder, Sabji Masala, Chicken Masala, Meat Masala, Garam Masala, Fish Curry Masala, Kitchen King Masala, Biryani Masala, CTC Tea Siliguri, Indian Spices Manufacturer, FMCG Distributor West Bengal, Masala Dealership Bihar Bengal, शुद्ध मसाले यानी सिटी किंग मसाले, सिटी किंग मसाले सिलीगुड़ी, मुकेश कुमार साह",
      },
      { name: "author", content: "Sah Food Industries — Mukesh Kumar Sah" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-WB" },
      { name: "geo.placename", content: "Siliguri, Dist- (Jalpaiguri) Darjeeling, West Bengal, India" },
      { name: "geo.position", content: "26.7271;88.3953" },
      { name: "ICBM", content: "26.7271, 88.3953" },
      { property: "og:title", content: "City King Spices | शुद्ध मसाले यानी सिटी किंग मसाले | Sah Food Industries Siliguri" },
      {
        property: "og:description",
        content: "Authentic 100% unadulterated Indian spices, everyday blends, and CTC tea by Mukesh Kumar Sah, Sah Food Industries, Siliguri, West Bengal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "City King Spices (Sah Food Industries)" },
      { property: "og:image", content: "https://citykingspices.in/City%20King%20Founder.png" },
      { property: "og:image:alt", content: "Mukesh Kumar Sah — Founder & Owner of City King Masala Company (Sah Food Industries)" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "City King Spices | Sah Food Industries Siliguri" },
      { name: "twitter:description", content: "Authentic cold-ground Indian spices and CTC tea from Siliguri. Founded by Mukesh Kumar Sah." },
      { name: "twitter:image", content: "https://citykingspices.in/City%20King%20Founder.png" },
      { name: "theme-color", content: "#b83224" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "City King" },
      { name: "application-name", content: "City King Spices" },
    ],
    links: [
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Noto+Serif+Devanagari:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Rozha+One&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://citykingspices.in" },
      { rel: "alternate", href: "https://citykingspices.in", hreflang: "en-IN" },
      { rel: "alternate", href: "https://citykingspices.in", hreflang: "hi-IN" },
      { rel: "alternate", href: "https://citykingspices.in", hreflang: "x-default" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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

import { MobileActionBar } from "../components/MobileActionBar";
import { SmartOrderDrawer } from "../components/SmartOrderDrawer";
import { SeoStructuredData } from "../components/SeoStructuredData";
import { LanguageProvider } from "../context/LanguageContext";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SeoStructuredData />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <SmartOrderDrawer />
        <MobileActionBar />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
