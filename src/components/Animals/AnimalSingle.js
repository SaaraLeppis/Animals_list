import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalSingle = () => {
    let { animal } = useParams();
    let history = useHistory();

    return (
        <div className="single-animal">
            <div>
                <button onClick={() => history.goBack()}>
                    Back to animals
                </button>
            </div>
        </div>
    );
};

export default AnimalSingle;