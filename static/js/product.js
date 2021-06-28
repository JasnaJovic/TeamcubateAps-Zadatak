function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});


$(document).ready(function(){
	$("#select--value").click(function(){
        if ($("#select-dropdown").css("display") == 'none'){
		    //$("#select-dropdown").css("display", "block");
            $(".select--element").each(function() {
                if ($('#selected--value').text() == $( this ).data("id") ) {
                    $( this ).css("display","none");
                }
                else {
                    $( this ).css("display","block");
                }
              });
            // if ($('#selected--value').text() == $(document.getElementsByClassName('.select--element')[i]).data("value")) {
            //     $(document.getElementsByClassName('.select--element')[i]).css("display","none");
            // } else {
            //     $(document.getElementsByClassName('.select--element')[i]).css("display","block");
            // }
            sizeDropdown();
            $('#select-dropdown').stop(true, true).slideDown(200);
        } else {
            //$("#select-dropdown").css("display", "none");
            $('#select-dropdown').stop(true, true).slideUp(200);
        }
	});

    $(".select--element").click(function(){
        var currentValue = $(this).text()
        $('#selected--value').text(currentValue);
        $('#select-dropdown').stop(true, true).slideUp(200);
    });

    $(".options-container").click(function(){
        $(".product--info-options-single").css("background-color","transparent");
        $(this).closest(".product--info-options-single").css("background-color","#EDF0FC");
        var price = $(this).find(".options-price").text();
        $(".footer-area__price").text(price);
        var plan = $(this).find(".options-plan").text();
        $(".footer-area__option").text(plan);
  });



});

window.addEventListener("load", sizeDropdown);
window.addEventListener("resize", sizeDropdown);
function sizeDropdown() {
    var widthSelect = $("#select--value").css("width");
    var padd__leftSelect = $("#select--value").css("margin-left");
    var padd__rightSelect = $("#select--value").closest(".product--info-options-single").css("padding-right");
    $("#select-dropdown").css("width", widthSelect);
    $("#select-dropdown").css("padding-left", padd__leftSelect);
    $("#select-dropdown").css("padding-right", padd__rightSelect);
}
