import { useState } from "react";
import { useHistory } from "react-router";

const Contact = () => {
    const [name, setName] = useState(''); 
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState(''); 
    const [comments, setComments] = useState('');
    const [type, setType] = useState('design');
    const history = useHistory(); 
    

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const request = { name, surname, email, comments, type};

        fetch('http://localhost:8000/requests', {
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(request)
        }).then( () =>{
            console.log("new request added"); 
            history.push('/request');
        })
    }

    return (
        <div className="contact">
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
                <label for="firstName">Firts name:</label>
                <input 
                    type="text" 
                    id="firstName" 
                    required
                    value={ name }
                    onChange={(e) => setName(e.target.value)}
                />

                <label for="secondName">Surname:</label>
                <input 
                    type="text" 
                    id="secondName"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />

                <label for="email" >E-mail:</label>
                <input 
                    type="email" 
                    id="email" 
                    required
                    value={ email }
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label for="project">Type of project:</label>
                <select 
                    name="project" 
                    id="project"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="design">Design</option>
                    <option value="vizualisation">Vizualisation</option>
                </select><br />

                <label for="comments" id="comments" >Project requirements:</label>
                <textarea 
                    id="comments"
                    placeholder="Specific information"
                    required
                    value={ comments }
                    onChange={(e) => setComments(e.target.value)}
                ></textarea>

                <button type="submit">Submit</button>
            </form>

        </div>
    );
}
 
export default Contact;