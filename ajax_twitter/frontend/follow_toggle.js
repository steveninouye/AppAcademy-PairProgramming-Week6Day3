class FollowToggle {
  constructor(userId, initialFollowState, button) {
    this.userId = userId;
    this.followState = initialFollowState.toLowerCase();
    this.button = button;

    this.render();
    this.handleClick();
  }

  render() {
    this.button.text(
      `${this.followState === "followed" ? "Unfollow!" : "Follow!"}`
    );
  }

  handleClick() {
    this.button.on("click", e => {
      let method = this.followState === "followed" ? "DELETE" : "POST";
      $.ajax({
        method, // method: method
        url: `http://localhost:3000/users/${this.userId}/follow`
      });
      this.toggleFollowState();
      this.render();
    });
  }

  toggleFollowState() {
    this.followState =
      this.followState === "followed" ? "unfollowed" : "followed";
  }
}

module.exports = FollowToggle;
