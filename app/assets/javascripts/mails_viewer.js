//= require jquery
//= require dataTables/jquery.dataTables
//= require_tree .

$(function() {
  $('body').on('click', 'a.preview', function() {
    $(this).colorbox({width:"80%", height:"80%", iframe:true});
  });

  $('body').on('click', 'a.raw', function(){
    $.get($(this).attr('href'), function(data){
      $('#raw div').text(data);
    });
    return false;
  });

  $("table").dataTable({
    "aaSorting": [[3, "desc"]],
    "aoColumns": [
      null,
      null,
      null,
      null,
      { "bSortable": false }
    ]
  });

  
});
