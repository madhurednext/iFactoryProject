function PaintLinesModel(modelObject) {
    
    paintLineId = modelObject.paintLineId,
    paintLineName = modelObject.paintLineName,
    taskTime =  modelObject.taskTime,
    scheduling = modelObject.scheduling,
    stage = modelObject.stage,
    efficiency = modelObject.efficiency,
    workOrders = modelObject.workOrders,
    QNotes = modelObject.QNotes,
    painters = modelObject.painters;
  
  
    return {
        paintLineId : paintLineId,
        paintLineName : paintLineName,
        taskTime : taskTime,
        scheduling : scheduling,
             stage : stage,
        efficiency : efficiency,
        workOrders : workOrders,
        QNotes : QNotes,
        painters : painters
        
    };
  
}

function PainterLinesViewModel(objectName){
    
     modelName = objectName,
    
     painterLinesList = ko.observableArray(),
    
    addPainLine = function(item){
        
        var paintLinesModel = PaintLinesModel(item);
        painterLinesList.push(paintLinesModel);
        
    },
    getPaintLine = function(id){
         
        var result = $.grep(painterLinesList, function (e) {
                        return e.paintLineId === id;
                    });
        return result;
    },
    
    changeLineItem = function(id,property,Details){
        
        
         $.grep(painterLinesList, function (e) {
                        if(e.paintLineId === id) {
                             e[prop] = Details;
                         }
                    });
        
    },
    
    removePaintLine = function(id){
        
        painterLinesList.remove(function(item) { return item.paintLineId == id });
        
         
    };
    
    return {
        modelName : modelName,
        painterLinesList : painterLinesList,
        addPainLine : addPainLine,
        removePaintLine : removePaintLine,
        getPaintLine : getPaintLine,
        changeLineItem : changeLineItem
    }
    
}