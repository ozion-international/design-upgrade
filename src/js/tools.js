// Ici se trouvent les fonctions javascripts « utiles » n'importe où dans l'appli ; ce sont donc 
// les fonctions génériques


 function cleanMrzField(field){
  var mrzfield = document.getElementById(field); 
  mrzfield.value = '';
  mrzfield.readOnly = false;
  setFocus(field); 
}

function closePopup(div_to_close){
 var boxs = document.getElementsByClassName('box_popup');
 var shadowing =  document.getElementById('shadowing'+boxs.length)
   if(shadowing){
     shadowing.style.display='none';
   }

 div_to_close = document.getElementById(div_to_close)

 if (div_to_close) {
   div_to_close.style.display='none';
  // div_to_close.innerHTML='';
 }
 
 new_window = document.getElementById('new_window')
 
   if(new_window){ 
     new_window.style.zIndex='0';
   }
 over=true;
}

function addPeopleToList(index){
  var field = document.getElementById('list_person_not_by_card');
  var tab = []
    var div_id = document.getElementById('visiteurs_'+index);
  tab = field.value.split(",");
  if(field && tab){
    if(div_id.checked == true){
      tab.push(index); 
    }else{
      for(i=0;i < tab.length;i++){ 
        if(tab[i] == index){
          delete tab[i] 
        }
      }
    }
   field.value = tab;
  }
}

function setFocus(field){
 var field = document.getElementById(field); 
 field.focus(); 
}

function closeAllShadowings(){
    for(i =0 ; i < 10 ; i++){
        document.getElementById("shadowing"+i).style.display = "none";
    }

}


function checkToto() {
  return false;
}

function checkTemplateIsSelected(template_id) {
  if (isEmpty(template_id)) {
    alert("Vous devez sélectionner un template");
    return false;
  } 
  alert("toto");
  return true;
}

// Fonction qui permet d'afficher ou de cacher des <tr> par leurs "class"
//          Passer en paramètre la classe ciblée et 'show' ou 'hide'



function show_or_hide_classname(classname, action){
  var element = document.getElementsByClassName(classname);
  if(action == 'show'){
      for(var i=0;i<element.length;i++){
        element[i].style.display="table-row"
      }
  }
  else if (action == 'hide') {
      for(var i=0;i<element.length;i++){
        element[i].style.display="none"
      }
  }
}

// Fonction qui permet de vérifier que le nombre de compteur est inférieur à 5 dans _manual_form
function validate_counter_form(array_ids){
  var array_count = parseInt(array_ids);
  if (array_count > 5){
    alert("Il ne doit y avoir au maximum que 4 compteurs. Les compteurs en trop vont être supprimés");
    return false;
  }
  else{
    return true;
}
}



// Cette fonction permet d'activer ou de désactiver des champs de formulaire
function disabled_or_not(id,value) {
    var elements = document.getElementsByClassName(id);
    value = value.toString();
    var v = value == 'true' ? false : true

    for(var i=0;i<elements.length;i++)
    {
      elements[i].disabled=v;
    }
}

function open_close_dashbox(id, id2){

var elt = document.getElementById(id);
var elt2 = document.getElementById(id2);
var elt3 = document.getElementById("test");



if (elt.style.display == "none") {
elt.style.display = "block";
elt2.style.display = "none";
}else{

elt.style.display = "none";
elt3.style.height = "0px";
elt2.style.display = "block";
}

}

//------- fonction qui permet d'activer/desactiver les model/cycle ou sous-categories pour le module verif reglementaire  ---------//
function check_global_category(id){

  var input = document.getElementById(id);
      if (input.checked == true){
      
        var onglet2 = document.getElementById('obj2_content');
        onglet2.style.display = 'none';

        var msg2 = document.getElementById('obj2_msg');
        msg2.style.display = 'block';
      
        var onglet3 = document.getElementById('obj3_content');
        onglet3.style.display = 'block';
      
        var msg3 = document.getElementById('obj3_msg');
        msg3.style.display = 'none';
      }else{
      
        var onglet2 = document.getElementById('obj2_content');
        onglet2.style.display = 'block';
        
        var msg2 = document.getElementById('obj2_msg');
        msg2.style.display = 'none';
        
        var onglet3 = document.getElementById('obj3_content');
        onglet3.style.display = 'none';
        
        var msg3 = document.getElementById('obj3_msg');
        msg3.style.display = 'block';
      
      }
}
//--------------------------------------------------------------------------------------------------------------------------------//
//------- fonction qui permet de cocher/décocher tous les checkbox d'un formulaire ---------//
function check_all_box(value,id){

  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {  
    if (inputs[i].type == "checkbox") { 
      if (value == true){
        inputs[i].checked = true;   
      }else{
        inputs[i].checked = false;   
      }
    }  
  }  
}
//------------------------------------------------------------------------------------------//
//--------------- check date de la visite des demandes d'acces -----------------------------//

function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
}

function check_date(date,id,good_date){

  var element = document.getElementById(id);
  date_f = date.split('/');

  var today = new Date();

  var firstDate = new Date();
  firstDate.setFullYear(date_f[2],(date_f[1] - 1 ),date_f[0]);
  var newDate = addDays(today,2);

  if (firstDate < newDate )
  {
    element.value = good_date;
    alert("Vous devez créer une demande de visite au moins deux jours en avance.");
  }
}

//fonction pour verifier les champs avec dates et heures dans le meme champ
function check_date_and_hours(first_date,second_date) {
var first_date_value = document.getElementById(first_date).value;
var second_date_value = document.getElementById(second_date).value;

var dateTime = first_date_value.split(" ");
var dateTime2 = second_date_value.split(" ");


var date = dateTime[0].split("/");
var date2 = dateTime2[0].split("/");

var time = dateTime[1].split(":");
var time2 = dateTime2[1].split(":");

var final_date1 = new Date(date[2],date[1]-1,date[0],time[0],time[1],0,0);
var final_date2 = new Date(date2[2],date2[1]-1,date2[0],time2[0],time2[1],0,0);

if(final_date1 < Date.now()){ 
 alert("Vous ne pouvez mettre une date d'entrée inférieure à la date actuelle");
 return false; 
}
else if(final_date1 > final_date2){ 
 alert("Vous ne pouvez mettre une date de sortie antérieure à une date d'entrée");
 return false;
}
else if (final_date1.getTime() === final_date2.getTime())
{
 alert('Les dates ne peuvent être égales');
 return false;
}

return true
}


//fonction permettant de verifier le formulaire des demande d'intervention 
function validateFormAR(first_hour,first_minutes,second_hour,second_minutes,first_visit_date,last_visit_date) {
  var b = check_empty_date(); 
  var a = check_between_two_hours(first_hour,first_minutes,second_hour,second_minutes,first_visit_date,last_visit_date);
return a && b;

}

//fonction permettant de verifier entre deux heures données en fonction de deux
//dates (dans le cas ou les champs heures et dates ne sont pas dans le meme
//champs)
function check_between_two_hours(first_hour,first_minutes,second_hour,second_minutes,first_visit_date,last_visit_date) {
  
  var first_hour = document.getElementById(first_hour);
  var first_minutes = document.getElementById(first_minutes);
  var second_hour = document.getElementById(second_hour);
  var second_minutes = document.getElementById(second_minutes);
  var first_visit_date = document.getElementById(first_visit_date);
  var last_visit_date = document.getElementById(last_visit_date);
  
  if (!first_visit_date.value|| !last_visit_date.value){ 
    return false;
  }
   
  date_f = first_visit_date.value.split('/');
  date_p = last_visit_date.value.split('/');
 
  var time1 = new Date(); 
  var time2 = new Date();
   

  time1.setFullYear(date_f[2],(date_f[1] - 1 ),date_f[0]);
  time2.setFullYear(date_p[2],(date_p[1] - 1 ),date_p[0]);
 
 
// if ((time1.getFullYear() == time2.getFullYear()) && (time1.getMonth() == time2.getMonth() ) && (time1.getDay() == time2.getDay())) 
 // {
    var hours1 = new Date();
    var hours2 = new Date();
    hours1.setHours(first_hour.value,first_minutes.value,0,0)
    hours2.setHours(second_hour.value,second_minutes.value,0,0)

    if ( hours1.getTime() == hours2.getTime()) {
      alert("Attention ! L\'heure d'entrée des visites ne peut être la même que l'heure de sortie ! ");
      return false;
    }
    if (hours1 > hours2 )
    {
      alert("Attention ! L\'heure d'entrée des visites doit être inférieure à l'heure de sortie ! ");
      return false;
    }
 // }
    
  return true;
}

function check_empty_date() {
  var dates_fields = document.getElementsByClassName("date_picker");
  var bool = []; 
  for(var i = 0; i < dates_fields.length ; i++ )
  {
    if(dates_fields[i].value.length == 0 || dates_fields[i].value == "" || dates_fields[i].value == " " || dates_fields[i].value == null ){
      bool[i] = 1;
    }
  }

  if(bool.indexOf(1) > -1 )
  {
    alert('Veuillez remplir toutes les dates ');
    return false;
  }
  return true;
}

function check_between_two_dates(first_date,second_date,type) {

  var first_date = document.getElementById(first_date);
  var second_date = document.getElementById(second_date);

  date_f = first_date.value.split('/');
  date_p = second_date.value.split('/');
  var firstDate = new Date();
  firstDate.setFullYear(date_f[2],(date_f[1] - 1 ),date_f[0]);
  var secondDate = new Date();
  secondDate.setFullYear(date_p[2],(date_p[1] - 1 ),date_p[0]);
   
  if (type == "inf")
  {
    if (firstDate > secondDate)
    {
      first_date.value = " " ;
      alert("La date de debut de la visite ne peut etre postérieur à la fin de la visite.");
    }
  }
  else if (type == "sup") {
     if (firstDate < secondDate)
    {
    first_date.value = " " ;
     alert("La date de fin de la visite ne peut être antérieure à la date de début de la visite.");
    }

  }
}



//check date de la visite des demandes d'acces sur le bouton "Enregistrer"
function ValidateDate(){

  date_f = document.getElementById("visit_date");
  date_f = date_f.value;
  date_f = date_f.split('/');

  var today = new Date();

  var firstDate = new Date();
  firstDate.setFullYear(date_f[2],(date_f[1] - 1 ),date_f[0]);

  if (firstDate < today)
  {
 
    alert("La date de la visite ne peut être antérieure à la date actuelle.");
    return false;
  }
}

//fonction qui permet de limiter le nombre de caracteres saisies dans un champs
function MaxLengthTextarea(objettextarea,maxlength){
  if (objettextarea.value.length > maxlength) {
    objettextarea.value = objettextarea.value.substring(0, maxlength);
    var message = 'Votre texte ne doit pas dépasser '+maxlength+' caractères!';
    alert(message);
  }
}

function  verif_lettres(event,sp)
{
  // Compatibilité IE / Firefox
  if(!event&&window.event) {
    event=window.event;
  }
  var code = event.keyCode;
  var which = event.which;
  // IE
  //Si le keycode ne correspond pas à [A-Z] ou à [a-z] ou aux  autres  autorisés...
  if  (!((code >= 65 && code   <= 90) || (code >= 97 && code <= 122)|| (code >= 37 && code <= 40) || code == 8 || code == 9 || code == 13 || code == 16 || code == 46 || code == 32)) {
    event.returnValue = false;
    event.cancelBubble = true;
    document.getElementById(sp).innerHTML = "<span style='color: red;'>Attention ! Ce champ ne doit contenir que des lettres !</span>";
  }
  else
  {
    document.getElementById(sp).innerHTML = "";
  }
  // DOM (dont Firefox)
  if  (!((which >= 65 && which <= 90) || (which >= 97 && which <= 122)|| (code >= 35 && code    <= 40) || code == 9 || code == 8 || code == 13 || which == 16 || code == 46 ||  which== 32)) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById(sp).innerHTML = "<span style='color: red;'>Attention ! Ce champ ne doit contenir que des lettres !</span>";
  }
  else
  {
    document.getElementById(sp).innerHTML = "";

  }
}

function verif_chiffres(event,sp)
{
  // Compatibilité  IE /  Firefox  
  if(!event && window.event) {
    event=window.event;
  }
  var code = event.keyCode;
  var which = event.which;
  // IE
  if ((code    < 48 || code >  57) && code != 46 && code != 8 && code != 9 && code != 16 && code != 13) {
    event.returnValue = false;
    event.cancelBubble = true;
    document.getElementById(sp).innerHTML = " <span style='color: red;'>Attention ! Ce champ ne doit contenir que des chiffres!</span> ";
  }
  else
  {
    document.getElementById(sp).innerHTML = "";
  }
  // DOM (dont Firefox)
  if ((which  < 48 || which > 57) && (code < 37 || code > 40) && code != 46 && code != 8 && code != 9 && code != 16 && code != 13) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById(sp).innerHTML = "<span style='color: red;'>Attention ! Ce champ ne doit contenir que des chiffres !</span> ";
  }
  else
  {
    document.getElementById(sp).innerHTML = "";
  }
}


function verif_tab(event,sp)
{
  // Compatibilité  IE /  Firefox  
  if(!event && window.event) {
    event=window.event;
  }
  var code = event.keyCode;
  var which = event.which;
  // IE
  if (code == 9) {
    event.returnValue = false;
    event.cancelBubble = true;
  }
  else
  {
    document.getElementById(sp).innerHTML = "";
  }
  // DOM (dont Firefox)
  if (code == 9) {
    event.preventDefault();
    event.stopPropagation();
  }
  else
  {
    document.getElementById(sp).innerHTML = "";
  }
}

function verif_date_format(date,id,elm){

  date_f = date;
  date_f = date_f.split('/');

  var input = document.getElementById(elm);
  var element = document.getElementById(id);
  var today = new Date();

  var firstDate = new Date();
  firstDate.setFullYear(date_f[2],(date_f[1] - 1 ),date_f[0]);

  if (date_f[2] > 14 && date_f[2] < 30)
  {
    input.value = "";
    element.innerHTML = "<font color=red> Format incorrect </font>";
    alert("La date de naissance ne peut être supérieure à la date actuelle.");
    return false;
  }

  if (date_f[1] > 12 || date_f[1] < 1)
  {
    input.value = "";
    element.innerHTML = "<font color=red> Format incorrect </font>";
    alert("Le mois de naissance spécifié est inconnu.");
    return false;
  }

  if (date_f[0] > 31 || date_f[0] < 1)
  {
    input.value = "";
    element.innerHTML = "<font color=red> Format incorrect </font>";
    alert("Le jour de naissance spécifié est inconnu.");
    return false;
  }

  var reg = new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{2}$","g");

  if (reg.test(date)){
    element.innerHTML = "";
  }
  else {

    element.innerHTML = "<font color=red> Format incorrect </font>";
    alert("La date saisie n'est pas au bon format.")}

}

function setfocus(color){

  if(color == "" || color == null){
    color = "#FFD6F6"
  }

  var inputs = document.getElementsByTagName('input');
  for (var x=0;x<inputs.length;x++){
    inputs[x].onfocus = function(event){
      this.style.backgroundColor=color;
    }
    inputs[x].onblur = function(event){
      this.style.backgroundColor='#ffffff';}
  }
  var areas = document.getElementsByTagName('textarea');
  for (var w=0;w<areas.length;w++){
    areas[w].onfocus = function(event){
      this.style.backgroundColor=color;
    }
    areas[w].onblur = function(event){
      this.style.backgroundColor='#ffffff';
    }
  }
  var selects = document.getElementsByTagName('select');
  for (var z=0;z<selects.length;z++){
    selects[z].onfocus = function(event){
      this.style.backgroundColor=color;
    }

    selects[z].onblur = function(event){
      this.style.backgroundColor='#ffffff';
    }
  }
}


function enableclass(id) {
  var elements = document.getElementsByClassName(id);
  //   value = value.toString();
  //    var v = value == 'true' ? false : true

  for(var i=0;i<elements.length;i++)
  {
    elements[i].disabled=false;
  }
}
function enableid(id) {
  var elements = document.getElementById(id);
  //   value = value.toString();
  //    var v = value == 'true' ? false : true

  elements.disabled=false;
}



// cache des éléments
function showDiv(obj, obj2, obj3)
{  
  o=document.getElementById(obj);
  o2=document.getElementById(obj2);
  o3=document.getElementById(obj3);
  o.style.display='block';
  o2.style.display='none';
  o3.style.display='none';  
}

// Fonction javascript qui actualise le champ localisation en fonction des chemins de rondes sélectionnés -->

function change_localisation (desc)
{
  d=document.getElementById('roads[]').text;  
  zone=document.getElementById('tour_zone_id');

  z=zone.options[zone.selectedIndex].text;
  document.getElementById('tour_localisation').value=z+" - "+desc;
   }

  // Permet de faire apparaitre (display:block) un element invisible auparavant
  // (display:none) par chgt du css
  function show_element(el) {
    d = document.getElementById(el);
    d.style.display="inline-block";
  }

// Permet de faire disparaitre (display:none) un element visible auparavant
// par chgt du css
function hide_element(el) {
  d = document.getElementById(el);
  d.style.display="none";
}

// Permet de faire disparaitre ou apparaitre un élément visible ou non auparavant
// par chgt du css
function show_or_hide_element(el,action) {
  alert('ok');
  d = document.getElementById(el);
  if (action == 'hide') {d.style.display = 'none';} 
  else {d.style.display = 'block';}
}
function show_or_hide_el(el,value) {
  d = document.getElementById(el);
  if (value == 'false') {d.style.display = 'none';} 
  else {d.style.display = 'block';}
}
// pas du tout générique : 
function show_or_hide_select(el,value) {
  d = document.getElementById(el);
  if (value != 'Formations') {d.style.display = 'none';} 
  else {d.style.display = 'inline';}
}

function get_materiel_ids(objName){
  var ids = document.getElementsByName(objName);
  var str = '';
  for(var i = 0; i < ids.length; i++)
  {
    var obj = document.getElementsByName(objName).item(i);
    if (str==''){str+=obj.value}
    else
    {str+=(','+obj.value)}
  }
  var materiel_ids = document.getElementById('materiel_ids_value');
  materiel_ids.value = str; 
}
function get_all_materiels_end_date(){
  get_materiel_ids('materiel_lender[materiel_ids][]');
  var materiel_ids = document.getElementById('materiel_ids_value').value;
  var arr = materiel_ids.split(',');  
  for(var i=0;i<materiel_ids.length;i++){
    var elt = arr[i];
    var id1 = "calendar_"+elt
      var id2 = "date_rendu_pre_"+elt
      get_time_value(id1,id2,'ends_year','date_ends_hour','date_ends_minute');
  }
}

function comment_pop(id){
  var d = document.getElementById(id);
  d.style.position = "absolute";
  d.style.top = document.body.scrollTop+100;
  d.style.left = "400px"
}

function comment_pop(id){
  var d = document.getElementById(id);
  d.style.position = "absolute";
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  d.style.top = scrollTop+80+"px";
  d.style.left = "30px";
  d.style.zIndex = 1000;
  var c = document.getElementById('cadre_commentaire');
  if (c){
    c.style.marginTop=0;
  }
}

function check_champ(id, name){
  var adresse = document.getElementById(id);
  if(adresse){
    if(""==adresse.value){
      alert(name +" doit être renseigné");
      return false ;}
  }
}

function check_champs(ids, names){

  var ids = ids.split('/')
    var names = names.split('/')
    for(var i= 0; i < ids.length; i++)
    {
      var adresse = document.getElementById(ids[i]);
      if(adresse){
        if(""==adresse.value || " "==adresse.value){
          alert(names[i] +" doit être renseigné");
          return false ;}
      }
    }
}

function check_eval(ids, names){

  var ids = ids.split('/')
    var names = names.split('/')
    for(var i= 0; i < ids.length; i++)
    {
      if(names[i] == "bool"){
        var res = document.getElementById(ids[i]+"_true");
        var res2= document.getElementById(ids[i]+"_false");

        if(res.checked == false && res2.checked == false){   
          alert(" Tous les champs doivent être renseignés ");
          return false ;
        }
      }else{
        var res = document.getElementById(ids[i]);
        if(res.value == "" || res.value == " "){   
          alert("Tous les champs doivent être renseignés ");
          return false ;
        }

      }
    }
}


function validateqcm() { //content, type1, type2, check1, option1, check2, option2) 
  // les 7 premiers arguments sont « fixes »
  var content = document.getElementById(arguments[0]);
  var type1 = document.getElementById(arguments[1]);
  var type2 = document.getElementById(arguments[2]);
  var option1 = document.getElementById(arguments[4]);
  var option2 = document.getElementById(arguments[6]);
  var message = '';
  var good_response_ok = 'false';
  var empty_response = 'false';

  if(content.value==''){
    message += "La question doit être renseignée."
  }
  if (type1.checked != true && type2.checked != true){
    message += "\n Le type de réponse doit être renseigné."
  }
  if (type2.checked == true){
    if(option1&&option2){
      for(i=4;i<arguments.length;i=i+2){
        var rfield = document.getElementById(arguments[i]);
        if(rfield.value == "") { empty_response = 'true'};
      };
      if(empty_response == 'true'){
        message += "\n Aucune réponse ne doit être vide."
      }
    }
    else 
    {message += "\n Au moins deux réponses doivent être renseignées."}
  }
  if (type2.checked == true){
    for(i=3;i<arguments.length;i=i+2){
      var field = document.getElementById(arguments[i]);
      if(field.checked == true) { good_response_ok = 'true'};
    };
    if(good_response_ok == 'false') {message += "\n Une bonne réponse doit être renseignée."}; 
  }
  if(message!=''){
    alert(message);
    return false;
  }
}

function validatecreateqcm(qcm_type, total_number,question_number){
  var qcm_type = document.getElementById(qcm_type);
  var total_number = document.getElementById(total_number);
  var question_number = document.getElementById(question_number);
  var message = ''
    if(qcm_type){ 
      if(qcm_type.value==''){
        message += "Le type de QCM doit être renseigné."
      }
      else if(qcm_type.value == 'category'){
        if(total_number && question_number){
          if(total_number.value == '0'){
            message += "\n Au moins une catégorie doit être choisie."
          }
          if(question_number.value == '0'){
            message += "\n Le nombre de questions à gérer doit être superieur à 0"
          }
        }
        else 
        {message += "Les catégories choisies et le nombre de questions à gérer doivent être renseignés."}
      }
      else if(qcm_type.value == 'qcm_model'){
        var ids = document.getElementsByName('model_id');
        if(ids.length == 0){
          message += "Aucun modèle disponible."
        }
        else{
          var str='';
          for(var i = 0; i < ids.length; i++){
            var obj=document.getElementsByName('model_id').item(i);
            if(obj.checked == true){
              str = 'true'
            }
          }
          if(str==''){
            message += 'Au moins un modèle doit être renseigné.'
          }
        }
      }
    }
    else 
    {
      message += "La personne à laquelle le modèle doit être attribué doit être renseignée."
    }
  if(message!=''){
    alert(message);
    return false;
  }

}

function getMultipleCheckbox(inputdata) {
    var selectedItems = [];
      var count = 0;
        for(var i=0;i<inputdata.length;i++) {
              if(inputdata[i].checked) {
                      selectedItems[count] = inputdata[i].value;
                            count++;
                                }
                }
          for(var loop=0; loop< selectedItems.length; loop++) {
                console.log(selectedItems[loop]);
                  }
            return selectedItems;
}

function show_select_options(bool, select){
  var bool = document.getElementById(bool);
  var select = document.getElementById(select);
  if(bool.checked == true){
    var bool_content = document.getElementById('answer_bool')
      bool_content.innerHTML = "&nbsp; Bonne réponse : <select id='qcm_question_model_boolean_answer' name='qcm_question_model[boolean_answer]'><option value='true'>OUI</option><option value='false'>NON</option></select>"
  }
}

function capitalize_first_name(v) {
  var reg=new RegExp("[ ,;-]+", "g");
  var newvalue=''; 
  var elts=v.split(reg) ; 
  for (var i=0; i<elts.length; i++) {
    newvalue += (elts[i].capitalize() + ' ');
  }; 
return newvalue
  
}

function update_carte_id(div,value,hfieldname) {
  
  var field = document.getElementById('jfield');
    if(field) {
      old_value = field.value;
    }
    else {
      old_value = ''
    }
  var d = document.getElementById(div);

  d.innerHTML="<input name='" + hfieldname + "' id='jfield' value='" + value + "'/>";
}


function update_form(div,value,cb_prefix,hfieldname){
  var field = document.getElementById('jfield');
    if(field){
      old_value = field.value;}
    else{
      old_value = ''}

  var d = document.getElementById(div);
  
  var checkbox = document.getElementById(cb_prefix+value);

  var hfieldname = hfieldname
  if (checkbox.checked == true){
   if (old_value == '') {
     var value = checkbox.value;
   }
     else {
    var value = old_value + ',' + checkbox.value;
     }

  d.innerHTML="<input type='hidden' name='" + hfieldname + "' id='jfield' value='" + value + "'/>"}
  else {
    var array = old_value.split(',');
    var i = array.indexOf(checkbox.value);
    array.splice(i,1);
    value = array.join(',');
    d.innerHTML="<input type='hidden' name='" + hfieldname + "' id='jfield' value='" + value + "'/>"
  }
}

//new ajout


 function onEndCrop( coords, dimensions ) {
    $( 'x1' ).value = coords.x1;
    $( 'y1' ).value = coords.y1;
    $( 'x2' ).value = coords.x2;
    $( 'y2' ).value = coords.y2;
    $( 'width' ).value = dimensions.width;
    $( 'height' ).value = dimensions.height;
}

function is_int(id){
  var element = document.getElementById(id);
    if(isNaN(element.value)){
      element.value = "";
      window.alert("Veuillez saisir un nombre svp!" ); }
}

function reload(){
   var a ;
   var chkboxes=document.getElementsByTagName('input') ;
for (var i=0; i < chkboxes.length; i++) {
  if (chkboxes[i].type=="checkbox") {

     chkboxes[i].checked=false

  }
}


} 

if (document.layers)
document.captureEvents(Event.KEYPRESS)

function process_keypress(e) {
if(window.event){
if (window.event.type == "keypress" & window.event.keyCode == 13)
return !(window.event.type == "keypress" & window.event.keyCode == 13);
}
if(e)
{
if (e.type == "keypress" & e.keyCode == 13)
return !e;
}
}
var toblockels = document.getElementsByTagName('input');
for (var i=0; i < toblockels.length; i++) {
  if (toblockels[i].type=="text") {
    toblockels[i].onkeypress = process_keypress;
  }
}

//document.onkeypress = process_keypress;

   function rolling_over(event, url, y) {
    d=document.getElementById('pop') ;
//    d.TextContent='joijoijoi';
    d.style.zIndex="2000";
    d.style.position="absolute";
/*    d.style.top=y+"px"; */
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    d.style.top=scrollTop+50+"px";
    d.style.left='198px';
    d.style.display='block';
    d.style.background='white';
    d.style.padding='10px';
    d.style.border='2px solid black';
    a = new Ajax.Updater('pop', url , {asynchronous:true, evalScripts:true,
        onComplete :function(request){makeWindowed('pop')}});
    makeWindowed('pop');
   }

function rolling_out(id) {
    d=document.getElementById('pop') ;
    d.Textcontent='';
    a.transport.abort();
    d.style.display='none';
}

 
function hide_link(part) {
  d = document.getElementById(part); 
  d.style.position = 'absolute'; 
  d.style.marginTop= 5+"px"
  d.style.display="none";
}

function show_part(part) {
  d = document.getElementById(part);
    d.style.display="none";
}


function showsex(id){
var v = document.getElementById(id);
var v2 = document.getElementById("sexvalue");
if(v.checked == true)
{v2.value = v.value}
}

/* fonctions pour la vidéo : */
 function adjust_margin(img) {
	if (img.height < 250) {
	 img.style.paddingTop = '45px';
	} else {
	 img.style.paddingTop = '5px';
	}
  }

 function up_img(path, idcam) {
	img = document.getElementById('frameimg');
	img.style.display = 'inline';
	if (path.substring(0,1) == 'h') { path = path + '?random=' + Math.ceil(Math.random()*9999); }
	img.src = path
	preview_src = path;
	for(i=0 ; i<14 ; i++) {
	  camera = document.getElementById('cm' + i);
	  cone = document.getElementById('cone' + i);
	  if (camera && cone) {
	    if (i == idcam) {
	      camera.setAttribute('class', 'cm_alarm');
	      cone.setAttribute('class', 'cone_alarm');
	    } else {
	      camera.setAttribute('class', 'cm');
	      cone.setAttribute('class', 'cone');
	    }
	  }
	}
	setTimeout('adjust_margin(img)', 10);
  }

function hide_img() {
	img = document.getElementById('frameimg');
        img.style.display = 'none';
  }

  function rollover(img, src) {
	img.src = src;
  }

  function toggle_obj(id) {
	obj = document.getElementById(id);
	if (obj.style.display == 'block') {
		obj.style.display = 'none';
	} else {
		obj.style.display = 'block';
	}
  }

 /*
 function rolling_over(event, idcam) {
	d=document.getElementById('pop') ; 
 	d.style.zIndex="1000";
  	d.style.position="absolute";
	d.style.top= '' + (event.clientY-100) + 'px';        
  	d.style.left= '' + (event.clientX + 20) + 'px';        
	d.style.display='block';
	img = document.getElementById('popimg');
	img.src = 'http://10.1.10.35/cgi-bin/nph-zms?mode=jpeg&monitor=' + idcam + '&scale=100&amp;maxfps=5&random=' + Math.ceil(Math.random()*9999); 
 }

  function rolling_out() {
	d=document.getElementById('pop') ;
	d.style.display='none';
	img = document.getElementById('popimg');
	img.src = '/images/1px.png';
}
*/

function reload() {
  var a ;
  var chkboxes=document.getElementsByTagName('input');
  for (var i=0; i < chkboxes.length; i++) {
    if (chkboxes[i].type=="checkbox") {
      chkboxes[i].checked=false;
    }
  }
}

function rolling_over(event, url, y) {
  dpop=document.getElementById('pop') ;
  dpop.style.zIndex="2000";
  dpop.style.position="absolute";
  var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
  dpop.style.top=scrollTop+50+"px";
  dpop.style.left='198px';
  dpop.style.display='block';
  dpop.style.background='white';
  dpop.style.padding='10px';
  dpop.style.border='2px solid black';
  aupdater = new Ajax.Updater('pop', url , {asynchronous:true, evalScripts:true,
      onComplete :function(request){makeWindowed('pop')}});
  makeWindowed('pop');
}

function rolling_out(id) {
  dpop=document.getElementById('pop') ;
  dpop.Textcontent='';
  aupdater.transport.abort();
  dpop.style.display='none';
}


function hide_link(part) {
  var d = document.getElementById(part); 
  d.style.position = 'absolute'; 
  d.style.marginTop= 5+"px"
  d.style.display="none";
}

function show_part(part) {
  var d = document.getElementById(part);
  d.style.display="none";
}


function showsex(id){
  var v = document.getElementById(id);
  var v2 = document.getElementById("sexvalue");
  if(v.checked == true)
  {v2.value = v.value}
}
function onEndCrop( coords, dimensions ) {
    $( 'x1' ).value = coords.x1;
    $( 'y1' ).value = coords.y1;
    $( 'x2' ).value = coords.x2;
    $( 'y2' ).value = coords.y2;
    $( 'width' ).value = dimensions.width;
    $( 'height' ).value = dimensions.height;
}

/* fonction pour evt site conformité vehicule ; 
 * update un champs du formulaire en fonction 
 * des valeurs de plusieurs autres champs; 
 */
function update_vehicle_conformity(v,id) {
 
  field = document.getElementById("conformity_counter");
 ok_field = document.getElementById("event_counter1_value");
 ko_field = document.getElementById("event_counter2_value");
 state_field = document.getElementById("conformity_state");
 count = parseInt(field.value);
 if (v == "Conforme") {
   count += 1 ;
 }
 else {
   count -= 1 ;
 }
 field.value = count ;
 if (count == 13) {
    ok_field.value = 1 ;
    ko_field.value = 0 ;
    state_field.innerHTML = "<span><b>Le véhicule est conforme.</b></span>" ;
    state_field.style.color = "green" ; 
 }
 else {
    ok_field.value = 0 ; 
    ko_field.value = 1 ; 
    state_field.innerHTML = "<span><b>Le véhicule n'est pas conforme.</b></span>" ; 
    state_field.style.color = "red" ; 

 }
}

function closeBoxDivAndShadowing(div_to_close) {
 var boxs_number = document.getElementsByClassName('box_popup').length;
  document.getElementById(div_to_close).innerHTML = '';
  document.getElementById('shadowing'+boxs_number).style.display = "none";
}


  // permet de bloquer les chiffres (type=0) ou les lettres (type=1)
  // retourne true si OK 
  function checkChar(evenement,type){
    var charCode; 
    for (prop in evenement)
    if (document.all) {
      var charCode = evenement.keyCode;
    }
    else 
    { 
      var charCode = evenement.which;
    }

    switch(type){
      case 0:
        //Lettres en majuscules,minuscule et trait d'union
        if((charCode >= 65 && charCode <= 90)
            ||(charCode >= 97 && charCode <= 122)
            ||(charCode == 45)
            ||(charCode == 0) // tabulation, notamment
            ||(charCode == 32)){

          return true ;
        }
        //si c'est un chiffre ou autre on n'affiche rien
        else{
          return false ;
        }
        break;
      case 1:
        //chiffres et trait d'union
        if((charCode >= 48 && charCode <= 57)
            ||(charCode == 45)
            ||(charCode == 0) // tabulation, notamment
            ||(charCode == 32)){

          return true;
        }
        //si c'est autre chose on n'affiche rien
        else{
          return false ;
        }
        break;
      case 2:
        //Lettres et chiffres seulement
        if((charCode >= 65 && charCode <= 90)
            ||(charCode >= 97 && charCode <= 122)
            ||(charCode >= 48 && charCode <= 57)
            ||(charCode == 0) // tabulation, notamment
            ||(charCode == 32)){

          return true;
        }
        else{
          return false;
        }
        break;
      case 3:
        //chiffres et trait d'union et point
        if((charCode >= 48 && charCode <= 57)
            ||(charCode == 45)
            ||(charCode == 46)
            ||(charCode == 0) // tabulation, notamment
            ||(charCode == 32)){

          return true;
        }
        //si c'est autre chose on n'affiche rien
        else{
          return false ;
        }
        break;
    }//fermeture du switch
  }//fermeture de la fonction

function checkAll(check_all){
  // Pass in a named "Check All" checkbox that appears on the same form where all 
  // checkboxes should be checked.

  // Loop through an array containing ALL inputs on same form as check_all
  var inputs = check_all.form.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {  
    // Only work on checkboxes, and NOT on the "Check All" checkbox
    if (inputs[i].type == "checkbox" && inputs[i].name != check_all.name) { 
      if(check_all.checked == true){
        inputs[i].checked = true ;
      }else{
        inputs[i].checked = false ;
      }
    }  
  }  
}


function checkAllByClass(klass,checkAll){
  var inputs = document.getElementsByClassName(klass);
  
  for (var i = 0; i < inputs.length; i++) {  
    // Only work on checkboxes, and NOT on the "Check All" checkbox
    if (inputs[i].type == "checkbox" && inputs[i].name != check_all.name) { 
      if(checkAll.checked == true){
        inputs[i].checked = true ;
      }else{
        inputs[i].checked = false ;
      }
    }
  }
}


