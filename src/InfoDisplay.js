import React from "react";
const data = require("./ingredients.json");

class InfoDisplay extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const Ingredients = this.props.ingredients;
        const ListIngredients = Ingredients.map(function(ingredient, index){
            for(let item of data.ingredients){
                if(ingredient.includes(item.name)){
                    let buttonType = "btn-primary";
                    if(item.risk == "HIGH"){
                        buttonType = "btn-danger"
                    }else if(item.risk == "LOW"){
                        buttonType = "btn-success"
                    }

                    return(
                        <div className="card">
                            <div className="card-header" id={"heading" + index}>
                                <h2 className="mb-0">
                                    <button className={"btn collapsed " + buttonType} type="button" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"#collapse" + index}>
                                        {ingredient}
                                    </button>
                                </h2>
                            </div>
                            <div id={"collapse" + index} className="collapse" aria-labelledby={"heading" + index} data-parent="#ingredientAccordion">
                                <div className="card-body">
                                    <p>Desc: {item.desc}</p>
                                    <p>Risk: {item.risk}</p>
                                    <p>Notes: {item.notes}</p>
                                </div>
                            </div>
                        </div>

                    );
                }
            }
        });
        let unknown = Ingredients.filter(function(e){
            for(let item of data.ingredients){
                if(e.includes(item.name)){
                    return false;
                }
                return true;
            }

        });
        const UnknownIngredients = unknown.map(function(ingredient, index){
            return(
                <li id={index}>
                    {ingredient}
                </li>
            );
            
        });
        return(
            <div className="info-display" id="info">
                <div className="accordion" id="ingredientAccordion">
                    <h3 className="info-heading">Ingredient List</h3>
                    {ListIngredients}
                </div>
                <div className="unknown-area">
                    <h3 className="unknown-heading">Unknown Ingredients</h3>
                    <p>
                        <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#unknownIngredients"
                            aria-expanded="false" aria-controls="unknownIngredients">
                            Unknown / Not Found
                        </button>
                    </p>
                    <div className="collapse" id="unknownIngredients">
                        <div className="card card-body">
                            <ul>
                                {UnknownIngredients}
                            </ul>
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}

export default InfoDisplay;