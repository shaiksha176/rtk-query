import React, { useState } from "react";
import {
  useAddUserMutation,
  useGetUserByIdQuery,
  useGetUsersQuery,
  useLazyGetUserByIdQuery,
  useLazyGetUsersQuery,
  userApi,
} from "../redux/api/userApi";

// Interface for User data
interface User {
  firstName?: string;
  lastName?: string;
}

const Users: React.FC = () => {
  const {
    data: userData = {},
    isLoading,
    isError,
    refetch,
  } = useGetUsersQuery();
  const { data: user, isLoading: loadingProfile } = useGetUserByIdQuery(5);
  const [
    fetchUserById,
    { data: userById, isLoading: fetchingUser, isError: fetchError },
  ] = useLazyGetUserByIdQuery();
  console.log({ fetchingUser });
  const [
    fetchUsers,
    { data: allUsers, isLoading: fetchingUsers, isError: fetchErrors },
  ] = useLazyGetUsersQuery();

  const [addUser, { isError: addUserError, error }] = useAddUserMutation();
  // const fetchUsers = userApi.usePrefetch("getUsers");
  // console.log(addUserError);
  // console.log(error);
  // Type assertion for logging (optional)
  // console.log((user as User)?.firstName); // Type assertion to access firstName

  const handleClick = () => {
    // setUserId(Math.floor(Math.random() * 10));
  };

  const handleAddUser = (): void => {
    // addUser({ firstName: "Muhammad", lastName: "Ovi", age: 250 })
    //   .unwrap()
    //   .then((data) => {
    //     // the data returns the added user from db
    //     console.log(data);
    //     refetch();
    //   });
    // fetchUsers();
    // fetchUserById(2);
    fetchUserById(2)
      .unwrap()
      .then(() => {
        refetch();
      });
    fetchUsers();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;
  return (
    <div>
      <button onClick={handleAddUser} disabled={fetchingUser}>
        {fetchingUser ? "fetching user" : "Add user"}
        User
      </button>
      {/* status = {error?.status}
      Error Message : {error?.data?.message} */}
      <br />
      {userData?.map((user: User, index: number) => (
        <p key={index}>{user.firstName + " " + user.lastName}</p>
      ))}
      <button onClick={handleClick}>Retrieve user details</button>
    </div>
  );
};

export default Users;
