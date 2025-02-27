!function (e) {
  "use strict";
  var a = ".ajax-contact"
    , s = '[name="email"]'
    , n = e(".form-messages");
  function t() {
    var t = e(a).serialize();
    (function () {
      var n, t = !0;
      function r(s) {
        s = s.split(",");
        for (var r = 0; r < s.length; r++)
          n = a + " " + s[r],
            e(n).val() ? (e(n).removeClass("is-invalid"),
              t = !0) : (e(n).addClass("is-invalid"),
                t = !1);
      }
      r('[name="name"],[name="email"],[name="number"],[name="subject"],[name="message"]'),
        e(s).val() && e(s).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(s).removeClass("is-invalid"),
          t = !0) : (e(s).addClass("is-invalid"),
            t = !1);
      return t;
    }
    )() && jQuery.ajax({
      url: e(a).attr("action"),
      data: t,
      type: "POST"
    }).done((function (s) {
      n.removeClass("error"),
        n.addClass("success"),
        n.text(s),
        e(a + ' input:not([type="submit"]),' + a + " textarea").val("");
    }
    )).fail((function (e) {
      n.removeClass("success"),
        n.addClass("error"),
        "" !== e.responseText ? n.html(e.responseText) : n.html("Oops! An error occured and your message could not be sent.");
    }
    ));
  }
  e(a).on("submit", (function (e) {
    e.preventDefault(),
      t();
  }
  ));
}(jQuery);