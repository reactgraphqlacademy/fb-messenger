import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY_WORK = gql`
  query work($userId: ID!) {
    work(userId: $userId) {
      company
      id
    }
  }
`;

const MUTATE_WORK = gql`
  mutation updateWork($work: UpdateWorkInput!) {
    updateWork(work: $work) {
      work {
        id
        company
      }
    }
  }
`;

const Work = ({ userId }) => {
  const [company, setCompany] = useState("");
  const [mutateWork, { loading: mutatingWork }] = useMutation(MUTATE_WORK);
  const { loading, data, error } = useQuery(QUERY_WORK, {
    variables: { userId },
  });

  const updateWork = (e) => {
    e.preventDefault();

    mutateWork({ variables: { work: { userId, company } } });
  };

  if (error) return <h2>{error.message}</h2>;

  if (loading) return <h2>Loading...</h2>;

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
            value={company || data.work.company}
          />
        </label>
        <button type="submit">{mutatingWork ? "Saving" : "Save"}</button>
      </form>
    </React.Fragment>
  );
};

export default Work;
