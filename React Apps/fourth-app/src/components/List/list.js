import React from 'react';

class List extends  React.Component {
    render(){
        return(
           <div>
               {this.props.list.filter(item => item.status === this.props.filterBy || this.props.filterBy == -1)
                    .filter(item => item.title.toLowerCase().includes(this.props.keyword.toLowerCase()))
                    .map(item => {
                    return <div key={item.objectID}>
                                <span>
                                    <a href={item.url}>{item.title}</a>
                                </span>
                                <span>{item.author}</span>
                                <span>{item.num_comments}</span>
                                <span>{item.points}</span>
                                <button
                                onClick={() => this.props.onDismiss(item.objectID)}
                                type="button"
                                >
                                Dismiss
                                </button>
                            </div>
                })}
           </div>
        )
    }
}

export default List