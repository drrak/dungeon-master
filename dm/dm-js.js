function getUrlVars(){return location.search.substring(1).split(',');}

function LoadCoordinates(l,x,y){
var r=document.getElementById('map');
var href='<a href=?';
var li='LEVEL ('+href+l+','+x+','+y+'>'+l+','+x+','+y+'</a>)<span style="float:right;">'+href+(l-1)+','+x+','+y+'>LEVEL UP</a>'+' | '+href+(l+1)+','+x+','+y+'>LEVEL DOWN</a></span>';
var lu=li+href+(l-1)+','+x+','+y+'><br><br>';
var ld=li+href+(l+1)+','+x+','+y+'><br><br>';
var su='. Stairs Up</a>';
var sd='. Stairs Down</a>';
var c=li+'<br><br>';
var n='';

document.getElementById('cel').style.top=((y-lvy)*14)+'px'; 
document.getElementById('cel').style.left=((x-lvx)*14)+'px';

if(l==0){
li='LEVEL ('+href+l+','+x+','+y+'>'+l+','+x+','+y+'</a>)<span style="float:right;">'+href+(l+1)+','+x+','+y+'>LEVEL DOWN</a></span>';
ld=li+href+(l+1)+','+x+','+y+'><br><br>';
c=li+'<br><br>';
var pp='<span id="champ"></span><br>';
var pe=0;

if(x==3&&y==15){n=ld+'01'+sd;}
else if(x==1&&y==4){n=c+'A. You can use the spell "See Through Walls" in front of the door to see Lord Order. If you come back here with the Firestaff (not completed with the power gem), the door opens, then you are teleported in front of Lord Order where you can see an alternate game end.';}
else if(x==9&&y==4){n=c+'B. Choose four <a href="http://dmweb.free.fr/?q=node/199">Dungeon Master Champions</a>.';}
else if(x==4&&y==9){n=c+'01. Apple';}
else if(x==5&&y==11){n=c+'02. Bread';}
else if(x==4&&y==14){n=c+'03. Torch';}
else if(x==4&&y==15){n=c+'04. Water, Scroll ("Invoke Ful for a magic torch")';}
else if(x==4&&y==17){n=c+'05. Scroll ("New lives for old bones")<br>I02. "Vi Altar Of Rebirth"';}
else if(x==0&&y==16){n=c+'06. Corn';}
else if(x==2&&y==13){n=c+'07. Bread';}
else if(x==2&&y==12){n=c+'08. Cheese';}
else if(x==2&&y==11){n=c+'09. Apple';}
else if(x==8&&y==4){n=c+'I01. "Hall Of Champions"';}
else if(x==10&&y==4){n=c+pp+'C01. Iaido Ruyito Chiburi<br>Equipment: Ghi, Ghi Trousers, Samurai Sword';pe=0;}
else if(x==10&&y==5){n=c+pp+'C02. Zed Duke Of Banville<br>Equipment: Mail Aketon, Blue Pants, Hosen, Torch';pe=58;}
else if(x==14&&y==3){n=c+pp+'C03. Chani Sayyadina Sihaya<br>Equipment: Silk Shirt, Gunna, Sandals, Moonstone';pe=116;}
else if(x==15&&y==4){n=c+pp+'C04. Hawk The Fearless<br>Equipment: Leather Jerkin, Leather Pants, Suede Boots, Arrow (2)';pe=174;}
else if(x==14&&y==6){n=c+pp+'C05. Boris Wizard Of Baldor<br>Equipment: Tunic, Leather Pants, Leather Boots, Rabbit\'s Foot #1';pe=232;}
else if(x==16&&y==8){n=c+pp+'C06. Alex Ander<br>Equipment: Leather Jerkin, Leather Pants, Suede Boots, Sling';pe=290;}
else if(x==17&&y==9){n=c+pp+'C07. Nabi The Prophet<br>Equipment: Tunic, Blue Pants, Sandals, Staff';pe=348;}
else if(x==16&&y==14){n=c+pp+'C08. Hissssa Lizar Of Makan<br>Equipment: None';pe=406;}
else if(x==16&&y==17){n=c+pp+'C09. Gothmog<br>Equipment: Cloak of Night';pe=464;}
else if(x==14&&y==12){n=c+pp+'C10. Sonja She Devil<br>Equipment: Halter, Gunna, Sandals, Choker, Sword';pe=522;}
else if(x==13&&y==12){n=c+pp+'C11. Leyla Shadowseek<br>Equipment: Silk Shirt, Leather Pants, Leather Boots, Rope';pe=580;}
else if(x==13&&y==14){n=c+pp+'C12. Mophus The Healer<br>Equipment:  Robe (Body), Robe (Legs), Sandals, Bread, Cheese, Apple';pe=638;}
else if(x==12&&y==13){n=c+pp+'C13. Wuuf The Bika<br>Equipment: Leather Jerkin, Empty Flask';pe=696;}
else if(x==11&&y==15){n=c+pp+'C14. Stamm Bladecaster<br>Equipment: Tunic, Leather Pants, Suede Boots, Axe';pe=754;}
else if(x==7&&y==16){n=c+pp+'C15. Azizi Johari<br>Equipment: Halter, Barbarian Hide, Hide Shield, Dagger (2)';pe=812;}
else if(x==8&&y==15){n=c+pp+'C16. Leif The Valiant<br>Equipment: Leather Jerkin, Leather Pants, Leather Boots';pe=870;}
else if(x==9&&y==13){n=c+pp+'C17. Tiggy Tamal<br>Equipment: Kirtle, Gunna, Sandals, Wand';pe=928;}
else if(x==7&&y==13){n=c+pp+'C18. Wu Tse Son Of Heaven<br>Equipment: Silk Shirt, Tabard, Sandals, Throwing Star (3)';pe=986;}
else if(x==6&&y==13){n=c+pp+'C19. Daroou<br>Equipment: None';pe=1044;}
else if(x==7&&y==9){n=c+pp+'C20. Halk The Barbarian<br>Equipment: Bezerker Helm, Barbarian Hide, Sandals, Club';pe=1102;}
else if(x==9&&y==9){n=c+pp+'C21. Syra Child Of Nature<br>Equipment: Elven Doublet, Tabard, Apple';pe=1160;}
else if(x==11&&y==10){n=c+pp+'C22. Gando Thurfoot<br>Equipment: Leather Jerkin, Blue Pants, Leather Boots, Poison Dart (2)';pe=1218;}
else if(x==12&&y==9){n=c+pp+'C23. Linflas<br>Equipment: Elven Doublet, Elven Huke, Elven Boots, Bow';pe=1276;}
else if(x==9&&y==7){n=c+pp+'C24. Elija Lion Of Yaitopya<br>Equipment: Robe (Body), Robe (Legs), Sandals, Magical Box (Blue)';pe=1334;}
else{n=li;}
r.innerHTML=n;
var cp=document.getElementById('champ');
if(cp!==null){cp.style.backgroundPosition='0px -'+pe+'px';}
}
if(l==1){
if(x==3&&y==15){n=lu+'01'+su;}
else if(x==6&&y==40){n=ld+'02'+sd;}
else if(x==7&&y==22 || x==24&&y==19 || x==13&&y==29){n=ld+'Pit</a>';}
else if(x==6&&y==14){n=c+'01. Club';}
else if(x==6&&y==17){n=c+'02. Corn, Apple, Dagger, Falchion, Scroll ("Small details can hide great rewards")';}
else if(x==0&&y==16){n=c+'03. Gold Key<br>L01. Gold Key';}
else if(x==1&&y==23){n=c+'04. Topaz Key';}
else if(x==7&&y==23){n=c+'05. Leather Boots, Gold Key';}
else if(x==8&&y==19){n=c+'06. Elven Doublet, Dagger, Arrow, Torch, Emerald Key';}
else if(x==4&&y==30){n=c+'07. Rock';}
else if(x==15&&y==24){n=c+'08. Iron Key, Ghi Trousers';}
else if(x==14&&y==21){n=c+'09. Solid Key';}
else if(x==13&&y==22){n=c+'10. Falchion';}
else if(x==14&&y==22){n=c+'11. Torch, Leather Boots';}
else if(x==8&&y==17){n=c+'12. Gold Key';}
else if(x==13&&y==19){n=c+'13. Gold Key';}
else if(x==25&&y==14){n=c+'14. Boulder';}
else if(x==30&&y==15){n=c+'15. Gold Key, Apple';}
else if(x==17&&y==25){n=c+'16. Apple';}
else if(x==29&&y==25){n=c+'17. Rock';}
else if(x==31&&y==20){n=c+'18. Iron Key';}
else if(x==31&&y==24){n=c+'19. Key of B';}
else if(x==19&&y==25){n=c+'20. Drumstick, Empty flask (3), Leather pants, Scroll ("Casting Vi Bro into a flask creates a serum for curing poison"), Scroll ("Casting Vi into a flask creates a serum that heals wounds")';}
else if(x==16&&y==27){n=c+'21. Apple, Cheese (2), Torch';}
else if(x==13&&y==28){n=c+'22. Gold Key, Throwing Star';}
else if(x==30&&y==33){n=c+'23. Copper Coin';}
else if(x==30&&y==39){n=c+'24. Torch';}
else if(x==27&&y==43){n=c+'25. Chest [Ya potion (2), Scroll ("Drink these to gain magical defense")]';}
else if(x==12&&y==44){n=c+'26. Throwing Star';}
else if(x==13&&y==43){n=c+'27. Water';}
else if(x==14&&y==42){n=c+'28. Apple';}
else if(x==16&&y==42){n=c+'29. Falchion';}
else if(x==15&&y==45){n=c+'30. Magical Box (Blue)';}
else if(x==5&&y==32){n=c+'31. Buckler';}
else if(x==2&&y==45){n=c+'32. Chest [Drumstick, Empty Flask, Corn, Cheese, Bread (2), Magical Box (Blue), Scroll ("Des Ven will conjure a poison spell")]';}
else if(x==6&&y==43){n=c+'33. Torch';}
else if(x==29&&y==16){n=c+'I01. "Step inside take a ride"';}
else if(x==22&&y==22){n=c+'I02. "This wall says nothing"';}
else if(x==13&&y==30){n=c+'I03. "To close pit leave a valuable on floor"';}
else if(x==28&&y==41){n=c+'I04. "None shall pass"';}
else if(x==18&&y==40){n=c+'I05. "This fountain accepts one wish"<br>L13. Copper Coin';}
else if(x==3&&y==19){n=c+'L02. Topaz Key';}
else if(x==5&&y==19){n=c+'L03. Gold Key';}
else if(x==11&&y==27){n=c+'L04. Emerald Key';}
else if(x==2&&y==27){n=c+'L05. Iron Key';}
else if(x==5&&y==27){n=c+'L06. Solid Key';}
else if(x==10&&y==14){n=c+'L07. Gold Key';}
else if(x==22&&y==19){n=c+'L08. Gold Key<br>05. Screamer (2)';}
else if(x==28&&y==18){n=c+'L09. Gold Key';}
else if(x==30&&y==21){n=c+'L10. Iron Key';}
else if(x==24&&y==24){n=c+'L11. Key of B';}
else if(x==21&&y==35){n=c+'L12. Gold Key';}
else if(x==6&&y==16){n=c+'01. Mummy';}
else if(x==4&&y==27){n=c+'02. Screamer';}
else if(x==11&&y==19){n=c+'03. Screamer';}
else if(x==13&&y==18){n=c+'04. Screamer (4)';}
else if(x==27&&y==16){n=c+'06. Mummy';}
else if(x==31&&y==23){n=c+'07. Screamer';}
else if(x==24&&y==27){n=c+'08. Mummy';}
else if(x==16&&y==30){n=c+'09. Screamer (2)';}
else if(x==27&&y==34){n=c+'10. Mummy (3)';}
else if(x==20&&y==43){n=c+'11. Screamer (4)';}
else if(x==8&&y==38){n=c+'12. Screamer (4) [Torch, Empty Flask]';}
else if(x==5&&y==38){n=c+'13. Screamer [Throwing Star]';}
else if(x==3&&y==32){n=c+'14. Mummy (4)';}
else if(x==1&&y==33){n=c+'15. Mummy (2)';}
else{n=li;}
r.innerHTML=n;
}
if(l==2){
if(x==30&&y==31){n=ld+'03'+sd;}
else if(x==6&&y==40){n=lu+'02'+su;}
else if(x==20&&y==13 || x==11&&y==26 || x==21&&y==15 || x==25&&y==23){n=ld+'Pit</a>';}
else if(x==7&&y==21){n=lu+'Teleport (1,7,21)</a>';}
else if(x==24&&y==18){n=lu+'Teleport (1,24,18)</a>';}
else if(x==13&&y==30){n=lu+'Teleport (1,13,30)</a>';}
else if(x==14&&y==38){n=c+'01. Bezerker Helm, Suede Boots, Leather Pants, Leather Jerkin';}
else if(x==13&&y==38){n=c+'02. Arrow, Waterskin, Cheese';}
else if(x==8&&y==38){n=c+'03. Compass';}
else if(x==21&&y==23){n=c+'04. Chest [Apple, Cheese, Gold Coin (2), Scroll ("Ya will create a stamina potion"), Scroll ("Some doors can be opened with a Zo spell")]';}
else if(x==17&&y==29){n=c+'05. Drumstick';}
else if(x==5&&y==34){n=c+'06. Chest [Mirror Of Dawn]';}
else if(x==12&&y==32){n=c+'07. Drumstick, Gold Key, Apple, Leather Jerkin<br>03. Mummy (2)';}
else if(x==9&&y==27){n=c+'08. Silver Coin';}
else if(x==9&&y==28){n=c+'09. Bread';}
else if(x==6&&y==31){n=c+'10. Arrow';}
else if(x==5&&y==27){n=c+'11. Wand';}
else if(x==5&&y==23){n=c+'12. Chest [Silver Coin, Copper Coin (3), Magical Box (Blue)]<br>L04. Copper Coin';}
else if(x==8&&y==25){n=c+'13. Gold Key';}
else if(x==8&&y==23){n=c+'14. Corn, Apple, Cheese (2)';}
else if(x==9&&y==24){n=c+'15. Leather Pants';}
else if(x==14&&y==20){n=c+'16. Bread';}
else if(x==6&&y==12){n=c+'17. Cheese';}
else if(x==12&&y==16){n=c+'18. Arrow';}
else if(x==12&&y==20){n=c+'19. Cheese, Wooden Shield';}
else if(x==5&&y==20){n=c+'20. Gold Key, Sabre, Fine Robe (Body), Fine Robe (Legs)';}
else if(x==18&&y==11){n=c+'21. Arrow';}
else if(x==27&&y==15){n=c+'22. Gold Key';}
else if(x==24&&y==15){n=c+'23. Helmet';}
else if(x==24&&y==14){n=c+'24. Elven Huke';}
else if(x==28&&y==22){n=c+'25. Apple';}
else if(x==34&&y==22){n=c+'26. Sling';}
else if(x==32&&y==21){n=c+'27. Cheese<br>12. Mummy (4)';}
else if(x==32&&y==19){n=c+'28. Apple';}
else if(x==29&&y==14){n=c+'29. Rabbit\'s Foot #2';}
else if(x==31&&y==11){n=c+'30. Blue Gem, Drumstick';}
else if(x==32&&y==29){n=c+'31. Cheese';}
else if(x==30&&y==27){n=c+'32. Gold Key';}
else if(x==31&&y==27){n=c+'33. Bezerker Helm';}
else if(x==32&&y==27){n=c+'34. Bread';}
else if(x==28&&y==33){n=c+'35. Arrow';}
else if(x==22&&y==38){n=c+'36. Gold Key';}
else if(x==32&&y==40){n=c+'37. Ra Key';}
else if(x==32&&y==38){n=c+'38. Empty Flask, Scroll ("The spell Des Ew weakens nonmaterial beings")';}
else if(x==34&&y==39){n=c+'39. Torch';}
else if(x==35&&y==39){n=c+'40. Torch';}
else if(x==35&&y==40){n=c+'41. Cheese, Bread, Drumstick, Apple';}
else if(x==32&&y==36){n=c+'42. Empty Flask, Mail Aketon<br>19. Rockpile (2)';}
else if(x==34&&y==36){n=c+'43. Drumstick (2), Sword<br>20. Trolin (2)';}
else if(x==19&&y==28){n=c+'I01. "Choose your door choose your fate"';}
else if(x==16&&y==26){n=c+'I02. "Chambers of the guardian"';}
else if(x==16&&y==24){n=c+'I03. "The vault"';}
else if(x==14&&y==24){n=c+'I04. "You must pay for your entrance"<br>L02. Gold Coin (2)';}
else if(x==12&&y==26){n=c+'I05. "Cast your influence, cast your might"<br>A. Cast a Zo spell to open the door, then throw an item to close the pit.';}
else if(x==18&&y==22){n=c+'I06. "The Matrix"';}
else if(x==20&&y==22){n=c+'I07. "Time is of the essence"';}
else if(x==20&&y==18){n=c+'I08. "Hit and run"';}
else if(x==22&&y==24){n=c+'I09. "Room of the gem"';}
else if(x==25&&y==24){n=c+'I10. "Step right up going down..."';}
else if(x==22&&y==26){n=c+'I11. "Creature cavern"';}
else if(x==32&&y==39){n=c+'I12. "Vi altar of rebirth"';}
else if(x==11&&y==34){n=c+'L01. Mirror Of Dawn';}
else if(x==11&&y==29){n=c+'L03. Silver Coin';}
else if(x==26&&y==24){n=c+'L05. Blue Gem';}
else if(x==26&&y==40){n=c+'L06. Gold Key';}
else if(x==28&&y==40){n=c+'L07. Gold Key';}
else if(x==30&&y==40){n=c+'L08. Gold Key';}
else if(x==36&&y==36){n=c+'L09. Gold Key';}
else if(x==33&&y==34){n=c+'L10. Gold Key';}
else if(x==21&&y==16){n=c+'B. Press the button and throw an item in the teleporter.';}
else if(x==15&&y==30){n=c+'01. Trolin (3)';}
else if(x==13&&y==34){n=c+'02. Rockpile';}
else if(x==11&&y==22){n=c+'04. Trolin (2)';}
else if(x==11&&y==23){n=c+'05. Mummy (4)';}
else if(x==6&&y==29){n=c+'06. Rockpile (2)';}
else if(x==6&&y==26){n=c+'07. Trolin';}
else if(x==5&&y==25){n=c+'08. Trolin (4) [Cheese]';}
else if(x==23&&y==12){n=c+'09. Trolin (2)';}
else if(x==26&&y==19){n=c+'10. Rockpile (2)';}
else if(x==35&&y==29){n=c+'11. Trolin (2)';}
else if(x==32&&y==17){n=c+'13. Rockpile (2)';}
else if(x==24&&y==30){n=c+'14. Trolin (2)';}
else if(x==22&&y==31){n=c+'15. Mummy (3)';}
else if(x==28&&y==37){n=c+'16. Trolin (3)';}
else if(x==29&&y==38){n=c+'17. Trolin Generator (1-4)';}
else if(x==25&&y==37){n=c+'18. Trolin (4) [Screamer Slice, Cheese]';}
else{n=li;}
r.innerHTML=n;
}
if(l==3){
if(x==30&&y==31){n=lu+'03'+su;}
else if(x==7&&y==12){n=ld+'05'+sd;}
else if(x==6&&y==8){n=ld+'04'+sd;}
else if(x==7&&y==4 || x==6&&y==13){n=ld+'Pit</a>';}
else if(x==25&&y==24){n=lu+'Teleport (2,25,24)</a>';}
else if(x==12&&y==26){n=lu+'Teleport (2,12,26)</a>';}
else if(x==21&&y==16){n=lu+'Teleport (2,21,16)</a>';}
else if(x==30&&y==7){n=c+href+'3,14,18>Teleport (3,14,18)</a>';}
else if(x==15&&y==18){n=c+href+'3,29,6>Teleport (3,29,6)</a>';}
else if(x==25&&y==23){n=c+'01. Drumstick';}
else if(x==23&&y==31){n=c+'02. Cheese, Water, Axe<br>I02 "Don\'t let a closed door stop you"';}
else if(x==10&&y==29){n=c+'03. Gold Key';}
else if(x==12&&y==21){n=c+'04. Magical Box (Blue), Drumstick';}
else if(x==26&&y==20){n=c+'05. Scroll ("Ya Bro creates a magical shield potion"), Scroll ("The spell Oh Ven cast a cloud of poison.")';}
else if(x==20&&y==17){n=c+'06. Teowand';}
else if(x==23&&y==11){n=c+'07. Small Shield';}
else if(x==18&&y==2){n=c+'08. Basinet';}
else if(x==16&&y==0){n=c+'09. Leather Jerkin, Leather Pants';}
else if(x==14&&y==6){n=c+'10. Empty Flask';}
else if(x==10&&y==12){n=c+'11. Rapier';}
else if(x==6&&y==18){n=c+'12. Neta Potion, Drumstick';}
else if(x==2&&y==23){n=c+'13. Leg Mail';}
else if(x==1&&y==22){n=c+'14. Elven Boots';}
else if(x==3&&y==18){n=c+'15. Empty Flask';}
else if(x==0&&y==8){n=c+'16. Drumstick, Torch, Hosen';}
else if(x==10&&y==9){n=c+'17. Bow';}
else if(x==10&&y==8){n=c+'18. Gold Coin';}
else if(x==6&&y==6){n=c+'19. Horn Of Fear, Empty Flask';}
else if(x==30&&y==30){n=c+'I01 "Prepare to meet your doom"';}
else if(x==29&&y==7){n=c+'I03 "Shortcut"';}
else if(x==14&&y==17){n=c+'I04 "Shortcut back"';}
else if(x==8&&y==3){n=c+'I05 "This is my prisoner. Let him suffer."';}
else if(x==6&&y==3){n=c+'I06 "You will regret that."';}
else if(x==25&&y==13){n=c+'L01. Gold Coin';}
else if(x==28&&y==7){n=c+'L02. Gold Key';}
else if(x==19&&y==30){n=c+'A. A teleporter appears when the button is pressed, and teleports you in front of the door. Run through it before it closes.';}
else if(x==23&&y==16){n=c+'B. Creatures cannot pass through this teleporter.';}
else if(x==1&&y==14){n=c+'C. This room is a good place to train because it contains a Screamer Generator, and Screamers are easy to kill. It is also a unlimited source of food (Screamer Slices), and you have a fountain downstairs.';}
else if(x==26&&y==28){n=c+'01. Rockpile';}
else if(x==21&&y==28){n=c+'02. Screamer (4) [Gold Coin]';}
else if(x==21&&y==24){n=c+'03. Rockpile (3) [Gold Coin]';}
else if(x==11&&y==29){n=c+'04. Giant Wasp';}
else if(x==14&&y==26){n=c+'05. Magenta Worm (2) [Gold Coin]';}
else if(x==16&&y==21){n=c+'06. Magenta Worm (2) [Gold Coin]';}
else if(x==27&&y==17){n=c+'07. Ghost';}
else if(x==24&&y==5){n=c+'08. Magenta Worm Generator (2)';}
else if(x==15&&y==6){n=c+'09. Magenta Worm Generator (2)';}
else if(x==10&&y==17){n=c+'10. Magenta Worm Generator (2)';}
else if(x==8&&y==14){n=c+'11. Screamer Generator (2)';}
else if(x==7&&y==23){n=c+'12. Rockpile Generator (1)';}
else if(x==4&&y==23){n=c+'13. Magenta Worm Generator (2)';}
else if(x==4&&y==15){n=c+'14. Magenta Worm Generator (2)';}
else if(x==0&&y==17){n=c+'15. Screamer Generator (1-4)';}
else if(x==1&&y==15){n=c+'16. Screamer (4)';}
else if(x==7&&y==5){n=c+'17. Mummy';}
else if(x==2&&y==1){n=c+'18. Magenta Worm (2)';}
else if(x==3&&y==1){n=c+'19. Magenta Worm (2)';}
else if(x==5&&y==1){n=c+'20. Magenta Worm (2)';}
else if(x==6&&y==1){n=c+'21. Magenta Worm (2)';}
else{n=li;}
r.innerHTML=n;
}
if(l==4){
if(x==6&&y==8){n=lu+'04'+su;}
else if(x==7&&y==12){n=lu+'05'+su;}
else if(x==11&&y==25){n=ld+'06'+sd;}
else if(x==13&&y==6){n=ld+'07'+sd;}
else if(x==13&&y==25){n=ld+'Pit</a>';}
else if(x>=18&&x<=22&&y>=5&&y<=9){n=ld+'Pit</a>';}
else if(x==7&&y==3){n=lu+'Teleport (3,7,3)</a>';}
else if(x==18&&y==16){n=c+'01. Torch';}
else if(x==12&&y==19){n=c+'02. Mirror Of Dawn';}
else if(x==12&&y==14){n=c+'03. Poison Dart';}
else if(x==10&&y==27){n=c+'04. Gold Coin, Rabbit\'s Foot #3';}
else if(x==8&&y==27){n=c+'05. Blue Gem, Helmet';}
else if(x==7&&y==27){n=c+'06. Poison Dart (2)';}
else if(x==20&&y==19){n=c+'07. Gold Coin';}
else if(x==17&&y==28){n=c+'08. Ekkhard Cross';}
else if(x==17&&y==29){n=c+'09. Blue Gem, Mace';}
else if(x==29&&y==27){n=c+'10. Gem Of Ages';}
else if(x==32&&y==28){n=c+'11. Dagger';}
else if(x==32&&y==29){n=c+'12. Hosen, Leg Mail, Mail Aketon, Helmet';}
else if(x==33&&y==12){n=c+'13. Corn, Choker';}
else if(x==30&&y==6){n=c+'14. Casque\'n Coif';}
else if(x==33&&y==3){n=c+'15. Staff Of Claws';}
else if(x==28&&y==10){n=c+'16. Illumulet';}
else if(x==25&&y==4){n=c+'17. Large Shield';}
else if(x==26&&y==6){n=c+'18. Drumstick, Torch';}
else if(x==16&&y==8){n=c+'19. Drumstick';}
else if(x==14&&y==8){n=c+'20. Ven Potion';}
else if(x==14&&y==7){n=c+'21. Ven Potion (2)';}
else if(x==12&&y==10){n=c+'22. Chest [Bro Potion, Magical Box (Blue), Ful Bomb]';}
else if(x==10&&y==7){n=c+'23. Blue Gem, Dane Potion';}
else if(x==14&&y==3){n=c+'24. Ku Potion';}
else if(x==17&&y==12){n=c+'I01. "Treasure stores"</a>';}
else if(x==13&&y==27){n=c+'I02. "Store rooms"</a>';}
else if(x==15&&y==17){n=c+'A. Take teleporters with letters alphabetically.</a><br>';}
else if(x==20&&y==10){n=c+'B. Directions to go through the room:<br>N E E W E N W N E W E N N E to go from ('+href+'4,20,10>20,10</a>) to ('+href+'4,23,5>23,05</a>)<br>W W W S S(!) S W W N S N N N W to go from ('+href+'4,23,5>23,05</a>) to ('+href+'4,17,5>17,05</a>)<br>E S S S S E E S to go from ('+href+'4,17,5>17,05</a>) to ('+href+'4,20,10>20,10</a>)</a>';}
else if(x==5&&y==17){n=c+'01. Swamp Slime Generator (1)';}
else if(x==20&&y==14){n=c+'02. Swamp Slime';}
else if(x==21&&y==16){n=c+'03. Screamer (2)';}
else if(x==12&&y==23){n=c+'04. Couatl';}
else if(x==17&&y==18){n=c+'05. Swamp Slime [Ven Potion]';}
else if(x==31&&y==27){n=c+'06. Swamp Slime';}
else if(x==33&&y==16){n=c+'07. Couatl';}
else if(x==29&&y==9){n=c+'08. Swamp Slime (2)';}
else if(x==27&&y==4){n=c+'09. Couatl';}
else if(x==27&&y==10){n=c+'10. Couatl';}
else if(x==24&&y==5){n=c+'11. Swamp Slime';}
else if(x==17&&y==5){n=c+'12. Couatl Generator (1)';}
else if(x==13&&y==10){n=c+'13. Couatl';}
else if(x==11&&y==2){n=c+'14. Swamp Slime';}
else{n=li;}
r.innerHTML=n;
}
if(l==5){
if(x==30&&y==30){n=ld+'08'+sd;}
else if(x==11&&y==25){n=lu+'06'+su;}
else if(x==13&&y==6){n=lu+'07'+su;}
else if(x==20&&y==32 || x==22&&y==32){n=ld+'Pit</a>';}
else if(x==20&&y==10){n=lu+'Teleport (4,20,10)</a>';}
else if(x==9&&y==7){n=c+href+'5,11,30>Teleport (5,11,30)</a>';}
else if(x==11&&y==29){n=c+href+'5,8,6>Teleport (5,8,6)</a>';}
else if(x==22&&y==5){n=c+'01. Drumstick';}
else if(x==16&&y==6){n=c+'02. Cheese, Bro Potion';}
else if(x==12&&y==7){n=c+'03. Ven Potion';}
else if(x==14&&y==7){n=c+'04. Torch';}
else if(x==17&&y==24){n=c+'05. Iron Key';}
else if(x==18&&y==34){n=c+'06. Iron Key<br>02. Wizard Eye';}
else if(x==26&&y==26){n=c+'07. Iron Key, Mail Aketon';}
else if(x==26&&y==21){n=c+'08. Iron Key';}
else if(x==15&&y==21){n=c+'09. Large Shield';}
else if(x==27&&y==28){n=c+'10. Ros Potion, Vi Potion, Drumstick, Torch';}
else if(x==34&&y==33){n=c+'11. Magical Box (Blue)';}
else if(x==34&&y==19){n=c+'12. Iron Key, Torso Plate';}
else if(x==28&&y==15){n=c+'13. Magical Box (Green)';}
else if(x==29&&y==11){n=c+'14. Drumstick (2)';}
else if(x==28&&y==10){n=c+'15. Yew Staff';}
else if(x==32&&y==9){n=c+'16. Casque\'n Coif';}
else if(x==29&&y==5){n=c+'17. Vorpal Blade #1';}
else if(x==25&&y==8){n=c+'18. Solid Key';}
else if(x==22&&y==11){n=c+'19. Corn, Throwing Star (2)';}
else if(x==18&&y==17){n=c+'20. Drumstick';}
else if(x==18&&y==18){n=c+'21. Mithral Aketon, Slayer (2)';}
else if(x==11&&y==15){n=c+'22. Magical Box (Green) (2)<br>09. Giant Wasp (3)';}
else if(x==9&&y==17){n=c+'23. Torch';}
else if(x==6&&y==11){n=c+'24. Magical Box (Blue)';}
else if(x==12&&y==21){n=c+'25. Vorpal Blade #2';}
else if(x==16&&y==30){n=c+'26. Crossbow';}
else if(x==14&&y==33){n=c+'27. Chest [Slayer, Water Flask, Drumstick]';}
else if(x==24&&y==32){n=c+'28. Mithral Mail';}
else if(x==12&&y==25){n=c+'I01. "The riddle room"';}
else if(x==13&&y==23){n=c+'I02. "I am all I am none"';}
else if(x==16&&y==23){n=c+'I03. "A golden head and tail but no body"';}
else if(x==13&&y==27){n=c+'I04. "Hard as rocks blue as sky twinkle in womans eye"';}
else if(x==16&&y==27){n=c+'I05. "I arch yet have no back"';}
else if(x==22&&y==26){n=c+'I06. "The grave of king Filius explorer of combinations"';}
else if(x==24&&y==22){n=c+'I07. "The grave of king Milias the golden who even"';}
else if(x==24&&y==23){n=c+'I08. "In death thirsts for bullion."';}
else if(x==25&&y==18){n=c+'I09. "If you want to stay alive you better turn and run"';}
else if(x==25&&y==17){n=c+'I10. "I hate cowards"';}
else if(x==25&&y==19){n=c+'I11. "I don\'t like to be ignored"';}
else if(x==23&&y==14){n=c+'I12. "Test your strength"';}
else if(x==19&&y==9){n=c+'I13. "Ha ha ha"';}
else if(x==30&&y==33){n=c+'I14. "Altar of Vi"';}
else if(x==22&&y==23){n=c+'L01. Gold Coin';}
else if(x==20&&y==19){n=c+'L02. Iron Key';}
else if(x==22&&y==19){n=c+'L03. Iron Key';}
else if(x==27&&y==17){n=c+'L04. Iron Key';}
else if(x==30&&y==16){n=c+'L05. Iron Key';}
else if(x==25&&y==13){n=c+'L06. Solid Key';}
else if(x==13&&y==16){n=c+'L07. Iron Key';}
else if(x==13&&y==25){n=c+'A. Each of the four alcoves requires one of these four items: a Mirror Of Dawn, a Gold Coin, a Blue Gem and a Bow. Once three items are in place, the door will open. The fourth item will reveal the hidden alcove.';}
else if(x==18&&y==31){n=c+'B. Pull the lever, then put any item on ground in the teleporter (do not throw it) so that it gets at (20,33). The door will then open.';}
else if(x==23&&y==26){n=c+'C. You need to press the two buttons at ('+href+'5,24,25>24,25</a>) and ('+href+'5,25,28>25,28</a>) to open the wall. The two other buttons are already in the correct state.';}
else if(x==29&&y==26){n=c+'D. A skeleton must walk on the pressure pad to open the wall. Leaving an item on floor will not work.';}
else if(x==13&&y==7){n=c+'01. Skeleton';}
else if(x==23&&y==27){n=c+'03. Wizard Eye';}
else if(x==23&&y==22){n=c+'04. Skeleton (2)';}
else if(x==30&&y==23){n=c+'05. Skeleton Generator (4)';}
else if(x==34&&y==22){n=c+'06. Wizard Eye Generator (2)';}
else if(x==34&&y==20){n=c+'07. Skeleton (2)';}
else if(x==29&&y==7){n=c+'08. Skeleton (4)';}
else if(x==11&&y==10){n=c+'10. Skeleton (2)';}
else if(x==5&&y==11){n=c+'11. Wizard Eye (4)';}
else if(x==6&&y==12){n=c+'11. Wizard Eye (4)';}
else if(x==5&&y==24){n=c+'12. Wizard Eye Generator (1-4)';}
else if(x==9&&y==25){n=c+'13. Skeleton (2)';}
else if(x==11&&y==21){n=c+'14. Skeleton (4)';}
else if(x==12&&y==19){n=c+'15. Skeleton';}
else if(x==11&&y==27){n=c+'16. Skeleton (4)';}
else if(x==11&&y==23){n=c+'17. Skeleton (2)';}
else if(x==12&&y==33){n=c+'18. Skeleton Generator (1-4)';}
else if(x==15&&y==33){n=c+'19. Giant Wasp Generator (1)';}
else if(x==16&&y==32){n=c+'20. Skeleton Generator (1)';}
else if(x==23&&y==33){n=c+'21. Wizard Eye';}
else{n=li;}
r.innerHTML=n;
}
if(l==6){
if(x==27&&y==34){n=ld+'24'+sd;}
else if(x==32&&y==31){n=ld+'09'+sd;}
else if(x==30&&y==30){n=lu+'08'+su;}
else if(x==20&&y==31){n=c+href+'5,20,30>Teleport (5,20,30)</a>';}
else if(x==27&&y==32){n=c+'01. Magical Box (Green)';}
else if(x==33&&y==28){n=c+'02. Scroll ("Fireball Ful Ir. Fire Shield Ful Bro Neta.")';}
else if(x==33&&y==29){n=c+'03. Apple, Corn, Scroll ("Light Oh Ir Ra. Darkness Des Ir Sar.")';}
else if(x==31&&y==25){n=c+'04. Scroll ("The keys to passage lie hidden deep.")';}
else if(x==9&&y==20){n=c+'05. Magical Box (Green)';}
else if(x==9&&y==23){n=c+'06. Ven Potion, Ful Bomb, The Inquisitor';}
else if(x==9&&y==7){n=c+'07. Empty Flask (3)';}
else if(x==10&&y==7){n=c+'08. Scroll (3) ("Neither Chaos nor Order is truly balanced", "The Firestaff can restore balance or destroy it.", "The power gem is sealed in the mountain by a strange magical force.")';}
else if(x==10&&y==6){n=c+'09. Orange Gem, Corbamite, Magnifier';}
else if(x==14&&y==8){n=c+'10. Torch';}
else if(x==18&&y==8){n=c+'11. Boulder, Rock';}
else if(x==22&&y==8){n=c+'12. Empty Flask';}
else if(x==26&&y==8){n=c+'13. Water Flask';}
else if(x==29&&y==8){n=c+'14. Scroll ("Balance is the ultimate good")';}
else if(x==31&&y==9){n=c+'15. Ashes, Tourquoise Key';}
else if(x==33&&y==12){n=c+'16. Ra Key, Scroll (5) ("I fear for the people of the world should the power gem and the Firestaff get in the wrong hands", "I have given the Firestaff much power. Power to do and undo. Power to break and mend.", "The Firestaff can contain a being of pure alignment with its fluxcage.", "Once fluxcaged a being can be transmuted by the power of the staff which should always be used for balance.", "Zokathra might create a plasma that could burn through the amalgam encasing the gem.")';}
else if(x==12&&y==8){n=c+'17. Bolt Blade, Flamebain';}
else if(x==16&&y==8){n=c+'18. Magical Box (Green), Crown Of Nerra';}
else if(x==20&&y==8){n=c+'19. Boots Of Speed #4, Dragon Spit';}
else if(x==24&&y==8){n=c+'20. Gem Of Ages, Illumulet, Sceptre Of Lyf';}
else if(x==5&&y==6){n=c+'21. Winged Key';}
else if(x==19&&y==20){n=c+'22. The Firestaff';}
else if(x==31&&y==28){n=c+'I01. "The tomb of The Firestaff"';}
else if(x==10&&y==10){n=c+'I02. "Danger Enter with caution"';}
else if(x==9&&y==8){n=c+'I03. "Clean flasks"';}
else if(x==10&&y==8){n=c+'I04. "Notes scrolls formulas spells"';}
else if(x==9&&y==6){n=c+'I05. "Sundry supplies"';}
else if(x==14&&y==7){n=c+'I06. "Fire elements"';}
else if(x==18&&y==7){n=c+'I07. "Earth elements"';}
else if(x==22&&y==7){n=c+'I08. "Air elements"';}
else if(x==26&&y==7){n=c+'I09. "Water elements"';}
else if(x==33&&y==11){n=c+'I10. "Reading room Keep out". This inscription is actually not visible in the game because it is disabled. You can view it in a dungeon editor';}
else if(x==32&&y==28){n=c+'L01. Ra Key';}
else if(x==32&&y==25){n=c+'L02. Ra Key';}
else if(x==32&&y==20){n=c+'L03. Ra Key';}
else if(x==25&&y==10){n=c+'L04. Tourquoise Key';}
else if(x==21&&y==10){n=c+'L05. Tourquoise Key';}
else if(x==17&&y==10){n=c+'L06. Tourquoise Key';}
else if(x==13&&y==10){n=c+'L07. Tourquoise Key';}
else if(x==8&&y==10){n=c+'L08. Ruby Key';}
else if(x==8&&y==11){n=c+'L09. Ra Key';}
else if(x==17&&y==21){n=c+'L10. Master Key';}
else if(x==21&&y==21){n=c+'L11. Master Key';}
else if(x==9&&y==19){n=c+'01. Stone Golem';}
else if(x==9&&y==22){n=c+'02. Stone Golem';}
else if(x==18&&y==22){n=c+'03. Stone Golem';}
else if(x==20&&y==22){n=c+'04. Stone Golem';}
else if(x==19&&y==34){n=c+'05. Stone Golem';}
else{n=li;}
r.innerHTML=n;
}
if(l==7){
if(x==29&&y==34){n=ld+'25'+sd;}
else if(x==27&&y==34){n=lu+'24'+su;}
else if(x==32&&y==31){n=lu+'09'+su;}
else if(x==28&&y==30){n=ld+'11'+sd;}
else if(x==24&&y==31){n=ld+'10'+sd;}
else if(x==23&&y==16){n=ld+'13'+sd;}
else if(x==21&&y==12 || x==28&&y==28 || x==30&&y==26 || x==32&&y==24 || x==33&&y==23 || x==34&&y==24 || x==33&&y==31 || x==37&&y==24 || x==38&&y==26 || x==39&&y==27 || x==39&&y==34 || x==38&&y==35 || x==37&&y==35 || x==41&&y==28){n=ld+'Pit</a>';}
else if(x==34&&y==38){n=c+'01. Torch';}
else if(x==35&&y==39){n=c+'02. Scroll ("Four potions for boosting skills Ful Bro Ku Oh Bro Ros Ya Bro Dain Ya Bro Neta")';}
else if(x==36&&y==39){n=c+'03. Copper Coin';}
else if(x==29&&y==38){n=c+'04. Delta';}
else if(x==32&&y==37){n=c+'05. Jewel Symal';}
else if(x==31&&y==34){n=c+'06. Ful Bomb, Magical Box (Green)';}
else if(x==50&&y==31){n=c+'07. Mace Of Order';}
else if(x==50&&y==32){n=c+'08. Ful Bomb (2)';}
else if(x==50&&y==17){n=c+'09. Staff Of Manar';}
else if(x==40&&y==13){n=c+'10. Solid Key';}
else if(x==23&&y==13){n=c+'11. Chest [Skeleton Key]';}
else if(x==26&&y==28){n=c+'12. Ful Bomb, Rabbit\'s Foot #4';}
else if(x==22&&y==22){n=c+'13. Cheese<br>L01. Solid Key';}
else if(x==25&&y==32){n=c+'14. Chest [Ya Potion, Scroll ("The spell Ya Bro Ros leaves a trail of magic footprints.")]<br>L02. Skeleton Key';}
else if(x==21&&y==19){n=c+'15. Apple (2)';}
else if(x==35&&y==33){n=c+'01. Ghost';}
else if(x==37&&y==30){n=c+'02. Ghost';}
else if(x==32&&y==29){n=c+'03. Ghost';}
else if(x==34&&y==28){n=c+'04. Ghost';}
else if(x==37&&y==27){n=c+'05. Ghost';}
else if(x==33&&y==26){n=c+'06. Skeleton Generator (1)';}
else if(x==39&&y==36){n=c+'07. Ghost';}
else if(x==35&&y==37){n=c+'08. Mummy (3)';}
else if(x==23&&y==38){n=c+'09. Skeleton';}
else if(x==21&&y==38){n=c+'10. Skeleton';}
else if(x==21&&y==36){n=c+'11. Mummy (4)';}
else if(x==44&&y==31){n=c+'12. Ghost Generator (1)';}
else if(x==50&&y==30){n=c+'13. Mummy (4)';}
else if(x==42&&y==25){n=c+'14. Ghost';}
else if(x==44&&y==20){n=c+'15. Giggler [Throwing Star]';}
else if(x==50&&y==18){n=c+'16. Mummy';}
else if(x==37&&y==19){n=c+'17. Ghost Generator (1)';}
else if(x==34&&y==23){n=c+'18. Ghost';}
else if(x==29&&y==21){n=c+'19. Ghost';}
else if(x==32&&y==17){n=c+'20. Giggler Generator (1)';}
else if(x==22&&y==30){n=c+'21. Skeleton Generator (1-4)';}
else if(x==21&&y==18){n=c+'22. Skeleton (4) [Magical Box (Green)]';}
else if(x==23&&y==20){n=c+'23. Mummy Generator (1-4)';}
else{n=li;}
r.innerHTML=n;
}
if(l==8){
if(x==29&&y==34){n=lu+'25'+su;}
else if(x==31&&y==34){n=ld+'26'+sd;}
else if(x==28&&y==32){n=ld+'15'+sd;}
else if(x==22&&y==10){n=ld+'12'+sd;}
else if(x==26&&y==22){n=ld+'14'+sd;}
else if(x==28&&y==30){n=lu+'11'+su;}
else if(x==24&&y==31){n=lu+'10'+su;}
else if(x==23&&y==16){n=lu+'13'+su;}
else if(x==21&&y==12 || x==21&&y==11 || x==30&&y==25){n=ld+'Pit</a>';}
else if(x==35&&y==26){n=c+href+'7,35,29>Teleport (7,35,29)</a>';}
else if(x==35&&y==25){n=c+'01. Vi Potion (2)';}
else if(x==22&&y==28){n=c+'02. Scroll ("Lightning bolt Oh Kath Ra")';}
else if(x==35&&y==28){n=c+'03. Torch, Apple';}
else if(x==31&&y==30){n=c+'04. Magical Box (Blue)';}
else if(x==30&&y==30){n=c+'05. Pendant Feral';}
else if(x==13&&y==16){n=c+'06. Storm Ring, Torch, Drumstick';}
else if(x==40&&y==5){n=c+'07. Vi Potion, Chest [Green Gem, Scroll ("Put the gem back...")]<br>'+href+'8,21,12>Teleport (8,21,12)</a>';}
else if(x==28&&y==6){n=c+'08. Rope';}
else if(x==15&&y==6){n=c+'09. Corbamite';}
else if(x==15&&y==7){n=c+'10. Torch';}
else if(x==13&&y==12){n=c+'11. Dragon Steak, Corn, Apple, Cheese';}
else if(x==30&&y==19){n=c+'12. Empty flask, Scroll ("The spell Oh Ew Ra bestows magic vision.")';}
else if(x==23&&y==22){n=c+'13. Ra Key';}
else if(x==19&&y==34){n=c+'I01. "When is rock not rock"';}
else if(x==28&&y==10){n=c+'I02. "What is under foot is soon overhead"';}
else if(x==35&&y==20){n=c+'I03. "Lighter than a feather"<br>L01. Corbamite';}
else if(x==26&&y==30){n=c+'L02. Skeleton Key';}
else if(x==21&&y==15){n=c+'A. "Put The Gem Back" puzzle: Use the lever twice to make the chest fall down the pit and close the pit again. Go downstairs from ('+href+'08,22,10>08,22,10</a>) and grab the chest. Get back upstairs then again upstairs from ('+href+'08,23,16>08,23,16</a>). Drop the Green Gem at ('+href+'07,21,12>07,21,12</a>). This will open the door at ('+href+'08,21,13>08,21,13</a>). Get back downstairs.<br>Another solution is to jump in the pit (or Climb Down with a rope) instead of dropping the Green Gem. Then use the green button to open the door.';}
else if(x==29&&y==9 || x==29&&y==8){n=c+'B. Place items on the pressure plates to trigger the fireballs, and quickly move out of their way. Once each pressure plate is triggered, you can walk across safely. If you play with only two champions, place them in front and turn sideways when the fireballs are shot so that they pass behind your champions.';}
else if(x==21&&y==32){n=c+'01. Pain Rat Generator (1)';}
else if(x==27&&y==35){n=c+'02. Ruster';}
else if(x==35&&y==30){n=c+'03. Vexirk [Cheese, Corn]';}
else if(x==14&&y==30){n=c+'04. Pain Rat';}
else if(x==14&&y==19){n=c+'05. Pain Rat';}
else if(x==17&&y==12){n=c+'06. Vexirk (2) [Screamer Slice, Bread, Apple, Corn, Cheese]';}
else if(x==26&&y==14){n=c+'07. Ruster';}
else if(x==24&&y==7){n=c+'08. Ruster';}
else if(x==12&&y==6){n=c+'09. Vexirk [Skeleton Key]';}
else if(x==35&&y==15){n=c+'10. Ruster';}
else if(x==35&&y==5){n=c+'11. Pain Rat Generator (1)';}
else if(x==29&&y==22){n=c+'12. Pain Rat';}
else{n=li;}
r.innerHTML=n;
}
if(l==9){
if(x==14&&y==10){n=ld+'20'+sd;}
else if(x==31&&y==34){n=lu+'26'+su;}
else if(x==28&&y==32){n=lu+'15'+su;}
else if(x==22&&y==10){n=lu+'12'+su;}
else if(x==26&&y==22){n=lu+'14'+su;}
else if(x==28&&y==34){n=ld+'16'+sd;}
else if(x==33&&y==34){n=ld+'27'+sd;}
else if(x==30&&y==24){n=c+href+'7,28,14>Teleport (7,28,14)</a>';}
else if(x==35&&y==26){n=c+href+'9,25,22>Teleport (9,25,22)</a>';}
else if(x==24&&y==34){n=c+href+'9,26,12>Teleport (9,26,12)</a>';}
else if(x==26&&y==13){n=c+href+'9,23,35>Teleport (9,23,35)</a>';}
else if(x==30&&y==25){n=c+'01. Yew Staff';}
else if(x==13&&y==22){n=c+'02. Key Of B<br>I02. "Choose a door"';}
else if(x==10&&y==12){n=c+'03. Apple, Bread';}
else if(x==15&&y==31){n=c+'04. Corn, Cheese';}
else if(x==35&&y==27){n=c+'05. Cheese, Water Flask, Ful Bomb';}
else if(x==27&&y==26){n=c+'06. Corn';}
else if(x==27&&y==27){n=c+'07. Torch';}
else if(x==16&&y==36){n=c+'08. Armet';}
else if(x==10&&y==31){n=c+'09. Speedbow';}
else if(x==24&&y==35){n=c+'10. Foot Plate, Leg Plate';}
else if(x==22&&y==37){n=c+'11. Drumstick, Moonstone';}
else if(x==24&&y==37){n=c+'12. Corn';}
else if(x==32&&y==40){n=c+'13. Scroll ("Shield potion Ya Bro. Magic shield Ya Ir.")';}
else if(x==27&&y==36){n=c+'14. Torso Plate, Ful Bomb';}
else if(x==25&&y==36){n=c+'15. Boots Of Speed #1';}
else if(x==38&&y==40){n=c+'16. Bread';}
else if(x==38&&y==21){n=c+'17. Bread';}
else if(x==33&&y==16){n=c+'18. Shield Of Lyte, Scroll ("Mana potion Zo Bro Ra creates a pure mana potion.")<br>25. Wizard Eye [Skeleton Key]';}
else if(x==36&&y==10){n=c+'19. Hardcleave';}
else if(x==28&&y==13){n=c+'20. Magnifier';}
else if(x==24&&y==22){n=c+'I01. "Beware my twisted humor the deceiver the snake"';}
else if(x==13&&y==21){n=c+'L01. Key Of B<br>02. Skeleton';}
else if(x==13&&y==23){n=c+'L02. Key Of B';}
else if(x==29&&y==22){n=c+'L03. Key Of B';}
else if(x==30&&y==32){n=c+'L04. Skeleton Key';}
else if(x==15&&y==33){n=c+'A. Creatures in this room are kept in place by invisible teleporters. Some of them are disabled by pressing the button at (16,33) or by walking at (11,41).';}
else if(x==32&&y==23){n=c+'I03. "Zooooom"<br>B. When you reach a corner of the Zooooom, you are teleported one step forward and turned 90 degrees. So if you enter the Zooooom forward, you have to step out of it with a step to the right.';}
else if(x==15&&y==22){n=c+'01. Wizard Eye Generator (1-4)';}
else if(x==17&&y==16){n=c+'03. Giggler';}
else if(x==20&&y==17){n=c+'04. Wizard Eye (3) [Key Of B]';}
else if(x==13&&y==27){n=c+'05. Skeleton (4) [Key Of B]';}
else if(x==18&&y==27){n=c+'06. Giant Scorpion';}
else if(x==25&&y==31){n=c+'07. Wizard Eye (2)';}
else if(x==10&&y==33){n=c+'08. Skeleton (4)';}
else if(x==10&&y==34){n=c+'09. Giggler (2)';}
else if(x==15&&y==35){n=c+'10. Wizard Eye';}
else if(x==15&&y==36){n=c+'11. Skeleton';}
else if(x==15&&y==37){n=c+'12. Wizard Eye';}
else if(x==14&&y==38){n=c+'13. Wizard Eye';}
else if(x==13&&y==39){n=c+'14. Skeleton';}
else if(x==14&&y==39){n=c+'15. Wizard Eye';}
else if(x==12&&y==41){n=c+'16. Giggler Generator (1)';}
else if(x==23&&y==34){n=c+'17. Giggler';}
else if(x==26&&y==39){n=c+'18. Giggler Generator (1)';}
else if(x==28&&y==41){n=c+'19. Giant Scorpion';}
else if(x==33&&y==40){n=c+'20. Skeleton';}
else if(x==39&&y==28){n=c+'21. Giant Scorpion';}
else if(x==37&&y==25){n=c+'22. Wizard Eye Generator (1-4)';}
else if(x==35&&y==19){n=c+'23. Giggler';}
else if(x==31&&y==17){n=c+'24. Giant Scorpion Generator (1)';}
else if(x==27&&y==13){n=c+'26. Giant Scorpion';}
else if(x==21&&y==15){n=c+'27. Giggler';}
else{n=li;}
r.innerHTML=n;
}
if(l==10){
if(x==14&&y==10){n=lu+'20'+su;}
else if(x==28&&y==36){n=ld+'17'+sd;}
else if(x==35&&y==34){n=ld+'28'+sd;}
else if(x==34&&y==38){n=ld+'21'+sd;}
else if(x==28&&y==34){n=lu+'16'+su;}
else if(x==33&&y==34){n=lu+'27'+su;}
else if(x==13&&y==13){n=c+'01. Staff';}
else if(x==16&&y==10){n=c+'02. Iron Key';}
else if(x==16&&y==13){n=c+'03. Foot Plate';}
else if(x==16&&y==16){n=c+'04. Morningstar';}
else if(x==13&&y==16){n=c+'05. Sabre';}
else if(x==21&&y==16){n=c+'06. Chest [Solid Key]';}
else if(x==11&&y==24){n=c+'07. Diamond Edge';}
else if(x==22&&y==13){n=c+'08. Fury';}
else if(x==35&&y==14){n=c+'09. Skeleton Key';}
else if(x==29&&y==21){n=c+'10. Cross Key';}
else if(x==17&&y==25){n=c+'11. Copper Coin';}
else if(x==12&&y==28){n=c+'12. Copper Coin';}
else if(x==28&&y==26){n=c+'13. Cheese';}
else if(x==21&&y==29){n=c+'14. Copper Coin';}
else if(x==16&&y==32){n=c+'15. Copper Coin<br>18. Water Elemental Generator (1)';}
else if(x==38&&y==14){n=c+'16. Copper Coin';}
else if(x==32&&y==24){n=c+'17. Drumstick';}
else if(x==36&&y==30){n=c+'18. Copper Coin';}
else if(x==10&&y==41){n=c+'19. Plate Of Lyte, Poleyn Of Lyte, Greave Of Lyte';}
else if(x==36&&y==38){n=c+'21. Ful Bomb<br>20. Ven Potion<br>L07-13. Copper Coin (7)';}
else if(x==36&&y==37){n=c+'23. Copper Coin (2)<br>22. Ful Bomb, Magical Box (Green)<br>L07-13. Copper Coin (7)';}
else if(x==37&&y==37){n=c+'24. Cross Key<br>25. Chest [Drumstick (4), Cheese (2), Bread (2)]<br>L07-13. Copper Coin (7)';}
else if(x==37&&y==38){n=c+'26. Magical Box (Green)<br>L07-13. Copper Coin (7)';}
else if(x==34&&y==36){n=c+'27. Boots Of Speed #2';}
else if(x==26&&y==35){n=c+'28. Scroll ("The only way out is another way in.")';}
else if(x==32&&y==30){n=c+'29. Ruby Key';}
else if(x==10&&y==13){n=c+'I01. "Turn back"';}
else if(x==19&&y==10){n=c+'I02. "Clockwise"';}
else if(x==30&&y==35){n=c+'I03. "Enlarge my view"';}
else if(x==10&&y==16){n=c+'L00. Solid Key';}
else if(x==19&&y==16){n=c+'L01. Iron Key';}
else if(x==27&&y==22){n=c+'L02. Cross Key';}
else if(x==31&&y==22){n=c+'L03. Cross Key';}
else if(x==28&&y==22){n=c+'L04. Cross Key';}
else if(x==30&&y==34){n=c+'L05. Skeleton Key<br>L06. Magnifier (In fact, any item will open this lock because the dungeon designer either made a mistake or thought it was too hard to find the Magnifier)';}
else if(x==10&&y==21){n=c+'01. Giant Wasp';}
else if(x==11&&y==22){n=c+'02. Giant Wasp';}
else if(x==12&&y==21){n=c+'03. Giant Wasp';}
else if(x==13&&y==22){n=c+'04. Giant Wasp';}
else if(x==20&&y==22){n=c+'05. Giggler';}
else if(x==29&&y==20){n=c+'06. Giant Wasp (2)';}
else if(x==24&&y==23){n=c+'07. Trolin (2)';}
else if(x==19&&y==25){n=c+'08. Trolin (4)';}
else if(x==16&&y==26){n=c+'09. Trolin';}
else if(x==17&&y==29){n=c+'10. Trolin (4)';}
else if(x==13&&y==26){n=c+'11. Trolin Generator (1-4)';}
else if(x==14&&y==28){n=c+'12. Giggler';}
else if(x==13&&y==30){n=c+'13. Trolin (4)';}
else if(x==10&&y==30){n=c+'14. Trolin (3)';}
else if(x==14&&y==35){n=c+'15. Trolin (4)';}
else if(x==26&&y==25){n=c+'16. Water Elemental';}
else if(x==20&&y==29){n=c+'17. Giggler';}
else if(x==16&&y==32){n=c+'';}
else if(x==33&&y==22){n=c+'19. Giggler';}
else if(x==37&&y==19){n=c+'20. Giant Wasp (2)';}
else if(x==39&&y==13){n=c+'21. Giant Wasp Generator (2)';}
else if(x==37&&y==22){n=c+'22. Giggler';}
else if(x==35&&y==24){n=c+'23. Giant Wasp';}
else if(x==38&&y==29){n=c+'24. Giggler';}
else if(x==35&&y==30){n=c+'25. Giant Wasp Generator (2)';}
else if(x==32&&y==28){n=c+'26. Giant Wasp';}
else if(x==17&&y==38){n=c+'27. Water Elemental';}
else if(x==27&&y==39){n=c+'28. Giant Wasp Generator (2)';}
else{n=li;}
r.innerHTML=n;
}
if(l==11){
if(x==30&&y==32){n=ld+'22'+sd;}
else if(x==28&&y==36){n=lu+'17'+su;}
else if(x==35&&y==34){n=lu+'28'+su;}
else if(x==34&&y==38){n=lu+'21'+su;}
else if(x==35&&y==36){n=ld+'29'+sd;}
else if(x==28&&y==38){n=ld+'18'+sd;}
else if(x==30&&y>=46&&y<=49){n=ld+'Pit</a>';}
else if(x>=35&&x<=36&&y>=31&&y<=32){n=ld+'Pit</a>';}
else if(x==20&&y==46){n=c+'01. Snake Staff';}
else if(x==36&&y==50){n=c+'02. Corn,  Bread';}
else if(x==38&&y==48){n=c+'03. Drumstick';}
else if(x==39&&y==41){n=c+'04. Topaz Key<br>03. Animated Armour';}
else if(x==21&&y==42){n=c+'05. Ra Key';}
else if(x==39&&y==35){n=c+'06. Torch, Apple, Drumstick';}
else if(x==43&&y==48){n=c+'07. Poleyn Of Darc';}
else if(x==41&&y==48){n=c+'08. Plate Of Darc';}
else if(x==49&&y==50){n=c+'09. Greave Of Darc';}
else if(x==50&&y==48){n=c+'10. Shield Of Darc';}
else if(x==48&&y==27){n=c+'11. Ya Potion, Vi Potion, Water Flask, Apple, Scroll ("Invisibility Oh Ew Sar")';}
else if(x==49&&y==22){n=c+'12. Drumstick, Slayer, Apple';}
else if(x==47&&y==20){n=c+'13. Ful Bomb';}
else if(x==48&&y==20){n=c+'14. Helm Of Darc';}
else if(x==49&&y==20){n=c+'15. Skeleton Key';}
else if(x==21&&y==33){n=c+'16. Apple';}
else if(x==27&&y==24){n=c+'17. Corn (2)';}
else if(x==23&&y==22){n=c+'18. Morningstar';}
else if(x==41&&y==32){n=c+'19. Ful Bomb';}
else if(x==47&&y==32){n=c+'20. Ven Potion';}
else if(x==43&&y==33){n=c+'21. Helm Of Lyte<br>17. Oitu';}
else if(x==43&&y==34){n=c+'22. Apple';}
else if(x==44&&y==34){n=c+'23. Boots Of Speed #3';}
else if(x==32&&y==32){n=c+'24. Master Key';}
else if(x==44&&y==30){n=c+'I01. "Cowards will be hunted down and killed"';}
else if(x==25&&y==46){n=c+'L01. Topaz Key';}
else if(x==24&&y==42){n=c+'L02. Emerald Key';}
else if(x==30&&y==37){n=c+'L03. Skeleton Key';}
else if(x==31&&y==48){n=c+'01. Materializer';}
else if(x==36&&y==42){n=c+'02. Materializer';}
else if(x==29&&y==43){n=c+'04. Animated Armour [Emerald Key]';}
else if(x==44&&y==38){n=c+'05. Oitu';}
else if(x==50&&y==38){n=c+'06. Materializer (2)';}
else if(x==45&&y==49){n=c+'07. Materializer (4)';}
else if(x==48&&y==26){n=c+'08. Animated Armour';}
else if(x==48&&y==22){n=c+'09. Animated Armour (2)';}
else if(x==20&&y==32){n=c+'10. Oitu';}
else if(x==20&&y==24){n=c+'11. Animated Armour (2)';}
else if(x==36&&y==21){n=c+'12. Oitu Generator (1)';}
else if(x==41&&y==31){n=c+'13. Oitu Generator (1)';}
else if(x==47&&y==31){n=c+'14. Oitu Generator (1)';}
else if(x==42&&y==32){n=c+'15. Oitu';}
else if(x==46&&y==32){n=c+'16. Oitu';}
else if(x==44&&y==33){n=c+'18. Oitu';}
else if(x==45&&y==33){n=c+'19. Oitu';}
else if(x==35&&y==26){n=c+'20. Materializer Generator (1-4)';}
else{n=li;}
r.innerHTML=n;
}
if(l==12){
if(x==30&&y==32){n=lu+'22'+su;}
else if(x==28&&y==40){n=ld+'19'+sd;}
else if(x==31&&y==41){n=ld+'23'+sd;}
else if(x==35&&y==36){n=lu+'29'+su;}
else if(x==28&&y==38){n=lu+'18'+su;}
else if(x==37&&y==44 || x==40&&y==41 || x==41&&y==40 || x==44&&y==39 || x==44&&y==43){n=ld+'Pit</a>';}
else if(x==34&&y==32){n=c+href+'11,38,32>Teleport (11,38,32)</a>';}
else if(x==26&&y==41){n=c+href+'11,32,47>Teleport (11,32,47)</a>';}
else if(x==43&&y==31){n=c+'01. Flamitt, The Hellion';}
else if(x==25&&y==38){n=c+'L01. Skeleton Key';}
else if(x==35&&y==41){n=c+'A. Lord Chaos cannot be killed by using normal weapons and spells. You must use '+href+'6,19,20>The Firestaff</a> (completed with the '+href+'13,49,36>power gem</a> from Level 13) as follow:<br><br>- Use War Cry to "push" Lord Chaos into a corner,<br>- Block him by using the Fluxcage spell of The Firestaff all around him except on the space he is standing.<br>- Use the Fuse spell of The Firestaff on Lord Chaos.<br><br>The easiest way to Fuse Lord Chaos is to enter the small room at (43,31), close the doors and sleep. Lord Chaos will teleport himself into the room and wake you. You just have to make two fluxcages before you can fuse him.</a>';}
else if(x==27&&y==48){n=c+'01. Black Flame Generator (1)';}
else if(x==32&&y==31){n=c+'02. Black Flame Generator (1)';}
else if(x==37&&y==40){n=c+'03. Black Flame Generator (1)';}
else if(x==38&&y==40){n=c+'04. Black Flame Generator (1)';}
else if(x==39&&y==40){n=c+'05. Black Flame Generator (1)';}
else if(x==37&&y==42){n=c+'06. Black Flame Generator (1)';}
else if(x==38&&y==42){n=c+'07. Black Flame Generator (1)';}
else if(x==38&&y==47){n=c+'08. Demon';}
else if(x==43&&y==46){n=c+'09. Black Flame';}
else if(x==43&&y==41){n=c+'10. Black Flame Generator (1)';}
else if(x==44&&y==40){n=c+'11. Black Flame Generator (1)';}
else if(x==45&&y==39){n=c+'12. Black Flame Generator (1)';}
else if(x==42&&y==39){n=c+'13. Demon (2)';}
else if(x==44&&y==35){n=c+'14. Demon (2)';}
else if(x==44&&y==34){n=c+'15. Black Flame Generator (1)';}
else if(x==39&&y==33){n=c+'16. Black Flame';}
else if(x==40&&y==30){n=c+'17. Lord Chaos';}
else if(x==44&&y==30){n=c+'18. Demon';}
else{n=li;}
r.innerHTML=n;
}
if(l==13){
if(x==31&&y==41){n=lu+'23'+su;}
else if(x==28&&y==40){n=lu+'19'+su;}
else if(x==34&&y==42){n=c+'01. Copper Coin';}
else if(x==35&&y==39){n=c+'02. Silver Coin';}
else if(x==35&&y==43){n=c+'03. Silver Coin';}
else if(x==37&&y==38){n=c+'04. Copper Coin';}
else if(x==37&&y==42){n=c+'05. Boulder';}
else if(x==37&&y==44){n=c+'06. Copper Coin';}
else if(x==38&&y==41){n=c+'07. Silver Coin, Boulder';}
else if(x==39&&y==40){n=c+'08. Ashes';}
else if(x==40&&y==39){n=c+'09. Boulder';}
else if(x==40&&y==42){n=c+'10. Copper Coin';}
else if(x==41&&y==41){n=c+'11. Ashes';}
else if(x==42&&y==42){n=c+'12. Ashes';}
else if(x==43&&y==40){n=c+'13. Square Key, Ashes';}
else if(x==43&&y==43){n=c+'14. Boulder';}
else if(x==44&&y==39){n=c+'15. Boulder';}
else if(x==44&&y==42){n=c+'16. Ashes';}
else if(x==44&&y==43){n=c+'17. Ashes';}
else if(x==45&&y==40){n=c+'18. Ashes';}
else if(x==47&&y==40){n=c+'19. Copper Coin (3), Gold Coin, Calista';}
else if(x==47&&y==42){n=c+'20. Blue Gem, Green Gem (2), Eye Of Time';}
else if(x==48&&y==38){n=c+'21. Silver Coin<br>L02. Gold Coin (2), Silver Coin';}
else if(x==49&&y==36){n=c+'22. Scroll ("Only the touch of the proper spell will free the gem and only the Firestaff can possess it.")<br>A. Cast the spell Zo Kath Ra. Use the spell to free the power gem, then use '+href+'6,19,20>the Firestaff</a> on it to combine them.<br>Getting out of this room with the complete Firestaff will activate the pressure pad at (49,39), which toggles two walls on level 12 preventing you from going to the upper levels. You can avoid that by throwing the complete Firestaff through the door to the south before stepping on the pressure plate.';}
else if(x==48&&y==33){n=c+'23. Copper Coin<br>'+href+'12,30,39>Teleport (12,30,39)</a>';}
else if(x==48&&y==41){n=c+'L01. Square Key';}
else if(x==28&&y==41){n=c+'L03. Winged Key';}
else if(x==49&&y==41){n=c+'01. Red Dragon';}
else{n=li;}
r.innerHTML=n;
}
}

function GetCoordinates(l,x,y){
var rx=(Math.floor(x/14))*1;
var ry=(Math.floor(y/14))*1;
var px=rx+lvx;
var py=ry+lvy;
var mapw=lvw-lvx-1;
var maph=lvh-lvy-1;

if(rx<=mapw&&rx>0&&ry<=maph&&ry>0){
document.getElementById('cel').style.top=(ry*14)+'px'; 
document.getElementById('cel').style.left=(rx*14)+'px'; 
LoadCoordinates(l,px,py);
}
}