import React, { useState, useEffect, useMemo } from "react";
import SearchBox from "components/SearchBox";
import Scroll from "components/Scroll";
import CardList from "components/CardList";

const RoboPage = () => {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState<Robot[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filteredRobots = useMemo(() => {
    return robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }, [robots, searchField]);

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={setSearchField} searchfield={searchField} />
      <Scroll>
        <CardList robots={robots && filteredRobots} />
      </Scroll>
    </div>
  );
};

export default RoboPage;
