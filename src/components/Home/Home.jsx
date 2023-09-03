import NavMenu from "../NavMenu/NavMenu";
import Welcome from "../Welcome/Welcome";
import './Home.scss'

const Home = function () {
    return (
        <div id="HomeContainer">
            < NavMenu className="homeNavMenu" />

            <div className="homeWelcomeContainer">< Welcome /></div>


        </div>

    )

}

export default Home;