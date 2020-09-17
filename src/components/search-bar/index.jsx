import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TextField, Button } from "@material-ui/core";
import { GO } from "./../../constants";
import {
  setSearchString,
  fetchData,
  resetData,
  resetPageNo,
} from "./../../redux/app/actions";
import "./search-bar.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sString: "",
    };
  }
  render() {
    return (
      <div className="search-bar">
        <div className="input-div">
          <TextField
            className="input-css"
            label="Search"
            InputProps={{ disableUnderline: true }}
            onChange={(e) => {
              this.setState({ sString: e.target.value });
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.props.resetData();
                this.props.resetPageNo();
                this.props.setSearchString(this.state.sString);
                this.props.fetchData();
              }
            }}
          />
        </div>
        <div className="button-div">
          <Button
            className="button-css"
            color="primary"
            onClick={() => {
              this.props.resetData();
              this.props.resetPageNo();
              this.props.setSearchString(this.state.sString);
              this.props.fetchData();
            }}
          >
            {GO}
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchString: state.app.searchString,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setSearchString, fetchData, resetData, resetPageNo },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
