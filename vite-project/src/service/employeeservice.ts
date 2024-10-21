import { IEmployee } from "../interfaceInfo/Iemployee";
import { IUser } from "../interfaceInfo/Iuser";

export async function  AddEmployee(data:IEmployee) : Promise<IEmployee>
{
    return fetch("https://66fe248a69936930895731f9.mockapi.io/employee",{
        method:"POST",
        body: JSON.stringify(data)
    })
    .then(y=>y.json());
    
}