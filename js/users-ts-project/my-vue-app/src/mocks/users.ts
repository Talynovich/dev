import {type IUser} from "../types/user"

export const mockUsers: IUser[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+123456789",
        website: "johndoe.com",
        isFavorite: false
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+987654321",
        website: "janesmith.com",
        isFavorite: true
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "+111222333",
        website: "mikejohnson.com",
        isFavorite: false
    },
    {
        id: 4,
        name: "Alice Brown",
        email: "alice@example.com",
        phone: "+444555666",
        website: "alicebrown.com",
        isFavorite: false
    },
    {
        id: 5,
        name: "Tom Wilson",
        email: "tom@example.com",
        phone: "+777888999",
        website: "tomwilson.com",
        isFavorite: false
    }
]