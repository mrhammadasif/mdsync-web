function openSearch() {
  $("#header-nav").removeClass("d-flex")
  $("#header-nav").addClass("d-none")

  $(".marquee").addClass("d-none")
  
  $("#search-section").removeClass("d-none")
  $("#search-section").addClass("d-flex")
}
function closeSearch() {
  $("#header-nav").removeClass("d-none")
  $("#header-nav").addClass("d-flex")

  $(".marquee").removeClass("d-none")

  $("#search-section").removeClass("d-flex")
  $("#search-section").addClass("d-none")
}
$(document).ready(function() {
  $("[data-toggle='popover']").popover({
    html: true
  })

  $(".hoverpopover").popover({
    trigger: "hover",
    placement: "bottom"
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
      $(".hoverpopover").popover({
        trigger: "hover",
        placement: "bottom"
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
