export const links = [
    { link: "/", name: "Home" },
    { link: "/job-listing", name: "Job Listing" },
    { link: "/about-us", name: "About us" },
    { link: "/contact", name: "Contact" },
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