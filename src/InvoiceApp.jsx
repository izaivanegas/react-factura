import {getInvoice, calculateTotal} from "./services/getInvoice.js";

import {InvoiceView} from "./components/InvoiceView.jsx";
import {ClientView} from "./components/ClientView.jsx";
import {CompanyView} from "./components/CompanyView.jsx";
import {ListItemsView} from "./components/ListItemsView.jsx";
import {TotalView} from "./components/TotalView.jsx";
import {useEffect, useState} from "react";


import {FormItemsView} from "./components/FormItemsView";

const invoiceInitial = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 1234567,
    },
    items: [

    ]
};

export const InvoiceApp = ()=>{


    const [invoice,setInvoice] = useState( invoiceInitial );



    const[counter, setCounter] = useState(4);


    const {id, name, client, company} = invoice;




    const[items, setItems] = useState([]);

    const [total, setTotal ] = useState(0);


    const [activeForm,setActiveForm] = useState(false);

    useEffect(()=>{
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items)
    },[]);
    



    useEffect(()=>{
        console.log("El counter ca,mbio")
    },[counter]);

    useEffect(()=>{
        console.log("los items cambiaron")
        setTotal(calculateTotal(items))
    },[items]);





    const {name: nameClient, lastName, address} = client;

    const {country, city, street, number} = address;

    const {name: nameCompany, fiscalNumber} = company;


    const handlerAddItems = ({product, price, quantity})=>{

        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(),10) }])

        setCounter(counter+1);
    }

    const handlerDeleteItems = (id)=>{
        setItems(items.filter(item=>item.id !== id));
    }


    const onActiveForm = ()=>{
        setActiveForm(!activeForm);
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

                 <ListItemsView  title="Productos de la factura" items={ items } handledelete={handlerDeleteItems}/>
                 <TotalView  title="Total de la factura" total={ total }/>
                 <button className="btn btn-secondary" onClick={onActiveForm}>
                     {!activeForm?'Agregar Item':'Ocultar Item'}
                 </button>

                 {!activeForm || <FormItemsView handler={handlerAddItems}/>}

             </div>
             </div>
         </div>
     );
}
