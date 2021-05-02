import React from 'react';

/**
 * App
 *
 * Simple react js fetch example
 */
class News extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            data: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, data } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            Name: {item.score} | 
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default News; 