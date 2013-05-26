// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

$(document).bind("mobileinit", function() {
  $("div:jqmData(role='page')").live('pageinit', function() {
     $("*[data-icontext]").each(function() {
        var e = $(this).find('.ui-icon'); //span with the ui-icon style
        var v = $(this).attr('data-icontext');
        e.text(v);
     });
  });
});


ko.virtualElements.allowedBindings.updateListviewOnChange = true;
ko.bindingHandlers.updateListviewOnChange = {
  update: function (element, valueAccessor) {
    ko.utils.unwrapObservable(valueAccessor());  //grab dependency

    var listview = $(element).parents()
                             .andSelf()
                             .filter("[data-role='listview']");

    if (listview) {
      try {
        $(listview).listview('refresh');
      } catch (e) {
        // if the listview is not initialised, the above call with throw an exception
        // there doe snot appear to be any way to easily test for this state, so
        // we just swallow the exception here.
      }
    }
  }
};

var lineTems = [
 {id : 0, itemName: "PT110A", totalResources : 5, availableResources: 3 },
 {id : 0, itemName: "PT110B", totalResources : 5, availableResources: 5 },
 {id : 0, itemName: "PT110C", totalResources : 4, availableResources: 2 },
 {id : 0, itemName: "PT110D", totalResources : 3, availableResources: 1 }
           
];

// create the various view models
var userViewModel = UserViewModel(),
toDoViewModel = ToDoViewModel(),
linesViewModel = LinesViewModel(),
lineItemViewModel = LineItemViewModel(); 
//lineItemViewModel = LineItemViewModel();

//lineSelectionViewModel = LineSelectionViewModel();



$.mobile.defaultPageTransition = "slide";


// PhoneGap is ready
function onDeviceReady() {
    ko.applyBindings(userViewModel, document.getElementById("loginView"));
    ko.applyBindings(toDoViewModel, document.getElementById("todoPage"));
     ko.applyBindings(linesViewModel, document.getElementById("lineselectionpage"));
     ko.applyBindings(lineItemViewModel, document.getElementById("LineItemPageView"));
    
    /* ko.applyBindings(lineSelectionViewModel, document.getElementById("lineselectionpage"));
     ko.applyBindings(linesViewModel, document.getElementById("LineView"));*/
   
   navigator.splashscreen.hide();
    
  // afterInitialize();    
}

function afterInitialize(){
    
       var allLinesArray = [];
    $.each(lineTems, function(index, value) {
     
        this['lineItem' + index] = new LineItemViewModel();
        
        this['lineItem' + index].id(value.id);
        
        this['lineItem' + index].itemName(value.itemName);
        
         this['lineItem' + index].totalResources(value.totalResources);
         this['lineItem' + index].availableResources(value.availableResources);
        
        
         allLinesArray.push(Object.create(this['lineItem' + index]));
});
    
    
    
   
   linesViewModel.totalLineItems(allLinesArray);
}



