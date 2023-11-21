module.exports = {
    async subscribe(ctx) {
        console.log(ctx.request.body)

        try {  
            // do the mailchimp things (Their SDK)

            return {
                okay: true
            }
        } catch (e) {
            return ctx.badRequest("Unkown error happened here, sorry")
        }
    }
}