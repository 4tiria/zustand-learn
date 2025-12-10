import {
    Box,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    TextField,
} from "@mui/material";
import { useMemo, useState } from "react";
import type { User } from "../../model/types";

interface UserListProps {
    users: Array<User>;
    isLoading: boolean;
}

const UserList = ({ users, isLoading }: UserListProps) => {
    const [filter, setFilter] = useState("");

    const filteredUsers = useMemo(() => {
        const q = filter.trim().toLowerCase();
        if (!q) return users;
        return users.filter(
            (user) =>
                user.name.toLowerCase().includes(q) ||
                user.email?.toLowerCase().includes(q)
        );
    }, [users, filter]);

    return (
        <Box className="overflow-y-auto">
            <TextField
                label="Фильтр пользователей"
                placeholder="Имя или email"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                size="small"
            />
            {isLoading ? (
                <Box display="flex" justifyContent="center" p={2}>
                    <CircularProgress />
                </Box>
            ) : (
                <List>
                    {filteredUsers.map((user) => (
                        <ListItem key={user.id} divider>
                            <ListItemText
                                primary={user.name}
                                secondary={user.email}
                            />
                        </ListItem>
                    ))}
                    {filteredUsers.length === 0 && (
                        <ListItem>
                            <ListItemText primary="Пользователи не найдены" />
                        </ListItem>
                    )}
                </List>
            )}
        </Box>
    );
};

export default UserList;
