(
function(){

var myvacation ={}


  myvacation.getVacation = function(id,calendar){
  
  var ret = [];

  var  obj = {"id":"jake.jian.wang","bigindate":"20170901","Vacation":[
               {"workdate":20171001,"type":"V","hours":8},{"workdate":20171007,"type":"S","hours":8},
               {"workdate":20171015,"type":"F","hours":4},{"workdate":20171022,"type":"V","hours":8},
               {"workdate":20171026,"type":"O","hours":7}
               ]
             };

//sql = select workdate，type from workschedule where id = ?1 and workdate >= ?2 and workdate >= ?2 + 42天 orderby workdate desc
//$.getJSON("http://10.1.251.111:8080/ora/db/query?sql=" + sql, function (data) {  obj.Vacation = data  });

       	for(var i=0;i<7*6;i++){
           var vacRecArray =[];
     		    $.each(obj.Vacation, function(j, item){
              console.log('>' + calendar[i])
              if (calendar[i]==item.workdate){
               //所有当天休假记录保留
                 vacRecArray.push(JSON.stringify(item)) ; 
               } 
            })
           ret[i] = vacRecArray;
        }

    return ret;
 } 

window.myvacation = myvacation;

}
)();