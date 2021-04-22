import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    render = () => {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>

        );
    }
}

export default App;