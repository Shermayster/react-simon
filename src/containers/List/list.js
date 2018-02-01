import React,{Component} from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="colors">{this.props.colors}</div>
        )

    }
}    

export default List;