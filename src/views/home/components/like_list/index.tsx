import * as React from "react";
import LikeItem from "../like_item";
import Loading from "@/components/loading";
import "./index.scss";

interface LikeListProps {
  data: Array<LikeItem>;
  pageCount: number;
  fetchData: () => void;
}

interface LikeListState {}

class Likelist extends React.Component<LikeListProps, LikeListState> {
  private myRef: React.RefObject<HTMLDivElement>;
  private removeListener: boolean;

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.removeListener = false;
  }

  public componentDidMount() {
    if (this.props.pageCount === 0) {
      this.props.fetchData();
    }
    if (this.props.pageCount < 3) {
      document.addEventListener("scroll", this.handleScroll);
    } else {
      this.removeListener = true;
    }
  }

  public componentDidUpdate() {
    if (this.props.pageCount >= 3 && !this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
      this.removeListener = true;
    }
  }

  private handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const screenHeight = document.documentElement.clientHeight;
    const likeListTop = this.myRef.current.offsetTop;
    const likeListHeight = this.myRef.current.offsetHeight;
    if (scrollTop >= likeListHeight + likeListTop - screenHeight) {
      this.props.fetchData();
    }
  };

  public render() {
    const { data, pageCount } = this.props;
    return (
      <div ref={this.myRef} className="likeList">
        <div className="likeList__header">猜你喜欢</div>
        <div className="likeList__list">
          {data.map((item) => {
            return <LikeItem key={item.id} {...item} />;
          })}
        </div>
        {pageCount < 3 ? (
          <Loading />
        ) : (
          <a className="likeList__viewAll">查看更多</a>
        )}
      </div>
    );
  }

  public componentWillUnmount() {
    if (!this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
    }
  }
}

export default Likelist;
