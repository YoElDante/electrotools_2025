const controller = {
  home: (req, res, next) => {
    res.render('home', { title: 'Express' });
  }
}



module.exports = controller;