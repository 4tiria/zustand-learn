import { useUsersQuery } from "../../model/usersApi";
import UserList from "../organisms/UserList";

const UserPage = () => {
    const { data: users = [], isLoading } = useUsersQuery();
    return <UserList users={users} isLoading={isLoading} />;
};

export default UserPage;
