function check_uncheck(id1,ids)
{
  c = document.getElementById(id1);
  var array = ids.split(",");
  if (c.checked == true){
    for (var i=0; i<array.length;i++){
      a = document.getElementById('s'+array[i]);
      a.checked = false;
    }
  }
}

function uncheck(id1,id2)
{
  c = document.getElementById(id1); 

  if (c.checked == true){ 
    a = document.getElementById(id2);
    a.checked = false; 
  }
}

function check_all_sites(self_id, other_id, ids, id)
{
  c1 =  document.getElementById(self_id);
  c2 =  document.getElementById(other_id);
  var array = ids.split(",") 

    if (c1.checked == true)
    {
      c2.checked=false;

        for (var i=0; i<array.length;i++){      
          d = document.getElementById(id+array[i])
            if (d)
            {d.checked = true} 
        }  
    }

}

function uncheck_all_sites(self_id, other_id, ids,id)
{
  c1 =  document.getElementById(self_id);
  c2 =  document.getElementById(other_id);
  var array = ids.split(",") 

    if (c1.checked == true)
    {
      c2.checked= false
        for (var i=0; i<array.length;i++){      
          d = document.getElementById(id+array[i])
            if (d)
              d.checked = false 
        }  
    }
}


