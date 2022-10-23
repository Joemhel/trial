const fullname = document.getElementById('fullname')
const relationship = document.getElementById('relationship')
const contactNum = document.getElementById('contactNum')
const address = document.getElementById('address')
const membership = document.getElementById('membership')
const file = document.getElementById('file')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

    if (fullname.value == '' || fullname.value == null){
        e.preventDefault()
    }

    else if (relationship.value == '' || relationship.value == null){
        e.preventDefault()
    }

    else if(membership.value == "Choose Membership Plan"){
        alert('Please choose a membership plan')
        e.preventDefault()
    
    }

    else {
        
        function nxtbtn(){
            document.location.hred = 'result.html';
        }
    }


    
})


