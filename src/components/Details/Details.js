import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { Col, Container, Image, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import maleLeagueImg from "../../images/male.png";
import femaleLeagueImg from "../../images/female.png";
import youtube from "../../icons/YouTube.png"
import twitter from "../../icons/Twitter.png";
import facebook from "../../icons/Facebook.png";
import foundedIcon from "../../icons/found.png"
import countryIcon from "../../icons/flag.png"
import sportsIcon from "../../icons/football.png"
import genderIcon from "../../icons/male-gender-sign.png"
import bannerImage from '../../images/banner5.jpg'
const Details = () => {
    const { leagueId } = useParams();
    const [leagueDetail, setLeagueDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setLeagueDetail(data.leagues[0]));
    }, [leagueId]);

    const {
        strGender,
        strLeague,
        strCountry,
        strSport,
        dateFirstEvent,
        strPoster,
        strDescriptionEN,
        strTwitter,
        strFacebook,
        strYoutube,
        strFanart2
    } = leagueDetail;
    const dateToFormat = `${dateFirstEvent}`;
    const bannerStyle = {
        // backgroundImage: `url("../../images/banner5.jpg"),url(${strFanart2})`,
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.47), rgba(117, 19, 93, 0.3)), 
        url(${strFanart2}),url(${bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '300px'
    };

    return (
        <div>
            <div style={bannerStyle} className="d-flex justify-content-end"></div>

            <Container className="rounded-lg mt-4" style={{ backgroundColor: "#4b9c98" }}>
                <Row className=" d-flex justify-content-center align-items-center" >
                    <Col sm={12} md={6} lg={6}>
                        <h5 className="font-weight-bolder">{strLeague}</h5>
                        <div className="pb-1">
                            <Image className="d-inline" src={foundedIcon} width={18}></Image>
                            <small className="d-inline">
                                {" "}Founded :{" "}
                                <Moment format="MMMM D, YYYY" withTitle>
                                    {dateToFormat}
                                </Moment>
                            </small>
                        </div>
                        <div className="pb-1">
                            <Image className="d-inline" src={countryIcon} width={18} />
                            <small className="d-inline">{" "}Country :{" "}{strCountry}</small>
                        </div>
                        <div className="pb-1">
                            <Image className="d-inline" src={sportsIcon} width={18} />
                            <small className="d-inline">{" "}Sport Type :{" "}{strSport}</small>
                        </div>
                        <div className="pb-1">
                            <Image className="d-inline" src={genderIcon} width={18} />
                            <small className="d-inline">{" "}Gender :{" "}{strGender}</small>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                        {
                            (strGender === "Male") ?
                                <Image className="p-3" style={{ hight: '100px' }} src={maleLeagueImg} height={200} width={500}></Image>
                                : <Image className="p-3" style={{ hight: '100px' }} src={femaleLeagueImg} height={200} width={500}></Image>
                        }
                    </Col>
                </Row>
            </Container>
            <Container className="mt-4">
                <p className="font-size-small">{strDescriptionEN}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                    amet quis rem blanditiis ut in natus repudiandae qui ipsam nesciunt
                    libero culpa, fuga accusamus, autem molestiae animi veritatis eaque.
                    Natus Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda, cum aliquid quis exercitationem laboriosam laborum, veniam
                    asperiores quod, earum mollitia cupiditate fuga tenetur similique
                    expedita sed labore officiis temporibus odio. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Laudantium amet quis rem blanditiis
                    ut in natus repudiandae qui ipsam nesciunt libero culpa, fuga
                    accusamus, autem molestiae animi veritatis eaque. Natus Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Assumenda, cum aliquid
                    quis exercitationem laboriosam laborum, veniam asperiores quod, earum
                    mollitia cupiditate fuga tenetur similique expedita sed labore
                    officiis temporibus odio.
        </p>
            </Container>
            <footer className="d-flex justify-content-center align-items-center mb-5 mt-5">
                <Image src={twitter} height={40}></Image>
                <Image src={facebook} height={40}></Image>
                <Image src={youtube} height={40}></Image>
            </footer>
        </div >
    );
};

export default Details;
