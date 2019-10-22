// == Import : npm
import React from 'react';

// == Import : local
import './events.scss';

// == Composant
//function ButtonClickAdvanced(e) {
//    e.preventDefault();
//    console.log('bouton 2 cliqué ');
//    // effectuer ici la recherche avancée
//}

//function handleChange(event) {
//    this.setState({value: event.target.value});
//}

//function handleSubmit(event) {
//    console.log('this.state.value');
//    event.preventDefault();
//}

// https://fr.reactjs.org/docs/forms.html
// https://www.apprendre-react.fr/tutorial/debutant/les-composants/


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search : '' };

        this.buttonClick = this.buttonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        let Form = this.props.Form;
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <div className="searchBar">
                        <label> Recherche simple
                            <input type="text" className="searchBar-input" placeholder="Que recherchez-vous ?" value={this.state.search} onChange={this.handleCHange} />
                        </label>
                        <input type="submit" className="searchBar-button" onClick={this.buttonClick} value='Rechercher' />
                    </div>
                    <div className="searchBarAdvanced">
                        <p>Recherche avancée</p>
                        <input type="search" className="searchBar-input" placeholder="Tapez un mot-clef" />
                        <label className="searchBarAdvanced-label_tag">Tag
                            <select name="tag" value={this.state.value}>
                                <option value="{this.state.value}">{name}</option>
                                <option value="{this.state.value}">{name}</option>
                                <option value="{this.state.value}">{name}</option>
                            </select>
                        </label>
                        <label clasName="searchBarAdvanced-label_price">Prix
                            <input type="radio" className="searchBarAdvanced-price" name="prix" value="gratuit" />
                            <label for="gratuit">Gratuit</label>
                            <input type="radio" className="searchBarAdvanced-price" name="prix" value="payant" />
                            <label for="payant">Payant</label>
                        </label>
                        <fieldset className="searchBarAdvanced-label_broadcast">Diffusion internet
                            <input type="radio" className="searchBarAdvanced-broadcast" name="diffusion" value="oui" />
                            <label for="oui">Oui</label>
                            <input type="radio" className="searchBarAdvanced-broadcast" name="diffusion" value="non" />
                            <label for="non">Non</label>
                        </fieldset>
                        <label className="searchBarAdvanced-label_date">Date de début
                            <input type="date" name="date" min="2019-10-01" max="2020-02-29" />
                        </label>
                        <label className="searchBarAdvanced-label_adress">Ville
                            <input list="villes" id="searchBarAdvanced-label_adress-cities" name="ville" />
                            <datalist id="villes">
                                <option value="{address.event}" />
                                <option value="{address.event}" />
                                <option value="{address.event}" />
                            </datalist>
                        </label>
                        <button type="submit" className="searchBar-button" onClick>Rechercher</button>
                    </div>
                </form>
            </div>
        );
    }

    buttonClick = () => {
        event.preventDefault();
        console.log('bouton cliqué');
        this.setState({
            clicked : !this.state.clicked
        });
        console.log(this);
        // effectuer ici une recherche par mot-clef
    }

    handleChange(event) {
        this.setState({search: event.target.search});
    }

    handleSubmit(event) {
        console.log('test : ' + this.state.search);
    }

}



// == Export
export default Form;