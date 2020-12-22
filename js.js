var monstre1 = document.getElementById('monstre1')
var attaque = document.getElementById('attaque1')
var defense = document.getElementById('defense1')
var special = document.getElementById('special1')

var attaque = document.getElementById('attaque2')
var defense = document.getElementById('defense2')
var special = document.getElementById('special2')

var attaque = document.getElementById('attaque3')
var defense = document.getElementById('defense3')
var special = document.getElementById('special3')

var attaque = document.getElementById('attaque4')
var defense = document.getElementById('defense4')
var special = document.getElementById('special4')
// --------  -------- //
var Hp1 = document.getElementById('Hp1').innerHTML
var Hp2 = document.getElementById('Hp2').innerHTML
var Hp3 = document.getElementById('Hp3').innerHTML
var Hp4 = document.getElementById('Hp4').innerHTML
// --------  -------- //
var Mana1 = document.getElementById('Mana1').innerHTML
var Mana2 = document.getElementById('Mana2').innerHTML
var Mana3 = document.getElementById('Mana3').innerHTML
var Mana4 = document.getElementById('Mana4').innerHTML
// --------  -------- //
var tour = 1
var target = 0

cible1.onclick=function(){
	target = 1
	if (tour == 1 ){

		document.getElementById('action1').style.visibility='visible'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='hidden'
		document.getElementById('action4').style.visibility='hidden'
	}	
	if (tour == 2 ){
			document.getElementById('action1').style.visibility='hidden'
			document.getElementById('action2').style.visibility='visible'
			document.getElementById('action3').style.visibility='hidden'
			document.getElementById('action4').style.visibility='hidden'
	}
	if (tour == 3 ){
		document.getElementById('action1').style.visibility='hidden'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='visible'
		document.getElementById('action4').style.visibility='hidden'
	}
	if (tour == 4 ){
		document.getElementById('action1').style.visibility='hidden'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='hidden'
		document.getElementById('action4').style.visibility='visible'
	}
}
	
	cible2.onclick=function(){
	target = 2
	if (tour == 1 ){

		document.getElementById('action1').style.visibility='visible'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='hidden'
		document.getElementById('action4').style.visibility='hidden'
	}	
	if (tour == 2 ){
			document.getElementById('action1').style.visibility='hidden'
			document.getElementById('action2').style.visibility='visible'
			document.getElementById('action3').style.visibility='hidden'
			document.getElementById('action4').style.visibility='hidden'
	}
	if (tour == 3 ){
		document.getElementById('action1').style.visibility='hidden'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='visible'
		document.getElementById('action4').style.visibility='hidden'
	}
	if (tour == 4 ){
		document.getElementById('action1').style.visibility='hidden'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='hidden'
		document.getElementById('action4').style.visibility='visible'
	}
}

	cible3.onclick=function(){
	target = 3
	if (tour == 1 ){

		document.getElementById('action1').style.visibility='visible'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='hidden'
		document.getElementById('action4').style.visibility='hidden'
	}	
	if (tour == 2 ){
			document.getElementById('action1').style.visibility='hidden'
			document.getElementById('action2').style.visibility='visible'
			document.getElementById('action3').style.visibility='hidden'
			document.getElementById('action4').style.visibility='hidden'
	}
	if (tour == 3 ){
		document.getElementById('action1').style.visibility='hidden'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='visible'
		document.getElementById('action4').style.visibility='hidden'
	}
	if (tour == 4 ){
		document.getElementById('action1').style.visibility='hidden'
		document.getElementById('action2').style.visibility='hidden'
		document.getElementById('action3').style.visibility='hidden'
		document.getElementById('action4').style.visibility='visible'
	}

}



// ---- HP ---- //
Hp1 = 130
document.getElementById('Hp1').innerHTML = Hp1
Hp2 = 50
document.getElementById('Hp2').innerHTML = Hp2
Hp3 = 70
document.getElementById('Hp3').innerHTML = Hp3
Hp4 = 70
document.getElementById('Hp4').innerHTML = Hp4
// ---- Mana ---- //
Mana1 = 30
document.getElementById('Mana1').innerHTML = Mana1
Mana2 = 50
document.getElementById('Mana2').innerHTML = Mana2
Mana3 = 20
document.getElementById('Mana3').innerHTML = Mana3
Mana4 = 20
document.getElementById('Mana4').innerHTML = Mana4




var HpM2 = document.getElementById('HpM2').innerHTML
var HpM3 = document.getElementById('HpM3').innerHTML
// -------- 									 -------- //

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
// -------- 									 -------- //


// -------- 			attaque						 -------- //

function attaque1Click(){
	if (target == 1 ) {
		
		HpM1 = document.getElementById("HpM1").innerHTML
		HpM1 = HpM1 - 20 	
	 	document.getElementById("HpM1").innerHTML = HpM1 
	 	if (HpM1 <= 0 ){
	 		document.getElementById('monstre1').style.visibility='hidden'
	 	}
	 	
	}
	if (target == 2 ) {
		HpM2 = document.getElementById("HpM2").innerHTML
		HpM2 = HpM2 - 20 	
	 	document.getElementById("HpM2").innerHTML = HpM2 
	 
	 	if (HpM2 <= 0 ){
	 		document.getElementById('monstre2').style.visibility='hidden'
	 	}
	 	
	}
	if (target == 3 ) {
		HpM3 = document.getElementById("HpM3").innerHTML
		HpM3 = HpM3 - 20 	
	 	document.getElementById("HpM3").innerHTML = HpM3
	 
	 	if (HpM3 <= 0 ){
	 		document.getElementById('monstre3').style.visibility='hidden'
	 	} 
	 		
	}
// -------- 			test victoire						 -------- //
 setTimeout(function() {
	if (HpM1 <=0 && HpM2 <=0 && HpM3 <=0){
		
		alert("GG t'as gagné") 
	}

 }, 100);
	

// -------- 			test défaite						 -------- //

 setTimeout(function() {
	if (Hp1 <=0 && Hp2 <=0 && Hp3 <=0){
		
		alert("LOL t'es nul") 
	}

 }, 100);


}

function special1Click(){
console.log("test2")
}

function defense1Click(){
console.log("test3")
}

attaque1.addEventListener("click",attaque1Click);
defense1.addEventListener("click",defense1Click);
special1.addEventListener("click",special1Click);

