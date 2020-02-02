var i=0-1;

function timedCount()
{
i=i+1;
postMessage(i);
setTimeout("timedCount()",1000);
}

timedCount();
