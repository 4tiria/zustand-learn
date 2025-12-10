import { lazy } from "react";

export const UserPage = lazy(() =>
    new Promise((resolve) => setTimeout(resolve, 2000)).then(
        () => import("./ui/pages/UserPage")
    )
);
