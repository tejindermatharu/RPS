import React from "react";

type ErrorBoundaryState = {
    hasError: boolean;
};

export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        }

        return this.props.children;
    }
}
