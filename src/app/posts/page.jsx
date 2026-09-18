import React from 'react';

// With Promise

// const postPromise = async()=>{
//     const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
//     // const posts = await res.json();
//     return res.json();
// } 

// with get

const getPosts = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return  res.json()
}




// try catch 

const getPosts2 = async() => {
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return  res.json()   
    } catch (error){
        throw new Error('Faileed to return fetch')
    }
}


const getPosts3 = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok){
        throw new Error ('data fetching failed')
    }
    return  res.json()
}



const PostPage = async () => {

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const posts = await res.json();

//  for Promise
// const posts = await postPromise();



// for get
// const posts = await getPosts();

// console.log(posts);


// for try catch 
// const posts = await getPosts2();

const posts = await getPosts3();

    return (
        <div>
            <h2>  Hello POST: {posts.length}</h2>
        </div>
    );
};

export default PostPage;