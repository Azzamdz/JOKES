async function  generateJoke() {
    
    const config = {
        headers: {
            Accept:'application/json',
        },
    }

const res = await fetch('https://icanhazdadjoke.com', config)

const data = await res.json()

const joke = data.joke

document.getElementById('jokes').innerText = joke;
}

document.getElementById('Btn').addEventListener('click', generateJoke)
