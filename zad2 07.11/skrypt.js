function  palindrome(wyraz) {
    wyraz = wyraz.replace(/\s/g, '').toLowerCase();
    return wyraz === wyraz.split('').reverse().join('');
}

function sprawdza() {
    const slowo = document.getElementById('slowo').value;
    const wynikk = document.getElementById('wynik');

    if (palindrome(slowo)) {
        wynikk.textContent = 'jest';
    } else {
        wynikk.textContent = 'nie jest';
    }
}
