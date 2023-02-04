import {v4 as uuidv4} from 'uuid';

const Footer = () => {
    const info = [
        {
            id: uuidv4(),
            title: 'Support'
        },
        {
            id: uuidv4(),
            title: 'Current Exchange'
        },
        {
            id: uuidv4(),
            title: 'Question  & Answer'
        },
        {
            id: uuidv4(),
            title: 'Mobile App'
        },
    ]
    return (
        <div>
            <ul>
                {info.map(el =>
                    <li key={el.id}>
                        <strong> {el.title}</strong>
                    </li>)}
            </ul>
        </div>
    )
}
export default Footer;