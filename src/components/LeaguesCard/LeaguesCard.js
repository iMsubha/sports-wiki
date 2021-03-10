import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './LeaguesCard.css'
const LeaguesCard = (props) => {
    const { strLeague, strSport, idLeague } = props.league;
    const [leagueDetail, setLeagueDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setLeagueDetail(data.leagues[0]));
    }, [idLeague]);
    const { strLogo } = leagueDetail;
    return (
        <Col>
            <Card
                className="mt-4 pt-5 pb-3 d-flex justify-content-center align-items-center"
                style={{ width: "250px", height: "280px" }}
            >
                <Image className="mb-2" width={150} src={strLogo} />
                <h6 className="text-center font-weight-bolder">{strLeague}</h6>
                <p>Sport Type: {strSport}</p>
                <Link to={`/league/${idLeague}`}>
                    <Button style={{ backgroundColor: '#4b9c98', border: 'none' }}>Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </Button>
                </Link>
            </Card>
        </Col >
    );
};

export default LeaguesCard;
