//User interaction with table cells
$(document).ready(function() {
    $("td").click(function() { // user select a table data cell
        var content = $(this).text(); // get content of cell

        if (content != "Not Available") { // check if content does not contain a particular string
            $(this).toggleClass("highlighted"); // add or remove class when cell is selected

            if ($(this).hasClass("highlighted")) { // check if selected cell has class
                $('#displaySelected').css("visibility", "visible"); // make display box visible
                $('#displaySelected').css("margin-top", "2em"); // add spaces above display box
                $('#result').append("<p>"+content+"</p>"); // add child element with contents of cell
            } else { //if selected cell don't have class
                $('#result p:contains('+content+')').remove(); // remove child element
            }
        }

        if ($('#result').has('p').length == false) { // check if there are any child elements within parent
            $('#displaySelected').css("visibility", "hidden"); // make display box hidden
            $('#displaySelected').css("margin-top", "0"); // remove spaces above display box
        }
    });

    $("tr td").hover(function() {
        if ($(this).text() != "Not Available" && $(this).index() != 0) {
            $(this).css("cursor", "pointer");
        }
    }, function() {
        // This is for when the mouse leaves the cell, you can reset any hover styles if needed.
    });

    // Feedback mechanism for a button click, showing success message.
    $("#getInfo").click(function() {
        setTimeout(function() {
            alert("Success! Will get back with more info soon!");
        }, 1000);
    });

});




