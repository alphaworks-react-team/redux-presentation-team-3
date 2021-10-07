import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Redux/Actions";

const mapStateToProps = (state) => {
  return {
    apiUsers: state.apiUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

const AsyncUsers = ({ apiUsers, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
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
export default connect(mapStateToProps, mapDispatchToProps)(AsyncUsers);
