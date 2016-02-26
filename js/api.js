if(typeof window.iLite == "undefined")
  window.iLite = {}
if(!window.iLite.api)
  window.iLite.api = {}


var iLiteAPI = (function () {
  
  var self = this

  this.Resources = {
    Events: [
      {
        Title: "Robotics Meeting",
        Date: "May 12 2015",
        Description: "Come support the team..",
        Location: "Haymarket, VA"
      },
      {
        Title: "Robotics Competition",
        Date: "May 12 2015",
        Description: "Come support the team..",
        Location: "Haymarket, VA"
      },
      {
        Title: "Robotics Competition",
        Date: "May 12 2015",
        Description: "Come support the team..",
        Location: "Haymarket, VA"
      }
    ]
  }

  this.loadResources = function (resources, done) {
    resources.map(function (resource) {
      self.Resources[resources.Type].push(response.data); 
      done()
    })
  }

  this.get = function (fn) {
    return $.ajax({ url: "api/" + fn })
  }

}).call(window.iLite.api)
