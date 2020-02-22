/********
DATA=2020-02-22
LASTDATA=2020-02-22
METHOD=GET
QUOTE=<script src="https://shc7432.github.io/public/getLinkInput/getLinkInput.js"></script>
QUOTEOR=<script src="https://shc0743.github.io/getLinkInput.js"></script>
********/

function findInput(name,succeed,error){try{
eval(name+"=undefined")
var path=location.href
if(path.search("\\?")!==-1){
var inputContent=path.split("?")[1]
if(inputContent.search("&")!==-1) { 
inputContent=inputContent.split("&") 
var i=0;/*/SUM=7/*/
for(;i<inputContent.length;i++){
if(eval("/"+name+"=/.test(inputContent[i])")){
eval(name+"=inputContent[i].replace("+'"'+name+"=","");
break;
 }
}
} else {
if(inputContent.search(eval('/'+name+'=/')!==-1){
eval(name+'=inputContent.replace(/'+name+'=/,"")'
 }
}
  }

if(name!==undefined){
if(typeof(succeed)=="function") {return succeed()} else
if(typeof(succeed)=="function") {return eval(succeed)} else
return eval(name);
 } else {
if(typeof(error)=="function") {return error()} else
if(typeof(error)=="function") {return eval(error)} else
return eval(name);
 }
}catch(err){alert(err)}})()
