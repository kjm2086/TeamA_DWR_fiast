/*
function importanceUp(id){
	todoCreator.importanceUp(id,{
		callback:function(){
			location.reload();
		}
	});
}

function importanceDown(id){
	todoCreator.importanceDown(id,{
		callback:function(){
			location.reload();
		}
	});
}
*/

function todoInsert(){
	var title = $('#insertTitle').val();
	var overview = $('#insertOverview').val();
	todoCreator.todoCreate(title,overview,{
		callback:function(){
			location.reload();
		}
	});
}
/*

function status(id){
	todoCreator.statusMove(id,{
		callback:function(){
			location.reload();
		}
	});

}*/
