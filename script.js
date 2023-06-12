function validate_login() {
    let uname, pword;
    uname = document.getElementById('username').value;
    pword = document.getElementById('psw').value;

    if(uname == '') {
        alert('Please enter user name!!!')
    }
    else if(pword == '') {
        alert('Password is mandatory...')
    }
    else {
        confirm('Welcome, '+uname);
        window.location.href='home.html';
    }
}
function validate_register() {
    let uname, pword, repword, mno;
    uname = document.getElementById('username').value;
    pword = document.getElementById('psw').value;
    repword = document.getElementById('rpsw').value;
    mno = document.getElementById('mno').value;

    if(uname == '') {
        alert('Please enter user name!!!')
    }
    else if(pword == '') {
        alert('Password is mandatory...')
    }
    else if(pword.length < 8){
        alert('Password must be of atleast 8 characters')
    }
    else if(repword != pword){
        alert('Enter correct password')
    }
    else if(repword == ''){
        alert('Confirm your password')
    }
    else if(mno == '' || mno.length < 10){
        alert('Enter valid mobile number')
    }
    else {
        confirm('Welcome, ' + uname);
        window.location.href='home.html';
    }
}
function validate_contactus() {
    let name, email, mno;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    mno = document.getElementById('mno').value;

    if(name == '') {
        alert('Please enter your name!!!')
    }
    else if(email == '' || !email.includes('@') || !email.includes('.')) {
        alert('Enter valid e-mail')
    }
    else if(mno == '' || mno.length < 10) {
        alert('Enter valid mobile number');
    }
    else{
        Subforms();
    }
}