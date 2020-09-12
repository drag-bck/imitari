import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./tab.scss";

class Tab extends React.Component {
  render() {
    return (
      <div className="tab">
        <div
          className="image"
          style={{ backgroundImage: `url(${this.props.data.image_url})` }}
        ></div>
        <div className="title" title={this.props.data.title}>
          {this.props.data.title && this.props.data.title.length > 25
            ? this.props.data.title.substr(0, 25) + "..."
            : this.props.data.title}
          {/* {this.props.data.title} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
