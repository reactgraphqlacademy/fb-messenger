import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const WORK_FRAGMENT = gql`
  fragment WorkFragment on Work {
    company
    id
  }
`;

// first approach
// const QUERY_WORK = gql`
//   query work($userId: ID!) {
//     work(userId: $userId) {
//       company
//       id
//     }
//   }
// `;

// second approach
// const QUERY_WORK = gql`
//   query work($userId: ID!) {
//     work(userId: $userId) {
//       ...WorkFragment
//     }
//   }
//   ${WORK_FRAGMENT}
// `;

// third approach, using the fragment in query composition style

// const MUTATE_WORK = gql`
//   mutation updateWork($userId: ID!, $company: String!) {
//     updateWork(work: { userId: $userId, company: $company }) {
//       work {
//         company
//         id
//       }
//     }
//   }
// `;

const MUTATE_WORK = gql`
  mutation updateWork($userId: ID!, $company: String!) {
    updateWork(work: { userId: $userId, company: $company }) {
      work {
        ...WorkFragment
      }
    }
  }
  ${WORK_FRAGMENT}
`;

// const Work = ({ userId }) => {
const Work = ({ user }) => {
  // const [company, setCompany] = useState("");
  const [company, setCompany] = useState(user.work.company);

  //   const { data, loading, error } = useQuery(QUERY_WORK, {
  //     variables: { userId }
  //   });

  const [mutateWork, { loading: mutatingWork }] = useMutation(MUTATE_WORK);

  const updateWork = e => {
    e.preventDefault();

    mutateWork({ variables: { company, userId: user.id } });
  };

  //   if (error) {
  //     return <h2>{error.message}</h2>;
  //   } else if (loading) {
  //     return <h2>Loading...</h2>;
  //   }

  return (
    <React.Fragment>
      <br />
      <h2>Work</h2>
      <form onSubmit={updateWork}>
        <label>
          Company
          <input
            onChange={e => setCompany(e.target.value)}
            type="text"
            // value={company || data.work.company}
            value={company}
          />
        </label>
        <button disable={mutatingWork ? true : undefined} type="submit">
          {mutatingWork ? "Saving" : "Save"}
        </button>
      </form>
    </React.Fragment>
  );
};

Work.fragments = {
  work: gql`
    fragment ProfileWork on User {
      work {
        ...WorkFragment
      }
    }
    ${WORK_FRAGMENT}
  `
};

export default Work;
