import React from "react";

import List from "../stories/List/index";
import Input from "../stories/Input/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const TasksComplete = (props) => {
    return (
        <div>
            <List>
                {props.tasksComplete !== []
                    ? props.tasksComplete.map((item, key) => {
                          return (
                              <ListItem key={key}>
                                  <span
                                      onClick={() => props.onDeleteTask(item.key, "tasksComplete")}
                                  >
                                      {item.title}
                                      <br />
                                      {item.description}
                                  </span>
                                  <Input
                                      id="todo"
                                      style={{ float: "right" }}
                                      onChange={() =>
                                          props.onMoveTaskToTodo(item.key, "tasksComplete")
                                      }
                                      type="checkbox"
                                      name="todo"
                                  />

                                  <Input
                                      id="doing"
                                      style={{ float: "right" }}
                                      onChange={() =>
                                          props.onMoveTaskToDoing(item.key, "tasksComplete")
                                      }
                                      type="checkbox"
                                      name="doing"
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
    tasksComplete: state.tasks.tasksComplete,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTask: (key, path) => dispatch(actions.deleteTask(key, path)),
        onMoveTaskToTodo: (key, pathFrom) => dispatch(actions.moveTaskToTodo(key, pathFrom)),
        onMoveTaskToDoing: (key, pathFrom) => dispatch(actions.moveTaskToDoing(key, pathFrom)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksComplete);
