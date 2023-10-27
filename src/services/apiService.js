import http from "./httpService";
import jsCookie from "js-cookie";

const url = "https://shiny-ox-leotard.cyclic.app";
// const url = "http:///localhost:1337";

export function getBlogs(opts) {
  // const { isSort, search, tag, author } = opts;
  // console.log(opts);
  let query = "?";
  // console.log(opts, "opts");
  if (opts.isSort === true) {
    console.log("wow");
    query = query.concat(`sort=true&`);
    console.log(query);
  }
  if (opts.search) {
    query = query.concat(`search=${opts.search}&`);
  }
  if (opts.tag) {
    query = query.concat(`tag=${opts.tag}&`);
  }
  if (opts.author) {
    query = query.concat(`author=${opts.author}&`);
  }
  // console.log(`${url}/blogs${query}`);
  return http.get(`${url}/blogs${query}`);
}
export function getBlogImage(id) {
  return http.get(`${url}/blogImage/${id}`);
}
export function getAuthorId(author) {
  return http.get(`${url}/author?name=${author}`);
}
export function getAuthor(id) {
  return http.get(`${url}/author/${id}`);
}
export function listAuthor(search) {
  if (search) return http.get(`${url}/authors?search=${search}`);

  return http.get(`${url}/authors`);
}
export function createAuthor(author) {
  return http.post(`${url}/author`, author);
}
export function updateAuthor(id, author, func) {
  if (func) return http.put(`${url}/author/${id}?use=${func}`, author);
  return http.put(`${url}/author/${id}`, author);
}

export function follow(follower, followee) {
  return http.post(`${url}/follow/${followee}`, follower);
}
export function unFollow(follower, followee) {
  return http.post(`${url}/unfollow/${followee}`, follower);
}
export function getFollowers(author) {
  console.log(author);
  return http.get(`${url}/followers/${author}`);
}
export function createBlog(blog) {
  console.log(blog);
  return http.post(`${url}/blogs`, blog);
}

export function getBlog(id) {
  return http.get(`${url}/blogs/${id}`);
}

export function editBlog(blog, id) {
  return http.put(`${url}/blogs/${id}`, blog);
}

export function createComment(comment) {
  jsCookie.set("jwt", localStorage.getItem("token"), { path: "/" });
  return http.post(`${url}/comments`, comment);
}

export function getComment() {
  return http.get(`${url}/comments`);
}

export function updateComment(comment, id) {
  return http.put(`${url}/comments/${id}`, comment);
}

export function sendVerificationMail(userId, email) {
  const obj = {
    userId: userId,
    email: email,
  };
  console.log("obj", obj);
  return http.post(`${url}/send-verificaion-mail`, obj);
}

export function uploadImage(image) {
  // console.log(image);
  console.log("llol");
  const formData = new FormData();

  formData.append("testImage", image);

  formData.append("name", "random");

  return http.post(`${url}/image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
