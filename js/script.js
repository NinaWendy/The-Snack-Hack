var $navList = $('.nav-list');

$navList.on('click', 'li:not(.selected)', function (e) {
    $navList.find(".selected").removeClass("selected");
    $(e.currentTarget).addClass("selected");
});

// order function 
$("table").hide();
$(".additional-buttons").hide();
$(".delivery").hide();
$("#yes").hide();
$("#no").hide();


$('#confirm').click(function () {
    var sizeOfPizza = $("input[name='Size']:checked").val();
    var crustOfPizza = $("input[name='crust']:checked").val();
    let price;
    if (sizeOfPizza == "500") {
        var checkboxes = $('input[type="checkbox"]:checked').length;
        price = checkboxes * 50;
    } else if (sizeOfPizza == "1000") {
        var checkboxes = $('input[type="checkbox"]:checked').length;
        price = checkboxes * 100;
    } else if (sizeOfPizza == "1500") {
        var checkboxes = $('input[type="checkbox"]:checked').length;
        price = checkboxes * 150;
    }
    var amount = $('input[type="number"]').val();
    var total = (parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(price)) * parseInt(amount);



    $("table").show();
    $(".additional-buttons").show();
    $("#confirm").hide();


    $("#amount").html(amount)
    $("#size").html(sizeOfPizza);
    $("#toppings").html(checkboxes + " " + '@' + price);
    $("#crust").html(crustOfPizza);
    $("#total").html(total);

    $("#checkout").click(function (e) {
        e.preventDefault();
        $("#checkout").hide();
        $(".additional-buttons").show();
        $(".delivery").show();
        $("#yes").show();
        $("#no").show();
    });


    // //Delivery
    $('#yes').click(function () {
        alert('Delivery is  ksh.100');
        let location = prompt("Enter your address:", "Nairobi");
        if (location != null) {
            total += 100;
            alert('Your grand total is' + " " + "Ksh." + total);
            alert("Thank You! Your order will be delivered to" + " " + location);
        }
    });
    $('#no').click(function () {
        alert('Your grand total is' + " " + "Ksh." + total);
        alert('Pick your order at the counter.Thank You!');
    });


});