import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { StyledPage } from "./styles";
import AboutWork from "./Work";

const VIEWER = gql`
  query {
    viewer {
      id
      fullname
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($fullname: String!, $id: ID!) {
    updateUser(user: { fullname: $fullname, id: $id }) {
      user {
        fullname
      }
    }
  }
`;

const Profile = () => {
  const [fullname, setFullname] = useState("");

  const { data, loading, error } = useQuery(VIEWER);

  const [mutateUser, { loading: mutatingUser }] = useMutation(UPDATE_USER);

  const updateUserName = e => {
    e.preventDefault();

    mutateUser({ variables: { fullname, id: data.viewer.id } });
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
              onChange={e => setFullname(e.target.value)}
              type="text"
              value={fullname || data.viewer.fullname}
            />
          </label>
          <button disable={mutatingUser} type="submit">
            {mutatingUser ? "Saving" : "Save"}
          </button>
        </form>
        <hr />
        <AboutWork userId={data.viewer.id} />
        <hr />
        <p>
          Navigate to <Link to="/messages">messages</Link>
        </p>
      </div>
    </StyledPage>
  );
};

export default Profile;
