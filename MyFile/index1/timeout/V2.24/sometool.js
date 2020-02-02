/********
DATA=2019.12.15
LASTDATA=2020.01.13
NAME="SOMETOOL.JS"
********/

(function (){

function setinner(id,inner,ret){
var retdata = document.getElementById(id).innerHTML=inner;
if(Number(ret)&1==1) {
  return retdata;
 }
}

window.page={}
page.set=function (n,now){
document.getElementById("page"+n).hidden=false
document.getElementById("page"+now).hidden=true
}
page.next=function (now){
document.getElementById("page"+(now+1)).hidden=false
document.getElementById("page"+now).hidden=true
}
page.last=function (now){
document.getElementById("page"+(now-1)).hidden=false
document.getElementById("page"+now).hidden=true
}

window.getElement=function (elementname){
return document.getElementById(elementname);
}
window.document.element=function (Element){
return document.getElementById(Element);
}
window.ElementByTagName=function (Element){
return document.getElementsByTagName(Element);
}
window.tagElement=function (Element){
return document.getElementsByTagName(Element);
}
window.document.tagElement=function (Element){
return document.getElementsByTagName(Element);
}

window.addevent =function (ojt,even,func,capt){
if(capt===undefined) {capt=0}
ojt.addEventListener(even, func, capt);
/*addEventListener(event, function, useCapture);*/
}
window.addeventbyid =function (id,even,func,capt){
if(capt===undefined) {capt=false}
getElement(id).addEventListener(even, func, capt);
}

addevent(window,"load",function (){
try{
var nbs=tagElement('nbsp')
if(nbs.length!==0){
var nbi,nbn;
for(var i=0;i<nbs.length;i++){
  nbi=nbs[i].innerHTML
  nbsi=nbs[i]
    if(typeof(nbi)!==undefined) {
        if(!(isNaN(parseInt(nbi)))) {
nbn=parseInt(nbi)
nbs[i].innerHTML=""
for(var ii=0;ii<nbn+1;ii++){
nbs[i].innerHTML+="&nbsp;"
}
nbn=undefined
        }
    }
  nbi=undefined
  }
 }

 /*end-try*/;}
catch(err){alert(err)}
},false)

addevent(window,"load",function (){
})

/*
window.MsgBox=function (in){
try{

if(in!==undefined) {
return in
 }
var msgtmp={}
msgtmp.a=function (mta){ return (alert(mta)) }
msgtmp.b=function (mtb){ return (confirm(mtb)) }
msgtmp.c=function (mtc){ return (prompt(mtc)) }
msgtmp.dm={}
msgtmp.dm.w=function (dmw){
  document.write(dmw)
  return dmw
 }
return msgtmp

 }
catch(err){alert(err)}
} 

window.EchoMessage=function (in){
document.write(in)
return in
} */

window.disableEval=function(){
window.eval=undefined
}
window.disableDisableEval=function(){
window.disableEval=undefined
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
        if (c.indexOf(name)  == 0) {
            return c.substring(name.length, c.length);
         }
    }
    return "";
}

})()