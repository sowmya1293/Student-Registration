let name = document.getElementById("name")
let age = document.getElementById("age")
let email = document.getElementById("emailInput")

let saveDataBtn = document.getElementById("add-button")
saveDataBtn.disabled = true

function validateEmail(){
    if ((!email.value.includes('@'))&&(!email.value.includes('.com'))){
        alert("Email is invalid")
    }
    else{
        saveDataBtn.disabled = false
    }
}

let data = {}

function saveData(){
    data.name = name.value
    data.age = age.value
    data.email = email.value

    let tableBody = document.getElementById('tableBody')
    let newRow = document.createElement('tr')

    let colName = document.createElement('td')
    colName.textContent = data.name
    newRow.appendChild(colName)

    let colAge = document.createElement('td')
    colAge.textContent = data.age
    newRow.appendChild(colAge)

    let colEmail = document.createElement('td')
    colEmail.textContent = data.email
    newRow.appendChild(colEmail)

    let colModify = document.createElement('td')
    colModify.setAttribute('id','col-modify')
    let editButton = document.createElement('button')
    editButton.setAttribute('id','editButton')
    editButton.textContent = "Edit"
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('id','deleteButton')
    deleteButton.textContent = 'Delete'
    colModify.appendChild(editButton)
    colModify.appendChild(deleteButton)
    newRow.appendChild(colModify)

    tableBody.appendChild(newRow)

    name.value = ""
    age.value = ""
    email.value = ""

    saveDataBtn.disabled = true

    editButton.addEventListener("click",function(){
        colName.setAttribute('contentEditable','true')
        colAge.setAttribute('contentEditable','true')
        colEmail.setAttribute('contentEditable','true')
    })
    colName.addEventListener("blur",function(){
        colName.setAttribute('contentEditable','false')
    })
    colAge.addEventListener("blur",function(){
        colAge.setAttribute('contentEditable','false')
    })
    colEmail.addEventListener("blur",function(){
        colEmail.setAttribute('contentEditable','false')
    })

    deleteButton.addEventListener("click",function(){
        let row = deleteButton.parentNode.parentNode
        row.parentNode.removeChild(row)
    })
    
}