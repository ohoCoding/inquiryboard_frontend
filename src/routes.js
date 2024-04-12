import { useRoutes } from "react-router-dom";
import Index from "./pages";

const Routes = () => {
    const routes = [
        {
            path: '/',
            element: Index()
        }
    ]
    const router = useRoutes(routes);
    return router;
}

export default Routes;