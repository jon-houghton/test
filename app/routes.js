const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/juggling-balls-answer', function(req,res){

  // req,res - remember it's a comma

    var jugglingBalls = req.session.data['juggling-balls']

    if (jugglingBalls == "3 or more"){
      res.redirect("/juggling-trick")
    } else {
      res.redirect("/ineligible")
    }

})

// JCH note: 'req' is the request, 'res' is the response



module.exports = router
