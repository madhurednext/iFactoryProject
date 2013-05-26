function ResourceModel(modelObject) {
    
    resourceId = modelObject.resourceId,
    firstName = modelObject.firstName,
    lastName =  modelObject.lastName,
    certifications = modelObject.certifications,
    vacationdetails =  modelObject.vacationdetails,
    clockintime = modelObject.clockintime,
    email = modelObject.email,
    status =modelObject.status;
  
    return {
        resourceId : resourceId,
        firstName : firstName,
        lastName : lastName,
        certifications : certifications,
        vacationdetails : vacationdetails,
        clockintime : clockintime,
        email : email,
        status : status
        
        
    };
  
}


function ResourceViewModel(objectName){
    
    modelName : objectName,
    
    resourceList = ko.observableArray(),
    
    addResource = function(item){
        
        var resourceModel = ResourceModel(item);
        resourceList.push(resourceModel);
        
    },
    getResource = function(id){
         
        var result = $.grep(resourceList, function (e) {
                        return e.resourceId === id;
                    });
        return result;
    },
    
    changeResource = function(id,property,Details){
        
        
         $.grep(resourceList, function (e) {
                        if(e.resourceId === id) {
                             e[prop] = Details;
                         }
                    });
        
    },
    
    
    removeResource = function(id){
        
        resourceList.remove(function(item) { return item.resourceId == id });
        
         
    };
    
    return {
        modelName : modelName,
        resourceList : resourceList,
        addResource : addResource,
        removeResource : removeResource,
        getResource : getResource,
        changeResource : changeResource
    }
    
}



