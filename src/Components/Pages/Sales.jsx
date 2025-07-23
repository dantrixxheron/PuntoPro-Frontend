import { useUser } from "../../Context/UserContext";

export default function Sales() {
    const {mail} =useUser();
    if(!mail) return null;
    return(
        <>
        <form>
            
        </form>
        </>
    );
}