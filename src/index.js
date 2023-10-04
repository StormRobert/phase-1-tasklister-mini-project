document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("The DOM has loaded")
  let form = document.querySelector('form')
form.addEventListener('submit', (event)=>{//submit event
    e.preventDefault()// preventDefault()method used to stop the submission of the form and also to prevent the browser from refreshing itself while performing some task . By using it as a value to onsubmit event.
    console.log(e.target.new-task-description.value) //target is the thing being acted upon
    form.reset() //reset the data in all fields in the form. When resetting a field, data will be set to the field's default value or to null if the field has no default value.
})

});
function createToDo(todo){
  let p = document.createElement('p') //creating the paragraph element
  let btn = document.createElement('button') //creating the delete button
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo}`
  p.appendChild(btn) //we just added the button as a child of the paragraph
  console.log(p)
  document.querySelector('#list').appendChild(p) //created a child <p> in the todo_container P.S the"todo_container" is an id thats it has a hash
}
//the created callback function for the delete btn
function handleDelete(event){
  event.target.parentNode.remove()
}
