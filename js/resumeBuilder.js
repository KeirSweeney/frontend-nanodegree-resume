//Please note: I understand the differnt use of syntax between JS files and JSON files, given that my js object exists in here, I decided to use single 
  // quotes on the value only.

var bio = {
  name : 'Keir',
  role : 'Full Stack Developer',
  contacts: {
    mobile : '07557005307',
    email : 'KeirJSweeney@gmail.com',
    github : 'https://github.com/KeirSweeney',
    location : 'London'
  },
  welcomeMessage : 'Hey!',
  skills : ['JS', 'HTML', 'CSS', 'C#'],
  biopic : 'https://avatars3.githubusercontent.com/u/9768005?v=3&s=460',
  display : function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    var formattedSkills = function () { 
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
    }
};

var education = {
  schools: [
    {
      name: 'Kingston University',
      location: 'Kingston, UK',
      degree: 'BSc',
      majors: ['Computer Science (Games Programming)'],
      dates: '2012-2015'
    },
    {
      name: 'Trinity Catholic HighSchool',
      location: 'Woodford Green, UK',
      degree: 'A Levels',
      majors: ['Computing', ' Music', ' Maths', ' Physics'],
      dates: '2004-2011'
    }
  ],
  onlineCourses: [
    {
      title: 'Udactiy Frontend Nanodegree',
      school: 'Udacity',
      dates: '2017-Current',
      url: 'https://www.udacity.com/'
    },
    {
      title: 'Full Stack Web Development Certification',
      school: 'Free Code Camp',
      dates: '2016-Current',
      url: 'https://www.freecodecamp.com'
    }
  ],
  display : function() {
    $('#education').append(HTMLschoolStart);

    for (school in education.schools) {
      var formattedSchool = HTMLschoolName.replace('%data%', education.schools[school].name).replace('#', education.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      console.log(formattedDegree);
      var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
      var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[school].majors);

      $('.education-entry:last').append(formattedSchool);
      $('.education-entry:first a').append(formattedDegree);
      $('.education-entry:last').append(formattedDates);
      $('.education-entry:last').append(formattedLocation);
      $('.education-entry:last').append(formattedMajors);
    }

    $('#education').append(HTMLonlineClasses);
    $('#education').append(HTMLschoolStart);

    for (course in education.onlineCourses) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title).replace('#', education.onlineCourses[course].url);
      var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
      var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
      var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url).replace('#', education.onlineCourses[course].url);

      $('.education-entry:last').append(formattedTitle);
      $('.education-entry:last').append(formattedSchool);
      $('.education-entry:last').append(formattedDates);
      $('.education-entry:last').append(formattedURL);
    };
  }
};

var work = {
  jobs: [
    {
      employer: 'Cohaesus',
      title: 'Junior Web Developer',
      location: 'Old Street, London',
      dates: '2016-Current',
      description: 'Full stack developer'
    },
    {
      employer: 'The Dangerous Kitchen',
      title: 'Game Developer',
      location: 'Heathrow, London',
      dates: '2015-2016',
      description: 'Unity Game developer'
    }
  ],
  display : function() {
  }
};

var projects = {
  projects : [
    {
      title: 'Demo project', 
      dates: '2017-current',
      description: 'This is a demo project',
      images: ['images/197x148.gif']
    }
  ],
  display : function() {
  }
};

bio.display();
education.display();