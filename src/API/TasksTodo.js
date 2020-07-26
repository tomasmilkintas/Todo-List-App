import React from "react";

import List from "../stories/List/index";
import Input from "../stories/Input/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const TasksTodo = (props) => {
    return (
        <div>
            <List>
                {props.tasksTodo !== []
                    ? props.tasksTodo.map((item, key) => {
                          return (
                              <ListItem key={key}>
                                  <span onClick={() => props.onDeleteTask(item.key, "tasksTodo")}>
                                      {item.title}
                                      <br />
                                      {item.description}
                                  </span>

                                  <Input
                                      id="doing"
                                      style={{ float: "right" }}
                                      onChange={() =>
                                          props.onMoveTaskToDoing(item.key, "tasksTodo")
                                      }
                                      type="checkbox"
                                      name="doing"
                                  />
                                  <Input
                                      style={{ float: "right" }}
                                      onChange={() =>
                                          props.onMoveTaskToComplete(item.key, "tasksTodo")
                                      }
                                      type="checkbox"
                                      name="complete"
                                  />
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
        onDeleteTask: (key, path) => dispatch(actions.deleteTask(key, path)),
        onMoveTaskToDoing: (key, pathFrom) => dispatch(actions.moveTaskToDoing(key, pathFrom)),
        onMoveTaskToComplete: (key, pathFrom) =>
            dispatch(actions.moveTaskToComplete(key, pathFrom)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksTodo);
