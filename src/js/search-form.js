function toggleAdvencedSearchBox(event){
  event.preventDefault();
  var advancedSearchBox = document.getElementById("advanced-search");
  var defaultSearchBox = document.getElementById("default-search");
  var advancedSearchActivated = document.getElementById("advanced");

  if(window.getComputedStyle(advancedSearchBox).display === "none"){
    if(advancedSearchBox.style.width === "") advancedSearchBox.style.width = defaultSearchBox.offsetWidth + "px"; 
    document.getElementById("advanced-search-link").innerHTML = "Cacher recherche avancée"
      Effect.Appear(advancedSearchBox.id, {from: 0.0, to: 1.0, duration: 0.2});
    advancedSearchActivated.value = "true";
  }else{
    Effect.Appear(advancedSearchBox.id, {from: 1.0, to: 0.0, duration: 0.2});
    advancedSearchActivated.value = "false";

    setTimeout(function(){
        advancedSearchBox.style.display = "none"; 
        document.getElementById("advanced-search-link").innerHTML = "Recherche avancée"
        }, 200);
  }
}

function displaySearchAsLabel(){
  var form = document.getElementsByClassName("filter")[0];

  var values = getFormFields(form);

  html = "<ul class='filter-selected'>";
  for(var i = 0; i < values.length; i++ ){
    var label = values[i][0] + ": " + values[i][1];
    html += createSearchLabel(label, values[i][2]);
  }
  html += "</ul>";

  var filterWrapper = document.getElementById("default-search");
  var labelWrapper = document.createElement('div');
  var insertText = document.createTextNode(html);
  labelWrapper.innerHTML = html;
  filterWrapper.hide();
  document.getElementById("submit-box").hide();
  filterWrapper.parentNode.insertBefore(labelWrapper, filterWrapper);
}

function getFormFields(form){
  var fields = [];
  for(var i = 0; i < form.elements.length; i++ ){
    var e = form.elements[i];
    if (e.type !== "hidden" && e.type !== "submit" && e.value !== "" && e.value !== "0"){
      if (e.tagName === "SELECT"){
        var label = e.options[0].text; 
        var value = getSelectedText(e.id);
      }else{
        var label = e.placeholder || e.name;
        var value = e.value;
      }
      fields.push([label, value, e.name]);
    }
  }
  return fields;
}

function getSelectedText(elementId) {
  // providing a <select> id, return the text of the selected option, if any.
  var elt = document.getElementById(elementId);

  if (elt.selectedIndex == -1) return null;
  return elt.options[elt.selectedIndex].text;
}

function createSearchLabel(name, field_name){
  return "<li class='bg-blue' href='#' data-name='" + field_name + "'><svg width='9px' height='9px' viewBox='0 0 9 9'><g stroke-width='1' fill-rule='evenodd'><g id='remove-ico' stroke-width='0.8'><path d='M0.4,0.4 L8.4,8.4'></path><path d='M0.4,8.4 L8.4,0.4'></path><path d='M0.4,0.4 L8.4,8.4'></path><path d='M0.4,8.4 L8.4,0.4'></path></g></g></svg>" + name + "</li>";
}
