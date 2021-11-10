import React from "react";
import './index.css'

const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <>
            { loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please login Inline</h2>}
        </>
    );
};
export default ConditionalOutputInline;
