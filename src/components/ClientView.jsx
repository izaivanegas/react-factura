

export const ClientView = ({nameClient, lastName,country, city, street, number })=>{
    return (
        <div >
            <h4>Datos del cliente</h4>
            <ul className="list-group">
                <li className="list-group-item active">{nameClient}</li>
                <li className="list-group-item">{lastName}</li>
                <li className="list-group-item">{country} / {city}</li>
                <li className="list-group-item">{street} {number}</li>
            </ul>
        </div>
    );
}