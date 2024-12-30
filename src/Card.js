// import React, { Component } from "react";

// export default class Card extends Component {
//   render(props) {
//     return (
//       <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
//         <img src="https://robohash.org/test?100*100" alt="robot" />
//         <h2>{props.item.name}</h2>
//         {/* <p>{item.email}</p> */}
//       </div>
//     );
//   }
// }

import React from "react";

function Card({ item }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${item?.id}?100*100`} alt="robot" />
      <h2>{item?.name}</h2>
      <p>{item?.email}</p>
    </div>
  );
}

export default Card;
