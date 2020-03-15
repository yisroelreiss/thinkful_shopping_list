$(function() {
  // Requirement 1 enter items need to purchase
  $("#js-shopping-list-form").submit(event => {
    // stop the default form submission behavior
    event.preventDefault();
    // Grab what is written by the user
    const listItem = $(".js-shopping-list-entry").val();
    $("ul").append(
      `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
        `
    );
  });

  // Requirement 3 - permanently remove items from the list
  $("ul").on("click", ".shopping-item-delete", function(event) {
    $(event.currentTarget)
      .closest("li")
      .remove();
  });
});

// Requirement 2 - 2 - check and uncheck items on the list by clicking the "Check" button
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
  $(this)
    .closest("li")
    .find(".shopping-item")
    .toggleClass("shopping-item__checked");
});
