import React, {Component} from 'react';
import './Intercom.css';
import axiosAPI from "../../axiosAPI";

class Intercom extends Component {

    state = {
      posts: [],
    };

    async componentDidMount() {
        const response = await axiosAPI.get();
        this.setState({posts: response.data})
    }

    render() {
        console.log(this.state.posts);
        return (
            <div className="Intercom">
                {Object.keys(this.state.posts).map((e) => (
                    <div className="block-post" key={e}>
                        <p className="title">{this.state.posts[e].title}</p>
                        <div className="img-block">
                        <img src={this.state.posts[e].image} alt={e}/>
                        <p className="syn">{this.state.posts[e].synopse}</p>
                        </div>
                        <h3 className="text">{this.state.posts[e].genre}</h3>
                        <p className="author">{this.state.posts[e].author}</p>
                        <p className="date">Дата выпуска <span>{this.state.posts[e].launchedDate}</span></p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Intercom;