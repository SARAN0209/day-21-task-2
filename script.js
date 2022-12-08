async function getdetails(){
    // storing value of platform variable from the user
    var getkural=document.querySelector(".kural").value;
    console.log(getkural);
    
    //changing the end point of the URL with user Input
    let  baseurl=`https://api-thirukkural.vercel.app/api?num=${getkural}`;
    // using await  fetch  storing the response in get variable
    let get = await fetch(baseurl);
    //by using await contvert reablestream to json format to access the values
    var result=await get.json();
    
    var div=document.createElement("div");
    div.setAttribute("class","kuralcontainer");
       div.innerHTML=`<div class="card-body">
       Thirukural NO:${getkural}
         <h5 class="card-title">${result.chap_tam}</h5>
         <hr>
         <p class="l1">${result.line1}</p>
         <p class="l2">${result.line2}</p>
         <h5>Meaning in Tamil</h5>
         <hr>
         <p>${result.tam_exp}</p>
         <button type="button" onclick="getEnglishdetails()">TO English</button?
        </div>`
    
     var a=document.querySelector(".container");
     a.append(div);
    }
    async function getEnglishdetails(){
       // storing value in  variable englishkural from the user
       var englishkural=document.querySelector(".kural").value;
       console.log(englishkural);
       
       //changing the end point of the URL with user Input
       let  eurl=`https://api-thirukkural.vercel.app/api?num=${englishkural}`;
       // using await  fetch  storing the response in get variable
       let eng_get = await fetch(eurl);
       //by using await contvert reablestream to json format to access the values
       var eng_result=await eng_get.json();
       
       var div=document.createElement("div");
       div.setAttribute("class","kuralcontainer");
          div.innerHTML=`<div class="card-body">
          Thirukural NO:${englishkural}
       <h5 class="card-title">${eng_result.chap_eng}</h5>
            <hr>
            <p class="l1">${eng_result.line1}</p>
            <p class="l2">${eng_result.line2}</p>
            <h5>Meaning in English</h5>
            <hr>
            <p>${eng_result.eng_exp}</p>
           </div>`
        var b=document.querySelector(".container");
        b.append(div);
       }