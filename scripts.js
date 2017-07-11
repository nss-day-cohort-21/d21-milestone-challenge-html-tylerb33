let myBlogPosts = {}
myBlogPosts.post1 = "<article><header><h4>CAME FROM JS post1 - Why You Should Stop Shopping at Kroger</h4></header><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa</p></article>";
myBlogPosts.post2 = "<article><header><h4>CAME FROM JS post2 - Why You Should Stop Shopping at Kroger</h4></header><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa</p></article>";

// console.log ("myBlogPosts value", myBlogPosts);
let message = "";
let getDiv = document.getElementById("blog-posts")


for (prop in myBlogPosts){
	message += myBlogPosts[prop];
}
getDiv.innerHTML = message;