import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { UserPage } from "../entities";
import "./App.css";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Загрузка...</div>}>
                <UserPage />
            </Suspense>
        </QueryClientProvider>
    );
}

export default App;
