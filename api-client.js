//GET
const fetchData = async function() {
  try {
    const result = await fetch(' https://wincacademydatabase.firebaseio.com/tayla/tasks.json', {
      method: "GET"
    })
    const data = await result.json();
    console.log("Before (the raw result):", data);
    let tasks = Object.keys(data).map(key => ({
      id: key,
      description: data[key].description,
      done: data[key].done
    }));
    console.log("After the tasks array", tasks);
    tasks.forEach(task=>{

      addToDo(task.description, task.done, task.id);

    })
  } catch (err) {
    console.log(err.message);
  }
};

fetchData();
