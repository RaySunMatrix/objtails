const receiveMessage = ev => {
//Check event.origin to see if it is a trusted sender.
//If you have a reference to the sender, validate event.source
//We only want to receive messages from http://sender.com, our trusted sender page.
    if (ev.origin !== "https://github.com" || ev.source !== window.opener)
        return;
//Validate the message
//We want to make sure it's a valid json object and it does not contain anything malicious
    let data;
    try {
        data = JSON.parse(ev.data);
//data.message = cleanseText(data.message)
    } catch (ex) {
        return;
    }
//Do whatever you want with the received message
//We want to append the message into our #console div
    const p = document.createElement("p");
    p.innerText = (new Date(data.time)).toLocaleTimeString() + " | " + data.message;
    document.getElementById("console").appendChild(p);
};