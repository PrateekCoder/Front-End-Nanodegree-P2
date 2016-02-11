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
  "pictureURL" : "images/image1.png",
  "skills" : ["Python", "Front-End Development", "Full-Stack Development", "Creaivity"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome-message"]);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};

bio.display();
/*
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
*/
//Work Object
var work = {
  "jobs" : [
    {
       "employer" : "Google",
       "title" : "Junior Front-End Developer",
       "location" : "Seattle, USA",
       "dates" : "2012-2014",
       "description" : "My first Job, yay! I worked as a Junior Front-End Developer, where I had the job of maintaining the google developers website Front-End."

    },
    {
       "employer" : "Apple",
       "title" : "Senior Front-End Developer",
       "location" : "California, USA",
       "dates" : "2014-2015",
       "description" : "Got a Senior Tag with my Designation... YAY!!. Here I was promoted to work as a senior Front-End Developer and my role was to manage the main Apple website."

    },
    {
       "employer" : "Udacity",
       "title" : "Full-Stack Developer",
       "location" : "Silicon Valley, USA",
       "dates" : "2015-till-date",
       "description" : "No more front or back, it's FULL now! If you know what I mean. Here I worked as a Full-Stack Developer, I creted back-end applications for the courses and managed the Front-End of the wensite as well."

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
function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

//Project Objects
var projects = {
  "projects" : [
    {
      "title" : "Online-Portfolio",
      "dates" :"01-Feb-2016 to 04-Feb-2016",
      "description" : "This is the Online-Portfolio project which I completed while pursuing my Nanodegree on Udacity. It contains all the data about me.",
      "images" : ["images/portfolio.png"]
    },
    {
      "title" : "Neighbour-Hood Map Project",
      "dates" :"05-Feb-2016 to 15-Feb-2016",
      "description" : "This is the Neighbour-Hood project which I completed while pursuing my Nanodegree on Udacity. It contains API from ggogle to integrate google map to my website.",
      "images" : ["images/maps.png"]
    },
    {
      "title" : "Health-Tracker",
      "dates" :"15-Mar-2016 to 22-Mar-2016",
      "description" : "This is the Health-Tracker project which I completed while pursuing my Nanodegree on Udacty. This app keeps track of your personel health and helps you keep yourself healthy and fit",
      "images" : ["images/health.png"]
    }
  ]
};

projects.display = function(){
  for(var project in projects.projects){
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
projects.display();

/*var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
$("#projects").append(formattedTitle);

var formattedDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
$("#projects").append(formattedDates);

var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects.description);
$("#projects").append(formattedDescription);

var formattedImages = HTMLprojectImage.replace("%data%", projects.projects.images);
$("#projects").append(formattedImages);
*/
/*
projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%",project.dates_worked);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedProjectImages = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedProjectImagesImage);
            });
        }
    });
};
projects.display();
*/

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


education.display = function(){
  for(var school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolMojor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolURL = HTMLonlineURL.replace("%data%", education.schools[school].url);

    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolMojor);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolURL);

  }
};

education.display();

/*

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
