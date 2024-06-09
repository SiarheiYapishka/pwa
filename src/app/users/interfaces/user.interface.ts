export interface UserBase {
    name: string;
    surname: string;
    age: number
}

export interface User extends UserBase {
    id: number
}