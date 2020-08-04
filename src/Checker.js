import React from 'react';
import InfoDisplay from './InfoDisplay';
const data = require("./ingredients.json");

class Checker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            ingredients: []

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        const re = /\s*(?:,|\.$)\s*/
        const Ingredients = this.state.value.toLowerCase().split(re);
        let element = document.getElementById('info');
        this.setState({ingredients: Ingredients});
        element.style.display = "block";
        console.log(Ingredients);

    }
    render(){
        return(
            <div className="checker">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Paste Ingredients</span>
                        </div>
                        <textarea className="form-control" aria-label="Paste Ingredients" value={this.state.value}
                            onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-dark">
                        <span className="fa-stack">
                            <i className="fal fa-search fa-stack-2x"></i>
                            <i className="fas fa-wheat fa-stack-1x fa-flip-horizontal"></i>
                        </span>
                    </button>
                </form>
                <InfoDisplay ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checker;