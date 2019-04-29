$(document).ready(function() {
  $("[data-include]").each(function() {
    var oc = $(this)
    oc.load(oc.data("include"), function() {
      $("[data-include]", oc).each(function() {
        $(this).load($(this).data("include"))
      })
    })

    // if ($(fg).has("[data-include]")) {
    // }
  })

  $("[data-repeat]").each(function(i, elem) {
    var elemToRepeat = $(elem)
    for (var i = 1; i < parseInt(elemToRepeat.data("repeat")); i++) {
      var cloned = elemToRepeat.clone()
      if (cloned.has("[data-include]")) {
        cloned.load($(cloned).data("include"))
      }
      elemToRepeat.after(cloned)
    }
  })
})
