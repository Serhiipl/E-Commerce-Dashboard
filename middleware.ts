import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
// export default authM;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
