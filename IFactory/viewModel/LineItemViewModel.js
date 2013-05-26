/*globals ko Revealing Module Pattern*/

function LineItemViewModel() {

  id = ko.observable(0),
  itemName = ko.observable("PT110A"),
  url = ko.computed(function(){
      
      return "#LineItem" + id(); 
  },this),
  
  totalResources = ko.observable(2),
  availableResources = ko.observable(1),
    
   
      imageInside = ko.computed(function(){
          
          
       var greenItem = "<img src='images/PersonGreen.png' border='0' />"  ;
       var redItem = "<img src='images/PersonRed.png' border='0' />"  ;
       
       var innerHtml = "";
       
    
          
         innerHtml += itemName();
          
          innerHtml += "&nbsp;"
      
       for (var i = 0, j = availableResources(); i < j; i += 1) {  
                   
          innerHtml += greenItem
          // app.iconArray.push(greenItem);
           
       }  
        
            
        
         for (var k = 0, l = (totalResources() - availableResources()) ; k < l; k += 1) {  
                         
         //  app.iconArray.push(redItem);
              innerHtml += redItem
          
       }  
        
        return  innerHtml;
          
       
      
   },this);
   
        
  
    return {
        
        id : id,
        itemName : itemName,
        url : url,
        totalResources : totalResources,
        availableResources : availableResources,
        imageInside : imageInside
         
        
    };
  
}