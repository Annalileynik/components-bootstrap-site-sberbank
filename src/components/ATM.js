import {v4 as uuidv4} from "uuid";

function ATM (){
    const atm = [
        {
            id: uuidv4(),
            number: 273,
            address: {
                city: "Perm",
                street: "160 Kirova str",
            },
        },
        {
            id: uuidv4(),
            number: 183,
            address: {
                city: "Moscow",
                street: "10 Lenina str",
            },
        },
        {
            id: uuidv4(),
            number: 4,
            address: {
                city: "Krasnodar",
                street: "40 Atarbekova str",
            },
        },
        {
            id: uuidv4(),
            number: 98,
            address: {
                city: "Krasnodar",
                street: "178 Vavilova str",
            },
            view: "Business",
        }, {
            id: uuidv4(),
            number: 1,
            address: {
                city: "Moscow",
                street: "71 Simerenko str",

            },
        },
        {
            id: uuidv4(),
            number: 23,
            address: {
                city: "Perm",
                street: "11 Krygovaya str",
            },
        },
        {
            id: uuidv4(),
            number: 34,
            address: {
                city: "Samara",
                street: "112 Davy str",
            },
        },
    ]
    return(
 <ul>
     {atm.map(el=>
         <li key={el.id}>
           <hr/>  Office # <strong> {el.number} </strong>
         <br/> Address: {el.address.city}, {el.address.street}
         </li>
     )}

 </ul>
    )
}

export default ATM;