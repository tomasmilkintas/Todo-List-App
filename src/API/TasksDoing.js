import React from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPause, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const TasksDoing = (props) => {
    return (
        <div>
            <List>
                {props.tasksDoing !== []
                    ? props.tasksDoing.map((item, key) => {
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
                                          icon={faPause}
                                          onClick={() =>
                                              props.onMoveTaskToTodo(item.key, "tasksDoing")
                                          }
                                      />

                                      <FontAwesomeIcon
                                          icon={faCalendarCheck}
                                          onClick={() =>
                                              props.onMoveTaskToComplete(item.key, "tasksDoing")
                                          }
                                      />

                                      <FontAwesomeIcon
                                          icon={faTrashAlt}
                                          onClick={() => props.onDeleteTask(item.key, "tasksDoing")}
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
    tasksDoing: state.tasks.tasksDoing,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTask: (key, path) => dispatch(actions.deleteTask(key, path)),
        onMoveTaskToTodo: (key, pathFrom) => dispatch(actions.moveTaskToTodo(key, pathFrom)),
        onMoveTaskToComplete: (key, pathFrom) =>
            dispatch(actions.moveTaskToComplete(key, pathFrom)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksDoing);
