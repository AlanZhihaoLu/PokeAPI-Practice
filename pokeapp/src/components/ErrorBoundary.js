import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oops. Something went wrong :(</h1>
                    <h2>Try reloading. If the problem persists, somehow contact Alan lol</h2>
                </div>
            )
        } else {
            return (
                this.props.children
            )
        }
    }
}

export default ErrorBoundary;