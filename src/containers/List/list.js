import React,{Component} from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
  
    }
    render(){
        return(
            <div>{this.props.colors} {this.props.colors.length}</div>
        )

    }
}    

export default List;