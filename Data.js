// const Data=document.getElementsByClassName("tbody");
const handlePromise = async()=>{
    try {
     const response = await fetch("http://localhost:8080/api/employee/data",{method:"POST"});
     const jsons=await response.json();
     console.log(jsons)
    const Data=document.getElementsByClassName("tbody");
    jsons.forEach(jsons=>{
    const row=document.createElement("tr");
    let User=document.createElement("td");
    User.innerText=jsons.UserId;
    row.appendChild(User);
    let Email=document.createElement("td");
    Email.innerText=jsons.Email;
    row.appendChild(Email)
    let Title=document.createElement("td");
    Title.innerText=jsons.Title;
    row.appendChild(Title)
    let Body=document.createElement("td");
    Body.innerText=jsons.Body;
    row.appendChild(Body)
    Data.appendChild(row)
    });

    
    } catch (error) {
      
        console.error(error,"jjjj")
    }
    
    }
    handlePromise();