import React from 'react';
function HomeContent(props){
    const {match} = props;
    return <h1>{match.params.Module}</h1>
}

export default HomeContent;