const messageNode = document.getElementById('message');

const render = (message = "", DOMnode = messageNode) => {
    DOMnode.textContent = message;
}

const getData = async () => {
 try{
const response = await fetch('/.netlify/functions/hello-world')
if(!response.ok) throw response;
const data = await response.json();
console.log(data);
render(data.message);
 } catch (err){
altert ('Error fetching check onsole')
console.log(err);
 }
}

getData();