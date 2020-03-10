module.exports = {
    renderRegisterPage: function(req, res) {
      res.render("registerpage", {
        title: "Register page"
      });
    },
  
    renderLoginPage: function(req, res) {
      res.render("loginpage", {
        title: "Login page"
      });
    },
    homepage: function(req,res){
        userName=req.session.userName
        res.render("welcomepage",{
            title:"Home page",
            name:userName
        })
    }
  };