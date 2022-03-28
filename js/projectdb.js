function removeATag(tagid)
{
	var params = { tagid:tagid };
	
	$.post("/ajax/removetag/", params,
		function(data){
			$("#tag_" + tagid).remove();
		}
	);
}


function deleteResource(rid)
{
	var params = { rid:rid };
	
	$.post("/ajax/deleteresource/", params,
		function(data){
			location.reload(true);
		}
	);
}


function addATag(php_pid)
{
	var params = {  pid:php_pid, tag:$("#addtags").val() };
	
	$.post("/ajax/addtag/", params,
		function(data){
			$("#tags_" + php_pid).append('<span id="tag_' + data + '">' + 
			$("#addtags").val() + '(<a href="#" onclick="removeATag(' + 
			data + ');">x</a>)</span>');
		}
	);
}

function copyText(from, to)
{
	to.value=from.value;
}
