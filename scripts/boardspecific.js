const product_container = document.querySelector(".keyboard_id");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://www.fjord1design.com/pe1/wp-json/wp/v2/posts/" + id + "?_embed";

async function getproduct() {
  try {
    const response = await fetch(url);
    const board = await response.json();

    product_container.innerHTML = "";
    createHtml(board);
  } catch (error) {
    console.log(error);
    product_container.innerHTML = ("error", error);
  }
}

getproduct();

function createHtml(details) {
  console.log(details);
  product_container.innerHTML += `

             <div class="specificposts">
                   <h2 class="boardcardspesific">${details.title.rendered}</h2>
                  
               <div class="carddivided">
                  <div>
                  <img class="imgboard" src="${details._embedded["wp:featuredmedia"]?.[0].source_url}">
                  </div>
                  <div>
                       <p>${details.excerpt.rendered}</P>
                  </div>
                 
               </div>
                <div class="detail__title">
               <p>${details.content.rendered}</P>
               </div>
             </div>

          `;
}
