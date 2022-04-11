let count = 0;

let NameContact = document.getElementById("NameContact");

let LNameContact = document.getElementById("LNameContact");

let PhoneContact = document.getElementById("PhoneContact");

let btnAccept = document.getElementById("btnAccept");

let addContactbtn = document.getElementById("addContact-btn");

let btnCancel = document.getElementById("btnCancel");

let addContactArea = document.getElementById("addContactArea");

let addContactSection = document.getElementById("addContactSection");

let getContactSection = document.getElementById("getContactSection");

let contactTitle = document.getElementById("contactTitle");

let preloader = document.getElementById("preloader");


addContactbtn.onclick = function(){

    addContactbtn.style.display = "none";

    addContactArea.style.display = "flex";

    
}

btnCancel.onclick = function(){

    addContactbtn.style.display = "flex";

    addContactArea.style.display = "none";

    NameContact.value = "";

    LNameContact.value = "";

    PhoneContact.value = "";

    NameContact.className = "DataContact";

    LNameContact.className = "DataContact";

    PhoneContact.className = "DataContact";


    
}


btnAccept.onclick = function(){

    if(NameContact.value == "" || LNameContact.value == "" || PhoneContact.value == ""){}

    else if(NameContact.value.length < 4 ||  LNameContact.value.length < 4 ||  PhoneContact.value.length < 8 ){}

    else{

        event.preventDefault();

        let data = {

            nombre: NameContact.value,
        
            apellido:  LNameContact.value,
        
            telefono: PhoneContact.value
        }
        
        
        fetch("http://www.raydelto.org/agenda.php",{
        
                method: 'POST',

                body: JSON.stringify(data)
        
        }).then(function(){

            count += 1; 

            let contactSectionItems = document.createElement("div");

            let contactID = document.createElement("p");

            let contactName = document.createElement("p");

            let contactLastName = document.createElement("p");

            let contactPhone = document.createElement("p");

            contactSectionItems.className = "contactSectionItems";

            contactID.innerHTML = count;

            contactName.innerHTML = NameContact.value;
            
            contactLastName.innerHTML = LNameContact.value;
            
            contactPhone.innerHTML = PhoneContact.value;

            contactSectionItems.appendChild(contactID);

            contactSectionItems.appendChild(contactName);

            contactSectionItems.appendChild(contactLastName);

            contactSectionItems.appendChild(contactPhone);

            getContactArea.appendChild(contactSectionItems);

            getContactArea.scrollTop = getContactArea.scrollHeight;

            NameContact.value = "";

            LNameContact.value = "";

            PhoneContact.value = "";

            NameContact.className = "DataContact";

            LNameContact.className = "DataContact";

            PhoneContact.className = "DataContact";

            addContactbtn.style.display = "flex";

            addContactArea.style.display = "none";

        });
        


    }

    
}





NameContact.onfocus = function(){

    NameContact.className = "DataContactSelect";

    LNameContact.className = "DataContact";

    PhoneContact.className = "DataContact";
}


LNameContact.onfocus = function(){

    LNameContact.className = "DataContactSelect";

    NameContact.className = "DataContact";

    PhoneContact.className = "DataContact";
}

PhoneContact.onfocus = function(){

    PhoneContact.className = "DataContactSelect";

    LNameContact.className = "DataContact";

    NameContact.className = "DataContact";
}



function GetData (){

    addContactSection.style.height = window.innerHeight + "px";

    getContactSection.style.height = window.innerHeight + "px";

    fetch("http://www.raydelto.org/agenda.php").then(function(e){

    return e.json();

    }).then(function(c){


        c.map(function(cs){

            count += 1; 


               let contactSectionItems = document.createElement("div");

               let contactID = document.createElement("p");

               let contactName = document.createElement("p");

               let contactLastName = document.createElement("p");

               let contactPhone = document.createElement("p");

               contactSectionItems.className = "contactSectionItems";

               contactID.innerHTML = count;

               if(cs.nombre == ""){

                contactName.innerHTML = "Null";

               }

               else{

                contactName.innerHTML = cs.nombre;
               }

               if(cs.apellido == ""){

                contactLastName.innerHTML = "Null";

               }

               else{

                contactLastName.innerHTML = cs.apellido;
               }

               if(cs.telefono == ""){

                contactPhone.innerHTML = "Null";

               }

               else{

                contactPhone.innerHTML = cs.telefono;
               }


               contactSectionItems.appendChild(contactID);

               contactSectionItems.appendChild(contactName);

               contactSectionItems.appendChild(contactLastName);

               contactSectionItems.appendChild(contactPhone);

               getContactArea.appendChild(contactSectionItems);

               preloader.style.display = "none";

            
        })
    })
}



GetData();




