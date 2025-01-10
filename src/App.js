import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { robots } from "./robort";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { setSearchField } from "./action";
import ErrorBoundry from "./ErrorBoundry";
const mapStateToProps = (state) => {
  return {
    searchField: "hello",
    // state.searchRobots.searchField,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
});
const App = ({ store }) => {
  const [searchResult, setSearchResult] = useState("");

  console.log(store);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
