// https://stackoverflow.com/questions/54565516/react-using-emojis-in-a-drop-down

import React from 'react';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        value={props.label}
    >
        {props.symbol}
    </span>
);

export default Emoji;