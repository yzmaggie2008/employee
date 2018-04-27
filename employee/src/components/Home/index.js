import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import * as actions from "../../actions";

import List from "./List.js";
import Loading from "../Loading";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(actions.getEmployees());
    this.props.dispatch(actions.toggle(false));
  }

  render() {
    return (
      <div>
        <h1>Employee Management</h1>
        <Link to="/create">
          <button type="button" className="btn btn-light">
            Create
          </button>
        </Link>
        <div className="home-container">
          {this.props.employee.isLoading ? (
            <Loading />
          ) : (
            <ul className="list-wrap">
              {this.props.employee.employee.map((employee, index) => {
                return <List key={index} data={employee} />;
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employee: state.employee
  };
};

export default connect(mapStateToProps)(Home);