const APIUtil = require("./api_util.js");

class UserSearch {
  constructor($el) {
    this.el = $el;
    this.text = $el.children("input[type=text]");
    this.render();
    this.setListeners();
  }

  render() {}

  setListeners() {
    this.el.on("keydown", "input[type=text]", () => {
      this.handleInput();
    });
  }

  handleInput() {
    APIUtil.searchUsers(this.text.val(), e => {
      //   debugger;
      console.log(e);
      console.log("this is running");
      this.makeUserLi(e.responseJSON);
    });
  }

  makeUserLi(users) {
    const $ul = $(".users");
    $ul.empty();
    for (let i = 0; i < users.length; i += 1) {
      const username = users[i].username;
      const $li = $(
        `<li><a href="http://localhost:3000/users/${
          users[i].id
        }">${username}</a></li>`
      );
      $ul.append($li);
    }
  }
}

module.exports = UserSearch;
