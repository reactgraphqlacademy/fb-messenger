import React from "react";
import PropTypes from "prop-types";

// Two different implementations to do the same. Note, the goal of these two implementations is
// to understand the differences between controlled and uncontrolled components.

// A:
// class Input extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { value: null };
//   }

//   render() {
//     const { onChange, defaultValue } = this.props;

//     return (
//       <input
//         {...this.props}
//         className="form-control"
//         value={this.state.value || defaultValue || ""}
//         onChange={e => {
//           const {
//             target: { value }
//           } = e;
//           this.setState({ value });
//           onChange && onChange(e);
//         }}
//       />
//     );
//   }
// }

// Input.propTypes = {
//   onChange: PropTypes.func,
//   value: PropTypes.string,
//   defaultValue: PropTypes.string
// };

// B: We can use the internal state from the input and expose it to the outer component.
// the input itself can be either controlled or uncontrolled
const Input = props => <input {...props} className="form-control" />;

export default Input;
