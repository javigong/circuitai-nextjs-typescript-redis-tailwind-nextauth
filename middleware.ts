export { default } from "next-auth/middleware";

// Secure the matching routes with the middleware
export const config = {
  matcher: ["/"],
};
