document.body.style.backgroundColor = "red";

document.getElementsByTagName('h1')[0].style.backgroundColor="blue";
// getElementsByTagName('h1') will return an array of elements, so [0] is required.

document.body.style.fontFamily="sans-serif";

document.getElementById("nickname").innerHTML="daniela";

document.getElementById("favorites").innerHTML="learnig learning learning";

document.getElementById("hometown").innerHTML="lima";


//Extra Credit.

var liElements=document.getElementsByTagName('li');
for(i=0; i<liElements.length; i++){
	liElements[i].className+="listitem";

	document.getElementsByClassName('listitem')[i].style.color="purple";
}

var image= document.createElement("img");
image.setAttribute(`src`, `https://scontent.flim2-1.fna.fbcdn.net/v/t1.0-9/1913557_10156605324120398_7776924497531322248_n.jpg?oh=fdc2272414903aa08b99baad80fee8f8&oe=59E82408`);
image.style.height=`400px`;
document.body.appendChild(image);