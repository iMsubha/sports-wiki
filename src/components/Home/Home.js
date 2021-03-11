import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import LeaguesCard from "../LeaguesCard/LeaguesCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import bannerImage from '../../images/banner5.jpg'
const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const [dark, setDark] = useState(false);
    const mood = () => {
        setDark(!dark);
    }
    const bannerStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.47), rgba(117, 19, 93, 0.3)), url(${bannerImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '250px',
    }

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setLeagues(data.leagues.slice(1, 15)));
    }, []);
    //188,220

    return (
        <div style={dark ? { backgroundColor: '#172A41' } : { backgroundColor: '#fff' }}>
            <nav style={bannerStyle}>
                <div>
                    <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="text-light mr-2" style={{ fontSize: '20px', height: '30px' }} onClick={mood} icon={faToggleOn} />
                    </div>
                    <h1 className="text-center text-light mt-5 p-5 font-italic">Sports Wiki</h1>
                </div>
            </nav>

            <Container>
                <Row>
                    {leagues.map(league =>
                        <LeaguesCard key={league.idLeague} league={league}></LeaguesCard>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
