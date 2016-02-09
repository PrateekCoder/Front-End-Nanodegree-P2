//First class
//$("#main").append(["Prateek Gaurav"]);

//Secind class
//var email = "prateekgaurav23@udacity.com"
//var new_email = email.replace("udacity", "gmail")
//console.log(email);
//console.log(new_email);

//Third Class
//var awesome_thought = "My name is Prateek and I am AWESOME!"
//var funny_thought = awesome_thought.replace("AWESOME", "FUNNY")
//console.log(awesome_thought);
//console.log(funny_thought);
//$ ("#main").append(funny_thought);

//Fourth Class


//FIFTH CLASS
/*var bio = {
  "name" = "Prateek Gaurav",
  "age" = 32,
  "skills" = skills
};

$("#main").append(bio.name);
*/

/* var work = {};
work.position = "Managing Director";
work.employer = "Google";
work.years = 3;

var education = {};
education["name"] = "Standford University";
education["years"] = "2008-2012";
education["city"] = "Standford, USA";

$("#main").append(education.name);
$("#main").append(work["position"]);
*/

//BIO OBJECT
var bio = {
  "name" : "Prateek Gaurav",
  "role" : "Front-End Developer",
  "welcome-message" : "Welcome to My Interactive Resume",
  "contacts" : [
    "mobile" : 95601111,
    "email" : "prateekgaurav23@gmail.com",
    "github" : "PrateekCoder",
    "twitter" : "PrateekGaurav23",
    "location" : "New Delhi"
  ],
  "skills" : ["Python", "Front-End Development", "Full-Stack Development", "Creaivity"];
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$ ("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$ ("#header").append(formattedRole);

var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcome-message);
$("#header").append(formattedWelcomeMessage);

var formattedMobile = HTMLmobile.replace("%data%", bio.formattedMobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#header").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.github);
$("#header").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replcae("%data%", bio.twitter);
$("#header").append(formattedTwitter);

var formattedLocation = HTMLlocation.replcae("%data%", bio.location);
$("#header").append(formattedLocation);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedSkills);

//Project Objects
/*var projects = {
  "projects" :[
    {
      "title" :
      "dates" :
      "description" :
      "images" :
    },
    {
      "title" :
      "dates" :
      "description" :
      "images" :
    },
    {
      "title" :
      "dates" :
      "description" :
      "images" :
    }
  ]
};
*/
//Work Object
var work = {
  "jobs" : [
    {
       "employer" : "Google",
       "title" : "Junior Front-End Developer",
       "location" : "Seattle, USA",
       "dates" : "2012-2014"
       "description" : "My first Job, yay!"

    },
    {
       "employer" : "Apple",
       "title" : "Managing Director",
       "location" : "California, USA",
       "dates" : "2014-till-date",
       "description" : "MD... COOL!",

    }
  ]
};



//Eduction Object
var education = {
  "schools" : [
    {
      "name" : "IIT",
      "city" : "New Delhi",
      "degree" : "B.Tech",
      "major" : ["Computer Science", "German"],
      "url" : "iitd.co.in"
    },
    {
      "name" : "Standford",
      "city" : "Standford, USA",
      "degree" : "M.Tech",
      "major" : ["Artificial Intellegence"],
      "url" : "standford.edu"
    }
  ],
  "online-courses" : [
    {
      "name" : "Udacity",
      "website" : "udacity.com",
      "courses" : ["Front-End Developer Nanodegree", "Intro to Programming"],
      "url" : "udacity.com"
    },
    {
      "name" : "edX",
      "website" : "edx.com",
      "courses" : ["CS50", "MITx 6.0.0.1"],
      "url" : "edx.com"
    },
    {
      "name" : "coursera",
      "website" : "coursera.com",
      "courses" : ["Algorithms: design and analysis", "Machine learning"],
      "url" : "coursera.com"
    }
  ]
};

//LESSON-2 FLOW control-label
//If Statement Solution

if(bio.skills.length>0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

  $("#skills").append("formattedSkill");
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

  $("#skills").append("formattedSkill");
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

  $("#skills").append("formattedSkill");
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
}

//For-In loop quiz

for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}
