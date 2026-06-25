import {getInvoice} from "./services/getInvoice.js";

import {InvoiceView} from "./components/InvoiceView.jsx";
import {ClientView} from "./components/ClientView.jsx";
import {CompanyView} from "./components/CompanyView.jsx";
import {ListItemsView} from "./components/ListItemsView.jsx";
import {TotalView} from "./components/TotalView.jsx";
import {useState} from "react";

export const InvoiceApp = ()=>{

    const {id, name, client, company, items:itemsInicial, total} = getInvoice();

    const {name: nameClient, lastName, address} = client;

    const {country, city, street, number} = address;

    const {name: nameCompany, fiscalNumber} = company;

    const[productoValue, setProductoValue] = useState('');
    const[precioValue, setPrecioValue] = useState('');
    const[cantidadValue, setCantidadValue] = useState('');
    const[items, setItems] = useState(itemsInicial);
    const[counter, setCounter] = useState(4);
    const[errorMsg, setErrorMsg] = useState('');


    const onProductChange = ({target})=>{
        console.log("Product"+target.value);
        setProductoValue(target.value);
    };

    const onPrecioChange= ({target})=>{
        console.log("Product"+target.value);
        setPrecioValue(target.value);
    }

    const onCantidadChange= ({target})=>{
        console.log("Product"+target.value);
        setCantidadValue(target.value);
    };

    const onInvoiceSubmit = (e)=>{
        //Se evita el envio del formulario
        e.preventDefault();

        //validacion
        if(productoValue.trim().length <= 1){
            setErrorMsg("Necesita el producto");
            return;
        }
        if(precioValue.trim().length <= 0){
            setErrorMsg( "Necesita el precio");
            return;
        }
        if(isNaN(precioValue.trim())){
            setErrorMsg( "El precio debe de ser un numero");
            return;
        }
        if(cantidadValue.trim().length <= 0){
            setErrorMsg( "Necesita la cantidad");
            return ;
        }
        if(isNaN(cantidadValue.trim())){
            setErrorMsg( "La cantidad debe de ser un numero");
            return;
        }



        setItems([...items, {
            id: counter,
            product: productoValue.trim(),
            price: +precioValue.trim(),
            quantity: parseInt(cantidadValue.trim(),10) }])
        setProductoValue('');
        setPrecioValue('');
        setCantidadValue('');
        setCounter(counter+1);
        setErrorMsg('')
    }


     return (
         <div className="container">
             <div className="card my-3">

                 <div className="card-header">
                     Invoice App
                 </div>
             <div className="card-body">
                 {/*Informacion de la factura*/}
                <InvoiceView id={id} name={name}  />
             <div className="row my-4">
                 <div className="col">
                     {/*Informacion del cliente*/}
                     <ClientView nameClient={nameClient}  lastName={lastName} country={ country } city={ city } number={ number } street={ street }/>
                 </div>
                 <div className="col">
                     {/*Informacion de la company*/}
                    <CompanyView nameCompany={ nameCompany } fiscalNumber={ fiscalNumber }/>
                 </div>

             </div>

                 <ListItemsView  title="Productos de la factura" items={ items }/>
                 <TotalView  title="Total de la factura" total={ total }/>
                 <form  className="w-25"
                        onSubmit={(e)=>{ onInvoiceSubmit(e)}}>
                     <input type="text" name="product" placeholder="Producto"
                            onChange={ onProductChange }
                            className="form-control m-3"
                     value={productoValue}/>



                     <input type="text" name="Precio" placeholder="Precio"
                            onChange={(e)=> {onPrecioChange(e)}}
                            className="form-control m-3"
                     value={precioValue}/>


                     <input type="text" name="Cantidad" placeholder="Cantidad"

                            onChange={(e)=> {onCantidadChange(e)}}
                            className="form-control m-3"
                     value={cantidadValue}
                     />
                     <button type="submit"
                             className="btn btn-primary m-3">
                         Agregar producto</button>
                     <div className="text-danger">
                         {errorMsg}
                     </div>
             </form>
             </div>
             </div>
         </div>
     );
}
