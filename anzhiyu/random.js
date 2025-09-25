var posts=["2025/09/24/OK了第一篇博客/","2025/09/23/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };