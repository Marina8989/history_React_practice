import React from 'react';

const Feed = ({author, download_url}) => {
    return(
        <div>
            <div>{author}</div>
            <div>
                <img src={download_url} />
            </div>
        </div>
    )
}
export default Feed;