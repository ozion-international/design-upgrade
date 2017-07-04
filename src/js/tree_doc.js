function toggleField(field) {
  if(field.style.display === "none"){
    field.show();
  }else{
    field.hide();
  }
}

function show_trainings(id) {
  var d = document.getElementById('spinner_'+id);

  if (d) {
    if (d.style.display=='none')
    {d.style.display='block';

    }
    else
    {d.style.display='none';}
  }

}
function init(id) {
  var d = document.getElementById('spinner_'+id);

  if (d) {
    if (d.style.display=='none')
    {d.style.display='block';

    }
    else
    {d.style.display='none';}
  }

}
       //corriger bug select ignorer z-index
      // make the specified div a windowed control in IE6
     // this masks an iframe (which is a windowed control) onto the div,
     // turning the div into a windowed control itself

function makeWindowed(id_div)
     {   var p_div = document.getElementById(id_div);
         var is_ie6 =
           document.all &&
           (navigator.userAgent.toLowerCase().indexOf("msie 6.") != -1);
         if (is_ie6)
        {
           var html =
              "<iframe style=\"position: absolute; display: block; " +
              "z-index: -1; width:103%;height:102%;top: 0px;left:-2px; " +
              "filter: mask(); background-color: #ffffff; \"></iframe>";
           if (p_div) p_div.innerHTML += html;
           // force refresh of div
           var olddisplay = p_div.style.display;

           p_div.style.display = 'none';
           p_div.style.display = olddisplay;
        };
     }

function montre(id) {
  var d = document.getElementById('smenu'+id);
  var image=document.getElementById('croix_'+id)
    if (d) {
      if (d.style.display=='none')
      {d.style.display='block';
        image.src='/images/expanded.png'
      }
      else
      {d.style.display='none';image.src='/images/croix.png'}
    }

}

function liste_all(max, first) {

  var f=document.getElementById('smenu'+first)
    if(f){
      if(f.style.display=='none')
      {
        for (var i = 1; i<=max; i++) {
          var image=document.getElementById('croix_'+i)
            var all=document.getElementById('smenu'+i)

            if (all) { all.style.display='block';
            }
          if (image){image.src='/images/expanded.png'}
        }
      }
      else
      {
        for (var j = 1; j<=max; j++) {
          var all2=document.getElementById('smenu'+j)
            var image2=document.getElementById('croix_'+j)

            if (all2) {
              all2.style.display='none';


            }  if (image2){image2.src='/images/croix.png'}


        }
      }

    }

}


function interdit(){
  alert('Opération interdite!');

}

function checkout(){
  b=document.getElementById("toto");
  c=document.getElementById("checkout");
  d=document.getElementById("datecalstart");
  alert(c.value)
}

function check_hidden(id, id_checkbox)
{
  a = document.getElementById(id);
  b=document.getElementById(id_checkbox);
  if (b && b.checked==true)
  {    if (a)
	   {a.style.display="block";}
	   }
  else
  { if (a)
	  {a.style.display="none";}
	  }

}


function active(id,long) {
  for (var i = 1; i<=long; i++)
  {   var a = document.getElementById("ongle"+i);
    var b = document.getElementById("ongle_active"+i);
    if(id==i)
    {b.style.display="block";
      a.style.background = "#7b9cf8";
    }
    else
    {b.style.display="none";
      a.style.background = "#ddd";

    }
  }
}


function show_objet(id,long) {
  for (var i = 1; i<=long; i++)
  {   var a = document.getElementById("ongle_objet"+i);
    var b = document.getElementById("objet_active"+i);
    if(id==i)
    {b.style.display="block";
      a.style.background = "#7b9cf8";
    }
    else
    {b.style.display="none";
      a.style.background = "#ddd";

    }
  }
}


function show_form(id, longueur, tour_id) {
  for (var i = 1; i <= longueur; i++)
    {
      var a = document.getElementById("ongle_objet"+i);
      var b = document.getElementById("objet"+tour_id+"_"+i);
      if ( id == i )
    {
      b.style.display="block";
      a.style.background="#fcfcfc";
    }
    else
    {
      b.style.display="none";
      //a.style.background = "#ddd" commenté le 22/12 a priori ne sert à rien
    }
  }
}

function show_form2(id, longueur, site, conf, ongle,page ) {
  for (var i = 1; i <= longueur; i++)
  {
      var a = document.getElementById("ongle_objet"+i);
      var b = document.getElementById("objet"+i);
      if (page == "show"){
      var c = document.getElementById("lien");
      var d = document.getElementById("lien2");}
      if ( id == i )
    {
      b.style.display="block";
      a.style.background="white";
       if (page == "show"){
      c.innerHTML='<a href="/'+site+'/admin/confs/edit/'+conf+'?ongle='+ongle+'">Modifier</a>';
      d.innerHTML='<a href="/'+site+'/admin/confs/edit/'+conf+'?ongle='+ongle+'">Modifier</a>';}
    }
    else
    {
      b.style.display="none";
      a.style.background="lightgrey";

    }
  }
}


function show_all(long,tour_id) {
  for (var i = 1; i<=long; i++)
  {
    var b = document.getElementById("objet"+tour_id+"_"+i);
    b.style.display="block";
    makeWindowed("objet"+tour_id+"_"+i)

  }
}

function show_all2(long) {
  for (var i = 1; i<=long; i++)
  {
    var b = document.getElementById("objet"+i);
    b.style.display="block";
    makeWindowed("objet"+i)

  }
}




function montre_date(id, id_checkbox)
{
  a = document.getElementById(id);
  b=document.getElementById(id_checkbox);
  if (b.checked==false)
  {a.style.display="block";}
  else
  {a.style.display="none";}

}

function cache_date(id, id_checkbox)
{
  a = document.getElementById(id);
  b=document.getElementById(id_checkbox);
  if (b.checked==true)
  {a.style.display="block";}
  else
  {a.style.display="none";}

}


function display_comments(id_checkbox,div_display,div_hidden)
{
  var checkbox = document.getElementById(id_checkbox);
  var div_display = document.getElementById(div_display);
  var div_hidden = document.getElementById(div_hidden);
  if (checkbox.checked ==true)
  {div_display.style.display="block";
    div_hidden.style.display="none";}
  else
  {div_display.style.display="none";
    div_hidden.style.display="block";}


}


function SoumetForm(id_form) {
  form = document.getElementById(id_form);
  if (form){
  form.submit();}

  submit = document.getElementById("submit_fini");
  if(submit){
  submit.disabled=true;}

}

function SoumetFormCrop(id_form) {
  elementsForms = document.getElementsByTagName("form");
  form = document.getElementById(id_form);
  if (form){
    form.submit();
  }

  submit = document.getElementById("test_form");

  submit.disabled=true;

}


function ferme(id)
{
  var div = document.getElementById(id);

  div.style.display="none"
}

  function hiddenMagicDiv(id) {
    vip=document.getElementById( id )
      vip.style.display = 'none';

  }

  function showMagicDiv(id) {
    vip=document.getElementById( id )
      vip.style.display = 'block';
    setTimeout("vip.style.display = 'none';",1000);
  }



function check_type(id, type){
    if (type){
    id = "element"+id+"_answer_type_"+type;
    check=document.getElementById(id);
    check.checked = 'checked';}
}


function blacklist_vip(div,statut, id_people,type)
{
  
  if(!type){
   type = "";
  }
  var check = document.getElementById(id_people);
  var vip = document.getElementById(div);
  
  if (check.checked==true){
    if (statut=="blacklist")
    {
      if (div=="importante_vehicle"||div=="importante_vehicle_e"||div=="liste_vehicle")
      {
        vip.innerHTML="Attention! Véhicule interdit sur le site."
          showMagicDiv(div);
      }
      else if (div=="importante_origin"||div=="importante_borrow"||div=="importante_destinated")
      {
        vip.innerHTML="Attention! Personne indésirable."
          showMagicDiv(div);
      }
      else
      {
        vip.innerHTML="Attention! Personne indésirable : entrée sur le site impossible."
          showMagicDiv(div);
      }

      vip.style.display="block";
      vip.style.background ="#ec0303";

      if (div=="importante_borrow"||div=="importante_visiteur"||div=="importante_resident"||div=="importante"||div=="importante_vehicle_e"||div=="liste_visiteur"||div=="liste_vehicle")
      {check.checked=false}

    }
    else if(statut=="already entered"){
     if(type == "visite"){
      check.checked=false;
      vip.innerHTML="Cette personne est deja rentrée."
      showMagicDiv(div);
      vip.style.display="block";
      vip.style.background ="#ec0303";
     }
    }
    
    else if (statut=="vip")
    {
      if (div=="importante_vehicle"||div=="importante_vehicle_e"||div=="liste_vehicle")
      {
        vip.innerHTML="Véhicule autorisé."
          showMagicDiv(div);
      }
      else
      {
        vip.innerHTML="Attention! Personne Importante."
          showMagicDiv(div);
      }

      vip.style.display="block";
      vip.style.background = "#228f00";
    }
    else {vip.style.display="none"}
  }

}


function blacklist_vip_key(div,statut,id_people,id,vid)
{
  element = document.getElementById(id);
  var check = document.getElementById(id_people);
  var vip = document.getElementById(div);
  if (check.checked==true){
    if (statut=="blacklist")
    {
      if (div=="importante_vehicle"||div=="importante_vehicle_e"||div=="liste_vehicle")
      {
        vip.innerHTML="Attention! Véhicule interdit sur le site."
          showMagicDiv(div);
      }
      else if (div=="importante_origin"||div=="importante_borrow"||div=="importante_destinated")
      {
        vip.innerHTML="Attention! Personne indésirable."
          showMagicDiv(div);
      }
      else
      {
        vip.innerHTML="Attention! Personne indésirable : entrée sur le site impossible."
          showMagicDiv(div);
      }

      vip.style.display="block";
      vip.style.background ="#ec0303";

      if (div=="importante_borrow"||div=="importante_visiteur"||div=="importante_resident"||div=="importante"||div=="importante_vehicle_e"||div=="liste_visiteur"||div=="liste_vehicle")
      {check.checked=false}

    }
    else if(statut=="already entered"){
      check.checked=false;
      vip.innerHTML="Cette personne est deja rentrée."
      showMagicDiv(div);
      vip.style.display="block";
      vip.style.background ="#ec0303";
    }
    else if (statut=="vip")
    {
      if (div=="importante_vehicle"||div=="importante_vehicle_e"||div=="liste_vehicle")
      {
        vip.innerHTML="Véhicule autorisé."
          showMagicDiv(div);
      }
      else
      {
        vip.innerHTML="Attention! Personne Importante."
          showMagicDiv(div);
      }

      vip.style.display="block";
      vip.style.background = "#228f00";
    }
    else {vip.style.display="none"}
  }

  if(element){element.disabled = false;}
  var key = document.getElementById("key");
    if (!key instanceof HTMLDivElement){
              throw new TypeError("Key is not a <div>.");
                  }
  if (key){key.innerHTML=vid;}
}

function checkKey(site_path,id_key){

   personID = document.getElementById('key');
   new Ajax.Request('/'+site_path+'/iopc/iopeople/occupation_key?id='+id_key+'&person_id='+personID.innerHTML, {asynchronous:true, evalScripts:true});

}
function check_sites(ids){

  var al = document.getElementById('all_sites');

  if (al.checked == true){
          return true;
  }else{

    array = ids.split(",")
      l = array.length
      for (var i = 0; i<l; i++){

        id = "s"+array[i];
        var el = document.getElementById(id);
        if (el.checked == true) {
          return true;
        }

      }
  }

alert('Un site doit obligatoirement être associé au document.');
return false;
}

function validateForm()
{

  v = document.getElementById("agent_id");
  p = document.getElementById("societe_stock")
    if(""==v.value||""== p.value)
    {return false;}

}

function validateForm(id1, id2)
{
  v = document.getElementById(id1);
  p = document.getElementById(id2)
    if(""==v.value||""== p.value)
    {return false;}

}

function validateFormAccessRequest(){
  yellow_badge = document.getElementById("request_yellow_badge_id");
  if (yellow_badge.value == ""){
  alert('Le numéro du badge jaune doit être renseigné')
  return false ;}
}

function checkUniq(tab)
{ 
//var uniq = tab 
//  .map((visiteur) => {
//      return {count: 1, visiteur: visiteur}
//        })
//.reduce((a, b) => {
//      a[b.visiteur] = (a[b.visiteur] || 0) + b.count
//        return a
//        }, {})
//var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
var sorted_arr = tab.slice().sort();
var results = [];
for (var i = 0; i < tab.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
}
 if(results.length == 0){
  return false;
 }else {
  return true;
  }
}

function validateFormVisiteur(){
  visiteurs = document.getElementsByName("visit[visiteur_ids][]");
  var tabVisiteurs = [];
  
  for(i=0; i < visiteurs.length ; i++) {
   tabVisiteurs[i] = visiteurs[i].value;
  }

 var duplicates = checkUniq(tabVisiteurs);

  if (duplicates) { 
    alert('Vous ne pouvez avoir plusieurs fois la même personne');
    return false;
  }
  if (visiteurs.length == 0){
  alert('Au moins un visiteur doit être renseigné')
  return false ;}
}

function modifFormVisiteur(){
  visiteurs = document.getElementsByName("visit[visiteur_ids][]");

}

function checkRadio (name) {
 var radios = new Array();
 radios = document.getElementsByName("element"+name+"_answer_type");
 if (radios.length!=0){
 for (var i=0; i <radios.length; i++) {
  if (radios[i].checked) {
   return true;
  }
 }
 return false;
 }
 else
 return true;
}

function checkRadiovalue (name) {
 var radios = new Array();
 radios = document.getElementsByName("element"+name+"_answer_type");
 if (radios.length!=0){
 for (var i=0; i <radios.length; i++) {
  if (radios[i].checked) {
   return radios[i].value;
  }
 }
 }
}

function validation_form_error(session){
      error = ''
   model_name =  document.getElementById('controls_model_name')
   if (model_name.value == "")
   {
    error += "<li>le nom du modèle doit être renseigné</li>";
   }
   for (var i = 1; i<=session; i++){
      name =  document.getElementById("element"+i+"_name");

      if (name && ""==name.value)
      {
        error += ("<li>Élement "+i+" : le nom doit être reseigné</li>");
      }

      var radios = new Array();
      radios = document.getElementsByName("element"+name+"_answer_type");

      if (!checkRadio(i))
      {
       error += ("<li>Élement "+i+" : au moin une option doit être choisi</li>");
      }
      else if (checkRadiovalue(i) == 'select')
      {
       option1 = document.getElementById("option_"+i+"_1")
       if (option1.value == "")
       {error +=("<li>Élement "+i+" : le select option doit être renseigné</li>")}
      }
      else if (checkRadiovalue(i) == 'level')
      {
      minlevel = document.getElementById("element"+i+"_minlevel");
      maxlevel = document.getElementById("element"+i+"_maxlevel");
      if (parseInt(minlevel.value) >= parseInt(maxlevel.value))
      {
        error += ("<li>Élement "+i+" : le niveau maximun doit être superieur que niveau mininum</li>")}
      }

   }

}

function validation_form_elt(session){
    validation_form_error(session)
     if (error.length > 0)
     {
       return false;
     }
}

function validation_form_elt_msg(session){
     validation_form_error(session)
     if (error.length > 0)
     {
      error = "<ul> Les champs suivant posent problème:"+error+"</ul>"
      msg = document.getElementById("error");
      msg.innerHTML = error
     }

}

function valeur(id,value)
{
  v =  document.getElementById(id);
  v.value = value
    return true;

}

function reFormatDate(strDate){
 var arr = strDate.split('/')
 return arr[1]+'/'+arr[0]+'/'+arr[2]
}

function validate_dates_message(form){
  var obj1 = form.start_date.value;
  var obj2 = form.end_date.value;
  date1 = new Date(reFormatDate(obj1))
  date2 = new Date(reFormatDate(obj2));
  if (date1.getTime()>date2.getTime()){
   alert('La date de début doit précéder la date de fin') ;}

}

function validate_dates(form){
  var obj1 = form.start_date.value;
  var obj2 = form.end_date.value;
  var date1 = new Date(reFormatDate(obj1))
  var date2 = new Date(reFormatDate(obj2));
  if (date1.getTime()>date2.getTime()){
   return false ;}
}
 function openInNewWindow(form) {
 var value = form.commit[0].checked;
 if (value == true){
 form.setAttribute('target','_blank');}
 else{
 form.setAttribute('target', '')}
 }
function occupation_materiel(statut, id, message)
{
  var check = document.getElementById(id);
  var alarm = document.getElementById("materiel_lender_alarm");
  if (check.checked==true){
    alarm.innerHTML = message

    if (statut=="reserve"||statut=="pret"||statut == "reserve_depass"|| statut == "reserve_dispo"||statut == "pret_dispo")
    {
      if (statut == "pret")
      {
        alarm.style.background ="#ec0303";
        check.checked=false
      }
      else if (statut == "reserve_depass" || statut == "reserve_dispo"||statut == "pret_dispo")
      {
        alarm.style.background ="#228f00";
        check.checked=true
      }

      else if (statut == "reserve")
      {
        alarm.style.background ="#ec0303";
        check.checked=false
      }


      alarm.style.position="absolute";

      alarm.style.display="block";

      alarm.style.padding="10px";
    }


    else
    {alarm.style.display="none"}
  }

}

function agent(){
  a = document.getElementById("turn_agent");
  b = document.getElementById("turn_agent_id");
  c = document.getElementById("new-materiel-button");
  a.value = b.value;
  if (b.value == "")
  {c.style.display = "none"}
  else
  {c.style.display = "block"}
}

function disable_agent(id){
  a = document.getElementById(id);
  if (a)
  {a.disabled = true;}
}

function able_agent(id){
  a = document.getElementById(id);
  if (a)
  {a.disabled = false;}
}


function able_agents(ids){
  array = ids.split(",")
    l = array.length
    for (var i = 0; i<l; i++){
      id = array[i];
      able_agent("materiel_"+id);
    }
}

function get_calenderier(id1,value){
  a = document.getElementById(id1);
  a.value = value;
}

function if_disable_calendar(add,id)
{
  if (add==""){
    able_agent(id)
  }
  else
  {disable_agent(id);}
}

function if_valid(id1,id2)
{

  v = document.getElementById(id1);
  p = document.getElementById(id2)

    if(""==v.value||""== p.value)
    {return false;}

}

function cache_notice(id_notice, time){
     var  notice = document.getElementById(id_notice);
        if (notice){
    	new Effect.Fade(id_notice, {duration:10.0});}
}

function check_comment() {

 a = document.getElementById("comment");
 b = document.getElementById("hidden_comment");
 b.value = a.value
}

function check_cbox() {
 a = document.getElementById("pdf_attachment");
 b = document.getElementById("hpdf_attachment");
 
 if (a.checked == true)
 {
  b.value =  "1"  
 }else{
  b.value = "0"
 }

 
}


function uncheck(id, id1,id2)
{
 a = document.getElementById(id);
 b = document.getElementById(id1);
 c = document.getElementById(id2);
 if (a.checked == false){
  b.checked = false;
  c.checked = false;
 }
 else {
  b.checked = true;
  c.checked = true;
 }
}


function check_message(check_id, message) {

 a = document.getElementById("id");
 if (a.checked == true)
 {alert(message)}
}

function checked_unchecked_all(id){
  obj = document.getElementById(id);
  var chkboxes=document.getElementsByTagName('input')
    for (var i=0; i < chkboxes.length; i++) {
      if (chkboxes[i].type=="checkbox") {
        if (obj.checked == true)
          chkboxes[i].checked = true
        else if (obj.checked == false)
          chkboxes[i].checked = false
      }
    }
}

function checked_unchecked_all_and_update_form(id,values,field,hfieldname){
  var obj = document.getElementById(id);
  var field_to_update = document.getElementById(field);
  var chkboxes=document.getElementsByTagName('input');
    for (var i=0; i < chkboxes.length; i++) {
      if (chkboxes[i].type=="checkbox") {
        if (obj.checked == true)
          chkboxes[i].checked = true
        else if (obj.checked == false)
          chkboxes[i].checked = false
      }
    }
  if (obj.checked == true) {
   field_to_update.innerHTML="<input type='hidden' name='" + hfieldname + "' id='jfield' value='" + values + "'/>"
  }
  else if (obj.checked == false) {
   field_to_update.innerHTML="<input type='hidden' name='" + hfieldname + "' id='jfield' value=''/>"
  }

}

// function pour module gp, quand le champs à modifier est activée mais pas enregistrer message
function observe_change(){
 change_value = document.getElementById('if_change_value');
 if (change_value && change_value.value == 'true')
 {
 var submit = confirm('Il y a des informations sont changés, vous voulez les enregistrer?');
 if (submit)
    document.mon_formulaire.submit();
 }
}

//observe badge access, different action pour true et false
function observe_badges_access(site_path,id, visit_id,count){
 if(confirm("Voulez vous rendre le badge d'accès?")){
   new Ajax.Request( '/'+site_path+'/iopc/visit/return_assigner_badge/'+id+'?visit_id='+visit_id+'&count=0&objname=visiteur', {asynchronous:true, evalScripts:true});
   return false;
 }

 else{
   new Ajax.Updater('calendar_'+id, '/'+site_path+'/iopc/visit/check_partie/'+id+'?visit_id='+visit_id+'&count=0&objname=visiteur', {asynchronous:true, evalScripts:true});
 }
}

function loadImageFile(file_id, image_id) {
oFReader = new FileReader(), rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
oFReader.onload = function (oFREvent) {
    var cible = document.getElementById("field_"+image_id+'_span');
 cible.innerHTML = "<img src = "+ oFREvent.target.result + " id='field_"+image_id+"'>"
};
    if (document.getElementById(file_id).files.length === 0) { return; }
      var oFile = document.getElementById(file_id).files[0];
        if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }
           oFReader.readAsDataURL(oFile);
}

function  preview(file_id, image_id){
 var dImg = document.getElementById("field_"+image_id+'_span');
 var dFile = document.getElementById(file_id);
 if(!dFile.value.match(/.jpg|.gif|.png|.bmp/i)){alert('Le format doit être: .jpg, .gif, .bmp or .png !');return;}

 if(dFile.files){
    src = dFile.files[0].getAsDataURL();
 }else if(dFile.value.indexOf('\\') > -1 || dFile.value.indexOf('\/') > -1){
    globalPic=new Image();
    globalPic.src = dFile.value;
    src = globalPic.src
 }


 dImg.innerHTML = "<img src = " + src + " id='field_"+image_id+"'>"
 report_tag = "report_"+image_id
 dImg.innerHTML += "<input type='hidden' name='"+report_tag+"' id='"+report_tag+"' size=12px />"
}


function DrawImage(ImgD,width,height){
    var flag=false;
    var image=new Image();
    var iwidth = width;
    var iheight = height;
     image.src=ImgD.src;
    if(image.width>0 && image.height>0){
         flag=true;
        if(image.width/image.height>= iwidth/iheight){
            if(image.width>iwidth){
                 ImgD.width=iwidth;
                 ImgD.height=(image.height*iwidth)/image.width;
             }
            else{
                 ImgD.width=image.width;
                 ImgD.height=image.height;
             }
             ImgD.alt=image.width+"×"+image.height;
         }
        else{
            if(image.height>iheight){
                 ImgD.height=iheight;
                 ImgD.width=(image.width*iheight)/image.height;
             }
            else{
                 ImgD.width=image.width;
                 ImgD.height=image.height;
             }
             ImgD.alt=image.width+"×"+image.height;
         }
     }
}


function RGBtoHex(rgb)
 {rgb = rgb.gsub("rgb(", '').gsub(")", '').split(',')
 return toHex(rgb[0])+toHex(rgb[1])+toHex(rgb[2])}

function toHex(N) {
 if (N==null) return "00";
 N=parseInt(N); if (N==0 || isNaN(N)) return "00";
 N=Math.max(0,N); N=Math.min(N,255); N=Math.round(N);
 return "0123456789ABCDEF".charAt((N-N%16)/16)
      + "0123456789ABCDEF".charAt(N%16);
}



function change_police(field,label_font_size, label_font_bold,label_font_italic, label_font_col, label_back_col,content_font_size, content_font_bold,content_font_italic, content_font_col, content_back_col){

    label_field = document.getElementById("field_"+field+"_label");
    label_font_size = document.getElementById(label_font_size);
    label_font_bold = document.getElementById(label_font_bold);
    label_font_italic = document.getElementById(label_font_italic);
    label_font_col = document.getElementById(label_font_col);
    label_back_col = document.getElementById(label_back_col);
    label_field.style.fontSize = label_font_size.value+"pt";

    if (label_font_bold.value == 'true')
           label_field.style.fontWeight = 'bold';
    else
            label_field.style.fontWeight = 'normal';

    if(label_font_italic.value == 'true')
            label_field.style.fontStyle = 'italic';
    else
	    label_field.style.fontStyle = 'normal';

    label_field.style.color = "#"+label_font_col.value;
    label_field.style.backgroundColor = "#"+label_back_col.value;

    //changer le champ caché où qu'on enregistre les polices
    field_police =  document.getElementById(field+"_police");

    content_field = document.getElementById("field_"+field+"_content");

    if (content_field){
    content_font_size = document.getElementById(content_font_size);
    content_font_bold = document.getElementById(content_font_bold);
    content_font_italic = document.getElementById(content_font_italic);
    content_font_col = document.getElementById(content_font_col);
    content_back_col = document.getElementById(content_back_col);
    content_field.style.fontSize = content_font_size.value+"pt";
    if (content_font_bold.value == 'true')
	    content_field.style.fontWeight = 'bold';
    else
	    content_field.style.fontWeight = 'normal';
    if(content_font_italic.value == 'true')
	    content_field.style.fontStyle = 'italic';
    else
	    content_field.style.fontStyle = 'normal';

    content_field.style.color = "#"+content_font_col.value;
    content_field.style.backgroundColor = "#"+content_back_col.value;


    field_police.value = label_font_size.value+','+label_font_bold.value+','+label_font_italic.value+',#'
	    +label_font_col.value+',#'+label_back_col.value+','+
content_font_size.value+','+content_font_bold.value+','+content_font_italic.value+',#'
	    +content_font_col.value+',#'+content_back_col.value

	    }
   else

    field_police.value = label_font_size.value+','+label_font_bold.value+','+label_font_italic.value+',#'
	    +label_font_col.value+',#'+label_back_col.value


}


function get_police(field){
    field_label = document.getElementById("field_"+field);
    field_content = document.getElementById("field_"+field+"_content");
    if (field_label && field_label.style.fontSize)
       label_font_size = field_label.style.fontSize.gsub('pt', '')
    else
       label_font_size = 12


    if (field_label && field_label.style.fontWeight == 'bold')
       label_font_weight = true
    else if (field == 'starts_at' || field == 'ends_at')
       label_font_weight = false
    else
       label_font_weight = false

    if (field_label && field_label.style.fontStyle == 'italic')
        label_font_italic = true
    else
        label_font_italic = false

    if (field_label && field_label.style.color)
            label_font_color = '#'+RGBtoHex(field_label.style.color);
    else
        label_font_color = '#000000'

    if (field_label && field_label.style.backgroundColor)
        label_back_col = '#'+RGBtoHex(field_label.style.backgroundColor)
    else
        label_back_col = '#FFFFFF'


    if (field_content && field_content.style.fontSize)
       content_font_size = field_content.style.fontSize.gsub('pt', '')
    else
       content_font_size = 12

    if (field_content && field_content.style.fontWeight == 'bold')
       content_font_weight = true
    else
       content_font_weight = false

    if (field_content && field_content.style.fontStyle == 'italic')
        content_font_italic = true
    else
        content_font_italic = false

    if (field_content && field_content.style.color)
        content_font_color = '#'+RGBtoHex(field_content.style.color)
    else
        content_font_color = '#000000'

    if (field_content && field_content.style.backgroundColor)
        content_back_col = '#'+RGBtoHex(field_content.style.backgroundColor)
    else
        content_back_col = '#FFFFFF'


    field_police =  document.getElementById(field+"_police");
    if(field_police ){

    field_police.value = label_font_size+','+label_font_weight+','+label_font_italic+','+label_font_color +','+label_back_col+','+content_font_size+','+content_font_weight+','+content_font_italic+','+content_font_color +','+content_back_col }
}

function get_color_for_conf(i){
color_bg = document.getElementById("label_font_col_bg"+i).value;
bg = document.getElementById("css_bg"+i);
bg.value = color_bg;

document.getElementById('change_color_'+i).style.display = 'none' ;
}

function get_police_for_popup(field){
  field_police =  document.getElementById(field+"_police").value.split(',');

  label_font_size = document.getElementById("label_font_size_"+field);
  label_font_bold = document.getElementById("label_font_bold_"+field);
  label_font_italic = document.getElementById("label_font_italic_"+field);
  label_font_col = document.getElementById("label_font_col_"+field);
  label_back_col = document.getElementById("label_back_col_"+field);

  content_font_size = document.getElementById("content_font_size_"+field);
  content_font_bold = document.getElementById("content_font_bold_"+field);
  content_font_italic = document.getElementById("content_font_italic_"+field);
  content_font_col = document.getElementById("content_font_col_"+field);
  content_back_col = document.getElementById("content_back_col_"+field);

  label_font_size.value = field_police[0];
  label_font_bold.value = field_police[1];
  label_font_italic.value = field_police[2];
  if(field_police[3]){
  label_font_col.value = field_police[3].gsub("#", '');
  label_font_col.style.backgroundColor = field_police[3];}
  if(field_police[4]){
  label_back_col.value = field_police[4].gsub("#", '');
  label_back_col.style.backgroundColor = field_police[4];}

  content_font_size.value = field_police[0];
  content_font_bold.value = field_police[6];
  content_font_italic.value = field_police[7];

  if(field_police[8]){
  content_font_col.value = field_police[8].gsub("#", '');
  content_font_col.style.backgroundColor = field_police[8];}

  if(field_police[9]){
  content_back_col.value = field_police[9].gsub("#", '');
  content_back_col.style.backgroundColor = field_police[9];}
}

function not_return(id,name){
 disable_agent(id);
 message = document.getElementById(name);
 message.innerHTML = 'Veuillez ajouter un commentaire!'
}


function have_return(id,name) {
 able_agent(id);
 message=document.getElementById(name);
 message.innerHTML = ''
}

function check_content(id){
 obj=document.getElementById('if_return_badge');
 content =document.getElementById(id);
 if(obj.checked == true && content.value == '')
 {
   alert('Veuillez ajouter un commentaire.');
   return false
 }
 else
   return true;
}


function get_value(id, to_id)
{
obj1 = document.getElementById(id);

obj2 = document.getElementById(to_id);

obj2.value = obj1.value

}

function check_pti_alert_qualification(r,f,t) {
  var r = document.getElementById(r);
  var f = document.getElementById(f);
  var t = document.getElementById(t);
  return true;
  if (r.value == f.value == t.value == false) {
    alert('Vous devez précisez s\'il s\'agit d\'une alerte réelle, fausse, ou d\'un test');
  }
  else
  {
    return false;
  }
}
