var name = "Subrat Rout";
var role = "Web Developer";
var image ="images/subrat.jpg";
var welcomeMessage ="Welcome to Subrat\'s Homepage!";

var bio = {
  "name": "Subrat Rout",
  "role": "Web Developer",
  "contacts": {
    "mobile": "540-689-0125",
    "email": "subrat@subratrout.com",
    "github": "subratrout",
    "twitter": "subratrout",
    "location": "San Diego, CA"
  },
  "welcomeMessage": "Welcome to my Home Page",
  "skills": [ "HTML", "CSS", "JavaScript", "Ruby", "Ruby on Rails"
  ],
  "bioPic": "images/subrat.jpg"

}

var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);


var formattedContact = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
$("#topContacts").append(formattedContact);

var formattedContact = HTMLemail.replace("%data%", bio.contacts["email"]);
$("#topContacts").append(formattedContact);

var formattedContact = HTMLgithub.replace("%data%", bio.contacts["github"]);
$("#topContacts").append(formattedContact);

var formattedContact = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
$("#topContacts").append(formattedContact);

var formattedContact = HTMLlocation.replace("%data%", bio.contacts["location"]);
$("#topContacts").append(formattedContact);

var formattedImage = HTMLbioPic.replace("%data%", image);
$("#header").append(formattedImage);

var formattedMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedMessage);



function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0]+ " " +name[1];
};

//$("#main").append(internationalizeButton);




var work = {
  "jobs": [
  {
  "employer": "CTK Biotech",
  "title": "Regulatory Affairs Specialist",
  "location": "San Diego, CA",
  "dates": "June 2014- Present",
  "description": "Successfully implemented, monitored and maintained a quality system compliant with FDA and ISO requirements (QSR820 and ISO 13485). Created and edited Standard Operating Procedures documents (SOPs) to support the regulatory activities. Set up and maintained controls of documentation procedures. Prepared submission documentation for submissions and approvals. Took part and provided required documents and inputs during FDA inspection of CTK facilities. Premarket notification document (510K) for in-vitro diagnostics devices. Personnel training on Quality System procedures. Developed incoming material specifications and Quality control procedures for key raw materials."
  },

  {
  "employer": "USA Food and Drug Administration",
  "title": "Commissioner&apos;s Fellow",
  "location": "Alameda, CA",
  "dates": "Nov 2011- Nov 2013",
  "description": "Preparation of clinical trial design including patient enrollment and data collection (Phase I-III) for a new drug application (NDA), Premarket notification document (510K) document design and preparation of medical devices in different therapeutic areas Developed and validated (using single lab method) a liquid mid-density micro array assay for the detection of food-borne enteric viruses using Luminex® xMAPTM technology. Prepared the study protocol to ensure that risks are minimized, the selection of subjects was equitable, all proper documents included and in accordance with regulation. Completed Food and Drug Law (ORAU): Criminal Act violations, Courtroom Testimony, FDA Jurisdictions, judicial actions, prohibited actions, FDA exports and imports, Food microbiological control. GCP, GLP, Quality System Compliance, Post-market activities. Obtained knowledge through various key courses in clinical research and FDA regulations"
  },

  {
  "employer": "SRI International",
  "title": "Post Doctoral Fellow",
  "location": "Harrisonburg, VA",
  "dates": "Feb 2009- Oct 2011",
  "description": "Developed an insect cell lines constitutively expressing T7RNA Polymerase. Worked on development and screening of antiviral compounds against Dengue and Chikungunya viruses. Performed Mass Spectrometry analysis of DENV infected insect and human cells to identify common cellular factors up-regulated or down-regulated in response to DENV infection. Mentored James Madison University undergraduates for their summer internship assignment"
  }

  ]

}

var projects = {
  "projects":[
  {
    "title": "Medical Device Hub",
    "dates": "2013",
    "description": "Medical Device Hub is a web portal that aggregates information on Medical Devices available worldwide. MedicalDeviceHub's mission, and the focus around the world, is to improve the quality of health care by collecting high quality information on innovative, high-quality medical device products from medical device manufacturers and providing it to users and patients. Our emphasis is on our users' satisfaction.Our organization's mission is to demonstrate world class service, and be a responsible entity for providing value to the local as well as global communities.",
    "images": [
        "images/mdh.png"
    ]
  },

  {
    "title": "MyBit",
    "dates": "2013",
    "description": "MyBit is a crowd-funding platform to support the old age pension needs of low income workers in India's unorganized sector. Hard-working individuals are incentivized to save for their retirement through matching pension benefits, monetary rewards and discount offerings on products of daily use. MyBit accepts micro-contributions from generous donors living anywhere in the world who believe in making an impact bit-by-bit.",
    "images": [
    "images/mybit.png"
    ]
  },

  {
    "title": "InstaWater",
    "dates": "2013",
    "description": " InstaWater is committed to develop a low cost water testing kit that can be used to detect several protozoan pathogens such as Cryptosporidium and Giardia, bacteria such as E. Coli and fecal coliform bacteria and viruses such as Hepatitis A and Coxsackie viruses in contaminated water.",
    "images": [
    "images/instawater.png"
    ]
  }
  ]
}

var education = {
  "schools": [
  {
    "name": "Univeristy of Maryland",
    "location": "College Park",
    "degree": "PhD",
    "majors": ["Virology"],
    "dates": 2007,
    "url": "http//umd.edu"
  },

  {
    "name": "IVRI",
    "location": "Izatnagar",
    "degree": "Masters",
    "majors": ["Biotechnology"],
    "dates": 2002,
    "url": "http//umd.edu"
  }

  ],

  "onlineCourses": [
  {
    "title": "Javascript Basic",
    "school": "Udacity",
    "dates": 2014,
    "url": "http://Udacity.com/course/ud804"
  },

  {
    "title": "Introduction to HTML & CSS",
    "school": "Udacity",
    "dates": 2014,
    "url": "http://Udacity.com/course/ud804"
  },

  {
    "title": "Using Git and GitHub",
    "school": "Udacity",
    "dates": 2014,
    "url": "http://Udacity.com/course/ud804"
  }
  ]

}



if(bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

     formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);

}

function displayWork( ){

  for(job in work.jobs){

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

  }
}

displayWork();


clickLocations = [];

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
})


function locationizer(work_obj){

  var locationArray = [];

  for (var job in work_obj.jobs) {
      var newLocation = work_obj.jobs[job].location;
      locationArray.push(newLocation);
    }

  return locationArray;

}

console.log(locationizer(work));

projects.display = function() {
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length >0){
      for (image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();


// For Education.

education.display = function() {
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
    $(".education-entry:last").append(formattedMajor);
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for (onlineCourse in education.onlineCourses){


    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedUrl);
  }
}

education.display();


// For map function.

$("#mapDiv").append(googleMap);

// Let's connect

var formattedContact = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
$("#footerContacts").append(formattedContact);

var formattedContact = HTMLemail.replace("%data%", bio.contacts["email"]);
$("#footerContacts").append(formattedContact);

var formattedContact = HTMLgithub.replace("%data%", bio.contacts["github"]);
$("#footerContacts").append(formattedContact);

var formattedContact = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
$("#footerContacts").append(formattedContact);

var formattedContact = HTMLlocation.replace("%data%", bio.contacts["location"]);
$("#footerContacts").append(formattedContact);
