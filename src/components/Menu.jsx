
import React from "react"
const Menu = ({productos, conseguirProducto}) => {
  return (
    <div className="menu">
        {productos.map((element)=>(
            <div className="tarjeta" key={element.id} onClick={()=>conseguirProducto({nombre:element.nombre, precio:element.precio})}>
                <p>{element.nombre}</p>
                <p>{element.precio} €</p>
            </div>
        ))}
    </div>
  )
}

export default Menu