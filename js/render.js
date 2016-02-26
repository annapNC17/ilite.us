$(document).ready(function () {
  var index = 0
  Object.keys(iLite.api.Resources).map(function (key) {
    iLite.api.Resources[key]
    .map(function (resource) {
      /* title */
      var selected_index = index++
      $($(".Events")[selected_index])
      .children()
      .children()
      .first()
      .find(".fa-calendar")
      .text(' ' + resource.Title)
      .parent()

      /* description */
      $($(".Events")[selected_index])
      .children()
      .last()
      .text(resource.Description)
    })
  })
})