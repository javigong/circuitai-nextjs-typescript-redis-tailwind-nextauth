export { default } from "next-auth/middleware";

// Secure the matching routes with the middleware
export const config = {
  runtime: "experimental-edge", // for Edge API Routes only
  matcher: ["/"],
};
