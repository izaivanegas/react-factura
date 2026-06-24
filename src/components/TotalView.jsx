export const TotalView = (props) => {

    return (
        <div>
            <div className="text-end">
                <span className="badge bg-black">{props.total}</span>
            </div>
        </div>
    )
}