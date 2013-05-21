/*globals ko Revealing Module Pattern*/

function ToDoViewModel() {

  template = "todoPage",
  user =  ko.observable("");
  
    
    return {
        
        template : template,
        user : user,
                
        
    };
  
}