import React , {Component} from 'react';


class SearchBar extends Component {
  constructor(props){
      super(props);

      this.state ={term:''};

  }



  render(){
    return (
      <div>
      <input
       value={this.state.term}
       onChange={event =>this.setState({
        term : event.target.value
      })}
       />
      <div>
      search input : {this.state.term}
      </div>
      </div>
    );
  }

  // onChagenInput(event){
  //   this.setState({ term : event.target.value});
  // }


}
export default SearchBar;
