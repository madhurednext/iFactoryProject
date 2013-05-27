/*globals ko Revealing Module Pattern*/


function ToDoModel(modelObject) {
    
    todoId = modelObject.todoId,
    todoName = modelObject.todoName,
    dependingItemLineId =  modelObject.dependingItemLineId,
    dependingListItemId = modelObject.dependingListItemId,
    enabled =  modelObject.enabled;
   
  
    return {
        todoId : todoId,
        todoName : todoName,
        dependingItemLineId : dependingItemLineId,
        dependingListItemId : dependingListItemId,
        enabled : enabled
        
        
    };
  
}




function ToDoViewModel() {

  template = "todoPage",
  user =  ko.observable(""),
  userToDoList= ko.observable(),
  onUserToDoChange = ko.computed(function(){
      
      return userToDoList();
      
  },this);
    show = true,
    onToDoLineClick = function(){
        
         var lineItemsArray= [];
            var lineItemServiceResultArray =  mockData.GetUserLines.Data.LineList ;
 //mockData.GetUserToDoList.Data.ToDoList;
            
            $.each(lineItemServiceResultArray, function(index, value) {
               lineItemsArray.push(LineModel(value));
            });
            
                  
        linesViewModel.totalLineItems(lineItemsArray);
       $.mobile.changePage("#" + "lineselectionpage");
         $("#lineselectionpage").trigger("create");
    },
  onSettingsClick = function(){
       if(show) {
              $( "#mypanel" ).panel( "open");
             show =false;
       
           }else{
                
                $( "#mypanel" ).panel( "close" );
                 show = true;
               }
      },
    
  
    addToDo = function(item){
        
        
       // var toDoModel = ToDoModel(item);
        
        
        //userToDoList.push(toDoModel);
    },
    
    updateToDoList = function(arrayToDo){
        
        userToDoList(arrayToDo);
        
    },
    
    getToDo = function(id){
         
        var result = $.grep(userToDoList, function (e) {
                        return e.todoId === id;
                    });
        return result;
    },
     changeToDo = function(id,property,Details){
        
        
         $.grep(userToDoList, function (e) {
                        if(e.todoId === id) {
                             e[prop] = Details;
                         }
                    });
        
    },
    
    removeToDo = function(id){
        
       // userToDoList.remove(function(item) { return item.todoId == id });
        
         
    };
    
   
    
    return {
        
        template : template,
        user : user,
        onToDoLineClick : onToDoLineClick,
        onSettingsClick : onSettingsClick,
        userToDoList : userToDoList,
        onUserToDoChange : onUserToDoChange,
        updateToDoList : updateToDoList,
        addToDo : addToDo,
        getToDo : getToDo,
        changeToDo : changeToDo,
        removeToDo : removeToDo
        
    };
  
}