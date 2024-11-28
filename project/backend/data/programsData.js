const programsData = [
    {
        programName: "Software Development Diploma",
        programType: "Diploma (2 years)",
        programDescription: "Gain practical experience in the cycles of software development through hands-on learning and real projects. You'll gain an understanding of industry standards of planning, developing, and quality assurance testing. You'll learn the fundamentals of computer logic, giving you a solid foundation in applying programming skills in a variety of situations. You'll also become familiar with emerging topics like user experience (UX) and the internet of things.",
        programCode: "SD-DIP",
        department: "Software Development",
        terms: ["Spring", "Summer", "Fall", "Winter"],
        startDate: "2024-01-10",
        endDate: "2026-05-15",
        fees: 12000,
        courses: [
          {
            IDCourse: "SD201",
            courseName: "Programming Fundamentals",
            typeTerm: "Spring",
            codeCourse: "SD-201",
            description: "Computer programming is central to software development. Learners analyze basic software and technology problems and develop a good programming style and logical thinking to write structured instruction that addresses those problems.",
            courseDay: "Wednesday",
            courseTime: "1:00 PM - 3:00 PM",
            weekDay: "Wednesday",
            campus: "Downtown Campus",
            deliveryMode: "Online",
            seatsAvailable: 5,
            classSize: 25,
          },
          {
            IDCourse: "SD202",
            courseName: "Math for the Computer Industry",
            typeTerm: "Spring",
            codeCourse: "SD-202",
            description: "This course provides learners with the practical knowledge and skills in the use of mathematics in relation to computers. Alternate number bases, set theory, logic, and Boolean algebra are the foundation of this course.",
            courseDay: "Monday",
            courseTime: "1:00 PM - 3:00 PM",
            weekDay: "Monday",
            campus: "Downtown Campus",
            deliveryMode: "Online",
            seatsAvailable: 5,
            classSize: 25,
          },
          {
            IDCourse: "SD203",
            courseName: "Web Programming",
            typeTerm: "Winter",
            codeCourse: "SD-203",
            description: "This course gives learners the opportunity to enhance and enrich their skills in web programming. Learners develop web applications using three-tier architecture.",
            courseDay: "Tuesday",
            courseTime: "10:00 AM - 12:00 PM",
            weekDay: "Tuesday",
            campus: "Main Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 10,
            classSize: 30,
          },
          {
            IDCourse: "SD204",
            courseName: "Database Management",
            typeTerm: "Fall",
            codeCourse: "SD-204",
            description: "This course introduces learners to the concepts of database management systems. Topics include database design, SQL, and data modeling.",
            courseDay: "Thursday",
            courseTime: "2:00 PM - 4:00 PM",
            weekDay: "Thursday",
            campus: "Downtown Campus",
            deliveryMode: "Online",
            seatsAvailable: 5,
            classSize: 25,
          },
          {
            IDCourse: "SD205",
            courseName: "Mobile App Development",
            typeTerm: "Summer",
            codeCourse: "SD-205",
            description: "This course focuses on the principles of mobile app development. Students will create mobile applications for Android and iOS platforms.",
            courseDay: "Friday",
            courseTime: "1:00 PM - 3:00 PM",
            weekDay: "Friday",
            campus: "Downtown Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 8,
            classSize: 20,
          },
          {
            IDCourse: "SD206",
            courseName: "Software Testing",
            typeTerm: "Winter",
            codeCourse: "SD-206",
            description: "This course covers software testing methodologies, test planning, and quality assurance practices to ensure software reliability.",
            courseDay: "Monday",
            courseTime: "3:00 PM - 5:00 PM",
            weekDay: "Monday",
            campus: "Main Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 6,
            classSize: 15,
          },
        ],
      },
      {
        programName: "Software Development Post-Diploma",
        programType: "Post-Diploma (1 year)",
        programDescription: "This program is designed for graduates of a diploma program who wish to advance their knowledge and skills in software development.",
        programCode: "SD-PDIP",
        department: "Software Development",
        terms: ["Spring", "Summer", "Fall", "Winter"],
        startDate: "2025-01-10",
        endDate: "2026-01-15",
        fees: 8000,
        courses: [
          {
            IDCourse: "SD301",
            courseName: "Advanced Programming",
            typeTerm: "Spring",
            codeCourse: "SD-301",
            description: "Building on programming fundamentals, this course delves into advanced concepts and frameworks for software development.",
            courseDay: "Wednesday",
            courseTime: "10:00 AM - 12:00 PM",
            weekDay: "Wednesday",
            campus: "Downtown Campus",
            deliveryMode: "Online",
            seatsAvailable: 5,
            classSize: 20,
          },
          {
            IDCourse: "SD302",
            courseName: "Project Management for Software Development",
            typeTerm: "Summer",
            codeCourse: "SD-302",
            description: "This course focuses on project management methodologies applicable to software development projects, including Agile and Scrum.",
            courseDay: "Tuesday",
            courseTime: "2:00 PM - 4:00 PM",
            weekDay: "Tuesday",
            campus: "Main Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 8,
            classSize: 25,
          },
          {
            IDCourse: "SD303",
            courseName: "Cloud Computing",
            typeTerm: "Fall",
            codeCourse: "SD-303",
            description: "An overview of cloud computing technologies and how they can be utilized in software development and deployment.",
            courseDay: "Thursday",
            courseTime: "1:00 PM - 3:00 PM",
            weekDay: "Thursday",
            campus: "Downtown Campus",
            deliveryMode: "Online",
            seatsAvailable: 5,
            classSize: 20,
          },
          {
            IDCourse: "SD304",
            courseName: "User Experience Design",
            typeTerm: "Winter",
            codeCourse: "SD-304",
            description: "Focus on the principles of UX design, including user research, prototyping, and usability testing.",
            courseDay: "Monday",
            courseTime: "3:00 PM - 5:00 PM",
            weekDay: "Monday",
            campus: "Main Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 6,
            classSize: 15,
          },
          {
            IDCourse: "SD305",
            courseName: "Security in Software Development",
            typeTerm: "Fall",
            codeCourse: "SD-305",
            description: "This course covers security principles and practices in the software development lifecycle.",
            courseDay: "Friday",
            courseTime: "1:00 PM - 3:00 PM",
            weekDay: "Friday",
            campus: "Downtown Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 5,
            classSize: 20,
          },
          {
            IDCourse: "SD306",
            courseName: "DevOps Practices",
            typeTerm: "Summer",
            codeCourse: "SD-306",
            description: "Explore DevOps principles and practices to streamline software development and operations.",
            courseDay: "Thursday",
            courseTime: "10:00 AM - 12:00 PM",
            weekDay: "Thursday",
            campus: "Main Campus",
            deliveryMode: "Online",
            seatsAvailable: 8,
            classSize: 25,
          },
        ],
      },
      {
        programName: "Software Development Certificate",
        programType: "Certificate (6 months)",
        programDescription: "This program provides essential skills for individuals seeking to enter the field of software development in a shorter timeframe.",
        programCode: "SD-CERT",
        department: "Software Development",
        terms: ["Spring", "Summer", "Fall", "Winter"],
        startDate: "2024-01-10",
        endDate: "2024-06-15",
        fees: 4000,
        courses: [
          {
            IDCourse: "SD401",
            courseName: "Intro to Software Development",
            typeTerm: "Spring",
            codeCourse: "SD-401",
            description: "An introduction to the software development process and the key concepts that underpin programming.",
            courseDay: "Monday",
            courseTime: "10:00 AM - 12:00 PM",
            weekDay: "Monday",
            campus: "Main Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 8,
            classSize: 20,
          },
          {
            IDCourse: "SD402",
            courseName: "HTML & CSS Basics",
            typeTerm: "Spring",
            codeCourse: "SD-402",
            description: "Learn the basics of web development using HTML and CSS, focusing on building responsive web pages.",
            courseDay: "Wednesday",
            courseTime: "1:00 PM - 3:00 PM",
            weekDay: "Wednesday",
            campus: "Downtown Campus",
            deliveryMode: "Online",
            seatsAvailable: 10,
            classSize: 25,
          },
          {
            IDCourse: "SD403",
            courseName: "JavaScript Essentials",
            typeTerm: "Summer",
            codeCourse: "SD-403",
            description: "Explore the fundamentals of JavaScript programming for web applications.",
            courseDay: "Thursday",
            courseTime: "2:00 PM - 4:00 PM",
            weekDay: "Thursday",
            campus: "Main Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 6,
            classSize: 15,
          },
          {
            IDCourse: "SD404",
            courseName: "Introduction to Databases",
            typeTerm: "Summer",
            codeCourse: "SD-404",
            description: "This course introduces the basics of database design and management using SQL.",
            courseDay: "Tuesday",
            courseTime: "10:00 AM - 12:00 PM",
            weekDay: "Tuesday",
            campus: "Downtown Campus",
            deliveryMode: "Online",
            seatsAvailable: 5,
            classSize: 20,
          },
          {
            IDCourse: "SD405",
            courseName: "Basic Software Testing",
            typeTerm: "Fall",
            codeCourse: "SD-405",
            description: "An introduction to software testing methodologies and practices.",
            courseDay: "Friday",
            courseTime: "1:00 PM - 3:00 PM",
            weekDay: "Friday",
            campus: "Main Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 5,
            classSize: 20,
          },
          {
            IDCourse: "SD406",
            courseName: "Capstone Project",
            typeTerm: "Winter",
            codeCourse: "SD-406",
            description: "A hands-on project that allows students to apply their learning in a practical setting.",
            courseDay: "Monday",
            courseTime: "3:00 PM - 5:00 PM",
            weekDay: "Monday",
            campus: "Main Campus",
            deliveryMode: "In-Person",
            seatsAvailable: 5,
            classSize: 15,
          },
        ],
      }
  ];
  
  module.exports = { programsData };