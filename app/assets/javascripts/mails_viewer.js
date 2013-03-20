//= require jquery
//= require dataTables/jquery.dataTables
//= require_tree .

$(function() {
  $(document).on('click', '.mail a.preview', function() {
    console.log(this);
    $(this).colorbox({width:"80%", height:"80%", iframe:true});
  });

  $(document).on('click', '.mail a.raw', function(){
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
