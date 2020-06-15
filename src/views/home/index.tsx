import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeHeader from "./components/home_header";
import Category from "./components/category";
import Headline from "./components/headline";
import Discount from "./components/discount";
import LikeList from "./components/like_list";
import Banner from "./components/bannner";
import Activity from "./components/activity";
import Footer from "@/components/footer";
import {
  actions as homeActions,
  getLikes,
  getDiscounts,
  getPageCountOfLikes,
} from "@/store/modules/views/home";


interface HomeProps {
  likes: Array<LikeItem>;
  discounts: Array<DiscountItem>;
  pageCount: number;
  loadLikes: () => void;
  loadDiscounts: () => void;
}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props) {
    super(props);
  }

  private fetchMoreLikes = () => {
    this.props.loadLikes();
  };

  public componentDidMount() {
    this.props.loadDiscounts();
  }

  public render() {
    const { likes, discounts, pageCount } = this.props;
    return (
      <React.Fragment>
        <HomeHeader />
        <Banner />
        <Category />
        <Headline />
        <Activity />
        <Discount data={discounts} />
        <LikeList
          data={likes}
          pageCount={pageCount}
          fetchData={this.fetchMoreLikes}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    likes: getLikes(state),
    discounts: getDiscounts(state),
    pageCount: getPageCountOfLikes(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(homeActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
