//Please note: I understand the differnt use of syntax between JS files and JSON files, given that my js object exists in here, I decided to use single 
  // quotes on the value only.

var bio = {
  name : 'Keir',
  role : 'Full Stack Developer',
  contacts: {
    mobile : '07557005307',
    email : 'KeirJSweeney@gmail.com',
    github : 'https://github.com/KeirSweeney',
    location : 'London',
    welcomeMessage : 'Hey!',
    skills : ['JS', 'HTML', 'CSS', 'C#'],
    biopic : 'https://avatars3.githubusercontent.com/u/9768005?v=3&s=460',
    display : function() {
    }
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
      majors: ['Computing', 'Music', 'Maths', 'Physics'],
      dates: '2004-2011'
    }
  ],
  onlineCourses: [
    {
      title: 'Udactiy Frontend Nanodegree,
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
  }
}

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
}

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
}