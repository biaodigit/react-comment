import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { hot } from "react-hot-loader/root";
import Wrapper from "./Wrapper";
import Home from './views/home'
import ErrorToast from "@/components/error_toast";
import request from "@/utils/request";
import { actions as appActions, getError } from "@/store/modules/app";
import "./App.scss";

interface State {
  // count: number;
}

interface Props {
  error: string;
  clearError: () => void
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    console.log(this.props)
  }
  public render() {
    const {error,clearError} = this.props
    return (
      <React.Fragment>
        <Home/>
        {/* <ErrorToast msg={error} clearError={clearError}/> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    error: getError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(appActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(Wrapper(App)));
