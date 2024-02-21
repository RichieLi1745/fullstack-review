import React from 'react';

const RepoList = ({ repos }) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {repos.map(repo => {
      return(
        <div>{repo.name}</div>
      )
    })}
  </div>
)

export default RepoList;