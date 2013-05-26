/*globals ko Revealing Module Pattern*/


function LineModel(modelObject) {
    
    lineId = ko.observable(modelObject.lineId),
    lineName = ko.observable(modelObject.lineName),
    anyPending = ko.observable(modelObject.anyPending),
    anyItemsPending = ko.computed(function(){
     return   (anyPending() === true ) ? 'red' : 'green';
    },this),
    paintLineList = ko.observable(modelObject.paintLineList);
    return {
        lineId : lineId,
        lineName : lineName,
        anyPending : anyPending,
        anyItemsPending : anyItemsPending,
        paintLineList : paintLineList
        
        
    };
  
}



function LinesViewModel() {

  template = "LineView",
  

  totalLineItems = ko.observable(""),
    selectedLineItem = null,
    onLineClick = function(item){
        
        selectedLineItem = item;
        
        //item.lineName() is Paint or Transmission
       if(item.lineId() == "Line1"){
         
           var paintLineArray = [];
           var paintLineList =   mockData.GetPaintLines.Data.PaintLineList;
           $.each(paintLineList, function(index, value) {
               paintLineArray.push(PaintLineItemModel(value));
            });
           lineItemViewModel.title("Paint Line");
           lineItemViewModel.currentTemplate('PaintLineItemDisplayTemplate');
           lineItemViewModel.currentListItems(paintLineArray);
           $.mobile.changePage("#" + "LineItemPageView");
           
           $("#LineItemPageView").trigger("create");
         // refreshPage("#LineItemPageView");
       } else if(item.lineId() == "Line2"){
           
           
           var transmissionLineArray = [];
           var transmissionLineList =    mockData.GetTransmissionLines.Data.TransmissionLineList ;
           $.each(transmissionLineList, function(index, value) {
               transmissionLineArray.push(TransmissionLineItemModel(value));
            });
           lineItemViewModel.title("Transmission Line");
           lineItemViewModel.currentTemplate('TransmissionLineItemDisplayTemplate');
           lineItemViewModel.currentListItems(transmissionLineArray);
           $.mobile.changePage("#" + "LineItemPageView");
           
           
           $("#LineItemPageView").trigger("create");
         // refreshPage("#LineItemPageView");
       }
        
    };
    
    
  
    return {
        
        template : template,
        totalLineItems : totalLineItems,
        onLineClick  : onLineClick,         
        selectedLineItem : selectedLineItem
    };
  
}





      /* "LineList" : [
    
    {lineId : 'Line1', lineName: 'Paint', anyPending: true, paintLineList : ['PaintLine1', 'PaintLine2', 'PaintLine3','PaintLine4']},
    {lineId : 'Line2', lineName : 'Transmission', anyPending: false, paintLineList : ['PaintLine1', 'PaintLine2']},
	{lineId : 'Line3', lineName : 'Engine', anyPending: false, paintLineList : ['PaintLine1', 'PaintLine2']},
	{lineId : 'Line4', lineName : 'Chasis', anyPending: false, paintLineList : ['PaintLine1', 'PaintLine2']}*/