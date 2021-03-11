import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const LeaguesCard = (props) => {
    const { strLeague, strSport, idLeague } = props.league;
    const [leagueDetail, setLeagueDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setLeagueDetail(data.leagues[0]));
    }, [idLeague]);
    const { strBadge } = leagueDetail;
    return (
        <Col className="mt-5 p-2">
            <Card
                className="d-flex justify-content-center align-items-center shadow-lg"
                style={{ width: "250px", height: "280px" }}
            >
                <Image className="mb-3" width={90} src={strBadge} />
                <h6 className="text-center font-weight-bolder">{strLeague}</h6>
                <p><small>Sport Type: {strSport}</small></p>
                <Link to={`/league/${idLeague}`}>
                    <Button style={{ backgroundColor: '#4b9c98', border: 'none' }}>Explore  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </Button>
                </Link>
            </Card>
        </Col>
    );
};

export default LeaguesCard;
