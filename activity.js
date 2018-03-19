$(document).ready(function(){




   function Activity(user,activity){
       var self= this;
       self.name = name;
       self.activity = ko.observable(activity);
   }
    
    function LetsEatViewModel(){
        var self =this;

        //activities
        self.activities =[{activityName:"Jason's deli",location:"123 Rum Day",category:"pizza"},
        {activityName:"Pizza hut",location:"456 blue Day",category:"pizza"}];

        //users
        self.users = ko.observableArray([
            new Activity("Steve",self.activities[0]),
            new Activity("Bert",self.activities[0])

        ])
    }

    ko.applyBindings(new LetsEatViewModel());

})