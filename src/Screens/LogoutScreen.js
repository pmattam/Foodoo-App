import React from 'react';
import { removeUserFromStore } from "../Actions/dispatch-actions";
import { connect } from "react-redux";

let LogoutScreenWrapper = ({ props, removeUserFromStore }) => {
  localStorage.removeItem("authorization");
  removeUserFromStore();
  props.history.push("/");
  return(
    <div>
    </div>
  )
};

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch =>  ({ removeUserFromStore: () => dispatch(removeUserFromStore()) });
    
let LogoutScreen = connect(mapStateToProps, mapDispatchToProps)(LogoutScreenWrapper);

export default LogoutScreen;