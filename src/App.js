import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { robots } from './robots';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount = () => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => {
        //         this.setState({ robots: users });
        //     });
        this.setState({ robots })
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
                <h1 className="f1">RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>

            </div>

        );
    }
}

export default App;