var posts=["2025/09/27/区块链？比特币？这到底是什么东西啊！/","2025/09/24/OK了第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };