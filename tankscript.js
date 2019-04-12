var canvas, ctx, img, imgtwo, muna, mapa;
var bum = [];
var green = [];
var animacja = 1;
var width = window.innerWidth;;
var height = window.innerHeight;
var pos = [width/2 + width/4, height/2];
var postwo = [width/2 - width/4, height/2];
var big = [60, 40];
var rot = 0;
var rottwo = 180;
var pil = [];
var key = [];
var ladowanie = 0;
var ladowanietwo = 0;
var minowanie = 0;
var minowanietwo = 0;
var buch = [];
var min = [];
var liwe = 100;
var liwetwo = 100;
var barw = width /5;
var barh = barw / 10;
var gameover = "";
var please = false;
function start()
{
	canvas = document.getElementById("can");
	ctx = canvas.getContext("2d");
	img = document.getElementById("img");
	imgtwo = document.getElementById("imgtwo");
	bum[0] = document.getElementById("bum1");
	bum[1] = document.getElementById("bum2");
	bum[2] = document.getElementById("bum3");
	muna = document.getElementById("muna");
	mapa = document.getElementById("mapa");
	for(var r = 1; r<=10; r++){
		green.push(document.getElementById("green"+r));
	}
	canvas.width = width;
	canvas.height = height;
	setTimeout("loop()", 20);

}
function showKey(e)
{
	if (e.keyCode) return e.keyCode;
}
document.addEventListener("DOMContentLoaded", function() {
	start();
	document.addEventListener("keydown", function(e) {
	var klucz = showKey(e);
	if(key.indexOf(klucz) == -1){
		key.push(klucz);
	}
	if(please == false){
		if(key.indexOf(32) >=0 ){
			please = true;
			loop();
		}
	}
	});
	document.addEventListener("keyup", function(e) {
	var klucz = showKey(e);
	if(key.indexOf(klucz) != -1){
		key.splice(key.indexOf(klucz), 1);
	}
	});
});
function przycisk(){
	//var odl = Math.pow(postwo[0] - pos[0], 2) + Math.pow(postwo[1] - pos[1], 2);
		//odl = Math.sqrt(odl);
		//var klik = true;
		//var kliktwo = true;
		if(key.indexOf(37)>=0){
			rot = rot - 2;
			if(rot >= 180)rot = -180;
			else if(rot <= (-180))rot = 180;
		} else if (key.indexOf(39)>=0){
			rot = rot + 2;
			if(rot >= 180)rot = -180;
			else if(rot <= -180)rot = 180;
		}
		if(key.indexOf(38)>=0){
			//klik = true;
			//ruch gora
			if(pos[1] < 28){
				if(odret(rot) > 0)pos[1] += odret(rot)/15;
			} else if(pos[1] > height -28){
				if(odret(rot) < 0)pos[1] += odret(rot)/15;
			} else pos[1] += odret(rot)/15;
			if(pos[0] < 28){
				if((90 - Math.abs(rot)) > 0)pos[0] += (90 - Math.abs(rot))/15;
			} else if(pos[0] > width - 28){
				if((90 - Math.abs(rot)) < 0)pos[0] += (90 - Math.abs(rot))/15;
			}else pos[0] += (90 - Math.abs(rot))/15;
			//ruch gora koniec
		} else if (key.indexOf(40)>=0){
			//klik = false;
			//ruch dół
			if(pos[1] < 28){
				if(odret(rot) < 0)pos[1] -= odret(rot)/15;
			} else if(pos[1] > height -28){
				if(odret(rot) > 0)pos[1] -= odret(rot)/15;
			} else pos[1] -= odret(rot)/15;
			if(pos[0] < 28){
				if((90 - Math.abs(rot)) < 0)pos[0] -= (90 - Math.abs(rot))/15;
			} else if(pos[0] > width - 28){
				if((90 - Math.abs(rot)) > 0)pos[0] -= (90 - Math.abs(rot))/15;
			}else pos[0] -= (90 - Math.abs(rot))/15;
			//ruch dol koniec
		}
	if(key.indexOf(191)>=0){
		strzel();
	} else {
		if(ladowanie < 30)ladowanie++;
	}
	if(key.indexOf(190)>=0){
		mina();
	} else {
		if(minowanie < 30)minowanie++;
	}
	//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwtwo
	if(key.indexOf(65)>=0){
			rottwo = rottwo - 2;
			if(rottwo >= 180)rottwo = -180;
			else if(rottwo <= (-180))rottwo = 180;
		} else if (key.indexOf(68)>=0){
			rottwo = rottwo + 2;
			if(rottwo >= 180)rottwo = -180;
			else if(rottwo <= -180)rottwo = 180;
		}
		if(key.indexOf(87)>=0){
			//kliktwo = true;
			//ruch gora
			if(postwo[1] < 28){
				if(odret(rottwo) > 0)postwo[1] += odret(rottwo)/15;
			} else if(postwo[1] > height -28){
				if(odret(rottwo) < 0)postwo[1] += odret(rottwo)/15;
			} else postwo[1] += odret(rottwo)/15;
			if(postwo[0] < 28){
				if((90 - Math.abs(rottwo)) > 0)postwo[0] += (90 - Math.abs(rottwo))/15;
			} else if(postwo[0] > width - 28){
				if((90 - Math.abs(rottwo)) < 0)postwo[0] += (90 - Math.abs(rottwo))/15;
			}else postwo[0] += (90 - Math.abs(rottwo))/15;
			//ruch gora koniec
		} else if (key.indexOf(83)>=0){
			//kliktwo = false;
			//ruch dół
			if(postwo[1] < 28){
				if(odret(rottwo) < 0)postwo[1] -= odret(rottwo)/15;
			} else if(postwo[1] > height -28){
				if(odret(rottwo) > 0)postwo[1] -= odret(rottwo)/15;
			} else postwo[1] -= odret(rottwo)/15;
			if(postwo[0] < 28){
				if((90 - Math.abs(rottwo)) < 0)postwo[0] -= (90 - Math.abs(rottwo))/15;
			} else if(postwo[0] > width - 28){
				if((90 - Math.abs(rottwo)) > 0)postwo[0] -= (90 - Math.abs(rottwo))/15;
			}else postwo[0] -= (90 - Math.abs(rottwo))/15;
			//ruch dol koniec
		}
	if(key.indexOf(71)>=0){
		strzeltwo();
	} else {
		if(ladowanietwo < 30)ladowanietwo++;
	}
	if(key.indexOf(72)>=0){
		minatwo();
	} else {
		if(minowanietwo < 30)minowanietwo++;
	}
}
function strzel(){
		if(ladowanie == 30){
			pil.push([pos[0], pos[1], (90 - Math.abs(rot))/4, odret(rot)/4, "one"]);
			ladowanie = 0;
			} else ladowanie++;
}
function strzeltwo(){
		if(ladowanietwo == 30){
			pil.push([postwo[0], postwo[1], (90 - Math.abs(rottwo))/4, odret(rottwo)/4,  "two"]);
			ladowanietwo = 0;
			} else ladowanietwo++;
}
function mina(){
	if(minowanie == 30){
			min.push([pos[0], pos[1], "one"]);
			minowanie = 0;
	} else minowanie++;
}
function minatwo(){
	if(minowanietwo == 30){
			min.push([postwo[0], postwo[1], "two"]);
			minowanietwo = 0;
	} else minowanietwo++;
}
//minowanie
function odret(rit){
	if(rit >= 90){
				var odbicie = 180 - rit;
			} else if((rit < 90) && (rit >= -90)){
				var odbicie = rit;
			} else if(rit < -90){
				var odbicie = -180 - rit;
			}
			return odbicie;
}
function loop(){
	clear();
	przycisk();
	tank();
	for(var i = 0; i < pil.length; i++){
		buum(i);
	}
	for(var g = 0; g < min.length; g++){
		podajm(g);
	}
	for(var i = 0; i < pil.length; i++){
		ctx.fillStyle = "white";
		ctx.fillRect(pil[i][0],pil[i][1], 5, 5);
		pil[i][0] = pil[i][0] + pil[i][2];
		pil[i][1] = pil[i][1] + pil[i][3];
	}
	for(var g = 0; g < min.length; g++){
		ctx.drawImage(muna, min[g][0] - 7,min[g][1] - 7);
	}
	live();
	if(gameover == ""){
		if(please == true)setTimeout("loop()", 20);
		else {
			ctx.font = "40px sans-serif";
			ctx.fillStyle = "green";
			ctx.fillText("Control:", width /2 -150, height/8);
			ctx.fillStyle = "blue";
			ctx.fillText("Drive W, A, S, D,  shoot: G, mine: H", width/15, height/3 - height/20);
			ctx.fillText("Click space to start", width/2 - 320, height/2+ height/4);
			ctx.fillStyle = "green";
			ctx.fillText("Drive - arrays  shoot: /, mine: .", width -600, height/3 + height/20);
			ctx.fillText("By Grzegorz L.", width/2 -220, height/2 + height / 3);
		}
	}
	else {
		ctx.font = "40px sans-serif";
		if(gameover == "one")ctx.fillStyle = "green";
		else ctx.fillStyle = "blue";
		if(gameover == "one")ctx.fillText("Green tank win!!!", width /2 -250, height/2-30);
		else ctx.fillText("Blue tank win!!!", width /2 -250, height/2-10);
	}
}
function podajm(g){

	if(min[g][0] > 0 && min[g][0] < width && min[g][1] > 0 && min[g][1] < height){
		var imgData = ctx.getImageData(min[g][0],min[g][1], 1, 1);
	var px = imgData.data;
	if(px[0] != 34 || px[1] != 34 || px[2] != 34){
		var one = Math.pow(min[g][0] - pos[0], 2) + Math.pow(min[g][1] - pos[1], 2);
		one = Math.sqrt(one);
		var two = Math.pow(min[g][0] - postwo[0], 2) + Math.pow(min[g][1] - postwo[1], 2);
		two = Math.sqrt(two);
		if(min[g][2] == "one" && one > two && two < 40){
			buch.push(["two", 30, 0, false]);
			min.splice(g, 1);
		} else if(min[g][2] == "two" && one < two && one < 40){
			buch.push(["one", 30, 0, false]);
			min.splice(g, 1);
		}
	}
	}

}
function live(){
	ctx.fillStyle = "rgba(0, 0, 255, 0.3)";
	ctx.fillRect(width*3/5/4, 30, barw * liwetwo/100, barh);
	ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
	ctx.strokeRect(width*3/5/4, 30, barw, barh);
	//ww
	ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
	ctx.fillRect(width - width*3/5/4 - barw, 30, barw * liwe/100, barh);
	ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
	ctx.strokeRect(width - width*3/5/4 - barw, 30, barw, barh);
}
function clear(){
	ctx.fillStyle = "#222";
	ctx.fillRect(0,0, width, height);
	//ctx.drawImage(mapa, 0,0, width, height);
}
function	tank(){
	ctx.save();
    var rad = rot * Math.PI / 180;
    ctx.translate(pos[0], pos[1]);
    ctx.rotate(rad);
	ctx.drawImage(img, -big[0]/2,-big[1]/2, big[0], big[1]);
	for(var m=0; m < buch.length; m++){
		if(buch[m].indexOf("one") >=0){
			ctx.drawImage(bum[buch[m][2]], -big[0]/2,-big[1]/2);
			buch[m][1] = buch[m][1] -15;
			if(buch[m][1] <= 0){
				buch[m][1] = 30;
				if(buch[m][3] == false){
					if(buch[m][2] <2)buch[m][2]++;
					else buch[m][3] = true;
				} else {
					if(buch[m][2] >0)buch[m][2]--;
					else {
						buch.splice(m, 1);
						liwe = liwe - 10;
						if(liwe <= 0)gameover = "two";
					}
				}
			}
		}
	}
	ctx.restore();
	//two
	ctx.save();
    rad = rottwo * Math.PI / 180;
    ctx.translate(postwo[0], postwo[1]);
    ctx.rotate(rad);
	ctx.drawImage(imgtwo, -big[0]/2,-big[1]/2);
	for(var m=0; m < buch.length; m++){
		if(buch[m].indexOf("two") >=0){
			ctx.drawImage(bum[buch[m][2]], -big[0]/2,-big[1]/2);
			buch[m][1] = buch[m][1] -15;
			if(buch[m][1] <= 0){
				buch[m][1] = 30;
				if(buch[m][3] == false){
					if(buch[m][2] <2)buch[m][2]++;
					else buch[m][3] = true;
				} else {
					if(buch[m][2] >0)buch[m][2]--;
					else {
						buch.splice(m, 1);
						liwetwo = liwetwo - 10;
						if(liwetwo <= 0)gameover = "one";
					}
				}
			}
		}
	}
	ctx.restore();
}
function buum(i){
	if((pil[i][0] < 0) || (pil[i][0] > width)){
		pil.splice(i, 1);
	} else if((pil[i][1] < 0) || (pil[i][1] > height)){
		pil.splice(i, 1);
	} else {
		var imgData = ctx.getImageData(pil[i][0],pil[i][1], 1, 1);
	var px = imgData.data;
	if(px[0] != 34 || px[1] != 34 || px[2] != 34){
		var one = Math.pow(pil[i][0] - pos[0], 2) + Math.pow(pil[i][1] - pos[1], 2);
		one = Math.sqrt(one);
		var two = Math.pow(pil[i][0] - postwo[0], 2) + Math.pow(pil[i][1] - postwo[1], 2);
		two = Math.sqrt(two);
		if(pil[i][4] == "one" && one > two && two < 40){
			buch.push(["two", 30, 0, false]);
			pil.splice(i, 1);
		} else if(pil[i][4] == "two" && one < two && one < 40){
			buch.push(["one", 30, 0, false]);
			pil.splice(i, 1);
		}
	}
}
}
