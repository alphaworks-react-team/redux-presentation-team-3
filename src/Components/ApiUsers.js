import React, { useEffect } from "react";

import { fetchUsers } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../StyledComponents/Container.js";

const AsyncUsers = () => {
  const apiUsers = useSelector((state) => state.apiUsers);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Container
      theme={theme}
      color={"#303134"}
      width={"300px"}
      justifyCenter
      alignCenter
      border={"1px solid #DFE1E5"}
      borderRadius={"10px"}
    >
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
    </Container>
  );
};
export default AsyncUsers;
