<html>
    <head>
        <title> Jaava Database Connection </title>
    </head>
    <body>
        <%
            set conn=Server.CreateObject("ADODB.Connection")
           conn.Provider="Microsoft.Jet.OLEDB.4.0"
           conn.Open(Server.Mappath("users_records.mdb"))
           set rs=Server.CreateObject("ADODB.recordset")
        %>
            
        <form action="sign_up_check.html" method="post">
        Name :<input type="text" name="name" placeholder="Enter your name here">
            <input type="radio" title="search" name="choice" value="search">Search
            <input type="radio" title="insert" name="choice" value="inseret">insert
            <input type="radio" title="delete" name="choice" value="delete">delete
            <input type="radio" title="update" name="choice" value="update">update
            <input type="radio" title="select" name="choice" value="select">select
            
            <textarea name="info" title="info" value="info">
                
            </textarea>
            <%
                dim ins,srch,del,updt,disp
               ins="INSERT"
               srch="SEARCH"
               del="DELETE"
               updt="UPDATE"
               disp="DISPLAY"
               am=request()
               
               if(am=srch ) then
                sql="select *from users where"
               %>
        </form>
    </body>
</html>
