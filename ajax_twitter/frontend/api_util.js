const APIUtil = {
  toggleFollowUser: (id, method) => {
    return $.ajax({
      method,
      url: `http://localhost:3000/users/${id}/follow`,
      dataType: "JSON"
    });
  },
  searchUsers: (queryVal, successCallback) => {
    return $.ajax({
      method: "GET",
      url: "http://localhost:3000/users/search/",
      dataType: "JSON",
      data: {
        query: queryVal
      },
      complete: successCallback
    });
  }
};

module.exports = APIUtil;
