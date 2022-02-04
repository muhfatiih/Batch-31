
function showData(){
    let name = document.getElementById("name").value
    let phone = document.getElementById("telephone").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let comment = document.getElementById("comment").value
    

 

    if (name == "") {
        alert ("Name must not be empty") 
        return
    }
    console.log (name)

    if (phone == "") {
        alert ("Telephone number must not be empty")
    }
    console.log (phone)

    if (email == "") {
        alert ("Email must not be empty")
    }
    console.log (email)

    if (subject == "") {
        alert ("Subject must not be empty")
    }
    console.log (subject)

    if (comment == "") {
        alert ("Comment must not be empty")
    }
    console.log (comment
        )


    let emailReceiver = `fatihm3dy@gmail.com`

    let a = document.createElement(`a`)
    a.href = `mailto:${emailReceiver}?subject=${subject}&body= what up thought, i am ${name}, ${comment}`

    a.click()

    let dataObject = {
        Name : name,
        Email : email,
        phone,
        subject,
        comment

    }

    console.table( dataObject)
}

