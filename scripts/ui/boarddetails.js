const product_container = document.querySelector(".keyboard_id");

export function createHtml(details) {
  console.log(details);
  product_container.innerHTML += `
  
               <div class="specificposts">
                     <h2 class="boardcardspesific">${details.title.rendered}</h2>
                    
                 <div class="carddivided">
                    <div>
                    <img class="imgboard" src="${details._embedded["wp:featuredmedia"]?.[0].source_url}">
                    </div>
                    <div class=boardspecification>
                         <p>${details.excerpt.rendered}</P>
                    </div>
                   
                 </div>
                  <div class="detail__title">
                 <p>${details.content.rendered}</P>
                 </div>
               </div>
             
            `;
}
