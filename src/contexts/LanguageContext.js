import React from 'react';

const Context = React.createContext('dutch');

export class LanguageStore extends React.Component {
    state = { Language : 'english' }

    onLanguageChange = (language) => {
        this.setState({language});
    }

    render(){
        return(
            <Context.Provider value={{...this.setState, onLanguageChange : this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;