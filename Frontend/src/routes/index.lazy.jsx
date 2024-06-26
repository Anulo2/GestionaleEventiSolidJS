import Index from "@/pages/Index/Index";
import { createLazyFileRoute } from "@tanstack/react-router";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createLazyFileRoute("/")({
	component: () => (
		<>
			<Index />
		</>
	),
});
