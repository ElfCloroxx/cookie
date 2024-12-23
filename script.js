const cookies = document.querySelectorAll('.cookie');
const cookiesLeftText = document.getElementById('cookies-left');
let cookiesLeft = cookies.length;

cookies.forEach(cookie => {
    cookie.addEventListener('click', () => {
        if (!cookie.classList.contains('eaten')) {
            cookie.classList.add('eaten');
            cookiesLeft--;
            cookiesLeftText.textContent = `${cookiesLeft} Cookies Left!`;

            // If all cookies are eaten, show a celebration
            if (cookiesLeft === 0) {
                setTimeout(() => {
                    alert('🎉 All cookies NOMMED! Happy Birthday Haaris! <33 LALALA BIG INSERT YAP');
                }, 500);
            }
        }
    });
});
