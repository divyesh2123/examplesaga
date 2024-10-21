import { IUser } from "../interfaceInfo/Iuser";

export async function  GetUsers() : Promise<IUser[]>
{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(y=>y.json());
    
}