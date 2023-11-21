module.exports = {
    routes: [
        {
            method: "POST",
            handler: "api::mailchimp.mailchimp.subscribe",
            path: "/subscribe"
        }
    ]
}