let accesskey = "lFC3fvwP6Mvi8qCxkgZsvYqfZ_0VyQFYwNKgH_O_DZY";
let searchinput = document.getElementById("searchinput");
let searchbtn = document.getElementById("searchbtn");
let showdata = document.querySelector(".showdata");
let morebtn = document.querySelector("#morebtn");
let page = 1;
let loadmore = document.querySelector(".loadmore");


const getdata = async (searchvalue, pageno)=>{
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchvalue}&per_Page=28&P=${pageno} age&client_id=${accesskey}`);
    
    let jsondata = await fetching.json();
    // console.log(jsondata.results[0].urls.full);

    if(searchvalue == ""){
        alert("Enter Correct Search Value");
    }else{
        loadmore.style.display = "block";
    }

    if(pageno === 1) showdata.innerHTML = "";    

    jsondata.results.forEach((data)=>{
        // console.log(data.urls.small);
        let div = document.createElement("div");
        div.classList.add("card");
        showdata.appendChild(div);

        div.innerHTML = `
        <img src="${data.urls.small}" alt="">
        <a target="_blank" href="${data.links.html}">${(data.alt_description)}</a>
        `
    })


}

 


searchbtn.addEventListener("click",function(){
    let searchvalue = searchinput.value;
    getdata(searchvalue,1);
    page = 1;
    // searchinput.value = "";
})

morebtn.addEventListener("click",function(){
    let searchvalue = searchinput.value;
    getdata(searchvalue, ++page);
})