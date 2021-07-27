function slide(){
    var state=document.getElementById('nav').offsetWidth;
    var l= document.getElementsByClassName('link'); 
    var i;
    if(state==240){
    document.getElementById('nav').style.width=70;
    document.getElementById('slide').style.marginLeft="50px";
    document.getElementById('name1').style.display="none";
    document.getElementById('name2').style.display="none";
    document.getElementById('name3').style.display="none";
    document.getElementById('name4').style.display="none";
    document.getElementById('name5').style.display="none";
    document.getElementById('name6').style.display="none";
    document.getElementById('name7').style.display="none";
    document.getElementById('name8').style.display="none";
    document.getElementById('name9').style.display="none";
    document.getElementById('name10').style.display="none";        
        for (i=0;i<10;i++) { 
            l[i].style.width="50px";
        }
    }
    else if(state==70){
        document.getElementById('nav').style.width=240;
        document.getElementById('slide').style.marginLeft="220px";
        document.getElementById('name1').style.display="inline";
        document.getElementById('name2').style.display="inline";
        document.getElementById('name3').style.display="inline";
        document.getElementById('name4').style.display="inline";
        document.getElementById('name5').style.display="inline";
        document.getElementById('name6').style.display="inline";
        document.getElementById('name7').style.display="inline";
        document.getElementById('name8').style.display="inline";
        document.getElementById('name9').style.display="inline";
        document.getElementById('name10').style.display="inline";
        for (i=0;i<=10;i++) { 
            l[i].style.width="200px";
        }
    }  
}