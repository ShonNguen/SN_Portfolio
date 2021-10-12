import ae from "../img/Porto_AE.jpg";
import hel1 from "../img/Porto_HEL01.jpg";
import hel2 from "../img/Porto_HEL02.jpg";
import semi from "../img/Porto_SemiAE.jpg";

const ProjectPorto = () => {
    return (
        <div className="projectImages">
            <h2>Porto house</h2>
            <ul>
                <li><img src={ae} alt="" /></li>
                <li><img src={hel1} alt="" /></li>
                <li><img src={hel2} alt="" /></li>
                <li><img src={semi} alt="" /></li>
            </ul>
        </div>
    );
}
 
export default ProjectPorto;