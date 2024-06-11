const list = document.querySelector(".js-list");

function serviceGetQuestions() {
  return fetch("http://127.0.0.1:3000/api/getall").then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
serviceGetQuestions().then((data) =>
  list.insertAdjacentHTML("afterbegin", createMarkup(data))
);

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, phone, name, email, comment }) => `
        <li data-id="${_id}" class="card">
        <div class="card-content">
          <h2 class="card-name">Name: ${name}</h2>
          <div class="card-phone">Phone: ${phone}</div>
          <div class="card-email">Email: ${email}</div>
          <div class="card-comment">${comment}</div>
        </div>
      </li>`
    )
    .join("");
}


// const result = await serviceGetQuestions()

// console.log(result)


const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
  };
  
  // ❌ SyntaxError: await is only valid in async function
  const users = await fetchUsers();
  console.log(users);