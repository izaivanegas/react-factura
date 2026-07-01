import {useEffect, useState} from "react";


export const FormItemsView = ({handler})=>{


    const[errorMsg, setErrorMsg] = useState('');

    const[formItemsState,setFormItemsState] = useState({
        product: '',
        price:'',
        quantity:'',
    });

    const {product, price, quantity} = formItemsState;

    useEffect(()=>{
        //console.log("-->El precio cambio");
    },[price])



    useEffect(()=>{
        //console.log("El estado del formulario cambio")

    },[formItemsState]);


    const onInputChange = ({target:{name, value}})=>{
        setFormItemsState({
            ...formItemsState, [name]:value
        })

    };

    const onInvoiceSubmit = (e)=>{
        //Se evita el envio del formulario
        e.preventDefault();

        //validacion
        if(product.trim().length <= 1){
            setErrorMsg("Necesita el producto");
            return;
        }
        if(price.trim().length <= 0){
            setErrorMsg( "Necesita el precio");
            return;
        }
        if(isNaN(price.trim())){
            setErrorMsg( "El precio debe de ser un numero");
            return;
        }
        if(quantity.trim().length <= 0){
            setErrorMsg( "Necesita la cantidad");
            return ;
        }
        if(isNaN(quantity.trim())){
            setErrorMsg( "La cantidad debe de ser un numero");
            return;
        }


        handler(formItemsState);


        //formateo de formulario
        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        })

        setErrorMsg('')
    }

    return (
        <>
            <form  className="w-25"
                   onSubmit={(e)=>{ onInvoiceSubmit(e)}}>
                <input type="text" name="product" placeholder="Producto"
                       onChange={ onInputChange }
                       className="form-control m-3"
                       value={formItemsState.product}/>



                <input type="text" name="price" placeholder="Precio"
                       onChange={onInputChange}                       className="form-control m-3"
                       value={formItemsState.price}/>


                <input type="text" name="quantity" placeholder="Cantidad"

                       onChange={onInputChange}
                       className="form-control m-3"
                       value={formItemsState.quantity}
                />
                <button type="submit"
                        className="btn btn-primary m-3">
                    Agregar producto</button>
                <div className="text-danger">
                    {errorMsg}
                </div>
            </form>
        </>
    );


}