import { Link } from "react-router-dom";

const Project = ({ 
    imageScource, 
    topImage, 
    projectName, 
    projectLocation, 
    nOfImages, 
    projectLink}) => {
    return (
        <div className="project">
        <div className="thumbnail">
            <Link to={ projectLink }>
                <img 
                src={ topImage } 
                onMouseOver={ e => e.currentTarget.src = imageScource }
                onMouseOut={ e => e.currentTarget.src = topImage}
                />
            </Link>
        </div>

        <div className="projectinfo">
            <h3>{ projectName }</h3>
            <p>Location: <strong>{ projectLocation }</ strong></p>
            <p>N. of images: <strong>{ nOfImages }</strong></p>
        </div>
    </div>
    );
}
 
export default Project;