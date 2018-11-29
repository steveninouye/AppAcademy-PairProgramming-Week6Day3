const FollowToggle = require("./follow_toggle.js");

$(() => {
  const $buttons = $("button.follow-toggle");

  $buttons.each((idx, button) => {
    const $button = $(button);
    // const userId = $button.data("user-id");
    // const followState = $button.data("initial-follow-state");

    // new FollowToggle(userId, followState, $button);
    new FollowToggle($button);
  });
});
