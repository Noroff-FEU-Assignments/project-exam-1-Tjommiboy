const product_container = document.querySelector(".keyboard_id");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://www.fjord1design.com/pe1/wp-json/wp/v2/posts/" + id + "?embed";

async function getproduct() {
  try {
    const response = await fetch(url);
    const board = await response.json();
    console.log(board);

    product_container.innerHTML = "";
    createHtml(board);
  } catch (error) {
    console.log(error);
    product_container.innerHTML = ("error", error);
  }
}

getproduct();

function createHtml(details) {
  product_container.innerHTML += `
           <div class="product_card">
             <div class="specificposts">
                   <h2 class="boardcardspesific">${details.title.rendered}</h2>
                   <img class="imgboards" src="${details._links._embed["wp:featuredmedia"]?.[0].source_url}">
               <div class="carddivided">
                  <div>
                    <p class="detail__title">${details.content.rendered}</P>
                  </div>
                  <div>
                    <p class="detail__title">${details.excerpt.rendered}</P>
                  </div>
               </div>
        
             </div>
          </div>
          `;
}
