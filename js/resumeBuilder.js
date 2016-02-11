//BIO OBJECT
var bio = {
  "name" : "Prateek Gaurav",
  "role" : "Front-End Developer",
  "welcome-message" : "Welcome to My Interactive Resume",
  "contacts" : {
    "mobile" : 95601111,
    "email" : "prateekgaurav23@gmail.com",
    "github" : "PrateekCoder",
    "twitter" : "PrateekGaurav23",
    "location" : "New Delhi"
  },
  "skills" : ["Python", "Front-End Development", "Full-Stack Development", "Creaivity"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$ ("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$ ("#header").append(formattedRole);

var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio["welcome-message"]);
$("#header").append(formattedWelcomeMessage);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);

//var formattedSkills = HTMLskills.replace("%data%", bio.skills);
//$("#header").append(formattedSkills);
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

//Work Object
var work = {
  "jobs" : [
    {
       "employer" : "Google",
       "title" : "Junior Front-End Developer",
       "location" : "Seattle, USA",
       "dates" : "2012-2014",
       "description" : "My first Job, yay!"

    },
    {
       "employer" : "Apple",
       "title" : "Senior Front-End Developer",
       "location" : "California, USA",
       "dates" : "2014-2015",
       "description" : "Got a Senior Tag with my Designation... YAY!!"

    },
    {
       "employer" : "Udacity",
       "title" : "Full-Stack Developer",
       "location" : "Silicon Valley, USA",
       "dates" : "2015-till-date",
       "description" : "No more front or back, it's FULL now! If you know what I mean."

    }
  ]
};

function displayWork(){
  for(var job in work.jobs){
    //Create new div for work Experience.
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    //Concat Employer and title.
    var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

    $(".work-entry:last").append(formattedWorkEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  }

}

displayWork();

/*
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
$("#workExperience").append(formattedWorkEmployer);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
$("#workExperience").append(formattedWorkTitle);

var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
$("#workExperience").append(formattedWorkLocation);

var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs.dates);
$("#workExperience").append(formattedWorkDates);

var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs.description);
$("#workExperience").append(formattedWorkDescription);
*/

//internationalizeButton
function inName(name){
  var name_array = name.trim().split(" ");
  var name_last = name_array[1].toUpperCase();
  var name_first = name_array[0].toLowerCase();
  var first_new = name_first[0].toUpperCase();
  var first_final = name_first.replace(name_first[0], first_new);

  return name_first + " " + name_last;
}

$("#main").append(internationalizeButton);

//Project Objects
var project = {
  "projects" : [
    {
      "title" : "Online-Portfolio",
      "dates" :"01-Feb-2016 to 04-Feb-2016",
      "description" : "This is the Online-Portfolio project which I completed while pursuing my Nanodegree on Udacity. It contains all the data about me.",
      "images" : "images/online_portfolio.png"
    },
    {
      "title" : "Neighbour-Hood Map Project",
      "dates" :"05-Feb-2016 to 15-Feb-2016",
      "description" : "This is the Neighbour-Hood project which I completed while pursuing my Nanodegree on Udacity. It contains API from ggogle to integrate google map to my website.",
      "images" : "neighbour_map.png"
    },
    {
      "title" : "Health-Tracker",
      "dates" :"15-Mar-2016 to 22-Mar-2016",
      "description" : "This is the Health-Tracker project which I completed while pursuing my Nanodegree on Udacty. This app keeps track of your personel health and helps you keep yourself healthy and fit",
      "images" : "health_tracker.jpg"
    }
  ]
};

/*var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
$("#projects").append(formattedTitle);

var formattedDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
$("#projects").append(formattedDates);

var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects.description);
$("#projects").append(formattedDescription);

var formattedImages = HTMLprojectImage.replace("%data%", projects.projects.images);
$("#projects").append(formattedImages);
*/

projects.display = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if(projects.projects[project].images.length>0){
      for(var image in projects.projects[project].images){
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImages);
      }
    }
  }
};

//Eduction Object
var education = {
  "schools" : [
    {
      "name" : "IIT",
      "location" : "New Delhi",
      "degree" : "B.Tech",
      "major" : ["Computer Science", "German"],
      "dates" : "2006-2010",
      "url" : "iitd.co.in"
    },
    {
      "name" : "Standford",
      "location" : "Standford, USA",
      "degree" : "M.Tech",
      "major" : ["Artificial Intellegence"],
      "dates" : "2010-2012",
      "url" : "standford.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Developer Nanodegree",
      "school" : "udacity.com",
      "dates attended" : "01-Feb-2016 to 30-Apr-2016",
      "url" : "udacity.com"
    },
    {
      "name" : "CS50: Introduction to CS",
      "school" : "edx.com",
      "dates attended" : "Aug-2015 to Feb-2016",
      "url" : "edx.com"
    },
    {
      "title" : "Algorithms: Design And Analysis",
      "school" : "coursera.com",
      "dates attended" : "Sept-2015 to Nov-2015",
      "url" : "coursera.com"
    }
  ]
};
/*
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
$("#education").append(formattedSchoolName);

var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
$("#education").append(formattedSchoolLocation);

var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
$("#education").append(formattedSchoolName);

var formattedSchoolMojor = HTMLschoolMajor.replace("%data%", education.schools.major);
$("#education").append(formattedSchoolMojor);

var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
$("#education").append(formattedSchoolDates);

var formattedSchoolURL = HTMLonlineURL.replace("%data%", education.schools.url);
$("#education").append(formattedSchoolURL);

var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
$("#education").append(formattedOnlineTitle);

var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
$("#education").append(formattedOnlineSchool);

var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses["dates attended"]);
$("#education").append(formattedOnlineDates);

var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
$("#education").append(formattedOnlineURL);
*/

//Adding google Map to our Resume
$("#mapDiv").append(googleMap);
