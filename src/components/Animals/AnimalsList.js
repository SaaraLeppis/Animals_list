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

                <Switch>
                    <Route exact path={this.props.match.path}>
                        <div className="list-input-wrap">
                            <label>Search: </label>                       <input placeholder="Which animal to search..." type="text" onChange={this.searchInputHandler} />
                        </div>
                        <div className="animals-list">{animalslisting}</div>
                    </Route>
                    <Route path={`${this.props.match.path}/:animal`}>
                        <AnimalSingle />
                    </Route>
                </Switch>
            </div>
        )
    };
};
export default withRouter(AnimalsList);