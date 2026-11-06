
const members = {
  rayver: {
    name: "Rayver",
    image: "https://teamgene5.wordpress.com/wp-content/uploads/2026/11/890293051_1446566596869407_8282082971136125748_n-removebg-preview.webp?w=433"
  },
  clint: {
    name: "Clint",
    image: "https://teamgene5.wordpress.com/wp-content/uploads/2026/11/892789104_1775499213502855_793298150419787926_n-1-edited.jpg?w=527"
  },
  kenan: {
    name: "Kenan",
    image: "https://teamgene5.wordpress.com/wp-content/uploads/2026/11/825311038_3670113969804782_3355188224615331106_n-edited-4.webp?w=561"
  },
  "jose-gab": {
    name: "Jose Gab",
    image: "https://teamgene5.wordpress.com/wp-content/uploads/2026/11/825311979_1610962084107160_717505875685065182_n-edited.jpg?w=298"
  }
};

// Display current year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Display selected member profile
const memberName = document.getElementById("member-name");
const memberImage = document.getElementById("member-image");

if (memberName && memberImage) {
  const params = new URLSearchParams(window.location.search);
  const selectedMember = params.get("name");
  const member = members[selectedMember];

  if (member) {
    memberName.textContent = member.name;
    memberImage.src = member.image;
    memberImage.alt = member.name;
    document.title = `ABILIGENE | ${member.name}`;
  } else {
    memberName.textContent = "Member Not Found";
    memberImage.style.display = "none";
  }
}
