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

if(x==29&&y==16){n=ld+'62'+sd;}
else if(x==27&&y==17){n=ld+'47'+sd;}
else if(x==24&&y==20){n=ld+'55'+sd;}
else if(x==22&&y==25){n=ld+'58'+sd;}
else if(x==19&&y==36){n=ld+'48'+sd;}
else if(x==38&&y==19){n=ld+'67'+sd;}
else if(x==36&&y==27){n=ld+'52'+sd;}
else if(x==19&&y==38){n=ld+'Fulya pit</a>';}
else if(x==21&&y==14){n=c+href+'0,42,37>Teleport (0,42,37)</a>';}
else if(x==41&&y==37){n=c+href+'0,26,45>Teleport (0,26,45)</a>';}
else if(x==30&&y==38){n=c+href+'0,26,45>Teleport (0,26,45)</a>';}
else if(x==35&&y==43){n=c+href+'0,34,42>Teleport (0,34,42)</a>';}
else if(x==41&&y==27){n=c+href+'0,35,43>Teleport (0,35,43)</a>';}
else if(x==17&&y==24){n=c+href+'0,29,38>Teleport (0,29,38)</a>';}
else if(x==23&&y==44){n=c+href+'3,7,24>Teleport (3,7,24)</a>';}
else if(x==23&&y==16){n=c+'01. Iron Key';}
else if(x==22&&y==17){n=c+'02. Iron Key';}
else if(x==24&&y==17){n=c+'03. Iron Key';}
else if(x==23&&y==18){n=c+'04. Iron Key';}
else if(x==20&&y==19){n=c+'05. Shank';}
else if(x==23&&y==28){n=c+'06. Gor Coin';}
else if(x==22&&y==30){n=c+'07. Gor Coin';}
else if(x==23&&y==32){n=c+'08. Shank';}
else if(x==27&&y==31){n=c+'09. Bread';}
else if(x==27&&y==27){n=c+'10. Sceptre Of Lyf';}
else if(x==34&&y==36){n=c+'11. Gor Coin';}
else if(x==36&&y==29){n=c+'12. Gor Coin';}
else if(x==38&&y==27){n=c+'13. Cheese';}
else if(x==40&&y==35){n=c+'14. Shank';}
else if(x==44&&y==37){n=c+'15. Gor Coin';}
else if(x==44&&y==38){n=c+'16. Bread, Corn';}
else if(x==48&&y==38){n=c+'17. Rock (2), Stick';}
else if(x==47&&y==39){n=c+'18. Gor Coin';}
else if(x==41&&y==42){n=c+'19. Boots Of Speed';}
else if(x==29&&y==44){n=c+'20. Ful Bomb (2)';}
else if(x==48&&y==42){n=c+'21. Boots Of Speed';}
else if(x==42&&y==23){n=c+'22. Dragon Fang';}
else if(x==44&&y==33){n=c+'23. Gor Coin';}
else if(x==33&&y==33){n=c+'24. Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a><br>L17. Iron Key';}
else if(x==38&&y==31){n=c+'25. Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a><br>L18. Gor Coin';}
else if(x==43&&y==40){n=c+'26. Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==23&&y==17){n=c+'27. Some randomly placed items can be here (in one of the four alcoves). '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==20&&y==38){n=c+'I01. "Fulya pit"';}
else if(x==35&&y==38){n=c+'I02. "Demon Chamber"';}
else if(x==45&&y==20){n=c+'L02. Onyx Key';}
else if(x==32&&y==20){n=c+'L03. Square Key';}
else if(x==35&&y==23){n=c+'L04. Onyx Key';}
else if(x==25&&y==24){n=c+'L05. Iron Key';}
else if(x==28&&y==27){n=c+'L06. Iron Key';}
else if(x==19&&y==24){n=c+'L07. Ra Key, Zokathra Spell';}
else if(x==19&&y==25){n=c+'L08. Ra Key, Zokathra Spell';}
else if(x==31&&y==40){n=c+'L10. Master Key';}
else if(x==24&&y==29){n=c+'L12. Iron Key, Lock Picks';}
else if(x==26&&y==29){n=c+'L13. Gor Coin';}
else if(x==38&&y==42){n=c+'L14. Iron Key, Lock Picks<br>11. Demon Generator (2)';}
else if(x==31&&y==37){n=c+'L15. Skeleton Key<br>Note: This lock will eat Skeleton Key, so make sure you opened all the others first.';}
else if(x==30&&y==33){n=c+'L16. Iron Key';}
else if(x==39&&y==32){n=c+'L19. Gor Coin';}
else if(x==38&&y==33){n=c+'L20. Gor Coin';}
else if(x==47&&y==24){n=c+'L01. Skeleton Key, Lock Picks<br>A. A Skeleton Key or Lock Picks (used 7 times) will open the door but Lock Picks will also activate the Demon generator.';}
else if(x==46&&y==39){n=c+'L09. Key Of B (4), Lock Picks (2)<br>B. Two Keys Of B or Lock Picks (used twice) will open the door. Four Keys Of B are required to open both the door and the wall.';}
else if(x==32&&y==43){n=c+'L11. Topaz Key, Master Key, Lock Picks<br>C. A Topaz Key, a Master Key or Lock Picks will open the door, but a Topaz Key will also deactivate the fireball holes.';}
else if(x==17&&y==30){n=c+'D. A Crown Of Nerra or an Orange Gem in your inventory will prevent Zytaz generation around (00,25,35) when walking at (00,17,30).';}
else if(x==26&&y==36){n=c+'E. A Pendant Feral in your inventory will prevent Zytaz generation at (00,25,34), (00,24,35), (00,26,35) and (00,25,36) when walking at (00,25,35).';}
else if(x==41&&y==18){n=c+'F. A Dexhelm in your inventory will prevent Demon generation at (00,47,21) when walking at (00,41,18).';}
else if(x==23&&y==20){n=c+'G. A Flamebain in your inventory will prevent Fireball launch at (00,23,29) when walking at (00,23,20).';}
else if(x==32&&y==18){n=c+'H. Powertowers in your inventory will prevent Demon generation at (00,34,20) when walking at (00,31,18).';}
else if(x==41&&y==41){n=c+'I. The door will open if you have Boots Of Speed in your inventory.';}
else if(x==31&&y==36){n=c+'J. An Ekkhard Cross in your inventory will prevent generation of Demons at (00,35,34) when walking at (00,31,36).';}
else if(x==29&&y==15){n=c+'K. A Corbum in your inventory will open the door at (00,22,14) when walking at (00,29,15).';}
else if(x==29&&y==19){n=c+'L. A Boulder in your inventory will open the door.';}
else if(x==17&&y==18){n=c+'01. Black Flame';}
else if(x==17&&y==19){n=c+'02. Black Flame';}
else if(x==17&&y==20){n=c+'03. Black Flame';}
else if(x==17&&y==21){n=c+'04. Black Flame';}
else if(x==25&&y==34){n=c+'05. Zytaz Generator (1-4)';}
else if(x==24&&y==35){n=c+'06. Zytaz Generator (1-4)';}
else if(x==26&&y==35){n=c+'07. Zytaz Generator (1-4)';}
else if(x==25&&y==36){n=c+'08. Zytaz Generator (1-4)';}
else if(x==35&&y==34){n=c+'09. Demon Generator (1)';}
else if(x==39&&y==42){n=c+'10. Demon [Master Key]';}
else if(x==33&&y==42){n=c+'12. Demon (4)<br>'+href+'0,26,45>Teleport (0,26,45)</a>';}
else if(x==33&&y==40){n=c+'13. Demon Generator (2)';}
else if(x==34&&y==39){n=c+'14. Demon (2)';}
else if(x==25&&y==43){n=c+'15. Lord Chaos Generator (1)';}
else if(x==19&&y==43){n=c+'16. Worm Generator (1)';}
else if(x==17&&y==40){n=c+'17. Grey Lord';}
else if(x==33&&y==16){n=c+'18. Demon [Square Key]';}
else if(x==34&&y==20){n=c+'19. Demon Generator (1)';}
else if(x==42&&y==20){n=c+'20. Worm Generator (2)';}
else if(x==47&&y==21){n=c+'21. Demon Generator (1)';}
else if(x==46&&y==31){n=c+'22. Demon [Iron Key]';}
else if(x==46&&y==32){n=c+'23. Demon';}
else if(x==48&&y==32){n=c+'24. Demon';}
else{n=li;}
r.innerHTML=n;
}
if(l==1){
if(x==29&&y==16){n=lu+'62'+su;}
else if(x==27&&y==17){n=lu+'47'+su;}
else if(x==24&&y==20){n=lu+'55'+su;}
else if(x==22&&y==25){n=lu+'58'+su;}
else if(x==19&&y==36){n=lu+'48'+su;}
else if(x==38&&y==19){n=lu+'67'+su;}
else if(x==36&&y==27){n=lu+'52'+su;}
else if(x==12&&y==11){n=ld+'68'+sd;}
else if(x==12&&y==18){n=ld+'13'+sd;}
else if(x==15&&y==18){n=ld+'49'+sd;}
else if(x==23&&y==18){n=ld+'53'+sd;}
else if(x==28&&y==15){n=ld+'61'+sd;}
else if(x==26&&y==22){n=ld+'54'+sd;}
else if(x==30&&y==18){n=ld+'46'+sd;}
else if(x==30&&y==15){n=ld+'65'+sd;}
else if(x==33&&y==9){n=ld+'44'+sd;}
else if(x==34&&y==10){n=ld+'63'+sd;}
else if(x==37&&y==15){n=ld+'64'+sd;}
else if(x==33&&y==18){n=ld+'66'+sd;}
else if(x==10&&y==26){n=ld+'59'+sd;}
else if(x==20&&y==30){n=ld+'56'+sd;}
else if(x==26&&y==27){n=ld+'57'+sd;}
else if(x==19&&y==38){n=c+href+'0,20,38>Teleport (0,20,38)</a>';}
else if(x==26&&y==36){n=c+'01. Cheese';}
else if(x==17&&y==25){n=c+'02. Ashes';}
else if(x==8&&y==21){n=c+'03. Dragon Steak';}
else if(x==9&&y==22){n=c+'04. Mithral Mail, Mithral Aketon';}
else if(x==10&&y==21){n=c+'05. Magical Box (Green)';}
else if(x==9&&y==20){n=c+'06. Empty Flask';}
else if(x==8&&y==13){n=c+'07. Magical Box (Blue)<br>07. Mummy';}
else if(x==12&&y==7){n=c+'08. Blue Gem';}
else if(x==17&&y==8){n=c+'09. Bread (2)';}
else if(x==13&&y==14){n=c+'10. Magical Box (Green)';}
else if(x==20&&y==19){n=c+'11. Blue Gem';}
else if(x==31&&y==22){n=c+'12. Corbum ("Ku")';}
else if(x==30&&y==23){n=c+'13. Corbum';}
else if(x==31&&y==24){n=c+'14. Corbum ("Dain")';}
else if(x==32&&y==23){n=c+'15. Corbum ("Ros")';}
else if(x==21&&y==28){n=c+'16. Sandals, Fine Robe (Legs), Fine robe (Body), Crown Of Nerra<br>'+href+'2,21,28>Trap (Pit)</a>';}
else if(x==30&&y==9){n=c+'17. Iron Key<br>09. Stone golem Generator (1)';}
else if(x==9&&y==21){n=c+'18. Some randomly placed items can be here (in one of the four alcoves). '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==21&&y==9){n=c+'I01. "None shall pass the corridor of fire"';}
else if(x==30&&y==27){n=c+'I02. "Eye lie"';}
else if(x==17&&y==33){n=c+'L01. Skeleton Key';}
else if(x==7&&y==22){n=c+'L02. Skeleton Key';}
else if(x==12&&y==22){n=c+'L03. Gold Key, Lock Picks<br>A. A Gold Key or Lock Picks will open the door but Lock Picks will also open a pit under you.';}
else if(x==11&&y==21){n=c+'L04. Gold Key, Lock Picks<br>A. A Gold Key or Lock Picks will open the door but Lock Picks will also open a pit under you.';}
else if(x==23&&y==8){n=c+'L05. Blue Gem';}
else if(x==24&&y==23){n=c+'L06. Blue Gem<br>B. The door will open if you have Corbum in your inventory.';}
else if(x==30&&y==29){n=c+'L07. Iron Key';}
else if(x==29&&y==18){n=c+'L08. Skeleton Key';}
else if(x==36&&y==19 || x==27&&y==19 || x==22&&y==27){n=c+'B. The door will open if you have Corbum in your inventory.';}
else if(x==30&&y==34){n=c+'01. Stone golem Generator (1)';}
else if(x==17&&y==28){n=c+'02. Hellhound';}
else if(x==13&&y==25){n=c+'03. Hellhound';}
else if(x==16&&y==21){n=c+'04. Hellhound Generator (1)';}
else if(x==9&&y==23){n=c+'05. Stone Golem';}
else if(x==13&&y==21){n=c+'06. Hellhound (2)';}
else if(x==28&&y==11){n=c+'08. Hellhound Generator (1)';}
else{n=li;}
r.innerHTML=n;
}
if(l==2){
if(x==12&&y==11){n=lu+'68'+su;}
else if(x==12&&y==18){n=lu+'13'+su;}
else if(x==15&&y==18){n=lu+'49'+su;}
else if(x==23&&y==18){n=lu+'53'+su;}
else if(x==28&&y==15){n=lu+'61'+su;}
else if(x==26&&y==22){n=lu+'54'+su;}
else if(x==30&&y==18){n=lu+'46'+su;}
else if(x==30&&y==15){n=lu+'65'+su;}
else if(x==33&&y==9){n=lu+'44'+su;}
else if(x==34&&y==10){n=lu+'63'+su;}
else if(x==37&&y==15){n=lu+'64'+su;}
else if(x==33&&y==18){n=lu+'66'+su;}
else if(x==10&&y==26){n=lu+'59'+su;}
else if(x==20&&y==30){n=lu+'56'+su;}
else if(x==26&&y==27){n=lu+'57'+su;}
else if(x==8&&y==23){n=ld+'10'+sd;}
else if(x==9&&y==20){n=ld+'12'+sd;}
else if(x==11&&y==30){n=ld+'60'+sd;}
else if(x==19&&y==25){n=ld+'11'+sd;}
else if(x==18&&y==18){n=ld+'50'+sd;}
else if(x==24&&y==23){n=ld+'51'+sd;}
else if(x==26&&y==18){n=ld+'45'+sd;}
else if(x==34&&y==7){n=ld+'42'+sd;}
else if(x==28&&y==8){n=ld+'43'+sd;}
else if(x==35&&y==34){n=c+href+'2,11,5>Teleport (2,11,5)</a>';}
else if(x==9&&y==5){n=c+href+'2,33,34>Teleport (2,33,34)</a>';}
else if(x==11&&y==23){n=c+'01. Water Flask';}
else if(x==10&&y==18){n=c+'02. Sapphire Key<br>09. Black Flame';}
else if(x==15&&y==29){n=c+'03. Cross Key';}
else if(x==20&&y==23){n=c+'04. Boulder (3), Rock (2), Stone Club';}
else if(x==19&&y==15){n=c+'05. Storm Ring, Elven Boots';}
else if(x==8&&y==13){n=c+'06. Speedbow';}
else if(x==20&&y==11){n=c+'07. Slayer (4)';}
else if(x==20&&y==9){n=c+'08. Rope<br>'+href+'2,19,11>Teleport (2,19,11)</a>';}
else if(x==31&&y==22){n=c+'09. Water';}
else if(x==30&&y==23){n=c+'10. Dragon Steak';}
else if(x==32&&y==23){n=c+'11. Dragon Steak';}
else if(x==31&&y==24){n=c+'12. Dragon Steak';}
else if(x==12&&y==8){n=c+'13. Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==14&&y==20){n=c+'14. Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==31&&y==23){n=c+'15. Some randomly placed items can be here (in one or two of the four alcoves). '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==12&&y==23){n=c+'I01. "Fighter charge"';}
else if(x==17&&y==22){n=c+'I03. "Trust me... Enter the pit"';}
else if(x==20&&y==28){n=c+'I04. "Dain"';}
else if(x==22&&y==25){n=c+'I05. "Ku"';}
else if(x==23&&y==30){n=c+'I06. "Dead end"';}
else if(x==20&&y==17){n=c+'I07. "Ros"';}
else if(x==11&&y==13){n=c+'I08. "Launch it catch it snatch it"';}
else if(x==13&&y==28){n=c+'L01. Cross Key, Lock Picks<br>I02. "Value in exchange for valuables"';}
else if(x==19&&y==28){n=c+'L02. Ruby Key';}
else if(x==23&&y==25){n=c+'L03. Solid Key';}
else if(x==20&&y==18){n=c+'L04. Emerald Key';}
else if(x==14&&y==10){n=c+'L05. Gold Key, Lock Picks<br>A. A Gold Key will open the door but Lock Picks will '+href+'3,14,10>open a pit</a> dropping you into the Death Row.';}
else if(x==31&&y==30){n=c+'B. Let the Deth Knights corner you because only them can activate the pad that opens the wall.';}
else if(x==16&&y==20){n=c+'C. How to close the pit at (02,16,20) (based on hints by Paul R. Stevens)<br><br>1. Step on the pressure pad at (03,31,23). This will activate the teleporter at (03,06,10) which will teleport a Rock to (03,06,11). This will also close the walls at (03,20,23) and (03,29,29).<br><br>2. Step on the stairs at (03,09,24). This will open the False Wall at (03,29,29).<br><br>3. Go to (03,22,22) and use War Cry to corner a Skeleton at (03,21,23). Then quickly press the button at (03,22,22). It will activate the teleporter at (03,21,23), transporting the Skeleton to (03,21,25) where he will be killed by Lightning Bolts shot from (03,29,27) and teleported to (03,21,25). He will drop its Falchion on the floor which will open the door at (03,21,24).<br>If the false wall at (03,29,29) is closed when you press the button, the Lightning Bolts will be blocked and the Skeleton still alive. However, you can kill him with Des Ven spells through the door.<br><br>4. Walk to (03,21,25) and present any item to the Eye Switch. This will activate the teleporter at (03,06,11) that will transport the Rock to (02,08,28). The pressure pad there will then permanently close the pit at (02,16,20).';}
else if(x==10&&y==22){n=c+'01. Black Flame Generator (1)';}
else if(x==10&&y==21){n=c+'02. Black Flame Generator (1)';}
else if(x==11&&y==21){n=c+'03. Black Flame Generator (1)';}
else if(x==12&&y==21){n=c+'04. Black Flame';}
else if(x==10&&y==20){n=c+'05. Black Flame Generator (1)';}
else if(x==11&&y==20){n=c+'06. Black Flame';}
else if(x==10&&y==19){n=c+'07. Black Flame';}
else if(x==11&&y==19){n=c+'08. Black Flame Generator (1)';}
else if(x==11&&y==24){n=c+'10. Rock Pile Generator (2)';}
else if(x==15&&y==21){n=c+'11. Demon Generator (1)';}
else if(x==15&&y==22){n=c+'12. Demon Generator (1)';}
else if(x==19&&y==23){n=c+'13. Stone Golem Generator (1)';}
else if(x==14&&y==26){n=c+'14. Black Flame Generator (1)';}
else if(x==16&&y==26){n=c+'15. Black Flame Generator (1)';}
else if(x==18&&y==28){n=c+'16. Black Flame';}
else if(x==12&&y==30){n=c+'17. Demon';}
else if(x==24&&y==30){n=c+'18. Deth Knight Generator (2)';}
else if(x==22&&y==9){n=c+'19. Demon';}
else if(x==17&&y==11){n=c+'20. Demon (2)';}
else if(x==8&&y==8){n=c+'21. Giggler';}
else if(x==7&&y==9){n=c+'22. Giggler';}
else if(x==8&&y==9){n=c+'23. Giggler';}
else if(x==9&&y==9){n=c+'24. Giggler';}
else if(x==8&&y==10){n=c+'25. Giggler';}
else{n=li;}
r.innerHTML=n;
}
if(l==3){
if(x==16&&y==18){n=ld+'01'+sd;}
else if(x==9&&y==30){n=ld+'40'+sd;}
else if(x==33&&y==11){n=ld+'09'+sd;}
else if(x==11&&y==10){n=ld+'30'+sd;}
else if(x==9&&y==24){n=ld+'22'+sd;}
else if(x==8&&y==23){n=lu+'10'+su;}
else if(x==9&&y==20){n=lu+'12'+su;}
else if(x==11&&y==30){n=lu+'60'+su;}
else if(x==19&&y==25){n=lu+'11'+su;}
else if(x==18&&y==18){n=lu+'50'+su;}
else if(x==24&&y==23){n=lu+'51'+su;}
else if(x==26&&y==18){n=lu+'45'+su;}
else if(x==34&&y==7){n=lu+'42'+su;}
else if(x==28&&y==8){n=lu+'43'+su;}
else if(x==29&&y==30){n=c+href+'3,21,25>Teleport (3,21,25)</a>';}
else if(x==21&&y==23){n=c+href+'3,21,25>Enemy Teleport (3,21,25)</a>';}
else if(x==19&&y==27){n=c+href+'8,18,14>Teleport (8,18,14)</a>';}
else if(x==21&&y==27){n=c+href+'5,6,27>Teleport (5,6,27)</a>';}
else if(x==14&&y==27){n=c+href+'3,11,26>Teleport (3,11,26)</a>';}
else if(x==5&&y==7){n=c+href+'3,22,13>Teleport (3,22,13)</a>';}
else if(x==5&&y==6){n=c+href+'3,16,10>Teleport (3,16,10)</a>';}
else if(x==8&&y==13){n=c+href+'7,21,20>Teleport (7,21,20)</a>';}
else if(x==9&&y==13){n=c+href+'2,7,12>Teleport (2,7,12)</a>';}
else if(x==6&&y==11){n=c+href+'2,8,28>Teleport (2,8,28)</a>';}
else if(x==5&&y==8){n=c+'01.Chest [Eye Of Time], Chest [Powertowers], Chest [Ful Bomb (2), Gold Key]<br>'+href+'3,26,10>Teleport (3,26,10)</a>';}
else if(x==6&&y==10){n=c+'02. Rock';}
else if(x==5&&y==12){n=c+'03. Dragon Steak, Gold Key, Magical Box (Blue), Magical Box (Green), Slayer, Sar Shield, Armet, Leg Plate, Mace Of Order, Serpent Staff, Boots Of Speed<br>'+href+'3,7,19>Teleport (3,7,19)</a>';}
else if(x==9&&y==22){n=c+'04. Rock<br>'+href+'2,9,29>Teleport (2,9,29)</a>';}
else if(x==16&&y==10){n=c+'05. Square Key';}
else if(x==20&&y==13){n=c+'06. Square Key';}
else if(x==26&&y==10){n=c+'07. Square Key';}
else if(x==12&&y==14){n=c+'08. Dragon Steak';}
else if(x==19&&y==18){n=c+'09. Rock (2)<br>09. Skeleton Generator (1)';}
else if(x==20&&y==19){n=c+'10. Rock';}
else if(x==22&&y==18){n=c+'11. Rock';}
else if(x==22&&y==17){n=c+'12. Rock';}
else if(x==20&&y==22){n=c+'13. Rock';}
else if(x==23&&y==30){n=c+'14. Shield Of Ra<br>B. Taking the Shield Of Ra at (23,30) will launch Fireballs from (25,30).';}
else if(x==17&&y==30){n=c+'15. Gor Coin';}
else if(x==16&&y==31){n=c+'16. Gor Coin';}
else if(x==15&&y==30){n=c+'17. Gor Coin';}
else if(x==16&&y==29){n=c+'18. Gor Coin';}
else if(x==9&&y==31){n=c+'19. Scroll ("Fighters charge")';}
else if(x==13&&y==23){n=c+'20. Bones';}
else if(x==12&&y==25){n=c+'21. Bones';}
else if(x==36&&y==23){n=c+'22. Gold Key';}
else if(x==34&&y==9){n=c+'23. Emerald Key';}
else if(x==25&&y==19){n=c+'24. Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==16&&y==30){n=c+'25. Some randomly placed items can be here (in one of the four alcoves). '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==7&&y==24){n=c+'I01. "Diabolical Demon Director"';}
else if(x==23&&y==25){n=c+'I02. "Neta"';}
else if(x==21&&y==6){n=c+'I03. "Dragon den"';}
else if(x==26&&y==13){n=c+'I04. "Do you have the power"<br>L12. Powertowers';}
else if(x==6&&y==22){n=c+'L01. Sapphire Key';}
else if(x==6&&y==18){n=c+'L02. Gor Coin';}
else if(x==10&&y==28){n=c+'L03. Cross Key';}
else if(x==11&&y==33){n=c+'L04. Gold Key';}
else if(x==14&&y==30){n=c+'L05. Gold Key';}
else if(x==16&&y==28){n=c+'L06. Gold Key';}
else if(x==20&&y==30){n=c+'L07. Gold Key, Lock Picks';}
else if(x==21&&y==25){n=c+'L08. Tourquoise Key';}
else if(x==22&&y==21){n=c+'L09. Gold Key, Lock Picks';}
else if(x==8&&y==9){n=c+'L10. Square Key';}
else if(x==20&&y==8){n=c+'L11. Square Key, Lock Picks';}
else if(x==21&&y==24){n=c+'A. A Falchion on the floor is required to open the door at (21,24). See '+href+'2,16,20>Chaos Strikes Back Level 02</a> notes for more information on how to do this.';}
else if(x==14&&y==14){n=c+'C. Kill the Red Dragon while it is standing at (10,14) or (10,16). This will close a pit at (13,14) or (13,16). Then get the Dragon Steak at (12,14) and throw it to (10,15) to close the pit at (11,15).';}
else if(x==13&&y==24){n=c+'D. The pit at (12,24) will open if you walk on it 8 times. The other pit at (15,25) will open if you walk on it 10 times.';}
else if(x==7&&y==9){n=c+'01. Skeleton [Square Key]';}
else if(x==16&&y==8){n=c+'02. Dragon';}
else if(x==17&&y==12){n=c+'03. Dragon';}
else if(x==22&&y==13){n=c+'04. Dragon Generator (1)';}
else if(x==25&&y==12){n=c+'05. Dragon';}
else if(x==26&&y==8){n=c+'06. Dragon';}
else if(x==10&&y==15){n=c+'07. Dragon';}
else if(x==16&&y==16){n=c+'08. Mummy Generator (1-4)';}
else if(x==24&&y==26){n=c+'10. Skeleton';}
else if(x==20&&y==28){n=c+'11. Giggler';}
else if(x==15&&y==23){n=c+'12. Dragon';}
else if(x==29&&y==25){n=c+'13. Dragon';}
else if(x==34&&y==26){n=c+'14. Dragon';}
else if(x==29&&y==21){n=c+'15. Dragon';}
else if(x==33&&y==20){n=c+'16. Dragon [Gold Key]';}
else if(x==35&&y==17){n=c+'17. Dragon';}
else if(x==32&&y==14){n=c+'18. Dragon';}
else if(x==35&&y==11){n=c+'19. Dragon';}
else{n=li;}
r.innerHTML=n;
}
if(l==4){
if(x==16&&y==18){n=lu+'01'+su;}
else if(x==9&&y==30){n=lu+'40'+su;}
else if(x==33&&y==11){n=lu+'09'+su;}
else if(x==11&&y==10){n=lu+'30'+su;}
else if(x==9&&y==24){n=lu+'22'+su;}
else if(x==14&&y==20){n=ld+'21'+sd;}
else if(x==14&&y==12){n=ld+'29'+sd;}
else if(x==12&&y==19){n=ld+'31'+sd;}
else if(x==10&&y==26){n=ld+'39'+sd;}
else if(x==20&&y==29){n=ld+'02'+sd;}
else if(x==14&&y==24){n=ld+'03'+sd;}
else if(x==18&&y==16){n=ld+'08'+sd;}
else if(x==23&&y==13){n=c+href+'4,15,26>Teleport (4,15,26)</a>';}
else if(x==23&&y==14){n=c+href+'4,20,25>Teleport (4,20,25)</a>';}
else if(x==31&&y==26){n=c+'01. Dagger, Torch (2)';}
else if(x==29&&y==27){n=c+'02. Storm (Full)';}
else if(x==34&&y==27){n=c+'03. Magical Box (Green)';}
else if(x==34&&y==28){n=c+'04. Magical Box (Blue), Magical Box (Green) (2)';}
else if(x==30&&y==23){n=c+'05. Torch';}
else if(x==31&&y==23){n=c+'06. Chest [Tattered Shirt, Robe (Legs), Sandals, Blue Pants, Tunic, Tattered Pants, Silk Shirt, Tabard]';}
else if(x==33&&y==24){n=c+'07. Gor Coin';}
else if(x==29&&y==22){n=c+'08. Gor Coin';}
else if(x==34&&y==22){n=c+'09. Torch';}
else if(x==28&&y==20){n=c+'10. Leather Boots';}
else if(x==29&&y==19){n=c+'11. Rope, Compass, Scroll (Magic Map)';}
else if(x==32&&y==19){n=c+'12. Ven Potion';}
else if(x==32&&y==18){n=c+'13. Ful Bomb (2), Ven Potion (2)';}
else if(x==36&&y==22){n=c+'14. Leg Mail, Hosen, Mail Aketon, Casque\'n Coif';}
else if(x==21&&y==21){n=c+'15. Scroll ("No creature", or the name of the creature in front of you)';}
else if(x==24&&y==28){n=c+'16. Empty Flask';}
else if(x==17&&y==28){n=c+'17. Claw Bow';}
else if(x==18&&y==27){n=c+'18. Staff Of Claws';}
else if(x==16&&y==27){n=c+'19. Staff Of Irra';}
else if(x==17&&y==26){n=c+'20. Sword';}
else if(x==18&&y==26){n=c+'21. Dragon Steak, Shank, Cheese, Bread, Corn, Apple';}
else if(x==15&&y==26){n=c+'22. Axe, Mace';}
else if(x==20&&y==27){n=c+'23. Water, Cheese, Teowand, Ful Bomb';}
else if(x==20&&y==25){n=c+'24. Vorpal Blade, Vi Potion, Storm Ring, Ven Potion, Ful Bomb, Cheese';}
else if(x==22&&y==25){n=c+'25. Ven Potion (4), Iron Key, Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==10&&y==15){n=c+'26. Flamebain';}
else if(x==10&&y==8){n=c+'27. Bread (2), Water Flask';}
else if(x==28&&y==17){n=c+'28. Iron Key';}
else if(x==25&&y==10){n=c+'29. Chest [Empty Flask, Magical Box (Green), Ven Potion, Gor Coin]';}
else if(x==35&&y==17){n=c+'30. Green Gem';}
else if(x==17&&y==27){n=c+'31. Some randomly placed items can be here (in one of the four alcoves). '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==28&&y==26){n=c+'I01. "Two coins"<br>L01. Gor Coin (2)';}
else if(x==27&&y==20){n=c+'I02. "Run and jump"';}
else if(x==17&&y==24){n=c+'I03. "Supplies for the quick"';}
else if(x==19&&y==14){n=c+'I04. "Death Row"';}
else if(x==28&&y==23){n=c+'L02. Torch';}
else if(x==30&&y==20){n=c+'L03. Gor Coin';}
else if(x==33&&y==20){n=c+'L04. Gor Coin';}
else if(x==34&&y==26){n=c+'L05. Gor Coin';}
else if(x==32&&y==26){n=c+'L06. Iron Key<br>02. Worm, Worm Generator (1)';}
else if(x==30&&y==29){n=c+'L07. Iron Key';}
else if(x==21&&y==30){n=c+'L08. Iron Key';}
else if(x==19&&y==27){n=c+'L09. Iron Key';}
else if(x==21&&y==27){n=c+'L10. Iron Key';}
else if(x==18&&y==12){n=c+'L11. Square Key';}
else if(x==27&&y==14){n=c+'L12. Iron Key';}
else if(x==19&&y==15){n=c+'A. The only way to get in the Death Row is to open the lock at ('+href+'2,14,10>02,14,10<a/>) with Lock Picks.';}
else if(x==28&&y==11){n=c+'B. You must have the green gem for the door to open.';}
else if(x==30&&y==26){n=c+'01. Worm, Worm Generator (1)';}
else if(x==31&&y==21){n=c+'03. Worm [Gor Coin (2), Iron Key]';}
else if(x==17&&y==20){n=c+'04. Flying Eye Generator (1)';}
else if(x==17&&y==29){n=c+'05. Flying Eye Generator (1-4)';}
else if(x==17&&y==8){n=c+'06. Stone Golem [Square Key, Moonstone]';}
else if(x==26&&y==12){n=c+'07. Scorpion';}
else if(x==27&&y==11){n=c+'08. Scorpion';}
else if(x==28&&y==12){n=c+'09. Scorpion';}
else if(x==31&&y==10){n=c+'10. Scorpion Generator (1)';}
else if(x==10&&y==27){n=c+'11. Scorpion Generator (1)';}
else if(x==10&&y==28){n=c+'12. Scorpion [Morningstar]';}
else{n=li;}
r.innerHTML=n;
}
if(l==5){
if(x==20&&y==29){n=lu+'02'+su;}
else if(x==14&&y==24){n=lu+'03'+su;}
else if(x==14&&y==12){n=lu+'29'+su;}
else if(x==10&&y==26){n=lu+'39'+su;}
else if(x==14&&y==20){n=lu+'21'+su;}
else if(x==12&&y==19){n=lu+'31'+su;}
else if(x==18&&y==16){n=lu+'08'+su;}
else if(x==13&&y==29){n=ld+'28'+sd;}
else if(x==15&&y==19){n=ld+'20'+sd;}
else if(x==3&&y==28){n=ld+'69'+sd;}
else if(x==14&&y==22){n=ld+'38'+sd;}
else if(x==16&&y==17){n=ld+'07'+sd;}
else if(x==21&&y==18){n=ld+'41'+sd;}
else if(x==30&&y==5){n=ld+'24'+sd;}
else if(x==11&&y==7){n=ld+'14'+sd;}
else if(x==10&&y==6){n=ld+'70'+sd;}
else if(x==15&&y==26){n=c+href+'4,23,13>Object Teleport (4,23,13)</a>';}
else if(x==20&&y==25){n=c+href+'4,23,14>Object Teleport (4,23,14)</a>';}
else if(x==2&&y==26){n=c+href+'5,9,5>Teleport (5,9,5)</a>';}
else if(x==28&&y==14){n=c+href+'5,25,20>Teleport (5,25,20)</a>';}
else if(x==15&&y==27){n=c+'01. Iron Key';}
else if(x==17&&y==24){n=c+'02. Iron Key';}
else if(x==20&&y==24){n=c+'03. Chest [Screamer Slice, Cheese, Corn, Bread (2)]';}
else if(x==12&&y==27){n=c+'04. Key Of B';}
else if(x==8&&y==27){n=c+'05. Tourquoise Key, Scroll ("Holy one step forward with purpose and trust that I will guide you through the purgatory that awaits.")';}
else if(x==3&&y==2){n=c+'06. Key Of B';}
else if(x==5&&y==4){n=c+'07. Key Of B';}
else if(x==3&&y==6){n=c+'08. Key Of B, Scroll ("Pray for a miracle")<br>'+href+'8,24,23>Teleport (8,24,23)</a>';}
else if(x==8&&y==10){n=c+'09. Scroll ("Map spell Oh Gor Ros")';}
else if(x==15&&y==1){n=c+'10. Scroll ("Map spell Oh Gor Dain")<br>L03. Onyx Key';}
else if(x==15&&y==9){n=c+'11. Vorpal Blade, Onyx Key';}
else if(x==17&&y==11){n=c+'12. Gold Key';}
else if(x==25&&y==11){n=c+'13. Scroll ("Press westward")<br>12. Couatl Generator (1)';}
else if(x==24&&y==14){n=c+'14. Winged Key';}
else if(x==28&&y==23){n=c+'15. Chest [Ful Bomb, Ruby Key, Magical Box (Green), Gor Coin (2), Ven Potion]';}
else if(x==17&&y==10){n=c+'16. Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==20&&y==27){n=c+'I01. "To the junction of the ways"<br>'+href+'7,21,20>Teleport (7,21,20)</a>';}
else if(x==20&&y==15){n=c+'I02. "Wrong Right Left"';}
else if(x==19&&y==27){n=c+'L01. Iron Key, Lock Picks';}
else if(x==21&&y==27){n=c+'L02. Iron Key';}
else if(x==17&&y==8){n=c+'L04. Onyx Key';}
else if(x==25&&y==7){n=c+'L05. Zokathra spell';}
else if(x==23&&y==20){n=c+'L06. Winged Key';}
else if(x==18&&y==11){n=c+'A. An Orange Gem in your inventory will close the pit at (05,19,12) when walking at (05,18,11).';}
else if(x==8&&y==22){n=c+'01. Slime Devil Generator (1)';}
else if(x==0&&y==16){n=c+'02. Slime Devil Generator (1)';}
else if(x==10&&y==16){n=c+'03. Slime Devil';}
else if(x==12&&y==15){n=c+'04. Slime Devil';}
else if(x==12&&y==17){n=c+'05. Slime Devil (2)';}
else if(x==15&&y==4){n=c+'06. Slime Devil Generator (1)';}
else if(x==15&&y==5){n=c+'07. Rive Generator (1)';}
else if(x==27&&y==6){n=c+'08. Couatl';}
else if(x==27&&y==7){n=c+'09. Couatl';}
else if(x==27&&y==8){n=c+'10. Couatl';}
else if(x==24&&y==10){n=c+'11. Couatl';}
else if(x==19&&y==13){n=c+'13. Couatl [Orange Gem, Rabbit\'s Foot #1]';}
else if(x==22&&y==19){n=c+'14. Couatl Generator (1)';}
else if(x==26&&y==22){n=c+'15. Couatl';}
else if(x==27&&y==22){n=c+'16. Couatl [Ra Key]';}
else if(x==28&&y==22){n=c+'17. Couatl';}
else if(x==3&&y==16){n=c+'18. A randomly placed Giggler possessing items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else{n=li;}
r.innerHTML=n;
}
if(l==6){
if(x==13&&y==29){n=lu+'28'+su;}
else if(x==15&&y==19){n=lu+'20'+su;}
else if(x==3&&y==28){n=lu+'69'+su;}
else if(x==14&&y==22){n=lu+'38'+su;}
else if(x==16&&y==17){n=lu+'07'+su;}
else if(x==21&&y==18){n=lu+'41'+su;}
else if(x==30&&y==5){n=lu+'24'+su;}
else if(x==11&&y==7){n=lu+'14'+su;}
else if(x==10&&y==6){n=lu+'70'+su;}
else if(x==5&&y==5){n=ld+'19'+sd;}
else if(x==21&&y==10){n=ld+'16'+sd;}
else if(x==21&&y==16){n=ld+'06'+sd;}
else if(x==7&&y==20){n=ld+'23'+sd;}
else if(x==30&&y==31){n=ld+'27'+sd;}
else if(x==15&&y==23){n=ld+'36'+sd;}
else if(x==7&&y==30){n=c+href+'6,8,15>Teleport (6,8,15)</a>';}
else if(x==26&&y==11){n=c+href+'6,28,14>Teleport (6,28,14)</a>';}
else if(x==28&&y==12){n=c+href+'6,25,13>Teleport (6,25,13)</a>';}
else if(x==24&&y==14){n=c+href+'6,26,19>Teleport (6,26,19)</a>';}
else if(x==25&&y==15){n=c+href+'6,29,20>Teleport (6,29,20)</a>';}
else if(x==27&&y==16){n=c+href+'6,24,20>Teleport (6,24,20)</a>';}
else if(x==28&&y==16){n=c+href+'6,28,21>Teleport (6,28,21)</a>';}
else if(x==11&&y==31){n=c+'01. Pendant Feral';}
else if(x==6&&y==14){n=c+'02. Magical Box (Blue)';}
else if(x==3&&y==9){n=c+'03. Magical Box (Blue)';}
else if(x==8&&y==8){n=c+'04. Magical Box (Blue)';}
else if(x==10&&y==25){n=c+'05. Water, Cheese, Bread, Corn, Apple';}
else if(x==24&&y==23){n=c+'06. Cross Of Neta, Scroll ("Map spell Zo Ir Neta")';}
else if(x==16&&y==27){n=c+'07. Empty Flask, Ful Bomb';}
else if(x==12&&y==9){n=c+'08. Cheese';}
else if(x==12&&y==25){n=c+'09. Orange Gem';}
else if(x==15&&y==26){n=c+'10. Ven Potion';}
else if(x==16&&y==25){n=c+'11. Ven Potion, Illumulet';}
else if(x==18&&y==26){n=c+'12. Ghi, Samurai Sword, Ghi Trousers';}
else if(x==17&&y==26){n=c+'13. Ful Bomb';}
else if(x==18&&y==16){n=c+'14. Torch<br>L03. Torch';}
else if(x==21&&y==13){n=c+'15. Iron Key';}
else if(x==26&&y==13){n=c+'16. Halter, Tattered Pants, Bezerker Helm, Bones';}
else if(x==25&&y==9){n=c+'17. Compass';}
else if(x==22&&y==8){n=c+'18. Apple';}
else if(x==31&&y==16){n=c+'19. Ful Bomb';}
else if(x==16&&y==26){n=c+'20. Some randomly placed items can be here (in one of the four alcoves). '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==5&&y==11){n=c+'I01. "Laughing pit"';}
else if(x==29&&y==22){n=c+'I02. "The Cistern"';}
else if(x==6&&y==17){n=c+'L01. Gold Key';}
else if(x==19&&y==25){n=c+'L02. Gold Key, Lock Picks';}
else if(x==29&&y==17){n=c+'L04. Onyx Key';}
else if(x==13&&y==26){n=c+'A. An Orange Gem in your inventory will open the wall at (06,12,26) when walking at (06,12,25).';}
else if(x==10&&y==29){n=c+'01. Water Elemental';}
else if(x==8&&y==29){n=c+'02. Water Elemental';}
else if(x==9&&y==28){n=c+'03. Water Elemental';}
else if(x==6&&y==28){n=c+'04. Water Elemental';}
else if(x==10&&y==27){n=c+'05. Water Elemental';}
else if(x==7&&y==27){n=c+'06. Water Elemental';}
else if(x==8&&y==17){n=c+'07. Rive Generator (1)';}
else if(x==30&&y==30){n=c+'08. Mummy Generator (1)';}
else if(x==10&&y==21){n=c+'09. Ant Man (3)';}
else if(x==12&&y==23){n=c+'10. Ant Man (4) [Gold Key]';}
else if(x==15&&y==21){n=c+'11. Ant Man (4)';}
else if(x==16&&y==21){n=c+'12. Ant Man (4)';}
else if(x==17&&y==21){n=c+'13. Ant Man (4)';}
else if(x==18&&y==21){n=c+'14. Ant Man (4) [Gold Key]';}
else if(x==16&&y==22){n=c+'15. Ant Man (4)';}
else if(x==18&&y==22){n=c+'16. Ant Man (4) [Water]';}
else if(x==17&&y==23){n=c+'17. Ant Man (3)';}
else if(x==18&&y==23){n=c+'18. Ant Man (4)';}
else if(x==17&&y==17){n=c+'19. Mummy (4)';}
else if(x==17&&y==18){n=c+'20. Mummy (4)';}
else if(x==18&&y==18){n=c+'21. Mummy (3)';}
else if(x==25&&y==21){n=c+'22. Water Elemental Generator (1)';}
else if(x==24&&y==20){n=c+'23. Water Elemental Generator (1)';}
else if(x==24&&y==18){n=c+'24. Water Elemental Generator (1)';}
else if(x==23&&y==17){n=c+'25. Water Elemental Generator (1)';}
else if(x==23&&y==16){n=c+'26. Water Elemental Generator (1)';}
else if(x==24&&y==15){n=c+'27. Water Elemental Generator (1)';}
else if(x==22&&y==30){n=c+'28. Giggler';}
else if(x==19&&y==4){n=c+'29. A randomly placed Giggler possessing items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else{n=li;}
r.innerHTML=n;
}
if(l==7){
if(x==5&&y==5){n=lu+'19'+su;}
else if(x==21&&y==10){n=lu+'16'+su;}
else if(x==21&&y==16){n=lu+'06'+su;}
else if(x==7&&y==20){n=lu+'23'+su;}
else if(x==30&&y==31){n=lu+'27'+su;}
else if(x==15&&y==23){n=lu+'36'+su;}
else if(x==5&&y==13){n=ld+'17'+sd;}
else if(x==22&&y==15){n=ld+'05'+sd;}
else if(x==28&&y==16){n=ld+'04'+sd;}
else if(x==17&&y==26){n=ld+'35'+sd;}
else if(x==30&&y==25){n=ld+'26'+sd;}
else if(x==15&&y==20){n=ld+'37'+sd;}
else if(x==19&&y==17){n=c+href+'8,28,26>Teleport (8,28,26)</a>';}
else if(x==19&&y==16){n=c+href+'5,7,2>Teleport (5,7,2)</a>';}
else if(x==23&&y==18){n=c+href+'8,28,21>Teleport (8,28,21)</a>';}
else if(x==24&&y==18){n=c+href+'5,5,7>Teleport (5,5,7)</a>';}
else if(x==20&&y==22){n=c+href+'8,25,25>Teleport (8,25,25)</a>';}
else if(x==19&&y==22){n=c+href+'5,12,25>Teleport (5,12,25)</a>';}
else if(x==25&&y==22){n=c+href+'8,22,21>Teleport (8,22,21)</a>';}
else if(x==26&&y==22){n=c+href+'5,1,9>Teleport (5,1,9)</a>';}
else if(x==21&&y==18){n=c+'01. Poison Dart (3)';}
else if(x==26&&y==15){n=c+'02. Rock (3)';}
else if(x==25&&y==16){n=c+'03. Dagger (10)';}
else if(x==28&&y==10){n=c+'04. Cloak Of Night';}
else if(x==29&&y==8){n=c+'05. Crossbow<br>09. Deth Knight (2) [Gold Key]';}
else if(x==28&&y==14){n=c+'06. Iron Key';}
else if(x==15&&y==6){n=c+'07. Magical Box (Green)';}
else if(x==23&&y==20){n=c+'08. Horn Of Fear';}
else if(x==29&&y==20){n=c+'09. Rock';}
else if(x==14&&y==34){n=c+'10. Chest [Dragon Steak, Shank, Bread (2), Cheese (2), Corn, Apple], Boots Of Speed, Compass, Chest [Gem Of Ages, Magical Box (Green) (3), Magical Box (Blue)], Chest [Gor Coin (5)], Helm Of Ra, Dragon Shield, Ee Potion';}
else if(x==21&&y==22){n=c+'11. Biter';}
else if(x==19&&y==20){n=c+'12. Yew Staff';}
else if(x==9&&y==17){n=c+'13. Shank';}
else if(x==13&&y==7){n=c+'14. Gunna, Kirtle';}
else if(x==9&&y==30){n=c+'15. Some randomly placed items can be here. Read the notes below for details. These items are lost.';}
else if(x==21&&y==19){n=c+'I01. "Ros"';}
else if(x==22&&y==20){n=c+'I02. "Neta"';}
else if(x==21&&y==21){n=c+'I03. "Ku"';}
else if(x==20&&y==20){n=c+'I04. "Dain"';}
else if(x==25&&y==14){n=c+'I05. "Give up pull the lever"';}
else if(x==17&&y==24){n=c+'L01. Skeleton Key<br>22. Oitu';}
else if(x==22&&y==16){n=c+'L02. Skeleton Key';}
else if(x==23&&y==13){n=c+'01. Rock Pile (4)';}
else if(x==23&&y==11){n=c+'02. Rock Pile (2)';}
else if(x==23&&y==10){n=c+'03. Rock Pile';}
else if(x==24&&y==9){n=c+'04. Rock Pile (3)';}
else if(x==25&&y==8){n=c+'05. Rock Pile (3)';}
else if(x==26&&y==7){n=c+'06. Rock Pile (2)';}
else if(x==28&&y==7){n=c+'07. Deth Knight (4) [Onyx Key]';}
else if(x==29&&y==7){n=c+'08. Rock Pile (4)';}
else if(x==30&&y==18){n=c+'10. Giggler Generator (1)';}
else if(x==25&&y==25){n=c+'11. Oitu Generator (1)';}
else if(x==26&&y==25){n=c+'12. Screamer (2)';}
else if(x==29&&y==26){n=c+'13. Screamer';}
else if(x==26&&y==27){n=c+'14. Screamer (4)';}
else if(x==28&&y==28){n=c+'15. Screamer (3)';}
else if(x==29&&y==29){n=c+'16. Screamer Generator (1-4)';}
else if(x==16&&y==28){n=c+'17. Muncher Generator (1)';}
else if(x==16&&y==33){n=c+'18. Muncher Generator (2)';}
else if(x==17&&y==34){n=c+'19. Muncher Generator (2)';}
else if(x==15&&y==24){n=c+'20. Oitu';}
else if(x==16&&y==24){n=c+'21. Oitu';}
else if(x==15&&y==25){n=c+'23. Oitu';}
else if(x==16&&y==25){n=c+'24. Oitu';}
else if(x==17&&y==25){n=c+'25. Oitu';}
else if(x==19&&y==14){n=c+'26. Oitu Generator (1)';}
else if(x==14&&y==19){n=c+'27. Oitu Generator (1)';}
else if(x==9&&y==14){n=c+'28. Oitu Generator (1)';}
else if(x==14&&y==9){n=c+'29. Oitu Generator (1)';}
else if(x==5&&y==16){n=c+'30. Giggler [Diamond Edge, Water, Plate Of Ra]';}
else if(x==6&&y==16){n=c+'31. Giggler [Ku Potion, Dragon Plate, Topaz Key]';}
else if(x==6&&y==17){n=c+'32. Giggler [Side Splitter, Poleyn Of Ra, Greave Of Ra]';}
else if(x==5&&y==18){n=c+'33. Giggler [Dragon Helm, Dragon Poleyn, Dragon Greave]';}
else if(x==5&&y==19){n=c+'34. Giggler [Gold Key, Flamitt, Storm]';}
else if(x==6&&y==19){n=c+'35. Giggler [Wand, Magical Box (Green), Ra Blade]';}
else if(x==5&&y==26){n=c+'36. Giggler [Eye Of Time]';}
else if(x==5&&y==27){n=c+'37. Giggler [Lock Picks]';}
else if(x==5&&y==28){n=c+'38. Giggler [Skeleton Key]';}
else if(x==5&&y==29){n=c+'39. Giggler [Stormring, Onyx Key]';}
else if(x==5&&y==30){n=c+'40. Giggler [Magical Box (Green), Key Of B]';}
else if(x==5&&y==31){n=c+'41. Giggler [Sapphire Key, Rabbit\'s Foot #2]';}
else if(x==5&&y==32){n=c+'42. Giggler [Gold Key, Ven Potion, Water]';}
else if(x==5&&y==33){n=c+'43. Giggler [Magical Box (Blue), Ful Bomb]';}
else if(x==9&&y==7){n=c+'44. A randomly placed Giggler possessing items can be here. Read the notes above for details.';}
else if(x==21&&y==33){n=c+'45. A randomly placed Giggler possessing items can be here. Read the notes above for details.';}
else if(x==7&&y==17 || x==7&&y==28 || x==14&&y==28){n=c+'A. Random placement of items<br>Some items are not always at the same place each time you play Chaos Strikes Back. Although the items are randomly placed, the items themselves are predefined, as well as their possible final locations. There are 22 sets of items (14 are possessed by Gigglers at the beginning) to randomly place at 24 locations. The possible destinations are noted on the maps, here they are:<br><p>- The eight sets of items carried by the eight Gigglers at (07,05,26) to (07,05,33) can be sent to (00,33,33), (00,38,31), (05,03,16), (09,14,32), (08,20,31), (07,09,07), (07,21,33) and (06,19,04). Note that Gigglers teleported to level 00 will die instantly because they are not allowed on this level.</p><p>- The six sets of items carried by the six Gigglers at (07,05,16) to (07,06,19) can be sent to (00,23,17), (04,22,25), (02,31,23), (04,17,27), (01,09,21), (02,31,23), (03,16,30) and (06,16,26). Note that two of these locations will remain empty as there are only six sets of items. Two sets of items may be sent to (02,31,23) as there are two teleporters to that location.</p><p>- The eight sets of items stored in the item launcher at (07,14,34) can be sent to (02,12,08), (03,25,19), (05,17,10), (08,30,12), (07,09,30), (00,43,40), (09,09,37) and (02,14,20). Note that there is one of these sets of items that the party will not be able to get.</p><p>Detailed explanation:<br>The random movements of the eight Gigglers at (07,05,26) to (07,05,33) control the random placement of items. The first column of teleporters at (07,09,26) to (07,09,33) is here to accelerate the process. After some time, each of these eight Gigglers will end on one tile at (07,12,26) to (07,12,33). When a Giggler walks on one of these tiles, the following three actions take place (note that each tile can only be triggered once):</p><p>1. It opens one of the pits at (07,05,16) to (07,06,19). If a Giggler was above the pit, it falls to level 08 where it dies (Although Gigglers are allowed on level 08, they die of their fall because they only have one health point). The items they carried are then teleported to their final destination. Other Gigglers in the area cannot fall in the same pit because Gigglers are not suicidal.</p><p>2. It will enable one teleporter at (07,14,27) to (07,14,33) (except when walking on (07,12,26) because the teleporter at (07,14,26) is always enabled). Then the missile launcher at (07,14,34) will fire one set of items that will enter the active teleporter. The teleporter disappears as it is only temporary. Note that one teleporter will send a set of items to the Giggler room at (07,09,30), so these items will be virtually removed from the dungeon as the party cannot go there.</p><p>3. It will briefly enable a teleporter on the same tile that will take the Giggler elsewhere. The teleporter disappears so that no other Giggler can enter it. Gigglers sent to level 0 will instantly die and drop their items. Otherwise they will survive (until you meet them of course).</li></p><p>Note that the items are not positionned at the very beginning of the game, but only when Gigglers have moved a bit. You may have to check some destinations twice as the items may not have been teleported yet the first time you check them.</p>';}
else{n=li;}
r.innerHTML=n;
}
if(l==8){
if(x==8&&y==15){n=ld+'18'+sd;}
else if(x==9&&y==23){n=ld+'34'+sd;}
else if(x==6&&y==37){n=ld+'33'+sd;}
else if(x==24&&y==37){n=ld+'32'+sd;}
else if(x==31&&y==24){n=ld+'15'+sd;}
else if(x==31&&y==28){n=ld+'25'+sd;}
else if(x==5&&y==13){n=lu+'17'+su;}
else if(x==22&&y==15){n=lu+'05'+su;}
else if(x==28&&y==16){n=lu+'04'+su;}
else if(x==17&&y==26){n=lu+'35'+su;}
else if(x==30&&y==25){n=lu+'26'+su;}
else if(x==15&&y==20){n=lu+'37'+su;}
else if(x==10&&y==13){n=c+href+'7,26,26>Teleport (7,26,26)</a>';}
else if(x==31&&y==38){n=c+href+'7,9,19>Teleport (7,9,19)</a>';}
else if(x==28&&y==25){n=c+href+'8,31,34>Teleport (8,31,34)</a>';}
else if(x==31&&y==35){n=c+href+'8,28,26>Teleport (8,28,26)</a>';}
else if(x==31&&y==33){n=c+href+'8,28,24>Teleport (8,28,24)</a>';}
else if(x==26&&y==21){n=c+'01. Iron Key';}
else if(x==31&&y==20){n=c+'02. Throwing Star';}
else if(x==29&&y==18){n=c+'03. Throwing Star';}
else if(x==31&&y==15){n=c+'04. Arrow (2)';}
else if(x==31&&y==13){n=c+'05. Arrow (3)';}
else if(x==27&&y==12){n=c+'06. Dexhelm';}
else if(x==28&&y==23){n=c+'07. Iron Key';}
else if(x==30&&y==29){n=c+'08. Rock';}
else if(x==28&&y==32){n=c+'09. Elven Doublet, Elven Huke<br>15. Muncher (4)';}
else if(x==27&&y==33){n=c+'10. Dragon Steak<br>17. Muncher (4)';}
else if(x==25&&y==30){n=c+'11. Dragon Steak<br>09. Muncher (4)';}
else if(x==31&&y==37){n=c+'12. Staff';}
else if(x==26&&y==25){n=c+'13. Iron Key';}
else if(x==21&&y==24){n=c+'14. Small Shield';}
else if(x==6&&y==35){n=c+'15. Chest [Magnifier, Scroll ("Map spell Oh Gor Ku"), Gor Coin (3)]';}
else if(x==6&&y==31){n=c+'16. Executioner';}
else if(x==11&&y==26){n=c+'17. Halter, Falchion';}
else if(x==24&&y==23){n=c+'18. Iron Key';}
else if(x==30&&y==12){n=c+'19. Some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a><br>02. Mummy (2)';}
else if(x==23&&y==31){n=c+'I01. "No fireballs"';}
else if(x==17&&y==31){n=c+'I02. "No fireballs"<br>19. Muncher Generator (2)';}
else if(x==30&&y==18){n=c+'L01. Onyx Key, Iron Key';}
else if(x==30&&y==16){n=c+'L02. Iron Key, Lock Picks';}
else if(x==30&&y==15){n=c+'L03. Onyx Key, Lock Picks';}
else if(x==15&&y==13){n=c+'L04. Square Key';}
else if(x==7&&y==36){n=c+'L05. Iron Key';}
else if(x==15&&y==14){n=c+'A. "Vexing Vexirk" puzzle:<br>When you walk at (15,13), a Vexirk (Creatures #06) is teleported to (15,13). You can kill it to take its Iron Key and escape from that area. But you should try to scare and corner it at (24,23) by using War Cry or the Horn of Fear. There he will teleport to (09,30,37) where he will die. He will drop its Cape that will trigger the teleporter there, which will teleport the Vexirk\'s items as well as the items that were at (09,30,37) in front of you at (24,23). The teleported Mirror Of Dawn will activate the teleporter at (25,13) which will teleport a second Vexirk (Creature #05) to (18,14). You will not be able to corner it at the same place, but you can do it at (09,11). He will teleport to (09,28,37) where he will die. He will drop its Cheese that will trigger the teleporter there, which will teleport the Vexirk\'s items as well as the items that were at (09,28,37) in front of you at (09,11). A third Vexirk (Creature #36) will also be teleported to (18,14). You can kill this one normally.';}
else if(x==30&&y==13){n=c+'01. Mummy';}
else if(x==31&&y==12){n=c+'03. Mummy';}
else if(x==30&&y==11){n=c+'04. Mummy (3) [Gor Coin]';}
else if(x==25&&y==13){n=c+'05. Vexirk [Apple, Corn, Bread, Cheese]';}
else if(x==25&&y==11){n=c+'06. Vexirk [Cape, Water, Square Key]';}
else if(x==25&&y==29){n=c+'07. Muncher (4)';}
else if(x==26&&y==29){n=c+'08. Muncher (4)';}
else if(x==26&&y==30){n=c+'10. Muncher (4)';}
else if(x==27&&y==31){n=c+'11. Muncher (4)';}
else if(x==28&&y==31){n=c+'12. Muncher (4)';}
else if(x==29&&y==31){n=c+'13. Muncher (4)';}
else if(x==27&&y==32){n=c+'14. Muncher (4)';}
else if(x==29&&y==32){n=c+'16. Muncher (4)';}
else if(x==28&&y==33){n=c+'18. Muncher (4)';}
else if(x==18&&y==35){n=c+'20. Vexirk [Magical Box (Green)]';}
else if(x==22&&y==35){n=c+'21. Vexirk';}
else if(x==23&&y==38){n=c+'22. Deth Knight (2)';}
else if(x==16&&y==38){n=c+'23. Deth Knight';}
else if(x==14&&y==36){n=c+'24. Vexirk (3) [Bread, Onyx Key, Choker]';}
else if(x==13&&y==37){n=c+'25. Vexirk (3) [Gor Coin]';}
else if(x==12&&y==38){n=c+'26. Vexirk (4) [Cheese, Apple]';}
else if(x==11&&y==37){n=c+'27. Vexirk [Iron Key]';}
else if(x==9&&y==36){n=c+'28. Vexirk (2) [Ful Bomb, Ven Potion]';}
else if(x==9&&y==38){n=c+'29. Vexirk (2) [Gold Key, Magical Box (Blue)]';}
else if(x==8&&y==37){n=c+'30. Vexirk [Rabbit\'s Foot #3, Jewel Symal]';}
else if(x==7&&y==34){n=c+'31. Deth Knight';}
else if(x==9&&y==34){n=c+'32. Deth Knight';}
else if(x==7&&y==28){n=c+'33. Deth Knight';}
else if(x==9&&y==28){n=c+'34. Deth Knight';}
else if(x==17&&y==25){n=c+'35. Mummy Generator (1-4)';}
else if(x==5&&y==11){n=c+'36. Vexirk';}
else if(x==20&&y==31){n=c+'37. A randomly placed Giggler possessing items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else{n=li;}
r.innerHTML=n;
}
if(l==9){
if(x==8&&y==15){n=lu+'18'+su;}
else if(x==9&&y==23){n=lu+'34'+su;}
else if(x==6&&y==37){n=lu+'33'+su;}
else if(x==24&&y==37){n=lu+'32'+su;}
else if(x==31&&y==24){n=lu+'15'+su;}
else if(x==31&&y==28){n=lu+'25'+su;}
else if(x==20&&y==30){n=c+href+'5,18,27>Teleport (5,18,27)</a>';}
else if(x==22&&y==23){n=c+href+'7,21,20>Teleport (7,21,20)</a>';}
else if(x==31&&y==35){n=c+href+'4,31,26>Teleport (4,31,26)</a>';}
else if(x==12&&y==13){n=c+'01. Leather Pants';}
else if(x==19&&y==11){n=c+'02. Iron Key';}
else if(x==24&&y==13){n=c+'03. Rock';}
else if(x==27&&y==12){n=c+'04. Claw Bow';}
else if(x==27&&y==15){n=c+'05. Rock';}
else if(x==28&&y==15){n=c+'06. Leather Jerkin';}
else if(x==31&&y==15){n=c+'07. Boulder';}
else if(x==29&&y==22){n=c+'08. Sling';}
else if(x==27&&y==30){n=c+'09. Iron Key, Gor Coin, Chest [Vi Potion, Calista, Shank, Moonstone]';}
else if(x==11&&y==26){n=c+'10. Rock';}
else if(x==14&&y==24){n=c+'11. Rock';}
else if(x==18&&y==25){n=c+'12. Bones';}
else if(x==6&&y==28){n=c+'13. Rock';}
else if(x==6&&y==33){n=c+'14. Iron Key';}
else if(x==9&&y==31){n=c+'15. Rapier';}
else if(x==10&&y==31){n=c+'16. Boulder';}
else if(x==14&&y==30){n=c+'17. Boulder';}
else if(x==16&&y==34){n=c+'18. Bones';}
else if(x==9&&y==37){n=c+'19. Ful Bomb (4), Ven Potion (4), Magical Box (Blue), Magical Box (Green), Slayer (2), some randomly placed items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else if(x==21&&y==30){n=c+'20. Onyx Key (Amiga), Iron Key (Atari ST)';}
else if(x==28&&y==37){n=c+'21. Chest [Master Key, Rabbit\'s Foot #4, Ee Potion, Gor Coin], Ekkhard Cross<br>'+href+'8,9,11>Teleport (8,9,11)</a>';}
else if(x==30&&y==37){n=c+'22. Magical Box (Green), Mirror Of Dawn<br>'+href+'8,24,23>Teleport (8,24,23)</a>';}
else if(x==7&&y==36){n=c+'L01. Onyx Key, Lock Picks';}
else if(x==21&&y==28){n=c+'I01. "Surrender your possesions"<br>A. You only have to surrender Leather Boots and turn around for the wall to open. The items you surrender will be teleported to the alcoves at ('+href+'4,17,27>04,17,27</a>). [Discovered by Beowuuf (beowuuf@yahoo.com)]';}
else if(x==29&&y==37){n=c+'B. See note about the "Vexing Vexirk" on '+href+'8,15,14>Chaos Strikes Back Level 08</a>.';}
else if(x==28&&y==18){n=c+'01. Worm Generator (2)';}
else if(x==27&&y==25){n=c+'02. Worm Generator (2)';}
else if(x==13&&y==28){n=c+'03. Worm Generator (2)';}
else if(x==13&&y==31){n=c+'04. Dragon [Solid Key, Hosen, Mithral Mail, Mithral Aketon, Basinet, Axe]';}
else if(x==14&&y==32){n=c+'05. A randomly placed Giggler possessing items can be here. '+href+'7,7,28>Read the notes of Chaos Strikes Back Level 07 for details.</a>';}
else{n=li;}
r.innerHTML=n;
}
if(l==10){
var pp='<span id="champ"></span><br>';
var pe=0;
if(x==6&&y==15){n=ld+'01'+sd;}
else if(x==19&&y==7){n=ld+'02'+sd;}
else if(x==1&&y==15){n=ld+'03'+sd;}
else if(x==19&&y==3){n=ld+'04'+sd;}
else if(x==4&&y==3){n=c+pp+'C01. Talon';pe=0;}
else if(x==3&&y==2){n=c+pp+'C02. Airwing';pe=58;}
else if(x==2&&y==3){n=c+pp+'C03. Aroc';pe=116;}
else if(x==3&&y==4){n=c+pp+'C04. Leta';pe=174;}
else if(x==2&&y==7){n=c+pp+'C05. Plague<br>C. Resurrecting or reincarnating Plague (C05), Necro (C06), Deth (C07), Skelar The Slayer (C08) or Kazai Shadow Warrior (C24) will close the door to Lor Champion Of Good at ('+href+l+',1,14>01,14</a>)';pe=232;}
else if(x==1&&y==8){n=c+pp+'C06. Necro<br>C. Resurrecting or reincarnating Plague (C05), Necro (C06), Deth (C07), Skelar The Slayer (C08) or Kazai Shadow Warrior (C24) will close the door to Lor Champion Of Good at ('+href+l+',1,14>01,14</a>)';pe=290;}
else if(x==2&&y==9){n=c+pp+'C07. Deth<br>C. Resurrecting or reincarnating Plague (C05), Necro (C06), Deth (C07), Skelar The Slayer (C08) or Kazai Shadow Warrior (C24) will close the door to Lor Champion Of Good at ('+href+l+',1,14>01,14</a>)';pe=348;}
else if(x==3&&y==8){n=c+pp+'C08. Skelar The Slayer<br>C. Resurrecting or reincarnating Plague (C05), Necro (C06), Deth (C07), Skelar The Slayer (C08) or Kazai Shadow Warrior (C24) will close the door to Lor Champion Of Good at ('+href+l+',1,14>01,14</a>)';pe=406;}
else if(x==4&&y==11){n=c+pp+'C09. Tunda The Surefooted';pe=464;}
else if(x==5&&y==12){n=c+pp+'C10. Lana';pe=522;}
else if(x==12&&y==14){n=c+pp+'C11. Itza Warlord Of Uxmal';pe=580;}
else if(x==15&&y==12){n=c+pp+'C12. Tula Princess Of Uxmal';pe=638;}
else if(x==16&&y==8){n=c+pp+'C13. Petal';pe=696;}
else if(x==16&&y==9){n=c+pp+'C14. Buzzzzz';pe=754;}
else if(x==15&&y==3){n=c+pp+'C15. Sting';pe=812;}
else if(x==16&&y==2){n=c+pp+'C16. Slogar Webber Of Arachnia';pe=870;}
else if(x==15&&y==1){n=c+pp+'C17. Gnatu Spearing Of Leef';pe=928;}
else if(x==14&&y==2){n=c+pp+'C18. Mantia Spellweaver Of Kelt';pe=986;}
else if(x==9&&y==9){n=c+pp+'C19. Toadrot Prince Of Skulash';pe=1044;}
else if(x==10&&y==10){n=c+pp+'C20. Ven High Priest Of Ssha';pe=1102;}
else if(x==11&&y==9){n=c+pp+'C21. Algor Marsh Hunter';pe=1160;}
else if(x==10&&y==8){n=c+pp+'C22. Dema Champion Of Iissh';pe=1218;}
else if(x==1&&y==13){n=c+pp+'C23. Lor Champion Of Good<br>D. Resurrecting or reincarnating Lor Champion Of Good (C23) will close the door to Kazai Shadow Warrior (C24) at ('+href+l+',19,02>19,02</a>).';pe=1276;}
else if(x==19&&y==1){n=c+pp+'C24. Kazai Shadow Warrior<br>C. Resurrecting or reincarnating Plague (C05), Necro (C06), Deth (C07), Skelar The Slayer (C08) or Kazai Shadow Warrior (C24) will close the door to Lor Champion Of Good at ('+href+l+',1,14>01,14</a>)';pe=1334;}
else if(x==9&&y==1){n=c+'A. Choose four <a href="http://dmweb.free.fr/?q=node/191">Chaos Strikes Back Champions</a>.';}
else if(x==17&&y==6 || x==8&&y==15){n=c+'B. You must have at least one champion in your team before being able to open the door.</a>.';}
else{n=li;}
r.innerHTML=n;
var cp=document.getElementById('champ');
if(cp!==null){cp.style.backgroundPosition='0px -'+pe+'px';}
}
if(l==11){
if(x==6&&y==15){n=lu+'01'+su;}
else if(x==19&&y==7){n=lu+'02'+su;}
else if(x==1&&y==15){n=lu+'03'+su;}
else if(x==19&&y==3){n=lu+'04'+su;}
else if(x==2&&y==13){n=c+'01. Mummy (3)';}
else if(x==2&&y==14){n=c+'02. Mummy (2)';}
else if(x==2&&y==17){n=c+'03. Mummy (4)';}
else if(x==4&&y==15){n=c+'04. Mummy (4)';}
else if(x==4&&y==16){n=c+'05. Mummy (4)';}
else if(x==5&&y==14){n=c+'06. Mummy (4)';}
else if(x==5&&y==16){n=c+'07. Mummy (2)';}
else if(x==16&&y==8){n=c+'08. Rock Pile (2)';}
else if(x==17&&y==10){n=c+'09. Rock Pile';}
else if(x==18&&y==9){n=c+'10. Rock Pile';}
else if(x==19&&y==8){n=c+'11. Rock Pile (4)';}
else if(x==20&&y==9){n=c+'12. Rock Pile';}
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