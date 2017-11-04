document.addEventListener("DOMContentLoaded", function(){
	var moodleQuarters;
	chrome.storage.sync.get("moodleQuarters", function(items){
		moodleQuarters = items.moodleQuarters;
		let list = document.getElementById("quarterList")
		
		if(moodleQuarters == null){
			let div = document.createElement("div");
			let textNode = document.createTextNode("No quarters found, open Moodle to auto detect quarters and add them to this list!");
			div.appendChild(textNode);
			list.append(div);
		}
		else{
			for(let i = 0; i < moodleQuarters.length; i++){
				let tr = document.createElement("tr");
				let td1 = document.createElement("td");
				let checkBox = document.createElement("input")
				checkBox.setAttribute("type", "checkbox");
				checkBox.checked = moodleQuarters[i].display;
				checkBox.id = moodleQuarters[i].name;
				td1.appendChild(checkBox);
				tr.appendChild(td1);
				
				let td2 = document.createElement("td");
				let textNode = document.createTextNode(moodleQuarters[i].name);
				td2.appendChild(textNode);
				tr.appendChild(td2);
				
				list.appendChild(tr);
			}
		}
		
	});
	
	document.getElementById("saveButton").addEventListener("click", function(){
		//let list = document.getElementById("quarterList");
		//console.log(list)
		for(let i = 0; i < moodleQuarters.length; i++){
			moodleQuarters[i].display = document.getElementById(moodleQuarters[i].name).checked
		}
		//console.log(moodleQuarters);
		chrome.storage.sync.set({"moodleQuarters":moodleQuarters}, function(){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, moodleQuarters);
			});
		});
		
	});
});