//JSON
const singer = {
    name: "Imagine Dragons",
    member: ["Dan Reynolds", "Wayne Sermon", "Ben McKee", "Daniel Platzman"],
    songs: [
        {
            title: "Radioactive",
            year: 2012
        },
        {
            title: "Believer",
            year: 2017
        },
        {
            title: "Thunder",
            year: 2017
        }
    ]
};

//JSON object -> string(http, tcp/ip -> string)
const str = JSON.stringify(singer);
console.log(str);

//string -> object
const obj = JSON.parse(str);
console.log(obj);

console.log(obj.member[3]);
console.log(obj.songs[0].title);