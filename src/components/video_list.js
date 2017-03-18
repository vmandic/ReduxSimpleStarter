import React from "react";

export default VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
}