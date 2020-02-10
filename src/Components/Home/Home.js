import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";

class Home extends Component {

    state = {
      posts: [],
      bookName: '',
    };

    async componentDidMount() {
      const response = await axiosAPI.get(this.state.bookName);
      this.setState({posts: response.data});
      Object.keys(this.state.posts).map(e => {
          console.log(this.state.posts[e].title)
      })
    }

    changeInputHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    };

    render() {
        return (
            <div className="home">
                <input type="text" name="bookName" onChange={this.changeInputHandler}/>
                {Object.keys(this.state.posts).map(e => (
                    <p key={e}>{this.state.posts[e].title}</p>
                ))}
            </div>
        );
    }
}

export default Home;