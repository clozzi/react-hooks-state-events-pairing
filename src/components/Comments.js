import React from "react";

function Comments({ comments }) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <div className="comments">
                {comments.map((comment) => (
                    <div>
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments