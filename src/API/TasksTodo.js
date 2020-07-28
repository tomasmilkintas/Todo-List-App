import React, { useState } from "react";

import List from "../stories/List/index";
import Input from "../stories/Input/index";
import ListItem from "../stories/List/ListItem/index";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const TasksTodo = (props) => {
    // const [selected, setSelected] = useState("");

    // const changeHandler = (e, key) => {
    //     e.preventDefault();
    //     if (e.target.value === "doing") {
    //         setSelected(e.target.value);
    //         props.onMoveTaskToDoing(key, "tasksTodo");
    //     } else if (e.target.value === "complete") {
    //         setSelected(e.target.value);
    //         props.onMoveTaskToComplete(key, "tasksTodo");
    //     }
    // };

    return (
        <div>
            <List>
                {props.tasksTodo !== []
                    ? props.tasksTodo.map((item, key) => {
                          return (
                              <ListItem key={key}>
                                  <span onClick={() => props.onDeleteTask(item.key, "tasksTodo")}>
                                      <b>Title:</b>
                                      {item.title}
                                      <br />
                                      <b>Description:</b>
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

                                  {/* <select
                                      key={key}
                                      onChange={(e) => {
                                          changeHandler(e, key);
                                      }}
                                      value={selected}
                                  >
                                      <option selected value="todo">
                                          Todo
                                      </option>
                                      <option value="doing">Doing</option>
                                      <option value="complete">Complete</option>
                                  </select> */}
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
