const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', mobileToggle);


function mobileToggle(){
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('block');
    mobileMenu.classList.toggle('hidden');
}

const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('inputfield');

inputForm.addEventListener('submit', submitForm);


async function submitForm(e){
    e.preventDefault();
    const enteredLink = inputField.value;
    const data = {link: enteredLink}
    const isValid = isValidUrl(enteredLink);
    if(!isValid || enteredLink.trim().length == 0){
        document.getElementById('error').textContent = 'input link is not valid';
    }else{
        document.getElementById('error').textContent = '';
        const response = await fetch('/short', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok){
            document.getElementById('error').textContent = 'something went wrong!';
        }else{
        const responseData = await response.json();
        document.getElementById('result-item').classList.remove('hidden');
        document.getElementById('original').textContent = responseData.original;
        document.getElementById('shortened').textContent = responseData.protocol + '://' + responseData.host + '/'+ responseData.shortened;
        document.getElementById('shortened').href = '/'+responseData.shortened;
        }
    }

}


function isValidUrl(str) {
    const pattern = new RegExp(
      '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );
    return pattern.test(str);
  }




