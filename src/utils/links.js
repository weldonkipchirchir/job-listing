export const links = [
    { link: "/", name: "Home" },
    { link: "/job-listing", name: "Job Listing" },
    { link: "/about-us", name: "About us" },
    { link: "/sign-up", name: "Sign Up" },
    { link: "/sign-in", name: "Sign In" },
  ];

  export const getActiveStyles = (isActive, name) => {
    const baseStyles = {
      borderBottom: "2px solid transparent",
      transition: "border-color 0.3s",
      padding: "0.2rem 0.6rem",
    };

    if (isActive) {
      return {
        ...baseStyles,
        backgroundColor: "#b6174b",
        color: "white",
        borderRadius: "5px",
        boxShadow: "5px 5px 5px rgba(0,0,0,0.9)",
      };
    }

    if (name === "Sign Up") {
      return {
        ...baseStyles,
        color: "white",
        backgroundColor: "black",
        borderRadius: "5px",
      };
    }

    return baseStyles;
  };

  export const jobs = [
    {
      jobName: "Senior Product Designer",
      type: "Full-Time",
      location: "Remote",
      salaryHigh: "$120k",
      salaryLow: "$120k",
    },
    {
      jobName: "Software Engineer",
      type: "Full-Time",
      location: "San Francisco, CA",
      salaryHigh: "$150k",
      salaryLow: "$130k",
    },
    {
      jobName: "Data Scientist",
      type: "Full-Time",
      location: "New York, NY",
      salaryHigh: "$140k",
      salaryLow: "$120k",
    },
    {
      jobName: "Marketing Manager",
      type: "Part-Time",
      location: "Remote",
      salaryHigh: "$80k",
      salaryLow: "$70k",
    },
    {
      jobName: "UX Researcher",
      type: "Full-Time",
      location: "Austin, TX",
      salaryHigh: "$110k",
      salaryLow: "$90k",
    },
    {
      jobName: "Front-End Developer",
      type: "Contract",
      location: "Remote",
      salaryHigh: "$100k",
      salaryLow: "$90k",
    },
    {
      jobName: "Sales Executive",
      type: "Full-Time",
      location: "Chicago, IL",
      salaryHigh: "$130k",
      salaryLow: "$110k",
    },
    {
      jobName: "HR Specialist",
      type: "Full-Time",
      location: "Boston, MA",
      salaryHigh: "$90k",
      salaryLow: "$75k",
    },
    {
      jobName: "Project Manager",
      type: "Full-Time",
      location: "Seattle, WA",
      salaryHigh: "$120k",
      salaryLow: "$100k",
    },
    {
      jobName: "DevOps Engineer",
      type: "Full-Time",
      location: "Remote",
      salaryHigh: "$140k",
      salaryLow: "$130k",
    },
    {
      jobName: "Content Writer",
      type: "Part-Time",
      location: "Remote",
      salaryHigh: "$60k",
      salaryLow: "$50k",
    }
  ];
  

  export const jobListing = [
    {
      jobName: "Senior Product Designer",
      type: "Full-Time",
      location: "Remote",
      salaryHigh: "$120k",
      salaryLow: "$120k",
    },
    {
      jobName: "Software Engineer",
      type: "Full-Time",
      location: "San Francisco, CA",
      salaryHigh: "$150k",
      salaryLow: "$130k",
    },
  ]
  export const jobApply = 
    {
      jobName: "Senior Product Designer",
      type: "Full-Time",
      location: "Remote",
      salaryHigh: "$120k",
      salaryLow: "$120k",
    }

export const jobTypes =
  [
    "Remote",
    "Onsite",
    "Internship",
    "Part Time",
    "Full Time", 
    "Contract"
  ]

export const popularSearches=
  [
   "Front-End Developer" ,
   "UX Researcher",
   "Marketing Manager",
   "Data Scientist",
   "Software Engineer"
  ]

export const activity=
  [
    {
      time:5,
      job:"Front-End Developer" ,
    },
    {
      time:1,
      job:"Data Scientist",
    },
    {
      time:3,
      job:"Marketing Manager",
    },
    {
      time:12,
      job:"UX Researcher",
    },
  ]
