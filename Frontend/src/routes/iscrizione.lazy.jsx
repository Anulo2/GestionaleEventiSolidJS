import Iscrizione from "@/pages/Iscrizione/Iscrizione";
import { createLazyFileRoute } from "@tanstack/react-router";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createLazyFileRoute("/iscrizione")({
	component: () => (
		<>
			<Iscrizione />
		</>
	),
});
