

mockData = {};  

mockData.GetResources =  { "Data": {
        "resourceList": 
            [
                {resourceId: 'Resource0',firstName : 'Vamsi' ,lastName : 'Krishna' ,certifications : 'SAP ABAP',
                    vacationdetails : 'Vacations',
                     clockintime : '9PM',    email : 'vamsikrishna@johndeere.com', status : 'staffed' },
            
             {resourceId: 'Resource1',firstName : 'Andrew'  ,lastName : 'Everett' , certifications : 'SAP ABAP1',
                    vacationdetails : 'Vacations',
                     clockintime : '9PM',    email : 'andreweverett@johndeere.com', status : 'NotStaffed' },
            
             {resourceId : 'Resource2',firstName : 'Craig' ,lastName : 'Sutton' ,certifications : 'SAP ABAP1',
                    vacationdetails : 'Vacations',
                     clockintime : '09AM',    email : 'craigsutton@johndeere.com', status : 'NotStaffed' },
            
             {resourceId: 'Resource3',firstName : 'Damnick' ,lastName : 'Susairaj' ,certifications : 'SAP ABAP1',
                    vacationdetails : 'N/A',
                     clockintime : '03PM',    email : 'damnicksusairaj@johndeere.com', status : 'NotStaffed' },
            
             {resourceId: 'Resource4',firstName : 'Austin' ,lastName : 'Prabhu' ,certifications : 'SAP ABAP1',
                    vacationdetails : 'N/A',
                     clockintime : '6PM',    email : 'austinprabhu@johndeere.com', status : 'NotStaffed' }
            
            ]
    
    }
};


mockData.GetPainterList = { "Data": {
        "painterList": 
            [
                {painterId: 'Painter11', painterName : 'painter11' , resourceId : null },
               {painterId: 'Painter12', painterName : 'painter12' , resourceId : 'Resource1' },
                {painterId: 'Painter13', painterName : 'painter13' , resourceId : 'Resource2' },
                {painterId: 'Painter14', painterName : 'painter14' , resourceId : 'Resource3' },
                 {painterId: 'Painter15', painterName : 'painter15' , resourceId : 'Resource4' }
            
            
            ]
    
    }
};


mockData.GetPaintLines = { "Data": {
        "PaintLineList": 
            [
                {paintLineId: 'PaintLine1', paintLineName : 'PT110A', taskTime: '10 mins', 
                  scheduling: 'Scheduling for PT110A', stage: '[Stage 1, Stage2]', efficiency: '100 % Efficient in PT110A',
                    workOrders : 'Work Order 1 for PT110A', QNotes : 'Sample QNotes for PT110A',
                   painters: ['Painter11','Painter14'], requireStaff : 4 },
    
               {paintLineId: 'PaintLine2', paintLineName : 'PT110B', taskTime: '6 mins', 
                  scheduling: 'Scheduling for PT110B', stage: 'Stage 1, Stage2]', efficiency: '100 % Efficient in PT110B',
                    workOrders : 'Work Order 1 for PT110B', QNotes : 'Sample QNotes for PT110B',
                   painters: ['Painter12','Painter13'] , requireStaff : 2 },
    
    
                 {paintLineId: 'PaintLine3', paintLineName : 'PT110C', taskTime: '21 mins', 
                  scheduling: 'Scheduling for PT110C', stage: 'Stage 1, Stage2]', efficiency: '100 % Efficient in PT110C',
                    workOrders : 'Work Order 1 for PT110C', QNotes : 'Sample QNotes for PT110C',
                   painters: ['Painter11','Painter15'], requireStaff : 2 },
    
                 {paintLineId: 'PaintLine4', paintLineName : 'PT110D', taskTime: '12 mins', 
                  scheduling: 'Scheduling for PT110D', stage: 'Stage 1, Stage2]', efficiency: '100 % Efficient in PT110D',
                    workOrders : 'Work Order 1 for PT110D', QNotes : 'Sample QNotes for PT110D',
                   painters: ['Painter11','Painter12'], requireStaff : 2 }
    
                             
            ]
    
    }
};


mockData.GetTransmissionLines = { "Data": {
        "TransmissionLineList": 
            [
                {TransmissionLineId: 'TransmissionLine1', TransmissionLineName : 'TM110A', taskTime: '10 mins', 
                   material: '90%',
				   
				 },
				 
				 {TransmissionLineId: 'TransmissionLine2', TransmissionLineName : 'TM110B', taskTime: '20 mins', 
                   material: '100%',
				   
				 },
				 
				 {TransmissionLineId: 'TransmissionLine3', TransmissionLineName : 'TM110C', taskTime: '11 mins', 
                   material: '100%',
				   
				 },
				 
				 {TransmissionLineId: 'TransmissionLine4', TransmissionLineName : 'TM110D', taskTime: '16 mins', 
                   material: '100%',
				   
				 },
				 
    
               
    
                             
            ]
    
    }
};



mockData.GetUserToDoList =  { "Data": {
         "ToDoList" : 
          [
              { todoId: 'todo1', todoName: 'Insufficient staffing at PT110D', dependingItemLineId: 'Line1', dependingListItemId: 'PaintLine4' ,enabled : false},
              { todoId: 'todo1', todoName: 'Too Many Quotest at PT110A', dependingItemLineId: 'Line1', dependingListItemId: 'PaintLine1' ,enabled : true},
              { todoId: 'todo1', todoName: 'Material shortage at Transmission Line TM110A', dependingItemLineId: 'Line2', dependingListItemId: 'TM110A' ,enabled : false},
              { todoId: 'todo1', todoName: 'Poor Efficiency at Engine Line', dependingItemLineId: 'Line3', dependingListItemId: '' ,enabled : false},
              { todoId: 'todo1', todoName: 'Voice Memo: Check clock in Time', dependingItemLineId: 'Line4', dependingListItemId: '' ,enabled : false},
              { todoId: 'todo1', todoName: 'New CIPP Report Ready', dependingItemLineId: 'Line5', dependingListItemId: '' ,enabled : false}
        
          ]
    
      }
};



  

mockData.GetUserLines =  { "Data" : {
    
       "LineList" : [
    
    {lineId : 'Line1', lineName: 'Paint', anyPending: true, paintLineList : ['PaintLine1', 'PaintLine2', 'PaintLine3','PaintLine4']},
    {lineId : 'Line2', lineName : 'Transmission', anyPending: false, paintLineList : ['PaintLine1', 'PaintLine2']},
	{lineId : 'Line3', lineName : 'Engine', anyPending: false, paintLineList : ['PaintLine1', 'PaintLine2']},
	{lineId : 'Line4', lineName : 'Chasis', anyPending: false, paintLineList : ['PaintLine1', 'PaintLine2']}
    
    
           
       ]
    }
    
};

mockData.GetLineDetails = { "Data" : {
    
       "LineList" : [
    
     { lineDetailId : 'LineDetail1', lineId : 'Line1' , TaskTime: '22 min', Scheduling: 'Scheduling for Paint',
         Stage : 'Stage 1 for Paint',Efficiency :  '100 % Efficient in paint', 
     WorkOrders : 'Work Order 1 for Paint', QNotes: 'Sample QNotes for Paint' },
     
      { lineDetailId : 'LineDetail2', lineId : 'Line2' , TaskTime: '10 min', Scheduling: 'Scheduling for Transmission',
          Stage : 'Stage 1 for Transmission', Efficiency :  '100 % Efficient in Transmission', 
    WorkOrders : 'Work Order 1 for Transmission', QNotes: 'Sample QNotes for Transmission' }
    
    
           
       ]
    }
             };
        
    
    

mockData.getScheduleDetails = { "Data": {
        "scheduleList": 
            [
               {scheduleId : 'sch1', scheduleName : 'schedulinglineofday', scheduleDetails : [
                           { mesorder : '14002246541' ,
                             grandSequence: '42013051600400',
                              serialNumber : '1E0R450XTDD391169',
                               startDate : '5/16/2013',
                               orderMaterial : '6560E' }
                   
                 ] },
                   
               
                 {scheduleId : 'sch2', scheduleName : 'schedulingmachinescompleted', scheduleDetails : [
                                   { mesorder : '14002246541' ,
                                     grandSequence: '42013051600400',
                                      serialNumber : '1E0R450XTDD391169',
                                       startDate : '5/16/2013',
                                       orderMaterial : '6560E' },
                         
                                   { mesorder : '14002246542' ,
                                     grandSequence: '42013051600400',
                                      serialNumber : '1E0R450XTDD391169',
                                       startDate : '5/16/2013',
                                       orderMaterial : '6560E' }
                     
                     
                     ] },
    
    
    
                 {scheduleId : 'sch3', scheduleName : 'schedulinhineslinegmac', scheduleDetails : [
                                   
                                    { mesorder : '14002246541' ,
                                     grandSequence: '42013051600400',
                                      serialNumber : '1E0R450XTDD391169',
                                       startDate : '5/16/2013',
                                       orderMaterial : '6560E' },
                                   { mesorder : '14002246542' ,
                                             grandSequence: '42013051600400',
                                              serialNumber : '1E0R450XTDD391169',
                                               startDate : '5/16/2013',
                                               orderMaterial : '6560E' },
                                   { mesorder : '14002246542' ,
                                             grandSequence: '42013051600400',
                                              serialNumber : '1E0R450XTDD391169',
                                               startDate : '5/16/2013',
                                               orderMaterial : '6560E' }
         
         
         
                     ] },
    
    
                     {scheduleId : 'sch4', scheduleName : 'schedulingmachinesnotyetlaunched', scheduleDetails : [
                               
                             { mesorder : '14002246541' ,
                                 grandSequence: '42013051600400',
                                  serialNumber : '1E0R450XTDD391169',
                                   startDate : '5/16/2013',
                                   orderMaterial : '6560E' },
                             { mesorder : '14002246542' ,
                                 grandSequence: '42013051600400',
                                  serialNumber : '1E0R450XTDD391169',
                                   startDate : '5/16/2013',
                                   orderMaterial : '6560E' },
                              { mesorder : '14002246542' ,
                                         grandSequence: '42013051600400',
                                          serialNumber : '1E0R450XTDD391169',
                                           startDate : '5/16/2013',
                                           orderMaterial : '6560E' },
                              { mesorder : '14002246542' ,
                                         grandSequence: '42013051600400',
                                          serialNumber : '1E0R450XTDD391169',
                                           startDate : '5/16/2013',
                                           orderMaterial : '6560E' }
         
         
                         ] }
              
    
                             
            ]
    
    }
};





