function memberInsert(){
	var name = $('#insertName').val();
	var org = $('#insertTeam').val();
	var position = $('#insertPosition').val();
	var age = $('#age').val();
	memberCreator.memberInsert(name,org,position,age,{
		callback:function(){
			location.reload();
		}
	});
}
