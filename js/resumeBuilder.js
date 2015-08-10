//var formattedName = HTMLheaderName.replace("%data%", "John Doe");
//var role = "Web Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//var skills = ["jscript", " python"];

//$("#header").prepend(formattedName);
//$("#header").append(formattedRole);

var bio = {
	"name" : "John Doe",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "0445-859-963",
		"email" : "johndoe@xyz.com",
		"github" : "johndoe",
		"twitter" : "@johndoe",
		"location" : "Dulwich Hill, NSW"
	},
	"welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, et!",
	"skills" : [ "jscript", "python", "Responsive Design", "Bootstrap", "3ds Max"],
	"bioPic" : "images/fry.jpg"
};

function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
	var formattedWellcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWellcomeMsg);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;

	$("#topContacts").append(allContacts);
	$("#footerContacts").append(allContacts);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	};
}
displayBio();

var education = {
	"schools" : [
		{
			"name" : "XYZ University",
			"location" : "Sydney, Australia",
			"degree" : "Bachelor Degree",
			"majors" : ["Computer Science"],
			"dates" : "1988",
			"url" : "http://XYZUni.com"
		},
		{
			"name" : "XYZ High",
			"location" : "Greystanes, Australia",
			"degree" : "High School Certificate",
			"majors" : ["General Studies"],
			"dates" : "1984",
			"url" : "http://XYZHigh.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "FrontEnd Web Developer",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com"
		}
	]
}

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}

}
displayEducation();
var work = {
	"jobs" : [
		{
			"employer" : "Acme Industries",
			"title" : "Designer",
			"location" : "Lane Cove, NSW",
			"dates" : "2010 - Present",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet in aut quidem. Illum, velit. Magnam harum porro, amet nulla doloremque in aut itaque nihil nisi provident sapiente eligendi ea a facere vero odio ratione quibusdam consequuntur esse! ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore voluptate, consectetur quaerat quos, sapiente quia aperiam nihil cum inventore!."
		},
		{
			"employer" : "Acme Solutions",
			"title" : "Technical Director",
			"location" : "Padstow, NSW",
			"dates" : "2000 - 2010",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dolores cupiditate rem eligendi, delectus rerum a aspernatur ipsam? Molestias in, labore ducimus fugit eveniet aperiam provident maxime officiis iusto ratione recusandae aliquam a. Est, vero. ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptas provident doloribus natus, perspiciatis quas id sequi, neque molestiae cupiditate.."
		},
		{
			"employer" : "Acme Productions",
			"title" : "Modeller",
			"location" : "Pyrmont, NSW",
			"dates" : "1995 - 2000",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, in! Ut nulla impedit quidem vel. Ratione quos quod vero ullam officia iste cumque tempora, possimus nostrum, atque doloremque at quo. ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptas provident doloribus natus, perspiciatis quas id sequi, neque molestiae cupiditate.."
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est impedit ipsam cumque ipsum, earum ab fuga ex officiis autem perspiciatis dolor vel voluptatibus soluta doloremque quasi, quidem ut inventore odio necessitatibus quibusdam, quam sapiente, quas consectetur enim. Iusto laudantium aspernatur vitae, excepturi. ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusamus officiis minima possimus tempora ratione itaque voluptates aliquid quo ex.",
			"images" : ["images/200x300.jpg"]
		},
		{
			"title" : "Sample Project 2",
			"dates" : "2013",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam deserunt, delectus sed soluta qui cumque dolor quo, voluptates at distinctio cupiditate hic repudiandae voluptatum pariatur repellat fugiat minima eaque laudantium libero sequi nihil. Facilis et obcaecati ratione, veniam nam quia quam doloremque fugit officia asperiores dolorum debitis exercitationem animi quisquam. ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusamus officiis minima possimus tempora ratione itaque voluptates aliquid quo ex.",
			"images" : ["images/Bill200x300.jpg"]
		}
	]
}

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
displayProjects();

//function displaymap() {
	$("#mapDiv").append(googleMap);
//}

//displaymap();

//
//$(document).click(function(loc) {
	//var x = loc.pageX;
	//var y = loc.pageY;
	//logClicks(x,y);
//});

//function inName(name) {
	//name = name.trim().split(" ");
	//console.log(name);
	//name[1] = name[1].toUpperCase();
	//name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	//return name[0] +" "+name[1];
	//}

//$("#main").append(internationalizeButton);


