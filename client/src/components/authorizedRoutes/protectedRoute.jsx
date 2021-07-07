// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useUserContext } from "../../utils/UserContext";


// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { user } = useUserContext();
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (user) {
//           return <Component {...rest} {...props} />;
//         } else {
//           return (
//             <Redirect
//               to={{
//                 pathname: "/signin",
//                 state: {
//                   from: props.location,
//                 },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

// export default ProtectedRoute;