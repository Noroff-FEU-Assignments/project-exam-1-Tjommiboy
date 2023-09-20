const api_url = 'https://www.fjord1design.com/pe1/wp-json/wp/v2/posts?_embed';
const boardsElement = document.querySelector('.boardscontainer');

async function getSynths() {

  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length && i < 8; i++) {
      const post = data[i];

      /*const carouselElement = document.createElement('div');
      carouselElement.classList.add('carousel-item'); 
      boardsElement.appendChild(carouselElement);

      /*const latestpostElement = document.createElement('div');
      latestpostElement.classList.add('latestpost'); 
      carouselElement.appendChild(latestpostElement);

      const latestcardElement = document.createElement('div');
      latestcardElement.classList.add('latestcard');
      latestpostElement.appendChild(latestcardElement);*/

      const productElement = document.createElement('div');
      productElement.classList.add('boardsposts');
      boardsElement.appendChild(productElement);

      const titleElement = document.createElement('h2');
      titleElement.classList.add('boardcard')
      titleElement.textContent = post.title.rendered;
      productElement.appendChild(titleElement);

      if (post.featured_media) {
        const imageUrl = post._embedded['wp:featuredmedia']['0'].source_url;
        const imageElement = document.createElement('img');
        imageElement.classList.add('img')
        imageElement.src = imageUrl;
        productElement.appendChild(imageElement);
        console.log(post.featured_media);
      }
    }
  } catch (error) {
    console.error(error);
    boardsElement.innerHTML = 'An error occurred while fetching data.';
  }
}

getSynths();
