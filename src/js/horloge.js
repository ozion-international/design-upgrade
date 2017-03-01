function UR_Start() 
{
  UR_Nu = new Date;

   diff = parseInt(document.getElementById("time_value").value,10);
 //  date_t = t_v.split(":"); 
  
  //int diff = document.getElementById("update_time").value;
  //UR_Nu.setTime(UR_Nu.getTime() - (diff*1000));
  UR_Nu.setTime(UR_Nu.getTime());

  UR_Indhold = showFilled(UR_Nu.getHours()) + ":" + showFilled(UR_Nu.getMinutes()) + ":" + showFilled(UR_Nu.getSeconds());

  //UR_Indhold = date_t[0] + ":" + date_t[1] + ":" + date_t[2];
  document.getElementById("ur").innerHTML = UR_Indhold;
  setTimeout("UR_Start()",1000);
}

//  function initialisation_date() {
//    d_t = document.getElementById("time_value").value;
//    date_t = d_t.split(":");
//
//    document.getElementById("ur").innerHTML = d_t;
//
//    setTimeout("increment_date();",1000);
//  }

//  function increment_date() {
//
//   var date_a = document.getElementById("ur").innerHTML;
//   var date_f = date_a.split(":");
//
//   var hour = date_f[0];
//   var min = date_f[1];
//
//   var sec = (parseInt(date_f[2],10) + 1);

//  if (sec == 60) {
//   sec = "00"
//       min = (parseInt(min,10) + 1)
//       if (min == 60){
//         min = "00"
//           hour = (parseInt(hour,10) + 1)
//           if (hour == 24) {
//             hour = "00"
//           }
//       }
//   }
//
//   UR_Indhold = hour + ":" + showFilled(parseInt(min,10)) + ":" + showFilled(parseInt(sec,10));
    
//   document.getElementById("ur").innerHTML = UR_Indhold;
//  setTimeout("increment_date();",1000);
     
// }

function showFilled(Value) {
    return (Value > 9) ? Value : "0" + Value;
}

function getTime(){
  date = new Date;
  date = date;
  return date;
}
function initialisation_date() {

  d_t = document.getElementById("time_value").value;
  document.getElementById("ur").innerHTML = d_t;

  setTimeout("increment_date();",1000);
}
function increment_date() {


  date_a = document.getElementById("ur").innerHTML;
  date_f = date_a.replace(/<\/?[^>]+(>|$)/g, "").split(":");

  hour = date_f[0];
  min = date_f[1];
  sec = (parseInt(date_f[2],10) + 1);

  if (sec == 60) {

    sec = "00";
    min = (parseInt(min,10) + 1);

    if (min == 60) {
      min = "00";
      hour = (parseInt(hour,10) + 1);

      if (hour == 24) {
        hour = "00";
      }
    }
  }

  UR_Indhold = "<span>" + hour + "</span> : <span>" + showFilled(parseInt(min,10)) + "</span> : <span>" + showFilled(parseInt(sec,10)) + "</span>";

  document.getElementById("ur").innerHTML = UR_Indhold;
  setTimeout("increment_date();",1000);

}

