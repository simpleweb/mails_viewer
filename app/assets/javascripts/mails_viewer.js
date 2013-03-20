//= require jquery
//= require dataTables/jquery.dataTables
//= require_tree .

$(function() {
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

  $('.mail a.preview').on('click', function() {
    console.log(this);
    $(this).colorbox({width:"80%", height:"80%", iframe:true});
  });

  $('.mail a.raw').on('click', function(){
    $.get($(this).attr('href'), function(data){
      $('#raw div').text(data);
    });
    return false;
  });
});
