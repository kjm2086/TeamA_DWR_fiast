function projectCreate(){
	var name = $('#insertName').val();
	var overview = $('#insertOverview').val();
	var owner = $('#selectOwner').val();
	projectCreator.projectCreate(name,owner,overview,{
		callback:function(){
			location.reload();
		}
	});
}

$(function() {
	$("#selectProjectName").change(function(){
		var id = $("#selectProjectName option:selected").val();
		projectSelect(id);
	});
});
/*
function projectChange(id){
	console.log(id);
	projectCreator.projectStateChange(id,{
		callback:function(){
			location.reload();
		}
	});

}
*/
