import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
    console.log(error, errorInfo);
  }

  goHome = () => {
    this.setState({ hasError: false });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <h1>An error has occurred</h1>
          <div>
            <button onClick={this.goHome}>Go to home page</button>
          </div>
        </div>
      )
    }

    return children;
  }
}

export default ErrorBoundary