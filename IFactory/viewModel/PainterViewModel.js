function PainterModel(modelObject) {
    
    painterId = modelObject.painterId,
    painterName = modelObject.painterName,
    resourceId =  modelObject.resourceId;
  
  
    return {
        resourceId : resourceId,
        painterName : painterName,
        painterId : painterId       
        
    };
  
}

function PainterViewModel(objectName){
    
    modelName = objectName,
    painterList = ko.observableArray(),
    
    addPainter = function(item){
        
        var painterModel = PainterModel(item);
        painterList.push(painterModel);
        
    },
    getPainter = function(id){
         
        var result = $.grep(painterList, function (e) {
                        return e.painterId === id;
                    });
        return result;
    },
    changePainter = function(id,property,Details){
        
        
         $.grep(painterLinesList, function (e) {
                        if(e.painterId === id) {
                             e[prop] = Details;
                         }
                    });
        
        //app.UpdateTodo("","","");
    },
    
    removePainter = function(id){
        
        painterList.remove(function(item) { return item.painterId == id });
        
         
    };
    
    return {
        modelName : modelName,
        painterList : painterList,
        addPainter : addPainter,
        removePainter : removePainter,
        getPainter : getPainter,
        changePainter : changePainter
    }
    
}