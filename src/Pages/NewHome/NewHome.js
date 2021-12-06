import React from 'react';
import Feeds from '../../components/Feeds/Feeds';
import Suggestions from '../../components/Suggestions/Suggestion';

const  NewHome = () => {
    return(
        <div>
            <Feeds />
            <Suggestions />
        </div>
    )
}

export default NewHome