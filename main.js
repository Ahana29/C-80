var names_array=[];
function submit_button(){
    var name1= document.getElementById("name_1").value;
  
    names_array.push(name1);
  document.getElementById("display_name").innerHTML= names_array.toString();
  
}
function show_hoomans(){
    var i= names_array.join("<br>");
    document.getElementById("p1").innerHTML=i.toString();
}
function search(){
    var s=document.getElementById("srch").value;
    var found=0;
    var k;
      for(k=0;k<names_array.length;k++){
          if(s==names_array[k])
          {
              found=found+1;
          }
      }
     document.getElementById("p2").innerHTML="name found "+ found+" time/s";
     console.log(found);
}
