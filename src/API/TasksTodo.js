import React from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlay, faCalendarCheck, faEdit } from "@fortawesome/free-solid-svg-icons";

import { withRouter } from "react-router-dom";

const TasksTodo = (props) => {
    // const clickHandler = (key) => {
    //     props.onGetTaskDetails(key);
    //     props.history.push("/updatetask");
    // };

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
                                      <br />
                                      <b>Deadline:</b>
                                      {item.deadline}
                                  </span>

                                  <div>
                                      {/* <FontAwesomeIcon
                                          icon={faEdit}
                                          onClick={() => clickHandler(item.key)}
                                      /> */}
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
        onGetTaskDetails: (key) => dispatch(actions.getTaskDetails(key)),
        onDeleteTask: (key, path) => dispatch(actions.deleteTask(key, path)),
        onMoveTaskToDoing: (key, pathFrom) => dispatch(actions.moveTaskToDoing(key, pathFrom)),
        onMoveTaskToComplete: (key, pathFrom) =>
            dispatch(actions.moveTaskToComplete(key, pathFrom)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TasksTodo));
