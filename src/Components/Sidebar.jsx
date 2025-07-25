import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { GrStorage } from "react-icons/gr";
import { TbInvoice } from "react-icons/tb";
import { MdAdd, MdHistory, MdOutlineClose, MdOutlineLogout, MdOutlineQueryStats, MdOutlineSettings, MdOutlineShoppingBasket, MdSettings } from "react-icons/md";
import { FaBars } from "react-icons/fa6";

export default function Sidebar({children}) {
  const [showVentasOptions, setShowVentasOptions] = useState(false);
  const [isOpenBar, setIsOpenBar] = useState(false);
  return(
    <>
      <div className={`flex flex-col h-full w-20 md:w-64 transition-all duration-300 text-text-secondary flex-shrink-0 bg-background-secondary shadow-md p-2 ${isOpenBar ? 'w-64' : 'w-20'}`}>
        <div className="flex items-center justify-center p-2 pb-8">
          <img src="/src/assets/PuntoPro iconTxt.png" alt="Punto Pro Logo" className={`h-14 w-auto md:block ${isOpenBar?'block':'hidden'}`} />
          {/*<img src="/src/assets/PuntoPro-imgLogo.png" alt="Punto Pro Icon" className="h-10 w-auto md:hidden" />*/}
          <button className="md:hidden p-2 rounded-md text-text-secondary" onClick={() => setIsOpenBar(!isOpenBar)} aria-label="abrir barra lateral">
            {isOpenBar ? <MdOutlineClose className="size-6" /> : <FaBars className="size-6" />}
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="pattern-list-none list-none space-y-2">
            <a href="/home">
            <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
              <HiOutlineHome className="inline-block size-6 mr-1 text-text-secondary" />
               <span className={`md:block ${isOpenBar?'block':'hidden'}`}>Inicio</span>
            </li>
            </a>
            <li className="md:py-2 md:px-4 py-2 pl-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 mb-0">
              <button onClick={()=>setShowVentasOptions(!showVentasOptions)} className="w-full flex items-center justify-between">
              <div className="flex items-center justify-between">
                <MdOutlineShoppingBasket className="inline-block size-6 mr-1 text-text-secondary" />
                <span className={`md:block ${isOpenBar?'block':'hidden'}`}> Ventas </span>
              </div>
                <IoMdArrowDropdown className={`size-6 transition-transform duration-200 ${showVentasOptions ? "transform rotate-180" : ""}`} />
                </button>
            </li>
            {showVentasOptions && (
              <ul className="pl-4 space-y-1">
                <a href="/sales/new">
                  <li className="py-1 px-2 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
                    <MdAdd className="inline-block size-5 mr-1 text-text-secondary" />
                     <span className={`md:block ${isOpenBar?'block':'hidden'}`}> Nueva venta </span>
                  </li>
                </a>
                <a href="/sales/history">
                  <li className="py-1 px-2 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
                    <MdHistory className="inline-block size-5 mr-1 text-text-secondary" />
                    <span className={`md:block ${isOpenBar?'block':'hidden'}`}> Historial de ventas</span>
                  </li>
                </a>
              </ul>
            )}
            <a href="/products">
              <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
                <GrStorage className="inline-block size-5 mr-1 text-text-secondary" />
                <span className={`md:block ${isOpenBar?'block':'hidden'}`}>Productos </span>
              </li>
            </a>
            <a href="/customers">
              <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
                <TbInvoice className="inline-block size-5 mr-1 text-text-secondary" />
                <span className={`md:block ${isOpenBar?'block':'hidden'}`}>Facturas</span>
              </li>
            </a>
            <a href="/reports">
              <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
                <MdOutlineQueryStats className="inline-block size-5 mr-1 text-text-secondary" />
                <span className={`md:block ${isOpenBar?'block':'hidden'}`}>Estadísticas</span>
              </li>
            </a>
            <a href="/config">
              <li className="py-2 px-4 text-text bg-transparent hover:bg-primary-hover hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
                <MdOutlineSettings className="inline-block size-5 mr-1 text-text-secondary" />
                  <span className={`md:block ${isOpenBar?'block':'hidden'}`}>Configuración</span>
              </li>
            </a>
          </ul>
        </nav>
        <button className="py-2 px-4 text-text bg-transparent hover:bg-red-200 dark:hover:bg-red-900 dark:hover:text-white rounded-md transition-colors duration-200 flex items-center justify-left">
          <MdOutlineLogout className="inline-block size-5 mr-1 text-text-secondary" />
          <span className={`md:block ${isOpenBar?'block':'hidden'}`}>Cerrar sesión</span> 
        </button>
      </div>
      <div className="flex-grow p-2.5 bg-background text-text">
        {/* Aquí va el contenido principal de la página */}
        {children}
      </div>
    </>
  )
}