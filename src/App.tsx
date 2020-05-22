import * as React from "react";
import { hot } from "react-hot-loader/root";
import Wrapper from "./Wrapper";
import request from "@/utils/request";
import "./App.scss";

interface State {
  count: number;
}

// @Wrapper
class App extends React.Component<{}, State> {
  state: State = { count: 0 };
  public componentDidMount() {
    request.get("/likes-data").then((res) => {
      console.log(res);
    });
  }
  public render() {
    let { count } = this.state;
    return (
      <React.Fragment>
        <div className="App">app</div>
        <p>{count}</p>
        <div onClick={() => this.setState({ count: count + 1 })}>button</div>
        <h3>hahahfffhf!!!!</h3>
      </React.Fragment>
    );
  }
}

export default hot(App);
