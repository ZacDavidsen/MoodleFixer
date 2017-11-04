
let courses = document.getElementsByClassName("type_course depth_3");
chrome.storage.sync.get("moodleQuarters", function(items){
	
	let moodleQuarters = items.moodleQuarters;
	
	if(moodleQuarters == null){
		moodleQuarters = [];
	}

	for(let i = 0; i < courses.length; i++){
		let quarterName = courses[i].innerText.substring(0,5);
		
		if(isNaN(quarterName.substring(0, 4))){
			quarterName = courses[i].innerText;
		}
		
		let containsQuarter = false;
		let quarter;
		for(let j = 0; j < moodleQuarters.length; j++){
			if(moodleQuarters[j].name == quarterName){
				quarter = moodleQuarters[j];
				containsQuarter = true;
			}
		}
		
		if(containsQuarter){
			if(!quarter.display){
				courses[i].style.display = "none";
			}
		}
		else{
			moodleQuarters.push({name: quarterName, display:true});
		}
		
	}
	
	chrome.storage.sync.set({"moodleQuarters": moodleQuarters}, function(){
		//console.log("saved settings!"); 
		//chrome.storage.sync.get("moodleQuarters", function(items){
		//	console.log(items)
		//});
	});
	
	chrome.runtime.onMessage.addListener(function(request, sender){
		//console.log(request);
		let moodleQuarters = request;
		let courses = document.getElementsByClassName("type_course depth_3");
		//console.log(courses);
		for(let i = 0; i < courses.length; i++){
			let quarterName = courses[i].innerText.substring(0,5);
		
			if(isNaN(quarterName.substring(0, 4))){
				quarterName = courses[i].innerText;
			}
			
			let containsQuarter = false;
			let quarter;
			for(let j = 0; j < moodleQuarters.length; j++){
				if(moodleQuarters[j].name == quarterName){
					quarter = moodleQuarters[j];
					containsQuarter = true;
				}
			}
			
			if(containsQuarter){
				if(!quarter.display){
					courses[i].style.display = "none";
				}
				else{
					courses[i].style.display = "";
				}
			}
		}
	});
});
