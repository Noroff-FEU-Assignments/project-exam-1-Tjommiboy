export default function renderPosts(posts, boardsElement) {
  let parent;

  for (let i = 0; i < posts.length; i++) {
    if (i % 3 === 0) {
      parent = document.createElement("div");
      parent.classList.add("posts-parent");
      boardsElement.appendChild(parent);
    }

    const post = posts[i];
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    parent.appendChild(postElement);

    if (
      post.featured_media &&
      post._embedded &&
      post._embedded["wp:featuredmedia"] &&
      post._embedded
    ) {
      const imageUrl = post._embedded["wp:featuredmedia"]["0"].source_url;
      const imageElement = document.createElement("img");
      imageElement.classList.add("img");
      imageElement.src = imageUrl;
      postElement.appendChild(imageElement);
      console.log(post.featured_media);
      const titleElement = document.createElement("h2");
      titleElement.classList.add("h2");
      titleElement.textContent = post.title.rendered;
      postElement.appendChild(titleElement);
    }
  }
}
