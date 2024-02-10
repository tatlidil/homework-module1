$(document).ready(function(){
    // Target only cells within the tbody to exclude header cells
    $('table tbody tr td').not(':contains("Not Available")').addClass('selectable');

    // Add click event listener to selectable cells
    $('.selectable').click(function() {
        // Toggle the highlighted class to add/remove the highlight
        $(this).toggleClass('highlighted');
    });
});
