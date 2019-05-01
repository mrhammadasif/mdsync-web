$(document).ready(function() {
  $("[data-toggle='popover']").popover({
    html: true
  })
  $("[data-include]").each(function() {
    var oc = $(this)
    oc.load(oc.data("include"), function() {
      $("[data-toggle='popover']").popover({
        html: true
      })
      $("[data-include]", oc).each(function() {
        $(this).load($(this).data("include"), function() {
          $("[data-toggle='popover']").popover({
            html: true
          })
        })
      })
    })
  })

  $("[data-repeat]").each(function(i, elem) {
    var elemToRepeat = $(elem)
    if (elemToRepeat.data("include")) {
      // first load the content and then repeat
      elemToRepeat.load(elemToRepeat.data("include"), function(elemLoaded) {
        for (var i = 1; i < parseInt(elemToRepeat.data("repeat")); i++) {
          var cloned = $(elemToRepeat.clone())
          var o = elemToRepeat.after(cloned)
        }
      })
    } else {
      for (var i = 1; i < parseInt(elemToRepeat.data("repeat")); i++) {
        var cloned = $(elemToRepeat.clone())
        var o = elemToRepeat.after(cloned)
      }
    }
  })
})
