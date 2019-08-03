// https://stackoverflow.com/questions/54565516/react-using-emojis-in-a-drop-down

import React from 'react';

const Emoji = props => {
    let claseEmoji;
    switch (props.size) {
        case 'md':
            claseEmoji = 'emoji h3';
            break;
        case 'lg':
            claseEmoji = 'emoji h1';
            break;
    
        default:
                claseEmoji = 'emoji';
            break;
    }
    return (
        <span
            className={claseEmoji}
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
            value={props.label}
        >
            {props.symbol}
        </span>
    );
}

export default Emoji;