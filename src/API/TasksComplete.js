import React from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUndoAlt } from "@fortawesome/free-solid-svg-icons";

const TasksComplete = (props) => {
    return (
        <div>
            <List>
                {props.tasksComplete !== []
                    ? props.tasksComplete.map((item, key) => {
                          return (
                              <ListItem key={key}>
                                  <span>
                                      <b>Title:</b>
                                      {item.title}
                                      <br />
                                      <b>Description:</b>
                                      {item.description}
                                  </span>
                                  <div>
                                      <FontAwesomeIcon
                                          icon={faUndoAlt}
                                          onClick={() =>
                                              props.onMoveTaskToTodo(item.key, "tasksComplete")
                                          }
                                      />
                                      <FontAwesomeIcon
                                          icon={faTrashAlt}
                                          onClick={() =>
                                              props.onDeleteTask(item.key, "tasksComplete")
                                          }
                                      />
                                  </div>
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
