// import { Form, Field } from "react-final-form";
// import { connect } from "react-redux";
// import { addBrewery } from "../../../Redux/actionCreators";

// function AddBrewery() {
//   const onSubmit = (e) => {
//     addBrewery(e.breweryName);
//   };

//   const validate = (e) => {
//     const errors = {};

//     if (e.Des && e.Des.length < 4) {
//       errors.Des = "Please add Brewery description.";
//     }

//     return errors;
//   };

//   return (
//     <Form
//       onSubmit={onSubmit}
//       validate={validate}
//       render={({ handleSubmit }) => (
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label>Brewery Name</label>
//             <Field name="breweryName" component="input" placeholder="Brewery Name" className="form-control" />
//           </div>
//           <div className="mb-3">
//             <label>Description</label>
//             <Field
//               name="Des"
//               render={({ input, meta }) => (
//                 <div>
//                   <textarea {...input} className="form-control" rows="3" />
//                   {meta.touched && meta.error && <div>{meta.error}</div>}
//                 </div>
//               )}
//             />
//           </div>
//           <div class="input-group mb-3">
//             <label>Logo</label>
//             <Field
//               name="Des"
//               render={({ input, meta }) => (
//                 <div>
//                   <label class="input-group-text" for="inputGroupFile01">
//                     Upload
//                   </label>
//                   <input {...input} type="file" class="form-control" id="inputGroupFile01" />
//                   {meta.touched && meta.error && <div>{meta.error}</div>}
//                 </div>
//               )}
//             />
//           </div>
//           <br />
//           <button type="submit" class="btn btn-primary mb-3">
//             Submit
//           </button>
//         </form>
//       )}
//     />
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     brewery: state.breweryName,
//     description: state.Des,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     brewery: (breweryName) => dispatch({ type: "ADD_BREWERY", payload: breweryName }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddBrewery);
