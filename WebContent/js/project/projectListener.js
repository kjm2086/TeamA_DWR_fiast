projectListener.projectListen({
	callback:function(data){
		for(var i of data){

			$('#selectProjectName').append('<option value="'+i.id+'">'+i.name+'</option>')
			$('#projectList').append('<li><div class="projectName">プロジェクト名:'+i.name+'</div><div class ="projectState">状態:'+i.state+'</div><input type="button" value="状態変更" onclick= projectChange("'+i.id+'")></li>')
		}

	}
});

projectListener.ownerCandidate({
	callback:function(own){
		for(var j of own){
			$('#selectOwner').append('<option value="'+j.owner+'">'+j.owner+'</option>')
		}
	}
});

function projectSelect(id){
	projectListener.listenSelectProject(id,{
		callback:function(data){
			$("#projectOwner").text("owner:"+data.owner);
			$("#projectOverview").text("概要:"+data.overView);
			document.getElementById("ownerLabel").style.display="block";
			document.getElementById("overviewLabel").style.display="block";
		}
	});
}

$(function(){
	document.getElementById("overviewLabel").style.display = "none";
	document.getElementById("ownerLabel").style.display = "none";
});

