import {v4 as uuidv4} from 'uuid';

function Offices() {
    const operatingMode = (id) => console.log('Operating mode', id)
    const office = [
        {
            id: uuidv4(),
            number: 273,
            address: {
                city: "Perm",
                street: "160 Kirova str",
                phone: "234-234-34-34"
            },
            view: "Private",
        },
        {
            id: uuidv4(),
            number: 183,
            address: {
                city: "Moscow",
                street: "10 Lenina str",
                phone: "111-432-34-34"
            },
            view: "Business",
        },
        {
            id: uuidv4(),
            number: 4,
            address: {
                city: "Krasnodar",
                street: "40 Atarbekova str",
                phone: "354-465-34-34"
            },
            view: "Private",
        },
        {
            id: uuidv4(),
            number: 98,
            address: {
                city: "Krasnodar",
                street: "178 Vavilova str",
                phone: "299-239-34-39"
            },
            view: "Business",
        }, {
            id: uuidv4(),
            number: 1,
            address: {
                city: "Moscow",
                street: "71 Simerenko str",
                phone: "768-878-00-09"
            },
            view: "Private",
        }, {
            id: uuidv4(),
            number: 23,
            address: {
                city: "Perm",
                street: "11 Krygovaya str",
                phone: "987-232-34-34"
            },
            view: "Business",
        }, {
            id: uuidv4(),
            number: 34,
            address: {
                city: "Samara",
                street: "112 Davy str",
                phone: "676-774-33-34"
            },
            view: "Private",
        },

    ]
    return (
        <ul>
            {office.map(el => (
                    <li key={el.id}>
                        <hr/>
                        <strong> {el.number} </strong>
                        <br/> Address: {el.address.city}, {el.address.street},
                        <br/>Phone: {el.address.phone}
                        <br/>{el.view}
                       <br/> <button onClick={()=>operatingMode(el.id)}> <i> Operating Mode</i>  </button>
                    </li>
                )
            )}

        </ul>
    )
}

export default Offices;