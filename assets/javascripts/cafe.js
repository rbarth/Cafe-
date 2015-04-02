// $("a[data-tab]").on('click', function() {
//     var tab = $(this).attr('data-tab'),
//         target = $(this).attr('href');
//     $('ul.nav a[href="' + tab + '"]').tab('show');
//     $('html, body').animate({
//         scrollTop: $(potato).offset().top
//     }, 1);    
// });

$("a[data-tab-destination]").on('click', function()
{
var tab = $(this).attr('data-tab-destination');
$("#" + tab).click();
});