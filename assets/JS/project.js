function close()
{
    alert("this is close");
}
function loginCheck()
{
    var email=document.getElementById('email').value;
    var pwd=md5(document.getElementById('pwd').value);
    if(email=="vishal" && pwd=="4de9185e512e53a3ae23834bbdd33e01"){
        alert("WElCOME ! vishal surgade ");
        window.location='index.html';
    }
    else
        alert("password is incorrect ! please Enter valid Email and Password");
}
function minus()
{
    var min=document.getElementById('quan').value-1;
    document.getElementById('quan').value=min;
}
function plus()
{
    var min=document.getElementById('quan').value;
    min++;
    document.getElementById('quan').value=min;
}
function cart(){
            document.getElementById("pop").style.display = "block";
        }
function forgot()
{
    var pwd=prompt('Enter Email Address');
    
    alert('Reset password link is sended to '+pwd);
}
function letteronly(val)
{
  
    if(!val.match(/^[A-z]/))
        {
            alert("please Enter Alphabates only");
            document.getElementById('fname').value="";
        }
}
function letteronly1(val)
{
  
    if(!val.match(/^[A-z]/))
        {
            alert("please Enter Alphabates only");
            document.getElementById('lname').value="";
        }
}
function check(value)
            {
                var val=value;
                if(val>4){
                    document.getElementById('check1').src="images/check.png";
                }
                else if(val<=0){
                    document.getElemenById('check1').src="images/white.png";
                }
                else{
                    
                    document.getElementById('check1').src="images/cross.png";
                    
                }
            }
            function len(value)
            {   var val=value;
                if(val<6){
                    alert('Please Enter the password in range of 6 to 15. your length is :'+val);
                }
            }
            function Call()
            {
                var p1=document.getElementById('p1').value;
                var p2=document.getElementById('p2').value;
               
                if(p1!=p2)
                    {
                        document.getElementById("p2").style.borderColor = "red";
                        document.getElementById('check2').src="images/cross.png";
                        document.getElementById('p2').value='';
                    }
                else{
                    document.getElementById("p2").style.borderColor = "green";
                    document.getElementById("p2").style.borderBottomColor = "yellow";
                    document.getElementById('check2').src="images/check.png";
                }
            }
            
            function checkInp()
            {
                var x=document.forms["signup"]["mob"].value;
                if (isNaN(x)) 
                {
                    alert("Must to input numbers");
                    document.getElementById("mob").value='';
                    return false;
                }
            }