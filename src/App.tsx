import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { hot } from "react-hot-loader/root";
import Wrapper from "./Wrapper";
import ErrorToast from "@/component/error_toast";
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
    return <div className="App"><ErrorToast msg={error} clearError={clearError}/></div>;
  }
}

const mapStateToProps = (state, props) => {
  console.log(state.app.error)
  return {
    error: getError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(Wrapper(App)));
