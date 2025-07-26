import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useUser } from "../Context/UserContext";

export default function Statusbar() {
    const {logout}=useUser();
    const [profileOptions, setProfileOptions] = React.useState(false);
    return (
        <div className="flex items-center justify-between p-4 bg-background-secondary text-text-secondary ">
        <div className="flex justify-between items-center">
            <img src="https://imgs.search.brave.com/lxifqrI_FSSSvdva22Xig_hEzULE8u2k20F1SPaj8Ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a3JlYWxvLmVzL2lt/Zy91cGxvYWQvbG9n/b3Nfd2ViL3NwYS9i/bG9nLmpwZw" alt="Logo Empresa" className="rounded-full w-10" />
            <span className="text-lg p-1">Draft empresa</span>
        </div>
        <Menu as='div'>
            <MenuButton onClick={()=>setProfileOptions(!profileOptions)} className="flex justify-between items-center">
                <img src="https://imgs.search.brave.com/lxifqrI_FSSSvdva22Xig_hEzULE8u2k20F1SPaj8Ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a3JlYWxvLmVzL2lt/Zy91cGxvYWQvbG9n/b3Nfd2ViL3NwYS9i/bG9nLmpwZw" alt="Foto de perfil" className="rounded-full w-10" />
                <IoMdArrowDropdown className={`size-6 transition-transform duration-200 ${profileOptions ? "transform rotate-180" : ""}`}/>
            </MenuButton>
            <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-background-secondary shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <div className="py-1">
                    <MenuItem>
                        <a href="/config/profile" className="block px-4 py-2 text-sm text-text-secondary data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                            Perfil
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <button onClick={logout} className="block px-4 py-2 text-sm text-text-secondary data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                            Cerrar sesión
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
        </div>
    );
}