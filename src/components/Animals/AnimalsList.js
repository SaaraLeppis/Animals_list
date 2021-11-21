import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";
import { Switch, Route, withRouter } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

class AnimalsList extends Component {
    state = {
        searchInput: "",
    }
    searchInputHandler = (e) => {
        this.setState({
            searchInput: e.target.value,
        });
        console.log(this.state.searchInput);
    };

    animalsListing = animals.map((item) => (
        <AnimalsCard key={item.name} name={item.name} />
    ));

    render() {
        const animalFilter = animals.filter((animal) => {
            return animal.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
        });

        const animalslisting = animalFilter.map((item) => (
            <AnimalsCard key={item.name} name={item.name} />
        ))


        return (
            <div className="animalsList">
                <label>Search</label>

                <div className="wrapper">
                    <Switch>

                        <Route exact path={this.props.match.path}>
                            <input type="text" onChange={this.searchInputHandler} />
                            <div className="animals-list">{animalslisting}</div>
                        </Route>
                        <Route path={`${this.props.match.path}/:animal`}>
                            <AnimalSingle />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    };
};
export default withRouter(AnimalsList);