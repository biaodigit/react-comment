import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import Wrapper from "./Wrapper";
import Home from "./views/home";
import ErrorToast from "@/components/error_toast";
import { actions as appActions, getError } from "@/store/modules/app";
import "./App.scss";

interface State {

}

interface Props {
  error: string;
  clearError: () => void;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { error, clearError } = this.props;
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        {error ? <ErrorToast msg={error} clearError={clearError} /> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    error: getError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(appActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(Wrapper(App)));
