import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { User } from "./types";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch(USERS_URL);
    if (!res.ok) {
        throw new Error(
            `Failed to fetch users: ${res.status} ${res.statusText}`
        );
    }
    return res.json();
};

export const useUsersQuery = (options?: UseQueryOptions<User[], Error>) =>
    useQuery<User[], Error>({
        queryKey: ["users"],
        queryFn: fetchUsers,
        ...options,
    });
