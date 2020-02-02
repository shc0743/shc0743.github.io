var i=0-1;

function timedCount()
{
i=i+1;
postMessage(i/100);
setTimeout("timedCount()",10);
}

timedCount();