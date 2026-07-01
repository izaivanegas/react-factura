import {RowItemView} from "./RowItemView.jsx";

export const ListItemsView = ({title, items, handledelete}) => {

    return (
        <div>
            <h4>
                {title}
            </h4>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {items.map(({id, product, price, quantity}) =>{

                    return <RowItemView
                        key={id}
                        id = {id}
                        product={product}
                        price={price}
                        quantity={quantity}
                        handledelete = {(id)=>handledelete(id)}
                    />


                })}

                </tbody>
            </table>
        </div>
    );
}