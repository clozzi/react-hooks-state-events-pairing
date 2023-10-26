import React, { useState } from "react";

function Votes() {
    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);

    function handleUpvote() {
        setUpvote(upvote + 1);
    }

    function handleDownvote() {
        setDownvote(downvote + 1);
    }

    return (
    <div>
        <button className="upvote" onClick={handleUpvote}>{upvote} Like?</button>
        <button className="downvote" onClick={handleDownvote}>{downvote} Dislike?</button>
    </div>
    )
}

export default Votes