var p=document.querySelectorAll("td")
var a=0
var result=document.querySelector('h1')
var clear=document.querySelector(".btn")
var res=0,stroke=0

clear.addEventListener("click",function(){
    var i;
    a=0;
    for(i=0;i<p.length;i++)
    {
        p[i].textContent=""
        p[i].className=""
    }
})
function setmarkerx(){
    
    this.textContent='X';
    
}
function setmarkero(){
    
    this.textContent='O';
    
}

function get(){
        for(var i=0;i<p.length;i++)
        {
                
                p[i].onclick=function(){ 
                
                
                if(a==0)
                {
                    
                    this.textContent='X';
                    a=1
                }
                else{
                    this.textContent='O';
                    a=0
                }
            
        }
    }
   
}


var b=setInterval("get()",100)

function checker()
{
    if((p[0].textContent=='X'&&p[1].textContent=='X'&&p[2].textContent=='X')||(p[0].textContent=='O'&&p[1].textContent=='O'&&p[2].textContent=='O'))
    {
        p[0].className="diagonalLeft";
        p[1].className="diagonalLeft";
        p[2].className="diagonalLeft";
        if(p[2].textContent=='O')
        {
                var sui=setTimeout(function(){
                showresult('O',1)
            },1000)
        }
        else {
            var sui=setTimeout(function(){
                showresult('X',1)
            },1000)
        }
        
    }
    if((p[3].textContent=='O'&&p[4].textContent=='O'&&p[5].textContent=='O')||(p[3].textContent=='X'&&p[4].textContent=='X'&&p[5].textContent=='X'))
    {
        p[3].className="diagonalLeft";
        p[4].className="diagonalLeft";
        p[5].className="diagonalLeft";
        if(p[3].textContent=='O')
        {
                var sui=setTimeout(function(){
                showresult('O',1)
            },1000)
        }
        else{
            var sui=setTimeout(function(){
                showresult('X',1)
            },1000)
        }
        
    }
   
    if((p[6].textContent=='O'&&p[7].textContent=='O'&&p[8].textContent=='O')||(p[6].textContent=='X'&&p[7].textContent=='X'&&p[8].textContent=='X'))
    {
        p[6].className="diagonalLeft";
        p[7].className="diagonalLeft";
        p[8].className="diagonalLeft";
        if(p[6].textContent=='O')
        {
                var sui=setTimeout(function(){
                showresult('O',1)
            },1000)
        }
        else{
            var sui=setTimeout(function(){
                showresult('X',1)
            },1000)
        }
        
    }
    if((p[0].textContent=='O'&&p[3].textContent=='O'&&p[6].textContent=='O')||(p[0].textContent=='X'&&p[3].textContent=='X'&&p[6].textContent=='X'))
    {
        p[0].className="diagonalBottom";
        p[3].className="diagonalBottom";
        p[6].className="diagonalBottom";
        if(p[0].textContent=='O')
        {
                var sui=setTimeout(function(){
                showresult('O',1)
            },1000)
        }
        else{
            var sui=setTimeout(function(){
                showresult('X',1)
            },1000)
        }
        
    }
    if((p[1].textContent=='O'&&p[4].textContent=='O'&&p[7].textContent=='O')||(p[1].textContent=='X'&&p[4].textContent=='X'&&p[7].textContent=='X'))
    {
        p[1].className="diagonalBottom";
        p[4].className="diagonalBottom";
        p[7].className="diagonalBottom";
        if(p[1].textContent=='O')
        {
                var sui=setTimeout(function(){
                showresult('O',1)
            },1000)
        }
        else{
            var sui=setTimeout(function(){
                showresult('X',1)
            },1000)
        }
        
    }
    if((p[2].textContent=='O'&&p[5].textContent=='O'&&p[8].textContent=='O')||(p[2].textContent=='X'&&p[5].textContent=='X'&&p[8].textContent=='X'))
    {
        p[2].className="diagonalBottom";
        p[5].className="diagonalBottom";
        p[8].className="diagonalBottom";
        if(p[2].textContent=='O')
        {
                var sui=setTimeout(function(){
                showresult('O',1)
            },1000)
        }
        else{
            var sui=setTimeout(function(){
                showresult('X',1)
            },1000)
        }
        
    }
    if((p[0].textContent=='O'&&p[4].textContent=='O'&&p[8].textContent=='O')||(p[0].textContent=='X'&&p[4].textContent=='X'&&p[8].textContent=='X'))
    {
        p[0].className="diagonalFalling";
        p[4].className="diagonalFalling";
        p[8].className="diagonalFalling";
        if(p[0].textContent=='O')
        {
                var sui=setTimeout(function(){
                showresult('O',1)
            },1000)
        }
        else{
            var sui=setTimeout(function(){
                showresult('X',1)
            },1000)
        }
        
    }
    if((p[2].textContent=='O'&&p[4].textContent=='O'&&p[6].textContent=='O')||(p[2].textContent=='X'&&p[4].textContent=='X'&&p[6].textContent=='X'))
    {
        
        p[2].className="diagonalRising";
        p[4].className="diagonalRising";
        p[6].className="diagonalRising";
        if(p[2].textContent=='O')
        {
                var sui=setTimeout(function(){
                showresult('O',1)
            },1000)
        }
        else{
            var sui=setTimeout(function(){
                showresult('X',1)
            },1000)
        }
        
       
    }
    
}


function showresult(s,dec){
    console.log("dec "+dec)
    setInterval(function(){ if(s=='O'&&dec==1){
        var tab=document.querySelector('.game')
        tab.innerHTML="<h1><b>THE WINNER IS O</b></h1>"
        stroke=1
        clearInterval(se)}},5)
    setInterval(function(){ if(s=='X'&&dec==1){
        var tab=document.querySelector('.game')
        tab.innerHTML="<h1><b>THE WINNER IS X</b></h1>"
        stroke=1
        clearInterval(se)}},5)
    setInterval(function(){ if(s=='S'&&dec==0){
        var tab=document.querySelector('.game')
        tab.innerHTML="<h1><b>IT IS A STALEMATE</b></h1>"}},500)
}

function stalematechecker(){
    console.log("stroke :"+stroke)
    if(stroke!=1)
    {var see=0
    for(var i=0;i<p.length;i++)
    {
        if(p[i].textContent!='')
        {see+=1}
    }
    
    if(see==9)
    {
        var sui=setTimeout(function(){
            showresult('S',0)
        },2000)
    }}
}

var d=setInterval("checker()",1000)
var se=setInterval("stalematechecker()",1500)

