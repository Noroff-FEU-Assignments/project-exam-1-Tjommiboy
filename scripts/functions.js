const api_url = 'https://www.fjord1design.com/pe1/wp-json/wp/v2/posts';
const boardselement = document.querySelector('.carousel');


async function getSynths(){
   const respons = await fetch(api_url);
   const json = await respons.json();
    console.log(json);
 

}



getSynths();




