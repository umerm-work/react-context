import React from 'react';

class LanguageSelect extends React.Component {
    render() {
        return (
            <div>
                Select a language:
                     <i
                    className="flag us"
                    onClick={() => this.context.onLanguageChange('english')}
                />
                <i
                    className="flag nl"
                    onClick={() => this.context.onLanguageChange('dutch')}
                />
            </div>
        )
    }
}

export default LanguageSelect;