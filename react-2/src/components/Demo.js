import React from 'react';
import Deathbar from "../components/events/Earthquake events/Deathbar";

let filter=null;
class PostRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        };
    }

    async componentDidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country: 'Pakistan' })
        };
        const response = await fetch('http://127.0.0.1:8000/Earthquake_Events/', requestOptions);
        const data = await response.json();
        this.setState({ postId: data.deaths });
    }

    render() {
        const { postId } = this.state;
        const {f} = "Pakistan"
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Async/Await</h5>
                <div className="card-body">
                    Returned Id: {postId}
                </div>
                <div className="event-container-Blog">
        <Deathbar
        val={f}
          />
      </div>
            </div>
        );
    }
}

export default PostRequestAsyncAwait ;