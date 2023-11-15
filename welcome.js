function addEmployee(){
    let Id = document.getElementById('empid').value
    let Name = document.getElementById('name').value
    let Address = document.getElementById('address').value
    let Designation = document.getElementById('designation').value
    let Experience = document.getElementById('experience').value
    let Salary = document.getElementById('salary').value
    console.log(Name,Id,Address,Designation,Experience,Salary);

    if(Id=='' || Name==''||Address==''||Designation==''||Experience==''||Salary==''){
        alert('Fields cannot be empty')

    }else{
localStorage.setItem('ID',Id);
localStorage.setItem('NAME',Name);
localStorage.setItem('ADDRESS',Address);
localStorage.setItem('DESIGNATION',Designation);
localStorage.setItem('EXPERIENCE',Experience);
localStorage.setItem('SALARY',Salary);

alert("Employee added successfully");
}

    document.getElementById('empid').value = '';
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('experience').value = '';
    document.getElementById('salary').value = '';

}


function search(){
     


    
    let findEmp = document.getElementById('searchbyid').value
    console.log(findEmp);
     let id1 =localStorage.getItem('ID');
     let name1 =localStorage.getItem('NAME');
     let address1 = localStorage.getItem('ADDRESS');
     let designation1 =localStorage.getItem('DESIGNATION');
     let experience1 =localStorage.getItem('EXPERIENCE')
     let salary1 =localStorage.getItem('SALARY');
     
   
     
    
     


if(findEmp==id1){
     
    let finalresult =document.getElementById('result');

   const para = document.createElement("div")
   para.innerHTML = '';
   para.innerHTML=`
   <div style="padding-left:15px; border:none; margin:5px; background-color: white; font-size:small; font-family: monospace; padding-bottom:15px; width:400px"> 
   <h3 style="color:blue; text-align:center; padding-top:15px">EMPLOYEE DETAILS</h3></p>
   <p style="paddind:5px;  background-color:  rgb(192, 248, 248); margin:5px; width: 350px; padding: 4px; border-radius: 4px;">Employee id: ${id1}<br></p>
   <p style="paddind:5px;  background-color:  rgb(192, 248, 248); margin:5px; width: 350px; padding: 4px; border-radius: 4px;">Employee Name: ${name1}<br></p>
   <p style="paddind:5px;  background-color:  rgb(192, 248, 248); margin:5px; width: 350px; padding: 4px; border-radius: 4px;">Employee Address: ${address1}<br></p>
   <p style="paddind:5px;  background-color:  rgb(192, 248, 248); margin:5px; width: 350px; padding: 4px; border-radius: 4px;">Employee Designation: ${designation1}<br></p>
   <p style="paddind:5px;  background-color:  rgb(192, 248, 248); margin:5px; width: 350px; padding: 4px; border-radius: 4px;">Employee Experience: ${experience1}<br></p>
   <p style="paddind:5px;  background-color:  rgb(192, 248, 248); margin:5px; width: 350px; padding: 4px; border-radius: 4px; margin-bottom: 10px;">Employee Salary: ${salary1}</p>
   </div>`
   document.getElementById('findempp').appendChild(para);
//    document.getElementById('searchbyid').value='';

   
   let removeDetails = document.createElement('button')
   removeDetails.innerText = 'close';
   removeDetails.style.color='white';
   removeDetails.style.backgroundColor='blue';
   removeDetails.style.padding ='5px 5px 5px 5px';
   removeDetails.style.margin ='10px'
//    removeDetails.style.height ='30px'
//    removeDetails.style.width ='100px'
   removeDetails.style.textAlign ='center'

   

   removeDetails.addEventListener('click', function () {
       para.remove();
       removeDetails.remove();
       
   })
   document.getElementById('findempp').appendChild(removeDetails);
   document.getElementById('searchbyid').value='';
   
   
    
}else{
    
    
    alert('Employee not found');
    document.getElementById('searchbyid').value='';
    
}


    

}
let username = localStorage.getItem('USERNAME')
        console.log(username);
        welcome.innerHTML =`Welcome ${username}`
        welcome.style.color='blue';

        function logout(){
            localStorage.clear();
            window.location ='./login.html'
        }
