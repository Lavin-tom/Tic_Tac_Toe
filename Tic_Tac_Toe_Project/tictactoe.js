    // tic tac toe game js file 
    // js file starts
    var delayInMilliseconds = 1000;//set the millisecond as 250 for delay
      var count=0;//set the variable  count as 0
      var draw=0;//set the variable  draw as 0
	function change(c)//function starts
  		{ 
  			var d=document.getElementById(c);//getting the element by their id
  			console.log(d);//get the result in console to view 
  			
  			count++;//increment the value of count whwn user click any button
  			
        if(count%2==1){ //check for the count, if user click odd count then its shows X otherwise O,here assume first player is choose X and second O
  				document.getElementById('player').innerHTML = "Player 2 turn";
          var s='X';}
  			else{
  				var s='O';
  				document.getElementById('player').innerHTML = "Player 1 turn";}
  			
   		 document.getElementById(c).value=s;//getting the value using id and set the variable s to c
   		 document.getElementById(c).disabled = true;//disable the button function to remove the multiclicking problem
   		 
      //checking for first user is winning 
       if(count%2==1)
   		 {
        //Checking different rows and colunm for the combination of 'X' 'X' 'X'
   		 if(document.getElementById(1).value=='X' && document.getElementById(2).value=='X' && document.getElementById(3).value=='X')
   		 {

        document.getElementById(1).style.borderColor = "#4dff4d";
        document.getElementById(2).style.borderColor = "#4dff4d";
        document.getElementById(3).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 1 Won";//set result in division player
        document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";//to get result gif
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
        setTimeout(function() //to get some delay in alert message
        {
          
   		 window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
   		 document.location.reload(); //is used to reload the page if any player is win or draw
   		   }, delayInMilliseconds);
      }
       //check condition for different rows and column
   		else if(document.getElementById(4).value=='X' && document.getElementById(5).value=='X' && document.getElementById(6).value=='X')
   		{
        document.getElementById(4).style.borderColor = "#4dff4d";
        document.getElementById(5).style.borderColor = "#4dff4d";
        document.getElementById(6).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 1 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
      setTimeout(function() 
        {
       window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
       document.location.reload(); //is used to reload the page if any player is win or draw
         }, delayInMilliseconds);
   		}

   		else if(document.getElementById(7).value=='X' && document.getElementById(8).value=='X' && document.getElementById(9).value=='X')
   		{
        document.getElementById(7).style.borderColor = "#4dff4d";
        document.getElementById(8).style.borderColor = "#4dff4d";
        document.getElementById(9).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 1 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
      setTimeout(function() 
        {
       window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
       document.location.reload(); //is used to reload the page if any player is win or draw
         }, delayInMilliseconds);
   		}

   		else if(document.getElementById(1).value=='X' && document.getElementById(4).value=='X' && document.getElementById(7).value=='X')
   		{
        document.getElementById(1).style.borderColor = "#4dff4d";
        document.getElementById(4).style.borderColor = "#4dff4d";
        document.getElementById(7).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 1 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
      setTimeout(function() 
        {
       window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
       document.location.reload(); //is used to reload the page if any player is win or draw
         }, delayInMilliseconds);
   		}

   		else if(document.getElementById(2).value=='X' && document.getElementById(5).value=='X' && document.getElementById(8).value=='X')
   		{
        document.getElementById(2).style.borderColor = "#4dff4d";
        document.getElementById(5).style.borderColor = "#4dff4d";
        document.getElementById(8).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 1 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
        setTimeout(function() 
        {
       window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
       document.location.reload(); //is used to reload the page if any player is win or draw
         }, delayInMilliseconds);
   		}

   		else if(document.getElementById(3).value=='X' && document.getElementById(6).value=='X' && document.getElementById(9).value=='X')
   		{
        document.getElementById(3).style.borderColor = "#4dff4d";
        document.getElementById(6).style.borderColor = "#4dff4d";
        document.getElementById(9).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 1 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
       setTimeout(function() 
        {
       window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
       document.location.reload(); //is used to reload the page if any player is win or draw
         }, delayInMilliseconds);
   		}

   		else if(document.getElementById(1).value=='X' && document.getElementById(5).value=='X' && document.getElementById(9).value=='X')
   		{
        document.getElementById(1).style.borderColor = "#4dff4d";
        document.getElementById(5).style.borderColor = "#4dff4d";
        document.getElementById(9).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 1 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
      setTimeout(function() 
        {
       window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
       document.location.reload(); //is used to reload the page if any player is win or draw
         }, delayInMilliseconds);
   		}
   		else if(document.getElementById(3).value=='X' && document.getElementById(5).value=='X' && document.getElementById(7).value=='X')
   		{
        document.getElementById(3).style.borderColor = "#4dff4d";
        document.getElementById(5).style.borderColor = "#4dff4d";
        document.getElementById(7).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 1 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
      setTimeout(function() 
        {
       window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
       document.location.reload(); //is used to reload the page if any player is win or draw
         }, delayInMilliseconds);
   		}
   		else
        //if non of the above condition is satisfies,draw incriment by one
   			draw++;
   		console.log(draw);//to see the value of draw in console
   		}


   		//checking for second user is winning 
   		 if(count%2==0)
   		{
        //Checking different rows and colunm for the combination of 'O' 'O' 'O'
   		if(document.getElementById(1).value=='O' && document.getElementById(2).value=='O' && document.getElementById(3).value=='O')
   		{
        document.getElementById(1).style.borderColor = "#4dff4d";
        document.getElementById(2).style.borderColor = "#4dff4d";
        document.getElementById(3).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 2 Won";//set result in division player
        document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
        setTimeout(function() 
        {
   		window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
   		document.location.reload();//is used to reload the page if any player is win or draw
      }, delayInMilliseconds);
   		}
   		else if(document.getElementById(4).value=='O' && document.getElementById(5).value=='O' && document.getElementById(6).value=='O')
   		{
        document.getElementById(4).style.borderColor = "#4dff4d";
        document.getElementById(5).style.borderColor = "#4dff4d";
        document.getElementById(6).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 2 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
       setTimeout(function() 
        {
      window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
      document.location.reload();//is used to reload the page if any player is win or draw
      }, delayInMilliseconds);
   		}
   		else if(document.getElementById(7).value=='O' && document.getElementById(8).value=='O' && document.getElementById(9).value=='O')
   		{
        document.getElementById(7).style.borderColor = "#4dff4d";
        document.getElementById(8).style.borderColor = "#4dff4d";
        document.getElementById(9).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 2 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
       setTimeout(function() 
        {
      window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
      document.location.reload();//is used to reload the page if any player is win or draw
      }, delayInMilliseconds);
   		}
   		else if(document.getElementById(1).value=='O' && document.getElementById(4).value=='O' && document.getElementById(7).value=='O')
   		{
        document.getElementById(1).style.borderColor = "#4dff4d";
        document.getElementById(4).style.borderColor = "#4dff4d";
        document.getElementById(7).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 2 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
       setTimeout(function() 
        {
      window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
      document.location.reload();//is used to reload the page if any player is win or draw
      }, delayInMilliseconds);
   		}
   		else if(document.getElementById(2).value=='O' && document.getElementById(5).value=='O' && document.getElementById(8).value=='O')
   		{
        document.getElementById(2).style.borderColor = "#4dff4d";
        document.getElementById(5).style.borderColor = "#4dff4d";
        document.getElementById(8).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 2 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
       setTimeout(function() 
        {
      window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
      document.location.reload();//is used to reload the page if any player is win or draw
      }, delayInMilliseconds);
   		}
   		else if(document.getElementById(3).value=='O' && document.getElementById(6).value=='O' && document.getElementById(9).value=='O')
   		{
        document.getElementById(3).style.borderColor = "#4dff4d";
        document.getElementById(6).style.borderColor = "#4dff4d";
        document.getElementById(9).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 2 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
       setTimeout(function() 
        {
      window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
      document.location.reload();//is used to reload the page if any player is win or draw
      }, delayInMilliseconds);
   		}
   		else if(document.getElementById(1).value=='O' && document.getElementById(5).value=='O' && document.getElementById(9).value=='O')
   		{
        document.getElementById(1).style.borderColor = "#4dff4d";
        document.getElementById(5).style.borderColor = "#4dff4d";
        document.getElementById(9).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 2 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
       setTimeout(function() 
        {
      window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
      document.location.reload();//is used to reload the page if any player is win or draw
      }, delayInMilliseconds);
   		}
   		else if(document.getElementById(3).value=='O' && document.getElementById(5).value=='O' && document.getElementById(7).value=='O')
   		{
        document.getElementById(3).style.borderColor = "#4dff4d";
        document.getElementById(5).style.borderColor = "#4dff4d";
        document.getElementById(7).style.borderColor = "#4dff4d";
        document.getElementById('player').innerHTML = "Player 2 Won";//set result in division player
   		  document.getElementById('paperside1').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
        document.getElementById('paperside2').innerHTML = "<img src=\"source.gif\" width=\"200px\" height=\"500px\">";
       setTimeout(function() 
        {
      window.alert("If you want to restart the game click OK");//if the condition is satisfies alert box is initialized
      document.location.reload();//is used to reload the page if any player is win or draw
      }, delayInMilliseconds);
   		}
   		else
   			draw++;//if non of the above condition is satisfies,draw incriment by one
   		console.log(draw);
   		}
      //if above conditions are not satisfies check for all buttons are pressed or not 
   		if(draw==9)
      {
        //if game is drawn all the buttons border changes to red
        document.getElementById(1).style.borderColor = "#ff4d4d";
        document.getElementById(2).style.borderColor = "#ff4d4d";
        document.getElementById(3).style.borderColor = "#ff4d4d";
        document.getElementById(4).style.borderColor = "#ff4d4d";
        document.getElementById(5).style.borderColor = "#ff4d4d";
        document.getElementById(6).style.borderColor = "#ff4d4d";
        document.getElementById(7).style.borderColor = "#ff4d4d";
        document.getElementById(8).style.borderColor = "#ff4d4d";
        document.getElementById(9).style.borderColor = "#ff4d4d";
        document.getElementById('player').innerHTML = "Game is Draw!!";//set result in division player
        setTimeout(function() 
        {
   			window.alert("If you want to restart the game click OK");//print game is draw in alert box
   			document.location.reload();//reload the page for play again
        }, delayInMilliseconds);
   		}
   		
   	}
    // tic tac toe javascript file ends