
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const logo = document.querySelector("#navbarLogo")
   const wrapperLink = document.getElementsByClassName("wrapperLink")
   const here = document.getElementById("here")
   const container = document.getElementsByClassName("container-pc")

   if (window.innerWidth>=900) {

   	  if(this.scrollY <= 10) 
  	{
  		logo.style.width = "130px";
  		nav.className = 'navbar'; 
      logo.style.top = "0px"
  

  	for(var i = 0; i<wrapperLink.length;i++){
  		wrapperLink[i].style.marginTop = "30px"

  	}
    for(var i = 0; i<container.length;i++){
      container[i].style.top = "80px"

    }
  	}
  else {
  	logo.style.width = "80px";
    logo.style.top = "-6px"
  	nav.className = 'navbar scroll';
  	for(var i = 0; i<wrapperLink.length;i++){
  		 wrapperLink[i].style.marginTop = "0px"
         wrapperLink[i].style.height = "40px"
  	}
  		  for(var i = 0; i<container.length;i++){
      container[i].style.top = "69px"

    }	
  }
   }

};


document.getElementById("open").addEventListener("click",function(){
   const wrapperLink = document.getElementsByClassName("wrapperLink")
	document.getElementById("open").style.display = "none"
		document.getElementById("close").style.display = "block"
 	for(var i = 0; i< wrapperLink.length;i++){
  		wrapperLink[i].style.display = "block"
  	}

})
document.getElementById("close").addEventListener("click",function(){
   const wrapperLink = document.getElementsByClassName("wrapperLink")
	
 document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none"; 

	document.getElementById("open").style.display = "block"
		document.getElementById("close").style.display = "none"
 	for(var i = 0; i<wrapperLink.length;i++){
  		wrapperLink[i].style.display = "none"
  	}

})

   if (window.innerWidth>=900) {
document.getElementById("about").addEventListener("mouseover",function(){
document.getElementById("about-container-pc").style.display = "flex";
document.getElementById("media-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none";
})
document.getElementById("header").addEventListener("mouseout",function(){
document.getElementById("about-container-pc").style.display = "none";
})

document.getElementById("training").addEventListener("mouseover",function(){
document.getElementById("training-container-pc").style.display = "flex";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("media-container-pc").style.display = "none";
})
document.getElementById("header").addEventListener("mouseout",function(){
document.getElementById("training-container-pc").style.display = "none";
})

document.getElementById("media").addEventListener("mouseover",function(){
document.getElementById("media-container-pc").style.display = "flex";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none";
})
document.getElementById("header").addEventListener("mouseout",function(){
document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none";
})
document.getElementById("schedule").addEventListener("mouseover",function(){
 document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none"; 
})
document.getElementById("home").addEventListener("mouseover",function(){
 document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none"; 
})

}

 if (window.innerWidth<900) {


document.getElementById("about-arrow-down").addEventListener("click",function(){
document.getElementById("about-container-pc").style.display = "flex";
document.getElementById("training-container-pc").style.display = "none";
document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-arrow-down").style.display = "none";
document.getElementById("about-arrow-up").style.display = "block";
})

document.getElementById("about-arrow-up").addEventListener("click",function(){
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none";
document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-arrow-up").style.display = "none";
document.getElementById("about-arrow-down").style.display = "block";
})

document.getElementById("training-arrow-down").addEventListener("click",function(){
document.getElementById("training-container-pc").style.display = "flex";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("media-container-pc").style.display = "none";
document.getElementById("training-arrow-down").style.display = "none";
document.getElementById("training-arrow-up").style.display = "block";
})

document.getElementById("training-arrow-up").addEventListener("click",function(){
document.getElementById("training-container-pc").style.display = "none";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("media-container-pc").style.display = "none";
document.getElementById("training-arrow-up").style.display = "none";
document.getElementById("training-arrow-down").style.display = "block";
})



document.getElementById("media-arrow-down").addEventListener("click",function(){
document.getElementById("media-container-pc").style.display = "flex";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none";
document.getElementById("media-arrow-down").style.display = "none";
document.getElementById("media-arrow-up").style.display = "block";
})

document.getElementById("media-arrow-up").addEventListener("click",function(){
document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none";
document.getElementById("media-arrow-up").style.display = "none";
document.getElementById("media-arrow-down").style.display = "block";
})

document.getElementById("schedule").addEventListener("click",function(){
 document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none"; 
})
document.getElementById("home").addEventListener("click",function(){
 document.getElementById("media-container-pc").style.display = "none";
document.getElementById("about-container-pc").style.display = "none";
document.getElementById("training-container-pc").style.display = "none"; 
})

}

document.getElementById("about-link").addEventListener("mouseover",function(){
  document.getElementById("about").setAttribute("href",'about.html')
})

document.getElementById("training-link").addEventListener("mouseover",function(){
  document.getElementById("training").setAttribute("href",'training.html')
})