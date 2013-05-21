/*globals ko Revealing Module Pattern*/

function UserViewModel() {

  template = "loginView",
  username = ko.observable(""),
  password = ko.observable(""),
    isEnable = ko.computed(function(){
      
        return (this.username().length > 0 && this.password().length > 0);
    },this),
    onLoginSubmit = function(){
        
        if(isEnable()) {
        
            toDoViewModel.user(username());
            
             $.mobile.changePage("#" + toDoViewModel.template);
        }
        else{
            
         //   $("#dialog").popup();
        }
        
        
    };
    
    return {
        
        template : template,
        username : username,
        password : password,
        isEnable : isEnable,
        onLoginSubmit : onLoginSubmit
        
    };
  
}

//$('#loginBtn').click(function(e){
//     e.preventDefault();
//    toDoViewModel.user(username);
        
//         $.mobile.changePage("#" + toDoViewModel.template);
//});