 

 let  body =  document.querySelector('body');

 let ClickGenerator = document.getElementById('ClickGenerator')




 ClickGenerator.onclick = function(event){
    let LenghtPassword = document.getElementById('LenghtPassword');
    let NumbersPassword = document.getElementById('NumbersPassword');
    LenghtPassword = LenghtPassword.value;
    NumbersPassword = NumbersPassword.value;
    function RandomPassword (lenght, cheset){
        let password = '';
    
        for(let i = 0; i < lenght; i++){
    
            password += cheset[Math.floor(Math.random() * cheset.length)];
        }
       
        return ' ' + password + '   ';
    }
    
    
    
    
     function forLength(numbers){
         for(let i = 0; i < numbers; i++){
             body.append('<p> ' + RandomPassword(LenghtPassword, '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM<>?@:}{[]~#!"£$%^&**()_-+') + ' <p/>');

            // body.innerHTML =  RandomPassword(LenghtPassword, '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM<>?@:}{[]~#!"£$%^&**()_-+')
         }
     }
     forLength(NumbersPassword);

     console.log(event++);
 }