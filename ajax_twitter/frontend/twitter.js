const FollowToggle = require("./follow_toggle.js");
const UserSearch = require("./users_search.js");

$(() => {
  const $buttons = $("button.follow-toggle");

  $buttons.each((idx, button) => {
    const $button = $(button);
    new FollowToggle($button);
  });

  const $userSearch = $("nav.users-search");
  new UserSearch($userSearch);
});
