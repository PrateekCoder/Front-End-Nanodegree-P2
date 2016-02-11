//BIO OBJECT
var bio = {
  "name" : "Prateek Gaurav",
  "role" : "Front-End Developer",
  "welcome-message" : "Welcome to My Interactive Resume",
  "contacts" : {
    "mobile" : 95601111,
    "email" : "prateekgaurav23@gmail.com",
    "github" : "https://github.com/PrateekCoder",
    "twitter" : "https://twitter.com/PrateekGaurav23",
    "location" : "New Delhi"
  },
  "pictureURL" : "images/image1.png",
  "skills" : ["Python", "Front-End Development", "Full-Stack Development", "Creaivity"]
};

//Function to display our Header Section ro Bio Object.
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

//Function to display our Work Object.
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
      "images" : ["https://farm5.staticflickr.com/4042/4666974699_343fbf04d1.jpg"]
    },
    {
      "title" : "Neighbour-Hood Map Project",
      "dates" :"05-Feb-2016 to 15-Feb-2016",
      "description" : "This is the Neighbour-Hood project which I completed while pursuing my Nanodegree on Udacity. It contains API from ggogle to integrate google map to my website.",
      "images" : ["http://www.thethinkingstick.com/images/2015/03/gmaplogo.png"]
    },
    {
      "title" : "Health-Tracker",
      "dates" :"15-Mar-2016 to 22-Mar-2016",
      "description" : "This is the Health-Tracker project which I completed while pursuing my Nanodegree on Udacty. This app keeps track of your personel health and helps you keep yourself healthy and fit",
      "images" : ["images/health.jpg"]
    }
  ]
};

//Function to diaply our Project Object.
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

//Eduction Object
var education = {
  "schools" : [
    {
      "name" : "IIT",
      "location" : "New Delhi",
      "degree" : "B.Tech",
      "major" : ["Computer Science"],
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
      "school" : "edx.com",
      "title" : "CS50: Introduction to CS",
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

//Function to display our Education Object.
education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.major.forEach(function(majors) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course["dates attended"]);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};

education.display();

//Adding google Map to our Resume
$("#mapDiv").append(googleMap);
