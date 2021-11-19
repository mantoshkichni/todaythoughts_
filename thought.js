

document.getElementById('thought').addEventListener('submit',function(e){
    
    const thought=document.getElementById('text').value;
    if(thought==='')
    alert('Please Fill the field')
    else
    {                                  
   const list=document.getElementById('table');
   const row=document.createElement('tr');
  row.innerHTML=`
  <td>${thought}</td>
  `;
  list.appendChild(row);
  document.getElementById('text').value='';



    e.preventDefault();
}
})