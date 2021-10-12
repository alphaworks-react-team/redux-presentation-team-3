import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Redux/Actions";
import { Container } from "../StyledComponents/Container.js";

const mapStateToProps = (state) => {
  return {
    apiUsers: state.apiUsers,
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

const AsyncUsers = ({ apiUsers, fetchUsers, theme }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
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
export default connect(mapStateToProps, mapDispatchToProps)(AsyncUsers);
