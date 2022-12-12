export { default } from "next-auth/middleware";

// Secure the matching routes with the middleware
export const config = {
  runtime: "experimental-edge", // for Edge API Routes only
  unstable_allowDynamic: [
    "/node_modules/@babel/runtime/regenerator/index.js", // allows a single file
    "/node_modules/next-auth/core/errors.js",
    "/node_modules/next-auth/utils/web.js",
    "/node_modules/next-auth/next/middleware.js",
    "/node_modules/next-auth/middleware.js",
  ],
  matcher: ["/"],
};
