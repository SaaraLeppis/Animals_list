import React from "react";
import { useParams, useHistory } from "react-router-dom";


const AnimalSingle = () => {
    let { animal } = useParams();
    let history = useHistory();



    return (
        <div className="single-animal">
            <h1>This is the page for
                <span className="animal-span">  {animal}</span>
            </h1>

            <div className="animal-image">
                <img src=
                    {`https://source.unsplash.com/1600x900/?${animal}`} alt="one animal" />
            </div>

            <p>Clicking here you can find what facts
                <a href={`https://www.wikipedia.org/wiki/${animal}`} target="_blank" rel="noreferrer">Wikipedia </a>
                has for {animal}</p>


            <button onClick={() => history.goBack()}>
                Back to animals
            </button>

        </div>
    );
};

export default AnimalSingle;