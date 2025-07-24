import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { GrStorage } from "react-icons/gr";
import { TbInvoice } from "react-icons/tb";
import { MdAdd, MdHistory, MdOutlineLogout, MdOutlineQueryStats, MdOutlineSettings, MdOutlineShoppingBasket, MdSettings } from "react-icons/md";

export default function Sidebar({children}) {
  const [showVentasOptions, setShowVentasOptions] = useState(false);
  return(
    <>
      <div className="flex flex-col h-full w-max md:w-64 text-text-secondary flex-shrink-0 bg-background-secondary shadow-md p-2">
        <div className="flex items-center justify-center p-2 pb-8">
          <img src="/src/assets/PuntoPro iconTxt.png" alt="Punto Pro Logo" className="h-14 w-auto" />
        </div>
        <nav className="flex-grow">
          <ul className="pattern-list-none list-none space-y-2">
            <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
              <HiOutlineHome className="inline-block size-6 mr-1 text-text-secondary" />
              <a href="/home">Inicio</a>
            </li>
            <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-between">
              <MdOutlineShoppingBasket className="inline-block size-6 mr-1 text-text-secondary" />
              <button onClick={()=>setShowVentasOptions(!showVentasOptions)} className="w-full text-left">
                Ventas
                </button>
                <IoMdArrowDropdown className={`transition-transform duration-200 ${showVentasOptions ? "transform rotate-180" : ""}`} />
            </li>
            {showVentasOptions && (
              <ul className="pl-4 space-y-1">
                <li className="py-1 px-2 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
                  <MdAdd className="inline-block size-5 mr-1 text-text-secondary" />
                  <a href="/sales/new">Nueva venta</a>
                </li>
                <li className="py-1 px-2 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
                  <MdHistory className="inline-block size-5 mr-1 text-text-secondary" />
                  <a href="/sales/history">Historial de ventas</a>
                </li>
              </ul>
            )}
            <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
              <GrStorage className="inline-block size-4 mr-1 text-text-secondary" />
              <a href="/products">Productos</a>
            </li>
            <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
              <TbInvoice className="inline-block size-5 mr-1 text-text-secondary" />
              <a href="/customers">Facturas</a>
            </li>
            <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
              <MdOutlineQueryStats className="inline-block size-5 mr-1 text-text-secondary" />
              <a href="/reports">Estadísticas</a>
            </li>
            <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
              <MdOutlineSettings className="inline-block size-5 mr-1 text-text-secondary" />
              <a href="/config">Configuración</a>
            </li>
          </ul>
        </nav>
        <button className="py-2 px-4 text-text bg-transparent hover:bg-red-200 dark:hover:bg-red-900 dark:hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
          <MdOutlineLogout className="inline-block size-5 mr-1 text-text-secondary" />
          Cerrar sesión </button>
      </div>
      <div className="flex-grow p-2.5 bg-background text-text">
        {/* Aquí va el contenido principal de la página */}
        {children}
      </div>
    </>
  )
}