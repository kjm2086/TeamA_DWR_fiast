/*todoListを生成するためのjavaScript*/
todoListener.todoListen({
	callback:function(data){
		for(var i of data)
			if(i.status == 1){
				$('#todo').append('<li><a  onclick = status("'+i.id+'") href="#">'+i.title+"/"+i.date+'</a><div>'+i.overview+'</div><div>重要度:'+i.importance+'</div><input type="button" value="+" onclick= importanceUp("'+i.id+'")><input type="button" value="-" onclick= importanceDown("'+i.id+'")></li>')
			}else if(i.status == 2){
				$('#doing').append('<li><a  onclick = status("'+i.id+'") href="#">'+i.title+"/"+i.date+'</a><div>'+i.overview+'</div><div>重要度:'+i.importance+'</div><input type="button" value="+" onclick= importanceUp("'+i.id+'")><input type="button" value="-" onclick= importanceDown("'+i.id+'")></li>')
			}else{
				$('#done').append('<li><a href="#">'+i.title+"/"+i.date+'</a><div>'+i.overview+'</div></li>')
			}
	}
});