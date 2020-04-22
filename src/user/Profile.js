import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { StyledPage } from "./styles";
import AboutWork from "./Work";

const VIEWER = gql`
  query {
    viewer {
      id
      username
    }
  }
`;

const Profile = () => {
  const [fullname, setFullname] = useState("");
  const { data, loading, error } = useQuery(VIEWER);

  const updateUser = (e) => {
    e.preventDefault();

    // 🚧 you'll invoke a mutation here
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
        <form onSubmit={updateUser}>
          <label>
            Fullname
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              value={fullname || data.viewer.fullname}
            />
          </label>
          <button type="submit">Save</button>
        </form>
        <hr />
        <AboutWork userId={data.viewer.id} />
      </div>
    </StyledPage>
  );
};

export default Profile;
