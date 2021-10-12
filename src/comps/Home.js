import porto from "../img/Porto_AE.jpg";
import portoTop from "../img/Porto_AE_desat.jpg";
import roshdale from "../img/Roshdale_HEL02.jpg";
import roshdaleTop from "../img/Roshdale_HEL02_desat.jpg";
import ucy from "../img/UCY_CafeFinal.jpg";
import ucyTop from "../img/UCY_CafeFinal_desat.jpg";
import PersonalInfo from "./PersonalInfo";
import Project from "./Project";

const Home = () => {
    return (
        <div className="home">
            <PersonalInfo />

            <Project 
                imageScource={ porto } 
                topImage={ portoTop }
                projectName="Porto house" 
                projectLocation="Porto, Portugal" 
                nOfImages="5"
                projectLink="/project/ProjectPorto"
            />

            <Project 
                imageScource={ roshdale } 
                topImage={ roshdaleTop }
                projectName="Roshdale house" 
                projectLocation="Roshdale, UK" 
                nOfImages="4"
                projectLink="/project/ProjectRoshdale"
            />

            <Project 
                imageScource={ucy} 
                topImage={ ucyTop }
                projectName="University of Cyprus" 
                projectLocation="Cyprus, Greece" 
                nOfImages="4"
                projectLink="/project/ProjectUCY"
            />

        </div>
    );
}
 
export default Home;