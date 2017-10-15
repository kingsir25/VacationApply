(
function(){

var myvacation ={}

  myvacation.putVacation = function(id,vacationData){

 var result =0;

 for(var i=0;i<7*6;i++){
  if (vacationData[i] !=""){
    vacationData[i].replace("{","{\"id\":\"" + id + "\",\"team\":\"mf1\",")
  }
}
//data_param = vacationData;
data_param = {[
               {"id":"jake.jian.wang","team":"mf1","workdate":20171001,"type":"V","hours":8},
               {"id":"jake.jian.wang","team":"mf1","workdate":20171007,"type":"S","hours":8},
               {"id":"jake.jian.wang","team":"mf1","workdate":20171015,"type":"F","hours":4},
               {"id":"jake.jian.wang","team":"mf1","workdate":20171022,"type":"V","hours":8},
               {"id":"jake.jian.wang","team":"mf1","workdate":20171026,"type":"O","hours":7}
              ]};

        $.ajax({
            url: "http://10.1.251.111:8080/ora/db/query",
            type: "POST",
            data:JSON.stringify(data_param),
            headers: {
                "Content-Type": "application/json"
            },
            contentType: 'text/html; charset=UTF-8',
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (data) {
                alert("JSON Data ID: " + data.id);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                result = -1
                alert("status=" + XMLHttpRequest.status);
                alert("readyState=" + XMLHttpRequest.readyState);
                alert("textStatus=" + textStatus);
            },
            complete: function (XMLHttpRequest, textStatus) {
              result = 1
            }
        });

    return result;
 } 

window.myvacation = myvacation;

}
)();