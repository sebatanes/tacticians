
var titles = document.getElementsByClassName("titleMove");

var states = [
{
  name:"Alabama",
  places:""
},/*
*/

{
  name:"Arkansas",
  places:""
},
{
  name:"California",
  places:""
},
{
  name:"Colorado",
  places:""
},
{
  name:"Conneticut",
  places:""
},
{
  name:"Delaware",
  places:""
},
{
  name:"Florida",
  places:""
},
{
  name:"Georgia",
  places:""
},
{
  name:"Hawai",
  places:""
},
{
  name:"Idaho",
  places:""
},
{
  name:"Illinois",
  places:""
},
{
  name:"Indiana",
  places:""
},
{
  name:"Iowa",
  places:""
},
{
  name:"Kansas",
  places:""
},
{
  name:"Kentucky",
  places:""
},
{
  name:"Arizona",
  places:""
},
{
  name:"Lousiana",
  places:""
},
{
  name:"Maine",
  places:""
},
{
  name:"Maryland",
  places:""
},

{
  name:"Massachusetts",
  places:""
},

{
  name:"Michigan",
  places:""
},
{
  name:"Minnesota",
  places:""
},
{
  name:"Missouri",
  places:"  O’Fallon Police Department<br> St. Charles County Sheriff’s Department<br> St. Charles Police Department. "
},
{
  name:"Mississippi",
  places:""
},
{
  name:"Montana",
  places:""
},
{
  name:"Nebraska",
  places:""
},
{
  name:"New Hampshire",
  places:""
},
{
  name:"New Jersey",
  places:""
},
{
  name:"New Mexico",
  places:""
},
{
  name:"New York",
  places:""
},
{
  name:"North Carolina",
  places:""
},
{
  name:"North Dakota",
  places:""
},
{
  name:"Ohio",
  places:""
},
{
  name:"Oklahoma",
  places:""
},
{
  name:"Oregon",
  places:""
},
{
  name:"Pennsylvania",
  places:""
},
{
  name:"Rhode Island",
  places:""
},
{
  name:"South Carolina",
  places:""
},
{
  name:"South Dakota",
  places:""
},
{
  name:"Tennesse",
  places:""
},
{
  name:"Texas",
  places:""
},
{
  name:"Utah",
  places:""
},
{
  name:"Virginia",
  places:""
},
{
  name:"Washington",
  places:""
},
{
  name:"Washington DC",
  places:""
},
{
  name:"West Virginia",
  places:""
},
{
  name:"Wisconsin",
  places:""
},
{
  name:"Wyoming",
  places:""
},
{
  name:"Canada",
  places:""
},
{
  name:"Mexico",
  places:""
}
];
var states2 = [];
states.forEach((state)=>{

if(state.places==""){

states2.push(state)

}else{
   if(state.name=="Mexico"||state.name=="Canada"){
      document.getElementById("output2").innerHTML +=  `
    <div class="agencies-subcontainer">
      <div class="title titleMove"><i class="fas fa-plus"></i>${state.name}</div>
      <div class="places">${state.places}</div>
    </div>
    `
  }else{
  document.getElementById("output").innerHTML +=  `
    <div class="agencies-subcontainer">
      <div class="title titleMove"><i class="fas fa-plus"></i>${state.name}</div>
      <div class="places">${state.places}</div>
    </div>
    `
}
}

})
states2.forEach((state2)=>{

   if(state2.name=="Mexico"||state2.name=="Canada"){
      document.getElementById("output2").innerHTML +=  `
    <div class="agencies-subcontainer">
      <div class="title">${state2.name}</div>
      <div class="places">${state2.places}</div>
    </div>
    `
  }else{
  document.getElementById("output").innerHTML +=  `
    <div class="agencies-subcontainer">
      <div class="title">${state2.name}</div>
      <div class="places">${state2.places}</div>
    </div>
    `
}

})

for (var k = 0; k < titles.length; k++) {
  titles[k].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
   
      content.style.display = "none";
    } else {
      content.style.display = "block";
        

    }
     if(this.innerHTML.search("fa-minus") == -1){
this.innerHTML=  this.innerHTML.replace('<i class="fas fa-plus"></i>','<i class="fas fa-minus"></i>')

}else{
 this.innerHTML=  this.innerHTML.replace("fa-minus","fa-plus")
}
  });
}

/*const places = document.querySelectorAll(".places");
console.log(places)
places.forEach((place)=>{
  if(place.textContent == "dddd"){
    place.previousSibling.previousSibling.style.backgroundColor = "red"
}
})*/














