const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(button) {
    this.button = button;
    this.userId = button.data("user-id");
    this.followState = button.data("initial-follow-state");
    this.isDisabled = false;

    this.render();
    this.button.on("click", e => {
      this.handleClick();
    });
  }

  render() {
    this.button.text(
      `${this.followState === "followed" ? "Unfollow!" : "Follow!"}`
    );
  }

  handleClick() {
    this.toggleDisable();
    let method = this.followState === "followed" ? "DELETE" : "POST";

    APIUtil.toggleFollowUser(this.userId, method).then(res => {
      this.toggleFollowState();
      this.toggleDisable();
      this.render();
    });
  }

  toggleFollowState() {
    this.followState =
      this.followState === "followed" ? "unfollowed" : "followed";
  }

  toggleDisable() {
    this.isDisabled = !this.isDisabled;
    this.button.prop("disabled", this.isDisabled);
  }
}

module.exports = FollowToggle;
