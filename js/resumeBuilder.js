//Please note: I understand the differnt use of syntax between JS files and JSON files, given that my js object exists in here, I decided to use single 
// quotes on the value only.
var bio = {
    name: 'Keir',
    role: 'Full Stack Developer',
    contacts: {
        mobile: '07557005307',
        email: 'KeirJSweeney@gmail.com',
        github: 'https://github.com/KeirSweeney',
        location: 'London'
    },
    welcomeMessage: 'Hey!',
    skills: ['JS', 'HTML', 'CSS', 'C#'],
    biopic: 'https://avatars3.githubusercontent.com/u/9768005?v=3&s=460',
    display: function() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        var formattedSkills = function() {
            var skillsArray = [];
            bio.skills.forEach(function(val) {
                skillsArray.push(HTMLskills.replace('%data%', val));
            });
            return skillsArray;
        };
        var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcome);
        $('#header').append(HTMLskillsStart);
        $('#skills').append(formattedSkills);
        $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    }
};

var education = {
    schools: [{
        name: 'Kingston University',
        location: 'Kingston, UK',
        degree: 'BSc',
        majors: ['Computer Science (Games Programming)'],
        dates: '2012-2015'
    }, {
        name: 'Trinity Catholic HighSchool',
        location: 'Woodford Green, UK',
        degree: 'A Levels',
        majors: ['Computing', ' Music', ' Maths', ' Physics'],
        dates: '2004-2011'
    }],
    onlineCourses: [{
        title: 'Udactiy Frontend Nanodegree',
        school: 'Udacity',
        dates: '2017-Current',
        url: 'https://www.udacity.com/'
    }, {
        title: 'Full Stack Web Development Certification',
        school: 'Free Code Camp',
        dates: '2016-Current',
        url: 'https://www.freecodecamp.com'
    }],
    display: function() {
        $('#education').append(HTMLschoolStart);

        for (var i = 0; i < education.schools.length; i++) {
            var formattedSchool = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
            var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);

            $('.education-entry:last').append(formattedSchool + formattedDegree);
            $('.education-entry:last').append(formattedDates);
            $('.education-entry:last').append(formattedLocation);
            $('.education-entry:last').append(formattedMajors);
        }

        $('#education').append(HTMLonlineClasses);
        $('#education').append(HTMLschoolStart);

        for (var x = 0; x < education.onlineCourses.length; x++) {
            var onlineFormattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[x].title).replace('#', education.onlineCourses[x].url);
            var onlineFormattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[x].school);
            var onlineFormattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[x].dates);
            var onlineFormattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[x].url).replace('#', education.onlineCourses[x].url);

            $('.education-entry:last').append(onlineFormattedTitle);
            $('.education-entry:last').append(onlineFormattedSchool);
            $('.education-entry:last').append(onlineFormattedDates);
            $('.education-entry:last').append(onlineFormattedURL);
        }
    }
};

var work = {
    jobs: [{
        employer: 'Cohaesus',
        title: 'Junior Web Developer',
        location: 'Old Street, London',
        dates: '2016-Current',
        description: 'Full stack developer'
    }, {
        employer: 'The Dangerous Kitchen',
        title: 'Game Developer',
        location: 'Heathrow, London',
        dates: '2015-2016',
        description: 'Unity Game developer'
    }],
    display: function() {
        $('#workExperience').append(HTMLworkStart);

        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer).replace('#', 'http://www.cohaesus.co.uk');
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);


            $('.work-entry').append(formattedEmployer + formattedTitle);
            $('.work-entry').append(formattedDates);
            $('.work-entry').append(formattedLocation);
            $('.work-entry').append(formattedDescription);
        }
    }
};

var projects = {
    projects: [{
        title: 'Demo project',
        dates: '2017-current',
        description: 'This is a demo project',
        images: ['images/197x148.gif']
    }],
    display: function() {
        $('#projects').append(HTMLprojectStart);

        var formatImage = function(project) {
            var imagesList = [];
            projects.projects[project].images.forEach(function(val) {
                imagesList.push(HTMLprojectImage.replace('%data%', val));
            });

            return imagesList;
        };

        for (var i = 0; i < projects.projects.length; i++) {
            formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
            formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
            formattedProjectImages = formatImage(i);
        }
        $('.project-entry').append(formattedProjectTitle);
        $('.project-entry').append(formattedProjectDates);
        $('.project-entry').append(formattedProjectDescription);
        $('.project-entry').append(formattedProjectImages);
    }
};

bio.display();
$('#mapDiv').append(googleMap);
education.display();
projects.display();
work.display();