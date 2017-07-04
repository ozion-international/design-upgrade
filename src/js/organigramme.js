function show_organigramme(id, ids) {
	
	var image=document.getElementById('croix_'+id)	
	 array = ids.split(",")
         l = array.length
   for (var i = 0; i<l; i++){ 
	var d = document.getElementById('ul_niveau_'+array[i]);
		if (d) { 
			if (d.style.display=='none')
			{d.style.display='block'; 
			image.src='/images/expanded.png'
			}
			else
			{d.style.display='none';image.src='/images/croix.png'}
		}
}
}

function deplie_all(ids)
{   
   var uls=document.getElementsByTagName('ul'); 
   var array = ids.split(",")
   
     if (uls[2] && uls[2].style.display == "none") {    
       for (var i=2; i < uls.length; i++) {
         uls[i].style.display='block'
       } 

       for (var j=0; j < array.length; j++) {
         var d=document.getElementById('croix_'+array[j])
           if (d) {
             if (d.src.match('/images/croix.png')) {
               d.src='/images/expanded.png'
             }
           } 
       }
     } 
     else {
       for (var i=2; i < uls.length; i++) {
         uls[i].style.display='none'
       } 
       for (var j=0; j < array.length; j++) {
         var image=document.getElementById('croix_'+array[j])
           if(image) {
             if (image.src.match('/images/expanded.png')) {
               image.src='/images/croix.png'
             }
           }
       }
     }
}

function deplie_all_form(ids)
{  var form =  document.forms[0]
   var uls=form.getElementsByTagName('ul'); 
   var array = ids.split(",")
   if (uls[1].style.display == "none"){    
    for (var i=0; i < uls.length; i++) 
   {uls[i].style.display='block'}  
   
   }
}

function gris_sous_niveau(ids)
{
  var array = ids.split(",") 
  for (var i=0; i < array.length; i++){ 
  var radio=document.getElementById('radio_'+array[i])
   radio.disabled = true;
  }
  
}

function unique_choix(ids,id)
{
var array = ids.split(',')
c= document.getElementById('check_'+id)
if (c.checked == true)
{ 
for (var i=0; i<array.length;i++){
    if(array[i]!=id){
    d = document.getElementById('check_'+array[i])
    if (d)
    {d.checked = false}
    } 
  } 
}
}

function enlever_parent(ids, id)
{
var array = ids.split(',')
c= document.getElementById('check_'+id)
if (c.checked == true)
{ 
for (var i=0; i<array.length;i++){
    if(array[i]!=id){
    d = document.getElementById('check_'+array[i])
    if (d)
    {d.checked = false}
    } 
  } 
}
}


function get_organigramme_ids(ids){
  var array = ids.split(",")
  var my_array = new Array();
  for (var i=0; i<array.length;i++){
  c= document.getElementById('check_'+array[i]);
   if (c){
   if (c.checked==true){my_array.push(array[i])}
   }
  }
  document.getElementById('organigramme_ids').value = my_array.join(',')
}

function get_group_ids(ids){ 
  var array = ids.split(",")
  var my_array = new Array();
  for (var i=0; i<array.length;i++){
  c= document.getElementById('groups_'+array[i]);
   if (c){
   if (c.checked==true){my_array.push(array[i])}
   }
  }
  document.getElementById('group_ids').value = my_array.join(',')
}


 
