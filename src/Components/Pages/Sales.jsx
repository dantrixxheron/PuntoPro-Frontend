import { useForm } from "react-hook-form";
import { useUser } from "../../Context/UserContext";
import Sidebar from "../Sidebar";
import '../styles/sales.css';
import { MdSearch } from "react-icons/md";
import { useState } from "react";

export default function Sales() {
    const {user} =useUser();
    const [selledProducts] = useState([]);
    const { register,handleSubmit, formState: { errors }, reset} = useForm();
    const localProducts = [{
        id: 0,
        cdcode: 7502227427149,
        name: "RAMICO: Ácido Abscórbico 500 mg 30 cápsulas. Gel Pharma",
        price: 88.75,
        stock: 10,
    }];
    if(!user){ return null};
    const onSubmit = (data) => {
        // Aquí puedes agregar la lógica para buscar el producto por código de barras
        localProducts.forEach(product => {
            if (product.cdcode === parseInt(data.cdcode)) {
                // Aquí puedes agregar la lógica para registrar la venta
                selledProducts.push(product)
            }
        }
    );
        reset();
    }
    return(
        <div className="flex flex-row h-screen bg-background text-text">
        <Sidebar>
            <h1 className="text-2xl font-bold text-center mt-4">Registrar venta</h1>
            <form className="p-4 pb-0 md:w-9/10 w-9/10 flex md:flex-row flex-col items-center md:justify-center transition-all delay-300" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="cdcode" className=" text-sm/6 font-medium text-text md:ml-1">Código de barras</label>
                <div className="flex items-center justify-baseline md:flex-3/4">
                    <input type="text" id="cdcode" name="cdcode" placeholder="0123456789123" required className="block ml-1 md:flex-1/2 rounded-md p-2  text-text outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 bg-background outline-primary focus:outline-primary" {...register("cdcode",{minLength:8, maxLength:13})} />
                    <button type="submit" className="ml-1 p-2 bg-primary text-white py-2 rounded-full hover:bg-primary-hover transition-colors duration-200">
                        <MdSearch className="fill-white" />
                    </button>
                </div>
            </form>
            {errors.cdcode && <p className="text-red-700 text-sm ml-5">El código de barras debe tener entre 8 y 13 dígitos</p>}
            <div className="mt-4">
                {selledProducts.length > 0 ? (
                    <ul className="list-none p-0">
                        {selledProducts.map((product, index) => (
                            <li key={index} className="flex justify-between items-center p-2 bg-background-secondary mb-2 rounded-md">
                                <span>{product.name}</span>
                                <span>${product.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-text-secondary">No se han registrado productos.</p>
                )}
            </div>
        </Sidebar>
        </div>
    );
}