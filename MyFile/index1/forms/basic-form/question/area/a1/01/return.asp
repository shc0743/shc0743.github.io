<!DOCTYPE html>
<meta charset="UTF-8">
<%
hpy=Request.Form("happy")
hpis=Request.Form("Happiness")
response.write("您填写了:快乐:"&hpy&";幸福:"&hpis)
response.write("谢谢填写!")
%>
