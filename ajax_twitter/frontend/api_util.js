const APIUtil = {
  toggleFollowUser: (id, method) => {
    return $.ajax({
      method,
      url: `http://localhost:3000/users/${id}/follow`,
      dataType: "JSON"
    });
  }
};

module.exports = APIUtil;
