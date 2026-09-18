import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultViewTransition: {
      // Navigating into the PIN page slides up; everything else slides right.
      types: ({ toLocation }) => (toLocation.pathname === "/pin" ? ["vt-up"] : []),
    },
  });

  return router;
};
