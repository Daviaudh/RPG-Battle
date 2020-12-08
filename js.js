var monstre1 = document.getElementById('monstre1')
var attaque = document.getElementById('attaque')


monstre1.onmouseover= function(){
	document.getElementById('infobulleMonstre1').style.visibility='visible'
}
document.getElementById('monstre1').onmouseout= function(){
	document.getElementById('infobulleMonstre1').style.visibility='hidden'
}

document.getElementById('monstre2').onmouseover= function(){
	document.getElementById('infobulleMonstre2').style.visibility='visible'
}
document.getElementById('monstre2').onmouseout= function(){
	document.getElementById('infobulleMonstre2').style.visibility='hidden'
}

document.getElementById('monstre3').onmouseover= function(){
	document.getElementById('infobulleMonstre3').style.visibility='visible'
}
document.getElementById('monstre3').onmouseout= function(){
	document.getElementById('infobulleMonstre3').style.visibility='hidden'
}

attaque.addEventListener("click",attaqueClick);

function attaqueClick(){
console.log("test")
}

