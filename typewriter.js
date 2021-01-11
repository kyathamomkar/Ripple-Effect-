// JavaScript Document
var $i = 0;
var $currentdate = new Date(); 
    var $datetime ="["+ $currentdate.getDate() + "/"
                + ($currentdate.getMonth()+1)  + "/" 
                + $currentdate.getFullYear() + " "  
                + $currentdate.getHours() + ":"  
                + $currentdate.getMinutes() + ":" 
                + $currentdate.getSeconds() +"]";
var $txt = "LOADING....\n..\nConnected Yay!!\n"+$datetime+"\n[Omkar] > Howdy, This is Omkar.Thanks for visiting my page. Do you see this message? Over";
var $speed = 30;
/* constant cursor blink  */
setInterval(function(){
	$('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}, 600);

/* disable the buttons */
var enableButtons = function() {
	$(".keys").prop("disabled",false);
	return;
}

/*open the terminal and get text  */
$(".spaceshiptop").click(function(){
$(".spaceshipmiddle").toggle("slow");
if($(".tooltiptext").text() === "Speak with Omi")
{	$(".keys").prop("disabled", true);
typeWriter();setTimeout(function() { enableButtons() }, 12000);
$(".tooltiptext").text("Click to exit");
}
else{
$(".tooltiptext").text("Speak with Omi");
}  
}); 

function typeWriter() {
	
	
	if ($i < $txt.length) { 
		$("#cmdtext").append($txt.charAt($i));
		scroll();
		$i++;
		setTimeout(typeWriter, $speed);
	}
	return;
	}
 
function scroll(){
var div = $('.myinfo');    
    var pos = div.scrollTop()+5;
    div.scrollTop(++pos);
	return;
}

/* clear the chat */
$(".keys").click(function(){
var title=$(this).text();
server(title);
	return;
}); 
 
function server(btn)
{
if(btn==="YES")
	{
	$i=0;
	$txt = "\n[you] > Loud and clear !!\n[omkar] > Great!! Know my\n1. Education\n2. Work Experience\n3. Skills";
	$(".keys").prop("disabled", true);typeWriter();setTimeout(function() { enableButtons() }, 8000);
	$('#btn1').text("EDU");
	$('#btn2').text("WORK");
	$('#btn3').text("SKILLS");	
	}
else if(btn==="NO")
	{
			$i=0;
		$txt = "\n[you] > nope !!\n[omkar] > Let me fix that.";
		$(".keys").prop("disabled", true);typeWriter();
		setTimeout(function() { clearchat() }, 3000);
	}
else if(btn==="CLEAR"){
		clearchat();
	$('#btn1').text("YES");
	$('#btn2').text("NO");
	$('#btn3').text("CLEAR");
	}
else if(btn==="EDU")
	{
	$i=0;
	$txt = "\n\n[you] > EDUCATION\n\nMaster of Science in Computer Science at The University of Texas at Arlington 2019-2021(GPA: 3.7/4.0)\n\n";
    $(".keys").prop("disabled", true);typeWriter();setTimeout(function() { enableButtons() }, 8000);
	
	}
else if(btn==="WORK")
	{
	$i=0;
	$txt = "\n\n[you] > WORK EXPERIENCE\n\n1. IT Computer Assistant\n(Aug 2020 – Present)\nOIT UT Arlington \n\n2. Software Developer\n(July 2017 – June 2019) ACCENTURE SOLUTIONS\n\n";
	$(".keys").prop("disabled", true);typeWriter();setTimeout(function() { enableButtons() }, 12000);
	}
else if(btn==="SKILLS"){
		$i=0;
	$txt = "\n\n[you] > SKILLS\n\nWEB DEVELOPMENT - HTML5, PHP, Wordpress, Javascript, JQuery, Json, Ajax, css, d3.js\n\nLanguages - Java, Python, C, Unity3D, C#\n\nCLOUD - AWS, AZURE, IBM\n\nFrameworks - Flask, Laravel, Java Spring MVC\n\nDATABASES - MYSQL, NoSQL, IMBDb2\n\nDevOps - Ansible, Terraform, boto3, Docker, Jenkins\n\nISSUE TRACKING - JIRA, ServiceNow\n";
	$(".keys").prop("disabled", true);typeWriter();setTimeout(function() { enableButtons() },25000);
	}	
else{
	return;
}
}

function clearchat()
{
	$i=0;
	$("#cmdtext").text("");
		$txt = $datetime+"\n[omkar] > Howdy, This is Omkar.Thanks for visiting my page. Do you see this message? Over";
		$(".keys").prop("disabled", true);typeWriter();setTimeout(function() { enableButtons() }, 8000);
	return;
}
 