// import { useState } from "react";
// import Card from "../../../Shared/Card";
// import RatingSelect from "../RatingSelect";
// import { Form, Field } from "react-final-form";
// import { connect } from "react-redux";
// import { addBeer } from "../../../Redux/actionCreators";

// function AddPost() {
//   const onSubmit = (e) => {
//     debugger;
//   };

//   const validate = (e) => {
//     const errors = {};

//     if (e.Des && e.Des.length < 4) {
//       errors.Des = "Please add Beer description.";
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
//             <label>Beer Name</label>
//             <Field name="Name" component="input" placeholder="Beer Name" className="form-control" />
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
//           <br />
//           <button type="submit" class="btn btn-primary mb-3">
//             Submit
//           </button>
//         </form>
//       )}
//       class="dropdown-menu p-4"
//     />
//   );
// }

// export default connect()(AddPost);
