import React from 'react';
import { Picture, Document, Movie, Music } from '../content';
function HomeContent(props) {
    const { match } = props;
    switch (match.params.Module) {
        case "picture":
            return <Picture />;
        case "document":
            return <Document />;
        case "movie":
            return <Movie />;
        case "music":
            return <Music />;
        default:
            return <h1>I'm Sorry,{match.params.Module} page is on developing</h1>
    }
}

export default HomeContent;