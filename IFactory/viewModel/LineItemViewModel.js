/*globals ko Revealing Module Pattern*/

function PaintLineItemModel(modelObject) {
    
    paintLineId = ko.observable(modelObject.paintLineId),
    paintLineName = ko.observable(modelObject.paintLineName),
    taskTime = ko.observable(modelObject.taskTime),
    scheduling = ko.observable(modelObject.scheduling),
    stage = ko.observable(modelObject.stage),
    efficiency = ko.observable(modelObject.efficiency),
    workOrders = ko.observable(modelObject.workOrders),
    QNotes = ko.observable(modelObject.QNotes),
    painters = ko.observable(modelObject.painters),
    requireStaff=  ko.observable(modelObject.requireStaff),
    availableResources = ko.computed(function(){
     return   painters().length;
    },this),
    
    
     imageInside = ko.computed(function(){
          
          
       var greenItem = "<img src='images/PersonGreen.png' border='0' />"  ;
       var redItem = "<img src='images/PersonRed.png' border='0' />"  ;
       
       var innerHtml = "";
       
    
          
         innerHtml += paintLineName();
          
          innerHtml += "&nbsp;"
      
       for (var i = 0, j = availableResources(); i < j; i += 1) {  
                   
          innerHtml += greenItem
          // app.iconArray.push(greenItem);
           
       }  
        
            
        
         for (var k = 0, l = (requireStaff() - availableResources()) ; k < l; k += 1) {  
                         
         //  app.iconArray.push(redItem);
              innerHtml += redItem
          
       }  
        
        return  innerHtml;
          
       
      
   },this);
    
    return {
        paintLineId : paintLineId,
        paintLineName : paintLineName,
        taskTime : taskTime,
        scheduling : scheduling,
        stage : stage,
        efficiency : efficiency,
        workOrders : workOrders,
        QNotes : QNotes,
        painters : painters,
        requireStaff : requireStaff,
        availableResources : availableResources,
        imageInside : imageInside
        
        
    };
  
}




function TransmissionLineItemModel(modelObject) {
    
    TransmissionLineId = ko.observable(modelObject.TransmissionLineId),
    TransmissionLineName = ko.observable(modelObject.TransmissionLineName),
    taskTime = ko.observable(modelObject.taskTime),
    material = ko.observable(modelObject.material);
   
    
    return {
        TransmissionLineId : TransmissionLineId,
        TransmissionLineName : TransmissionLineName,
        taskTime : taskTime,
        material : material
        
    };
  
}



function LineItemViewModel() {

    templateName = '',
    title = ko.observable(''),
    currentTemplate = ko.observable('PaintLineItemDisplayTemplate'),
    onPaintItemDisplayClick = function(selectedItem){
        
         
      lineItemDisplayViewModel.title("Paint Line Details ");
       lineItemDisplayViewModel.lineDetailHeading(selectedItem.paintLineName());
         lineItemDisplayViewModel.currentDetailsTemplate('PaintLineItemDetailsDisplayTemplate'); 
        lineItemDisplayViewModel.currentListDetailItems(selectedItem);
        
       $.mobile.changePage("#LineItemDetailsPageView");
           $("#LineItemDetailsPageView").trigger("create");
        
    },
    currentListItems = ko.observable('');
    
    
    return {
        templateName : templateName,
        title : title,
        currentTemplate : currentTemplate,
        onPaintItemDisplayClick  : onPaintItemDisplayClick,
        currentListItems : currentListItems
    }
    
 
}


function LineItemDisplayViewModel(){
     templateName = '',
    title = ko.observable(''),
    lineDetailHeading = ko.observable(''),
    currentDetailsTemplate = ko.observable('PaintLineItemDetailsDisplayTemplate'),
   
    currentListDetailItems = ko.observable('');
    
    
    return {
        templateName : templateName,
        title : title,
        lineDetailHeading : lineDetailHeading,
        currentListDetailItems : currentListDetailItems,
        currentDetailsTemplate : currentDetailsTemplate
    }
    
}