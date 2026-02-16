const user = [
    {name: "Rojit",
     address: "Bishnupur",
     email: {gmail:"tomthin@gmail.com", email:"gg@email"},
     phone : 89745582000,
     role: "admin",
     age: 15
    },
    {name :"Tomthinganba",
    address : "bishnupur ward five",
    email: {gmail:"tomthin@gmail.com", email:"gg@email"},
    phone : 89745582000,
    role: "user",
    age: 18
    },
    {name :"salam tombung singh",
        address : "keinou mamang leikai",
        email: {gmail:"tomthin@gmail.com", email:"gg@email"}, 
        phone : 89745582000,
        role : "user",
        age: 22
    },
    {name :"moirangthem ranjit singh",
        address : "naoremthong maning leikai",
        email: {gmail:"tomthin@gmail.com", email:"gg@email"}, 
        phone : 89745582000,
        role : "user",
        age: 42
   },
    ]
    const like = document.getElementById("like");
        for(let i=0; i<user.length; i++){
            like.innerHTML += `
            <h1 class=" ${user[i].role=="admin" ? "text-green-500" : "text-red-500" }
            "> Welcome 
            ${user[i].name} <span> Your address is ${user[i].address}</span>
            ${user[i].age <= 18 ? "child" : "adult" }
            </h1> 
            `
        }

    const result = user[3].role=="admin" ? "text-green-500" : "text-red-500";{
        console.log(result);
    }


    /////
    let a=1000;
    const test = a==0 ? "even" : "odd";{
    console.log( );
    }
    
    
    
    


    