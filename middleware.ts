export { default } from "next-auth/middleware";

// Secure the matching routes with the middleware
export const config = {
  runtime: "experimental-edge", // for Edge API Routes only
  unstable_allowDynamic: [
    '/node_modules/@babel/runtime/regenerator/index.js', // allows a single file
    '/node_modules/next-auth/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
  matcher: ["/"],
};
