// type UsersState = {
//     users: User[];
//     add: (user: User) => void;
//     remove: (id: number) => void;
// };

// export const useUsers = create<UsersState>()(
//     devtools((set) => ({
//         users: [],
//         add: (user) => set((state) => ({ users: [...state.users, user] })),
//         remove: (id) =>
//             set((state) => ({ users: state.users.filter((u) => u.id !== id) })),
//     }))
// );
