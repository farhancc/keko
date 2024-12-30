import React, { useState } from "react";
import Card from "./Card";
import { robots } from "./robort";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
const App = () => {
  const [searchResult, setSearchResult] = useState("");

  console.log(robots);
  return (
    <div className="App tc ">
      <h1> Robo Friends</h1>
      <SearchBox searchResult={setSearchResult} />
      {/* {searchResult} */}
      <ErrorBoundry>
        <Scroll>
          {robots
            .filter((el) =>
              el.name.toLowerCase().includes(searchResult.toLowerCase())
            )
            .map((el) => (
              <Card key={el.id} item={el} />
            ))}
        </Scroll>
      </ErrorBoundry>
    </div>
  );
};

export default App;
