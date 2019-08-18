import React from 'react';

class Search extends  React.Component {
    render(){
        return(
            <div>
                {this.props.children}
                <input 
                    type="text"
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        )
    }
}

export default Search