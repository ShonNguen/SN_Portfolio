import bedroom from "../img/UCY_Bedroom.jpg"
import cafe from "../img/UCY_CafeFinal.jpg"
import event from "../img/UCY_EventSpace.jpg"
import lobby from "../img/UCY_Lobby.jpg"

const ProjectUCY = () => {
    return (
        <div className="projectImages">
            <h2>Porto house</h2>
            <ul>
                <li><img src={bedroom} alt="" /></li>
                <li><img src={cafe} alt="" /></li>
                <li><img src={event} alt="" /></li>
                <li><img src={lobby} alt="" /></li>
            </ul>
        </div>
    );
}
 
export default ProjectUCY;