import { useEffect, useState } from "react"
import type { IUser } from "./types/user"
import UserList from "./components/UserList"

function App() {
    const [users, setUsers] = useState<IUser[]>([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data: IUser[]) => {
                const usersWithFavorite = data.map((user) => ({
                    ...user,
                    isFavorite: false
                }))

                const savedFavorites = JSON.parse(
                    localStorage.getItem("favorites") || "[]"
                )

                const updatedUsers = usersWithFavorite.map((user) => ({
                    ...user,
                    isFavorite: savedFavorites.includes(user.id)
                }))

                setUsers(updatedUsers)
            })
    }, [])

    const handleToggle = (id: number) => {
        const updated = users.map((user) =>
            user.id === id
                ? { ...user, isFavorite: !user.isFavorite }
                : user
        )

        setUsers(updated)

        const favorites = updated
            .filter((u) => u.isFavorite)
            .map((u) => u.id)

        localStorage.setItem("favorites", JSON.stringify(favorites))
    }

    const handleDelete = (id: number) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    const favoriteCount = users.filter((u) => u.isFavorite).length

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Contact Manager
                </h1>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600">
                        Total: <span className="font-semibold">{users.length}</span> | Favorites:{" "}
                        <span className="font-semibold">{favoriteCount}</span>
                    </p>

                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSearch(e.target.value)
                        }
                        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <UserList
                    users={filteredUsers}
                    onToggleFavorite={handleToggle}
                    onDelete={handleDelete}
                />

            </div>
        </div>
    )
}

export default App