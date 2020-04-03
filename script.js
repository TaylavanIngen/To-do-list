//SELECTEER ELEMENTEN

const clearElement = document.querySelector(".clear");
const dateElement = document.querySelector(".date");
const listElement = document.querySelector(".list");
const inputElement = document.querySelector(".item");
const inputButton= document.querySelector(".inputItem");


//INSERT ELEMENTEN


const addToDo = function(ToDo, done, id) {


  const amIdone = done ? checkedIcon : uncheckedIcon;
  const amIdone2 = done ? textDoorstreep : "";

  const htmlToDo = `<li class="toDoItem" id=${id}>
                    <i class="co fa ${amIdone}" job="complete"></i>
                    <p class="${amIdone2}"> ${ToDo}</p>
                    <i class="de fa fa-trash-o" job="delete"></i>
                  </li>`

  const position = "beforeend";



  listElement.insertAdjacentHTML(position, htmlToDo);

}


//COMPLETE TODOITEM

const completeToDoItem = function(element) {

  element.classList.toggle(checkedIcon);
  element.classList.toggle(uncheckedIcon);
  element.parentNode.querySelector("p").classList.toggle(textDoorstreep);



}

const completeToDoItemBackEnd = async function(hashtag) {
  try {

    const completeMyItem = await fetch(`https://wincacademydatabase.firebaseio.com/tayla/tasks/${hashtag}.json`, {
      method: "PATCH",
      body: JSON.stringify({
        done: true
      }),

    })
    const completedItemData = await completeMyItem.json();
    console.log(completedItemData);
  } catch (err) {
    console.log(err.message)
  }
}

//REMOVE TODOITEM

const removeToDoItem = function(element) {

  element.parentNode.parentNode.removeChild(element.parentNode);

}


const removeToDoItemBackEnd = async function(hashtag) {
  try {
    const deleteMyItem = await fetch(`https://wincacademydatabase.firebaseio.com/tayla/tasks/${hashtag}.json`, {
      method: "DELETE"
    })
    console.log(deleteMyItem);
  } catch (err) {
    console.log(err.message);
  }
}

//REMOVE EVERYTHING

const removeEverything = function() {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
}

const removeEverythingBackEnd = async function() {
  try {
    const removeEveryItem = await fetch(`https://wincacademydatabase.firebaseio.com/tayla/tasks/.json`, {
      method: "DELETE"
    })
  } catch (err) {
    console.log(err.message);
  }
}

//EVENTS


document.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {
    const toDoInput = inputElement.value;
    if (toDoInput) {
      postData(toDoInput, false);

    };
    inputElement.value = "";
  }
})


inputItem.addEventListener("click", function(event) {

    const toDoInput = inputElement.value;
    if (toDoInput) {
      postData(toDoInput, false);

    };
    inputElement.value = "";
  })


listElement.addEventListener("click", function(event) {

  const elementJob = event.target.attributes.job.value;
  let elementID = event.target.parentNode.id

  if (elementJob === "complete") {

    completeToDoItem(event.target);
    completeToDoItemBackEnd(elementID)

  } else if (elementJob === "delete") {



    removeToDoItem(event.target);
    removeToDoItemBackEnd(elementID);

  } else {
    return;
  }

})

clearElement.addEventListener("click", function(event) {

  removeEverything();
  removeEverythingBackEnd();

})


//VERANDER ICOONTJES

const checkedIcon = "fa-check-circle";
const uncheckedIcon = "fa-circle-thin";
const textDoorstreep = "lineThrough";

//DATUM VERANDEREN
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today= new Date();
dateElement.innerHTML= today.toLocaleDateString(undefined, options);

//POST ITEM
const postData = async function(inputPost, done) {
  try {

    const resultPost = await fetch(' https://wincacademydatabase.firebaseio.com/tayla/tasks.json', {
      method: 'POST',
      body: JSON.stringify({
        description: inputPost,
        done: done
      })
    });
    const dataPost = await resultPost.json();
    console.log(dataPost);
    addToDo(inputPost, done);
  } catch (err) {
    console.log(err.message)
  }
}
