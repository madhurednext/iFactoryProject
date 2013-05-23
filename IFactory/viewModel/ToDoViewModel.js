/*globals ko Revealing Module Pattern*/

function ToDoViewModel() {

  template = "todoPage",
  user =  ko.observable(""),
    show = true,
  onSettingsClick = function(){
       if(show) {
              $( "#mypanel" ).panel( "open");
             show =false;
       
           }else{
                
                $( "#mypanel" ).panel( "close" );
                 show = true;
               }
      };
    
    return {
        
        template : template,
        user : user,
        onSettingsClick : onSettingsClick          
        
    };
  
}