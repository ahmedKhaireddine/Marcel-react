import React from 'react';
import Api from '../utils/Api';
import Respiration from './Respiration';


class RespirationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            respiration: {},
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {

        Api.getRespirationPage()
            .then(data => {
                console.log("RespirationContainer#data", data);
                this.setState({
                    respiration: data.theme,
                    isLoading: false,
                });
            }).catch((err) => {
                this.setState({
                    isError: true
                })
            });
    }


    render() {
        if (this.state.isError === true) {
            return (
                <p>Erreur serveur</p>
            );
        }
        if (this.state.isLoading === true) {
            return (
                <p>Chargement...</p>
            );
        }

        // if (this.state.respiration.length === 0) {
        //     return (
        //         <p>Aucun résultat</p>
        //     );
        // }
        console.log("Respiration#this.state", this.state);

        return (
            <Respiration
                description={this.state.respiration.description}
                id={this.state.respiration._id}
            />
        );
    }
}
export default RespirationContainer;