const FetchRequest = ({requests, title}) => {
    return (
        <div className="request-preview">
            <h2>{title}</h2>
            {requests.map((requestEl) => (
                <div className="preview" key={requestEl.id}>
                    <h2><i>{requestEl.name} {requestEl.surname}</i></h2>
                    <p>Email: {requestEl.email}</p>
                    <p>Project type: {requestEl.type}</p>
                    <p>Requerements: {requestEl.comments}</p>
                </div>
            ))}
        </div>
    );
}
 
export default FetchRequest;