const api_url = 'https://www.fjord1design.com/pe1/wp-json/wp/v2/posts?_embed';
const boardsElement = document.querySelector('.boardscontainer');

const url = 'https://www.fjord1design.com/pe1/wp-json/wp/v2/posts?_embed';
 
async function getData(url) {
  const data = await fetch(url);
  const json = await data.json();
  console.log(json[0]._embedded['wp:featuredmedia'][0].source_url);
}
 
getData(url);


export default async function getSynths() {
    try {

    const response = await fetch(api_url);
    const synths = await response.json();
     console.log(synths)
    boardsElement.innerHTML = "";
    synths.forEach(function (synths) {
        boardsElement.innerHTML += `    <div class="boardsposts">
                                        <a  href="productspecific.html?id=${synths.id}">  
                                        <h2 class="boardcard">${synths.title.rendered}</h2>
                                 
                                
                                        <img class="imgboards"src=${"synths.[0]._embedded['wp:featuredmedia'][0].source_url)"}></img>
                               
                                        </a>   
                                    
                                  </div> `;
    });
  } catch (error) {
    console.log(error);
  }

  }
  

  
