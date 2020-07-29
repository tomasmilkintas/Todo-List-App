import React from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlay, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const TasksTodo = (props) => {
    return (
        <div>
            <List>
                {props.tasksTodo !== []
                    ? props.tasksTodo.map((item, key) => {
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
                                          icon={faPlay}
                                          onClick={() =>
                                              props.onMoveTaskToDoing(item.key, "tasksTodo")
                                          }
                                      />

                                      <FontAwesomeIcon
                                          icon={faCalendarCheck}
                                          onClick={() =>
                                              props.onMoveTaskToComplete(item.key, "tasksTodo")
                                          }
                                      />

                                      <FontAwesomeIcon
                                          icon={faTrashAlt}
                                          onClick={() => props.onDeleteTask(item.key, "tasksTodo")}
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
