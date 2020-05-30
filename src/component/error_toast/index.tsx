import * as React from "react";
import './index.scss'

interface Props {
  msg: string;
  clearError: () => void;
}

class ErrorToast extends React.Component<Props, {}> {
  private timer: ReturnType<typeof setTimeout>;
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.clearError();
    }, 3000);
  }

  public render() {
    const { msg } = this.props;
    return (
      <div className="errorToast">
        <div className="errorToast_text">{msg}</div>
      </div>
    );
  }

  public componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}

export default ErrorToast;
