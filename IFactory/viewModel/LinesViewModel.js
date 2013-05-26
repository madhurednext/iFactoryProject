/*globals ko Revealing Module Pattern*/

function LinesViewModel() {

  template = "LineView",
  

  totalLineItems = ko.observable("");
    
    
  
    return {
        
        template : template,
        totalLineItems : totalLineItems
         
        
    };
  
}