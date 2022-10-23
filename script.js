const surname = document.getElementById('surname')
const givenName = document.getElementById('givenName')
const studentNum = document.getElementById('studNum')
const programid = document.getElementById('programid')
const contactInfo = document.getElementById('contactInfo')
const nxtbtn = document.getElementById('nxtbtn')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

    let studNumLength = []
    studNumLength = studentNum.value;

    if (surname.value == '' || surname.value == null){
        e.preventDefault()
    }

    else if (givenName.value == '' || givenName.value == null){
        e.preventDefault()
    }

    else if (studNumLength.length != 11){
        alert('Student Number is not valid')
        e.preventDefault()
    }

    else if(programid.value == "Choose Program"){
        alert('Please choose a program')
        e.preventDefault()
    
    }

    else {
        
        function nxtbtn(){
            document.location.hred = 'result.html';
        }
    }


    
})


