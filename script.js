      function solve(){
        var y = document.getElementById('input').value;
        var z = eval(18 - y)
        if(z > 0){
          document.getElementById('output').innerHTML = "Sorry, you are too young to vote, come back in " + z + " years"
        }
        else{
          document.getElementById('output').innerHTML = "You are old enough to vote! "
        }
      }
