import AppLayout from "@/layouts/app-layout";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: AppLayout,
});
