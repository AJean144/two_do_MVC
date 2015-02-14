//I need to select any li with data attach to it, and send an ajax request to delete it
$(document).ready(function(){
		$('ul').delegate('.destroy', 'click', function(){
			var myUrl = '/todo_items/' + $(this).data('todo-items');
			//console.log($(self).data('todo-items'));
			var li = $(this).parents('li');
			$.post(myUrl, {"_method":"DELETE"}, function(){ $(li).remove()}, 'script')
		});
});
