import type { IUser } from "../types/user"

interface UserCardProps {
    user: IUser
    onToggleFavorite: (id: number) => void
    onDelete: (id: number) => void
}

const UserCard = ({ user, onToggleFavorite, onDelete }: UserCardProps) => {
    return (
        <div
            className={`p-4 rounded-xl shadow-md bg-white border transition
      ${user.isFavorite ? "border-yellow-400 shadow-yellow-200" : "border-gray-200"}`}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                    {user.name}
                </h3>

                <button
                    onClick={() => onToggleFavorite(user.id)}
                    className="text-xl hover:scale-110 transition"
                >
                    {user.isFavorite ? "⭐" : "☆"}
                </button>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
                <p>📧 {user.email}</p>
                <p>📞 {user.phone}</p>
                <p>🌐 {user.website}</p>
            </div>

            <button
                onClick={() => onDelete(user.id)}
                className="mt-4 text-sm px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
            >
                Delete
            </button>
        </div>
    )
}

export default UserCard