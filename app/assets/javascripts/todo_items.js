//I need to select any li with data attach to it, and send an ajax request to delete it
$(document).ready(function(){

		$('.destroy').click(function(){
			var myUrl = '/todo_items/' + $(this).data('todo-items');
			//console.log($(self).data('todo-items'));
			var li = $(this).parents('li');
			$.post(myUrl, {"_method":"DELETE"}, function(){ $(li).remove()}, 'script')
		});

});

// $(document).ready(function() {
// 	$('#item').click(function(e) {
// 	  e.preventDefault();
// 	  $.ajax({
// 	    type: 'DELETE',
// 	    url: '/todo_items/'+});
// 	});
// });