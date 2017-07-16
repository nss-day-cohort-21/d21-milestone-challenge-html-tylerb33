let message = "";
let myBlogPosts = []
let getDiv = document.getElementById("blog-posts");

	myBlogPosts.push ({title:"Why You Should Stop Shopping at Kroger", copy:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa", date:"July 12, 2017"});
	myBlogPosts.push ({title:"Why You Should Shop at Kroger", copy:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa", date:"July 14, 2017"});

// myBlogPosts.post1 = `<article><header><h4>${myBlogPosts[i].title}</h4></header><p>${myBlogPosts[i].copy}</p><p>Written:</p><p>Written: ${myBlogPosts[i].date}</p></article>`;
// myBlogPosts.post2 = `<article><header><h4>${myBlogPosts[i].title}</h4></header><p>${myBlogPosts[i].copy}</p><p>Written: ${myBlogPosts[i].date}</p></article>`;




for (i = 0; i < myBlogPosts.length; i++) {
	message += `<article><header><h4>${myBlogPosts[i].title}</h4></header><p>${myBlogPosts[i].copy}<br><em>Written: ${myBlogPosts[i].date}</em></article>`;
	getDiv.innerHTML = message;
}


// console.log ("myBlogPosts value", myBlogPosts);




// let message = "";
// let getDiv = document.getElementById("blog-posts")


// for (burrito in myBlogPosts) {
// 	message += myBlogPosts[burrito];
// }
// getDiv.innerHTML = message;
