import React from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";
// import Button from "../stories/Button";
// import Input from "../stories/Input";
// import firebaseInit from "./config/FirebaseInit";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Tasks = (props) => {
    return (
        <div>
            <List>
                {props.taskList !== []
                    ? props.taskList.map((item, key) => {
                          return (
                              <ListItem key={key}>
                                  <span onClick={() => props.onDeleteTask(item.key)}>
                                      {item.title}
                                      <br />
                                      {item.description}
                                  </span>
                              </ListItem>
                          );
                      })
                    : null}
            </List>
        </div>
    );
};

const mapStateToProps = (state) => ({
    taskList: state.tasks.taskList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTask: (key) => dispatch(actions.deleteTask(key)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
