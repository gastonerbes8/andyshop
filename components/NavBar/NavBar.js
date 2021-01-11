//Barra de Menu 
//importar la funcion react del package jason
import React from 'react'
import './NavBar.css'

//inicializar componente (Funcion), retorna html, exportarlo para usarlo
export const NavBar = () => {

    return (
        <div className='containerNav'>
            <div className='logo'>
                LOGO
            </div>
            <p>INICIO</p>
            <p>CATEGORIAS</p>
            <p>NOSOTROS</p>
            <p>CARRITO</p>
        </div>
    )
}

