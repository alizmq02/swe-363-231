module.exports = {
    index: (req, res) => {
        res.render('chat.html')
    },
    contactUs: (req, res) => {
        res.render('contactUs.html')
    },
    hardForm: (req, res) => {
        res.render('hardForm.html')
    }
}