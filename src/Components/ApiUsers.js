import React, { useEffect } from "react";

import { fetchUsers } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

const AsyncUsers = () => {
  const apiUsers = useSelector((state) => state.apiUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {apiUsers.loading ? (
        <h2>Loading</h2>
      ) : apiUsers.error ? (
        <h2>{apiUsers.error}</h2>
      ) : (
        <div>
          <h2>Users List</h2>
          <div>
            {apiUsers &&
              apiUsers.users &&
              apiUsers.users.map((user) => <p>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
};
export default AsyncUsers;
