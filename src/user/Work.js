import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Work = ({ userId }) => {
  const [company, setCompany] = useState("");

  const updateWork = (e) => {
    e.preventDefault();

    // 🚧 you'll invoke a mutation here
  };

  return (
    <React.Fragment>
      <br />
      <h2>Work</h2>
      <form onSubmit={updateWork}>
        <label>
          Company
          <input
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            value={company}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </React.Fragment>
  );
};

export default Work;
