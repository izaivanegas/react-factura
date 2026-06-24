import {RowItemView} from "./RowItemView.jsx";

export const ListItemsView = (props) => {

    return (
        <div>
            <h4>
                {props.title}
            </h4>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map(({id, product, price, quantity}) =>{

                    return <RowItemView
                        key={id}
                        id = {id}
                        product={product}
                        price={price}
                        quantity={quantity} />


                })}

                </tbody>
            </table>
        </div>
    );
}