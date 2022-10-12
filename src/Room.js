import { useState } from "react";

function Room(props) {
    const [lit, setLit] = useState(props.lit);

    return (
        <div className={'room ' + (lit ? 'lit' : 'dark')}>
            <button onClick={() => setLit(!lit)}>lightswitch</button>
            <p>The room is {lit ? 'lit' : 'dark'}</p>
        </div>
    );
}

export default Room;