/*General structure of file:  four objects for resume informatio are dfined bio, education, work, and projects.  Display
function is then defined for each object.  Display functions are then called.  Lastly, a google map is adeed.*/

// Define the object bio containing basic biographical information for the resume.
var bio = {
    "name": "Christine Stoner",
    "role": "Independent Developer",
    "contacts": {
        "mobile": "(123)456 - 7890",
        "email": "clhoward24@hotmail.com",
        "github": "acct252000",
        "twitter": "twitter",
        "location": "Plano, TX"
    },
    "welcomeMessage": " -- Welcome to my Resume!",
    "skills": [
		"English Fluency", "Internet Surfer"
	],
    "bioPic": "images/profile.svg"
};

// Define the object education containing school and online course information for the resume.
var education = {
    "schools": [
        {
            "name": "The University of Texas at Austin",
            "location": "Austin, TX",
            "degree": "Masters in Professional Accounting",
            "majors": [
					"Accounting", "Business Honors"
				],
            "dates": "1994-1998",
            "url": "http://www.utexas.edu"
			},
        {
            "name": "The Texas Academy of Math and Science",
            "location": "Denton, TX",
            "degree": "High School Diploma",
            "majors": [
					"Math", "Science"
				],
            "dates": "1992-1994",
            "url": "https://tams.unt.edu/"
			}
		],
    "onlineCourses": [
        {
            "title": "Front End Web Development Nanodegree",
            "school": "Udacity",
            "dates": "August - September 2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

			},
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "August 2016",
            "url": "https://https://www.udacity.com/course/how-to-use-git-and-github--ud775"

			},
        {
            "title": "Creative, Serious and Playful Science of Android Apps (no longer available)",
            "school": "Coursera",
            "dates": "December 2013 - February 2014",
            "url": "https://www.coursera.org"

			},
        {
            "title": "Learn to Program: The Fundamentals",
            "school": "Coursera",
            "dates": "December 2012",
            "url": "https://www.coursera.org/learn/learn-to-program"
			}
		]
};

// define the work object storing work history for the resume.

var work = {
    "jobs": [
        {
            "employer": "Self-Employed",
            "title": "Independent Developer",
            "location": "Plano, TX",
            "dates": "2014-2016",
            "description": "Indepedent developer of android applications"
			},
        {
            "employer": "Giant Corporation",
            "title": "Director/Controller",
            "location": "Dallas, TX",
            "dates": "2009-2016",
            "description": "Implemented significant Oracle changes include PSQL code review"
			}
		]
};

//Define the projects object to store historical project information for the resume.
var projects = {

    "projects": [
        {
            "title": "Portfolio Website",
            "dates": "August - September, 2016",
            "description": "Developed a portfolio website during Udacity's front-end development course.",
            "images": [
					"images/project1-1.png", "images/project1-2.png"
				]
			},
        {
            "title": "Audit Attack Lite",
            "dates": "2014",
            "description": "Developed Android application accounting game for ad-driven revenue.",
            "images": [
					"images/project2-1.png", "images/project2-2.png"
				]
			}
		]
};

/*This function displays bio information in the header section of the resume.  Contacts are addressed individually
due to the individual helper varaiables in helper.js*/
bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

    $("#header").append(HTMLskillsStart);
    //iterates over each skill and displays on document. Foreach not used as Array.
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[indexCount]));
    }

};

//This function iterates over all schools and online programs in the education object above and displays it on the resume.
education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%", school.name);
        var schoolNameWithUrl = schoolName.replace("#", school.url);
        $(".education-entry:last").append(schoolNameWithUrl);
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry:last").append("<br>");
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
        // iterates over majors in each school.  Foreach not used as Array.
        for (var indexCount = 0; indexCount < school.majors.length; indexCount++) {
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[indexCount]));
        }

    });
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        var onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var onlineTitleWithLink = onlineTitle.replace("#", onlineCourse.url);
        var onlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var onlineSchoolLine = onlineTitleWithLink.concat(onlineSchool);
        $(".education-entry:last").append(onlineSchoolLine);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));

    });

};



//This function iterates over all jobs in the work object above and displays it on the resume.
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployerName = HTMLworkEmployer.replace("%data%", job.employer);
        var formatedEmployerTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerNameandTitle = formattedEmployerName + formatedEmployerTitle;
        $(".work-entry:last").append(formattedEmployerNameandTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
};

//This function iterates over all projects in the projects object above and displays it on the resume.
projects.display = function() {

    projects.projects.forEach(function(eachProject) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", eachProject.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", eachProject.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", eachProject.description));
        // iterates over images in image array and adds to display.  Foreach not used as array.
        for (var indexCount = 0; indexCount < eachProject.images.length; indexCount++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", eachProject.images[indexCount]));
        }
    });
};


//Display all four objects using encapsulated display functions
bio.display();
education.display();
work.display();
projects.display();

//Displays Google map with locations lived and worked.
$("#mapDiv").append(googleMap);