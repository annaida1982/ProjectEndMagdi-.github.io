const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage?.token : ""
    }`,
    Accept: "application/json",
  },
};










// const getTokenFromLocalStorage = () => {
//   const customer = localStorage.getItem("token");
//   if (customer) {
//     // const parsedCustomer = JSON.parse(customer);
//     // console.log(parsedCustomer);
//     return customer;
//   }
//   return null;
// };

// export const config = {
//   headers: {
//     Authorization: `Bearer ${getTokenFromLocalStorage() || ""}`,
//     Accept: "application/json",
//   },
// };

