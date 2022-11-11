import Avia from "../pages/Avia";
import AviaInfo from "../pages/AviaInfo";

interface IRoute {
	path: string;
	element: React.ReactNode;
}

export const routes: IRoute[] = [
	{ path: '/avia', element: <Avia /> },
	{ path: '/avia/info', element: <AviaInfo /> },

]