let chat = [
  {
    person: [
      {
        firstname: "vhai",
        lastname: "brothers",
        profilePic: "manumnsPicture",
        lastUpdated: `${2} min`,
        isRead: ["seen", "Not seen"],
        type: ["person", "group"],
      },
      {
        firstname: "Abdul",
        lastname: "Al Mamun",
        profilePic: "manumnsPicture",
        lastUpdated: `${12} min`,
        isRead: ["seen", "Not seen"],
      },
      {
        firstname: "Team",
        lastname: "brothers",
        profilePic: "manumnsPicture",
        lastUpdated: `${34} min`,
        isRead: ["seen", "Not seen"],
      },
    ],
  },
  {
    chatSummery: "",
  },
];
output = chat[0].person;

output = output.map((chat) => chat.firstname + " " + chat.lastname);

console.log(output);
