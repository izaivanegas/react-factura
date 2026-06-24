
export const CompanyView = ({nameCompany, fiscalNumber}) => {

    return (
        <div>
            <h4>Datos de la compania</h4>
            <ul className="list-group">
                <li className="list-group-item active">{nameCompany}</li>
                <li className="list-group-item">{fiscalNumber}</li>
            </ul>
        </div>
    );

}