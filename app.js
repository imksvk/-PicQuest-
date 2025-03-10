let accesskey = "lFC3fvwP6Mvi8qCxkgZsvYqfZ_0VyQFYwNKgH_O_DZY";
let searchinput = document.getElementById("searchinput");
let searchbtn = document.getElementById("searchbtn");
let showdata = document.querySelector(".showdata");

const getdata = async (searchvalue)=>{
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchvalue}&per_Page=28&P=1age&client_id=${accesskey}`);

    let jsondata = await fetching.json();
    // console.log(jsondata.results[0].urls.full);

    jsondata.results.forEach((data)=>{
        // console.log(data.urls.small);
        let div = document.createElement("div");
        div.classList.add("card");
        showdata.appendChild(div);

        div.innerHTML = `
        <img src="${data.urls.small}" alt="">
        <a href="">${data.alt_description}</a>
        `
    })


}

 


searchbtn.addEventListener("click",function(){
    let searchvalue = searchinput.value;
    getdata(searchvalue);
})