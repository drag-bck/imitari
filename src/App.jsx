import React from "react";
import SearchBar from "./components/search-bar";
import Tab from "./components/tab";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "./redux/app/actions";
import { Button } from "@material-ui/core";
import { WELCOME_TEXT, LOAD_MORE } from "./constants";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="app">
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div className="tab-container">
          {this.props.data.length > 0 ? (
            this.props.data.map((ele) => {
              return <Tab data={ele} />;
            })
          ) : (
            <div className="welcome-text">{WELCOME_TEXT}</div>
          )}
        </div>
        {!!this.props.data.length > 0 && (
          <div className="show-more-container">
            <Button
              className="show-more"
              onClick={() => {
                this.props.fetchData();
              }}
            >
              {LOAD_MORE}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.app.data };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
