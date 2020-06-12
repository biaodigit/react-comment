import * as React from "react";

type injectProps = {
  error: string;
};

const BorderHoc = (WrappedComponent: React.ComponentType) =>
  class extends React.Component {
    public componentDidMount() {
      console.log(this.props);
    }
    public render() {
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
export default BorderHoc;
