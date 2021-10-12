import hel1 from "../img/Roshdale_HEL01.jpg"
import hel2 from "../img/Roshdale_HEL02.jpg"
import int1 from "../img/Roshdale_Int01.jpg"
import int2 from "../img/Roshdale_Int02.jpg"

const ProjectRoshdale = () => {
    return (
        <div className="projectImages">
        <h2>Roshdale house</h2>
        <ul>
            <li><img src={hel1} alt="" /></li>
            <li><img src={hel2} alt="" /></li>
            <li><img src={int1} alt="" /></li>
            <li><img src={int2} alt="" /></li>
        </ul>
    </div>
    );
}
 
export default ProjectRoshdale;