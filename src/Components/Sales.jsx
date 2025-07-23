import { useUser } from "../Context/UserContext";

export default function Sales() {
    const {mail} =useUser();
    if(!mail) return null;
    return(
        <h1>Punto de venta</h1>
    );
}