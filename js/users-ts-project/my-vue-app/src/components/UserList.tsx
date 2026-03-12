import type { IUser } from "../types/user"
import UserCard from "./UserCard"

interface UserListProps {
    users: IUser[]
    onToggleFavorite: (id: number) => void
    onDelete: (id: number) => void
}

const UserList = ({ users, onToggleFavorite, onDelete }: UserListProps) => {
    return (
        <div>
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    onToggleFavorite={onToggleFavorite}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default UserList