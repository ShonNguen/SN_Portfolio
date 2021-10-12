import { useEffect, useState } from "react";
import FetchRequest from "./FetchRequest";

const Request = () => {
    const [allRequests, setAllRequests] = useState(null); 

    useEffect( () => {
        fetch('http://localhost:8000/requests')
        .then( res => {
            return res.json();
        })
        .then( data => {
            setAllRequests(data); 
        });
    }, []); 

    return (
        <div className="responce">
            <h2>Your request was submitted!</h2>
            <p>I will contact you as soon as possible!</p>

            <div className="allRequests">
                {allRequests && <FetchRequest requests={allRequests} title="All requests:"/>}
            </div>
        </div>
    );
}
 
export default Request;