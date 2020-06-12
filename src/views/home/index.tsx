import * as React from "react";
import HomeHeader from "./components/home_header";
import Category from "./components/category";
import Headline from "./components/headline";
import Discount from "./components/discount";
import LikeList from "./components/like_list";
import Banner from "./components/bannner";
import Activity from "./components/activity";
import Footer from "@/components/footer";

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <Banner />
        <Category />
        <Headline />
        <Activity />
        <Discount />
        <LikeList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
