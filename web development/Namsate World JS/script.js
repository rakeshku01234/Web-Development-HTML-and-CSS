let namastebtn = document.querySelector('button')
namastebtn.addEventListener('click',inputMsg)

function inputMsg(){
  let name = prompt('Enter Name of Student');
  namastebtn.textContent = 'Roll No.1:'+ name
}
// let name = prompt("Enter your first name")
// let name1 = prompt("Enter your last name")
// let names = `${name}${name1}`
// console.log(names);