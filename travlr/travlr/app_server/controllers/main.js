/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travlr Geetaways' });
};
module.exports = {
    index
}