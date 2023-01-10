import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import favicon from "./images/favicon.png";
import styles from "./styles/app.css";
import customStyle from "./styles/custom.css";

export function links() {
  return [
    { rel: "icon", href: favicon },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: customStyle },
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "My name is LiHaoya",
  description: "My name is LiHaoya",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
