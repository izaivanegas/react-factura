export const RowItemView = ({id, product, price, quantity, handledelete}) => {
    return (
            <>
                <tr >
                    <td>{product}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td>
                        <button onClick={()=>handledelete(id)} className="btn btn-danger">
                        Eliminar
                    </button></td>
                </tr>
            </>
    )
}




