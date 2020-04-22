import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { StyledPage } from "./styles";
import AboutWork from "./Work";

// const USER_FRAGMENT = gql`
//   fragment UpdateUserFragment on User {
//     id
//     fullname
//   }
// `;

const VIEWER = gql`
  query {
    viewer {
      id
      # fullname
    }
  }
`;

// const VIEWER = gql`
//   query {
//     viewer {
//       ...UpdateUserFragment
//       ...ProfileWork
//     }
//   }
//   ${USER_FRAGMENT}
//   ${AboutWork.fragments.work}
// `;

// const UPDATE_USER = gql`
//   mutation updateUser($fullname: String!, $id: ID!) {
//     updateUser(user: { fullname: $fullname, id: $id }) {
//       user {
//         id
//         fullname
//       }
//     }
//   }
// `;

// const UPDATE_USER = gql`
//   mutation updateUser($fullname: String!, $id: ID!) {
//     updateUser(user: { fullname: $fullname, id: $id }) {
//       user {
//         ...UpdateUserFragment
//       }
//     }
//   }
//   ${USER_FRAGMENT}
// `;

const Profile = () => {
  const [fullname, setFullname] = useState("");

  const { data, loading, error } = useQuery(VIEWER);

  let savingUser = false;
  // const [mutateUser, { loading: mutatingUser }] = useMutation(UPDATE_USER);

  const updateUserName = (e) => {
    e.preventDefault();

    // mutateUser({ variables: { fullname, id: data.viewer.id } });
  };

  if (error) {
    return <h2>{error.message}</h2>;
  } else if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledPage>
      <div>
        <h2>Profile</h2>
        <img alt="clone" src="/images/clone.jpg" />
        <form onSubmit={updateUserName}>
          <label>
            Fullname
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              value={fullname || data.viewer.fullname}
            />
          </label>
          <button disable={savingUser ? true : undefined} type="submit">
            {savingUser ? "Saving" : "Save"}
          </button>
        </form>
        <hr />
        <AboutWork userId={data.viewer.id} />
        {/* <AboutWork user={data.viewer} /> */}
      </div>
    </StyledPage>
  );
};

export default Profile;
