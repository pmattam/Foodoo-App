// import React from 'react';

// import { connect } from 'react-redux';

// import { newEventCreator } from "../Actions/dispatch-actions";

// import createNewIcon from '../images/create-new-icon.svg';

// let mapDispatchToProps = (dispatch) => {
//   return {newEventCreator: (details) => dispatch(newEventCreator(details))};
// }

// const styles = {
//   "table-layout": "auto",
//   width: "400px"
// }

// class CreateNew extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       creatingPartOne: true,
//       needAnotherRow: false
//     }
//   }

//     render() {

//       let clickNext = () => {
//         return this.setState({creatingPartOne: false});
//       }
      
//       let clickSave = () => {
//         return this.props.newEventCreator(this.state);
//       }

//       let addNewRow = () => {
//         return this.setState({needAnotherRow: true})
//       }

//       //refactor this to be a separate component
//       let renderMetaDataIntakeForm = () => {
//         return (
//           <div className="form-container">
//             <p> Client Name </p>
//             <input type="text" name="client-name-input" onChange={(event) => this.setState({clientname: event.target.value})}/>

//             <p> Date </p>
//             <input type="text" name="date-input" onChange={(event) => this.setState({eventdate: event.target.value})}/>

//             <p> Event Title </p>
//             <input type="text" name="event-title-input" onChange={(event) => this.setState({eventtitle: event.target.value})}/>

//             <p> Event Description </p>
//             <textarea name="event-description-input" onChange={(event) => this.setState({eventdescription: event.target.value})}/>
  
//             <p> Event Type </p>
//               <select className="event-type" onChange={(event) => this.setState({eventtype: event.target.value})}>
//                 <option default>Select</option>
//                 <option value="Wedding">Wedding</option>
//                 <option value="Graduation">Graduation</option>
//                 <option value="Corporate">Corporate</option>
//                 <option value="Anniversary">Anniversary</option>
//                 <option value="Birthday">Birthday</option>
//               </select>

//             <p> Number of Guests </p>
//             <input type="number" name="number-of-guests-input" onChange={(event) => this.setState({eventsize: event.target.value})}/>
  
//             <p> Meal Type </p>
//               <select className="meal-type-drop-down" onChange={(event) => this.setState({mealtype: event.target.value})}>
//                 <option default>Select</option>
//                 <option value="Buffet">Buffet</option>
//                 <option value="Sit-down">Sit Down</option>
//               </select>
//           <button onClick={clickNext}>Next =></button>
//       </div>
//         )
//       }

//       let renderMenuIntakeForm = () => {
//         return (
//         <div>
//           <h3>Menu Details</h3>
//           <p>Appetizer: <span><input type="text" name="menu-appetizer-input" onChange={(event) => this.setState({appetizer: event.target.value})}/></span></p>
//           <p>Main: <span><input type="text" name="menu-main-input" onChange={(event) => this.setState({main: event.target.value})}/></span></p>
//           <p>Dessert: <span><input type="text" name="menu-dessert-input" onChange={(event) => this.setState({dessert: event.target.value})}/></span></p>
//           <p>Signature Drink: <span><input type="text" name="menu-drink-input" onChange={(event) => this.setState({drink: event.target.value})}/></span></p>
//         </div>
// );
//       }

// <button onClick={clickSave}>DONE</button>

// let renderShoppingListIntakeForm = () => {
//   return (
//     <div>
//           <h3>Shopping List</h3>
//           <div>
//             <input type="number" name="quantity-input" onChange={(event) => this.setState({shoppinglist: [{quantity: event.target.value}]})}/>
//             <select name="unit-input" onChange={(event) => this.setState({shoppinglist: [{unit: event.target.value}]})}>
//               <option default>Select</option>
//               <option>lbs</option>
//               <option>pkgs</option>
//               <option>bottles</option>
//               <option>cans</option>
//               <option>loaves</option>
//               <option>other</option>
//             </select>
//             <span> of </span>
//             <input type="text" name="ingredient-input" onChange={(event) => this.setState({shoppinglist: [{ingredient: event.target.value}]})}/>
//             <span><button onClick={addNewRow} ><img src={createNewIcon} className="create-New-Icon" alt="newIcon" /></button></span>
//           </div>
//         </div>
//   );
// }

//       if (this.state.creatingPartOne && this.needAnotherRow === false) {
//         return renderMetaDataIntakeForm();
//       }
      
//       else if (!this.state.creatingPartOne && !this.state.needAnotherRow ) {
//           return (

//           );
//         }
//       }

// export default connect(null, mapDispatchToProps)(CreateNew);