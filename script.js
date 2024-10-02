const btn = document.querySelector("#btn");
const joke = document.querySelector("#joke");

const api_key = "+zf0d76OZk34TTjW1FzPUA==9XZGpV4wrE538KLZ";

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": api_key,
    },
};  

const api_url = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke(){
    try {
        joke.innerText = "Updataing...";
        btn.disabled = true;
        btn.innerText = "Loading...";
        const data = await fetch(api_url, options).then(response => response.json());
        btn.disabled = false;
        btn.innerText = "Tell me a Joke";

        joke.innerText = data[0].joke;

    } catch (error) {
        joke.innerText = "An error Occured, try again later";
        btn.disabled = false;
        btn.innerText = "Tell me a joke";
        console.log(error);
    }
}

btn.addEventListener('click', getJoke);