import React, { useState } from 'react'

const Cliente = ({setCliente, cliente}) => {
    const [nuevoCliente, setNuevoCliente] = useState("")
    const [contador, setContador]= useState(0)

    const handlerSubmit=(e)=>{
        e.preventDefault()
        setContador(contador+1)      
        setCliente((element)=>([...element, {nombre: nuevoCliente,pedido:[],id:contador}]))
        console.log(cliente)
    }

  return (
    <form onSubmit={handlerSubmit}>  
        <input type="text" placeholder='Introduce el nuevo cliente' onChange={(e)=>setNuevoCliente(e.target.value)}/>
    </form>
  )
}

export default Cliente