var arr=[];


function addUrl(){

    if(isValid()==true){
        var url={
            urlName:document.getElementById("sitename").value,
             urlAdress:document.getElementById("siteurl").value,
            
        }
        
       
        var flag=0;
        
    
    
        for(var i=0;i<arr.length;i++){
            if( url.urlName==arr[i].urlName||url.urlAdress==arr[i].urlAdress){
                
                flag++;
    
    
                
            }
           
    
    
    
        }
        if(flag==0){
            arr.push(url);
            clearForm();
            display(arr);
        }
        else{
            window.alert(" url adress or name Already exists");
        }
        console.log(arr);
    
        
    }
    else{
        window.alert(" Site URL must be a valid one");

    }
    
    }


   

function display (listOffUrl){
    var box=``;
    
    for(var i=0;i<listOffUrl.length;i++){

       box+=`<tr>
       <td class="py-2">${i+1}</td>
       <td class="py-2">${listOffUrl[i].urlName}</td>
       <td class="py-2">
       <button class="btn  btn-one"><i class="fa-solid fa-eye pe-2"></i><a href="${listOffUrl[i].urlAdress}" target="_blank">visit</a></button>

       

       </td>
       <td class="py-2">
       <button  onclick="deleteUrl(${i})"class="btn  btn-two"><i class="fa-solid fa-trash-can px-2"></i>Delete</button>

       
       </td>
   </tr>`;
    }
    document.getElementById("doc").innerHTML=box;


}


function clearForm() {


    document.getElementById("sitename").value="";
    document.getElementById("siteurl").value="";
    
    
}
function deleteUrl(index){
    arr.splice(index,1);
    display(arr);

}
function isValid(){
    

    var urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(urlPattern.test(document.getElementById("siteurl").value)==true){
        return true;
    }
    else{
        return false;
    }


}
