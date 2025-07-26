import { useUser } from "../../Context/UserContext";
import Sidebar from "../Sidebar";
import '../styles/sales.css';

export default function Sales() {
    const {user} =useUser();
    if(!user) return null;
    return(
        <div className="flex flex-row h-screen bg-background text-text">
        <Sidebar>
            <p>Hola mundo</p>
        </Sidebar>
        </div>
    );
}