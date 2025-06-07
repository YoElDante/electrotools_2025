const controller = {
  main: (req, res, next) => {
    res.render('main', { title: 'Express' });
  }
}



module.exports = controller;