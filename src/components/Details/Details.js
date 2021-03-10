import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
const Details = () => {
    const { leagueId } = useParams();
    //console.log(leagueId);
    const [leagueDetail, setLeagueDetail] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetail(data.leagues[0]))
    }, [leagueId])
    //console.log(leagueDetail);
    const { strGender, strSport, idLeague, dateFirstEvent, strCountry, strTwitter,
        strWebsite, strYoutube, strFacebook, strDescriptionEN } = leagueDetail;
    // strBanner, strBadge
    const dateToFormat = `${dateFirstEvent}`;
    // console.log(dateToFormat);
    return (
        <div>
            {/* {/* <img src={strBanner} />/ */}
            <p>Gender:{strGender}</p>
            <h2>strSport:{strSport}</h2>
            <p>Founded: <Moment format="MMMM D, YYYY" withTitle>{dateToFormat}</Moment></p>
            <p>Country:{strCountry}</p>
            <h2>Details: {idLeague}</h2>
            <p>twitter: {strTwitter}</p>
            <p>Website: {strWebsite}</p>
            <p>Youtube: {strYoutube}</p>
            <p>Facebook:{strFacebook}</p>
            <p>Description:{strDescriptionEN}</p>

        </div>
    );
};

export default Details;