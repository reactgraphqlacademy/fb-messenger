import React from "react";
import { logErrorToMyService } from "../utils";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // return <h1>Something went wrong... ErrorBoundary to the rescue</h1>;
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <h1>Something went wrong... ErrorBoundary to the rescue</h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
