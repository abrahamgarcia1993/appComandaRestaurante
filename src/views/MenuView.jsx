import { useState } from "react";
import Cliente from "../components/Cliente";
import Menu from "../components/Menu";

const MenuView = () => {
  const [cliente, setCliente] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [indexProducto, setIndexProducto]= useState({})
//traemos un index y lo seteamos
  const handleClickCliente = (index) => {
    console.log(indexProducto)
    setActiveIndex(index)
    setIndexProducto(index)
    
  };
  const conseguirProducto=(producto)=>{
    console.log("hola mundo")
    const nuevoCliente= [...cliente]
    const nuevoIndex = indexProducto
    nuevoCliente[nuevoIndex].pedido.push(producto)
    setCliente(nuevoCliente)
    console.log(cliente, "este es el cliente")
    console.log(indexProducto,"este es el indexProducto")
    console.log(nuevoCliente[indexProducto])
  }
  const productos = [
    { nombre: "Refrescos", precio: "1.4", id: 0 },
    { nombre: "Cubata ", precio: "1.6", id: 1 },
    { nombre: "Pinchitos ", precio: "2", id: 2 },
    { nombre: "Hamburguesas", precio: "2", id: 3 },
    { nombre: "Costillitas", precio: "2", id: 4 },
    { nombre: "Agua", precio: "1.4", id: 5 },
    { nombre: "Crestas", precio: "2", id: 6 },
    { nombre: "Ensalada", precio: "2", id: 7 },
    { nombre: "chupito", precio: "2", id: 8 },
  ];
  //mirar esta parte del proyecto
 
  return (
    <div className="app">
      <Cliente setCliente={setCliente} cliente={cliente} />
        
      <div className="listaCliente">
      {cliente.map((element, index) => (
        <div className={activeIndex===element. id?"cliente-total":"cliente"} onClick={()=>handleClickCliente(element.id)} key={index}>
            
          <h2>{element.nombre}</h2>
          
          {activeIndex===element.id?(<Menu productos={productos} conseguirProducto={conseguirProducto} />):""}
          <div>
            
         {activeIndex===element. id && element.pedido.map((element,index)=>(
           <div key={index}>
            <p>{element.nombre}  {element.precio}€</p>
          </div>
         ))}
         <h3>Total: {
                element.pedido.reduce((acc, item) => acc + parseFloat(item.precio), 0).toFixed(2)
               }€</h3>
        </div>
          </div>

      ))}
      </div>

      
    </div>
  );
};

export default MenuView;
