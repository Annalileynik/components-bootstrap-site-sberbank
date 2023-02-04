import './App.css'
import Header from "./main/Header";
import Footer from "./main/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid';
import Business from "./components/Business";
import { Button } from "react-bootstrap";

function App() {
    return (
        <div>
            <Header/>

            <Footer/>

        </div>
    );
}

export default App;
