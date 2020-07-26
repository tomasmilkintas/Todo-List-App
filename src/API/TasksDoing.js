import React from "react";

import List from "../stories/List/index";
import Input from "../stories/Input/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const TasksDoing = (props) => {
    return (
        <div>
            <List>
                {props.tasksDoing !== []
                    ? props.tasksDoing.map((item, key) => {
                          return (
                              <ListItem key={key}>
                                  <span onClick={() => props.onDeleteTask(item.key, "tasksDoing")}>
                                      {item.title}
                                      <br />
                                      {item.description}
                                  </span>

                                  <Input
                                      style={{ float: "right" }}
                                      onChange={() =>
                                          props.onMoveTaskToTodo(item.key, "tasksDoing")
                                      }
                                      type="checkbox"
                                      name="doing"
                                  />
                                  <Input
                                      style={{ float: "right" }}
                                      onChange={() =>
                                          props.onMoveTaskToComplete(item.key, "tasksDoing")
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
