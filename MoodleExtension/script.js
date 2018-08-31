
var getCourseElements = function(){
	document.querySelectorAll("a[data-parent-key='mycourses']");
}

//looks like this won't sync unless the extension actually gets published
chrome.storage.sync.get("moodleQuarters", function(items){
	let courses = document.querySelectorAll("a[data-parent-key='mycourses']");

	let moodleQuarters = items.moodleQuarters;
	
	if(moodleQuarters == null){
		moodleQuarters = [];
	}

	for(let i = 0; i < courses.length; i++){
		let quarterName = courses[i].innerText.trim().substring(0,5);
		
		if(isNaN(quarterName.substring(0, 4))){
			quarterName = courses[i].innerText.trim().split("\n")[0];
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
	
	moodleQuarters.sort(function(a,b){
		let aSub = a.name.substring(0,4);
		let bSub = b.name.substring(0,4);
		if(isNaN(aSub) && isNaN(bSub)){
			if (a.name < b.name)
				return -1;
			if ( a.name > b.name)
				return 1;
			return 0;
		} else if (isNaN(aSub)){
			return 1;
		} else if (isNaN(bSub)){
			return -1;
		} else {
			if(aSub != bSub){
				return aSub - bSub;
			} else {
				let aQ = a.name.substring(4,5);
				let bQ = b.name.substring(4,5);
				if(aQ == "F")
					return -1;
				else if (aQ == "S")
					return 1;
				else{
					if(bQ == "F")
						return 1;
					else
						return -1;
				}
			}
		}
	});
	
	chrome.storage.sync.set({"moodleQuarters": moodleQuarters}, function(){
		//console.log("saved settings!"); 
		//chrome.storage.sync.get("moodleQuarters", function(items){
		//	console.log(items)
		//});
	});
	
	chrome.runtime.onMessage.addListener(function(request, sender){
		//console.log(request);
		let moodleQuarters = request;

		let courses = document.querySelectorAll("a[data-parent-key='mycourses']");
		//console.log(courses);
		for(let i = 0; i < courses.length; i++){
			let quarterName = courses[i].innerText.trim().substring(0,5);
		
			if(isNaN(quarterName.substring(0, 4))){
				quarterName = courses[i].innerText.trim().split("\n")[0];
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
					courses[i].style.display = "block";
				}
			}
		}
	});
});
