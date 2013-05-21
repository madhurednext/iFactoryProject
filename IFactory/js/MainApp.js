// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);


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


// create the various view models
var userViewModel = UserViewModel(),
toDoViewModel = ToDoViewModel();

$.mobile.defaultPageTransition = "slide";


// PhoneGap is ready
function onDeviceReady() {
    ko.applyBindings(userViewModel, document.getElementById("loginView"));
    ko.applyBindings(toDoViewModel, document.getElementById("todoPage"));
   
   navigator.splashscreen.hide();
}

