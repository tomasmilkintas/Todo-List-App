import React from "react";

import List from "../stories/List/index";
import Input from "../stories/Input/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Tasks = (props) => {
    return (
        <div>
            <List>
                {props.tasksTodo !== []
                    ? props.tasksTodo.map((item, key) => {
                          return (
                              <ListItem key={key}>
                                  <span onClick={() => props.onDeleteTask(item.key)}>
                                      {item.title}
                                      <br />
                                      {item.description}
                                  </span>
                                  <span>
                                      <Input onChange={() => {}} type="checkbox" name="doing" />
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
    tasksTodo: state.tasks.tasksTodo,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTask: (key) => dispatch(actions.deleteTask(key)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
