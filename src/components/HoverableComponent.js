import React, { useState } from 'react';

function HoverableComponent(props) {
    const [hovered, setHovered] = useState(false)
    return (
       <React.Fragment
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
       >
        {props.children(hovered)}
       </React.Fragment>
    )
}

export default HoverableComponent;



// function App() {
//     return (
//         <Hoverable>
//             {hovered => <div>{hovered ?  "🔥" : "🦄"}</div>}
//         </Hoverable>
//     );
// }