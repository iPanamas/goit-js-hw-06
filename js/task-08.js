const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены!');
    }

    const objectForm = {
        email: email.value,
        password: password.value,
    };

    console.log(objectForm);
    event.currentTarget.reset();
}
