
// Our Team

const ourTeam = {
	name: "LearnZilla",
	members: [
		{
			name: "Buzila Ionut",
			birthday: {
				year: 1999,
				month: 10,
				day: 19
			},
			location: {
				country: "Romania",
				city: "Nasaud"
			},
			codingLevel: {
				level: 66
			}, 
			favorites: {
				favMovies:[
					{ 
						title: ["The Fate of the Furious"],
					yearOfRelease: 2017, 
					imbdRating: 6.6 ,
					description: "Dominic Toreto,he has to betray his team to save his child from the hands of an enemy, he has to work for him, in the end the team helps him recover the child and liquidate the criminals!",
					directors:["F.Gary Gray"],
					writers: ["Chris Morgan"],
					stars: ["Vin Diesel", "Dwayne Johnson", "Jason Statham "],
					genres: ["Action", "Adventure", "Thriller"]
				},{
						title: "Need for Speed",
					yearOfRelease: 2014,
					imbdRating: 6.4,
					description: "Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross-country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins.",
					directors: ["Scott Waugh"],
					writers: ["George Gatins", "John Gatins."],
					stars: ["Aaron Paul", "Imogen Poots", "Dominic Cooper"],
					genres: ["Open-world"]
				},{
						title: "Baby Driver",	
					yearOfRelease: 2017,	
					imbdRating: 7.6,	
					description: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
					directors: ["Edgar Wright"],
					writers: ["Edgar Wright"],
					stars: ["Ansel Elgort", "Jon Bernthal", "Eiza González"],
					genres: ["Action","Adventure","Thriller", "Drama"]
				},{
						title: "Our Last Summer",
					yearOfRelease: 2018,
					imbdRating: 7.5,
					description: "A group of college graduates go on one final vacation together. Just before the trip, Nathan gets dumped by his girlfriend and gets tricked in to going on the trip without knowing she'll be there. Hilarity ensues.",
					directors: ["Thomas Finn", "Joseph Voce"],
					writers: ["Thomas Finn", "Joseph Voce"],
					stars: ["KJ Apa" , "Tyler Posey "],
					genres: ["Pop", "Romance", "Comedy"]
				}
				],
				favBooks:[
					{
						title: "Urzeala tronurilor",
						author: "George Raymond Richard Martin",
						yearOfPublication: 1996,
						isNewerThan2000: true,
						age: 2023 - 1996,
						characters: "Jon Snow, Daenerys Targaryen, Eddard Stark,Catelyn Stark,Cersei Baratheon"        
					},
					{
						title: "Stăpânul inelelor",
						author: "John Ronald Reuel Tolkien ",
						yearOfPublication: 1954,
						isNewerThan2000: false,
						age: 2023 - 1954,
						characters: "Sauron, Galadriel, Gandalf, Aragorn, Frodo Baggins"     
					}
				],
				favSongs: [
					{
						artist: "Yiruma",
						title: "The River Flows In You",
						year: 2017,
						genres: ["dance", "electronic"],
						iLikeIt : true,
					},
					{
						artist: "Axwell & Ingrosso",
						title: "Dreamer",
						year: 2017,
						genres: ["dance pop", "dance"],
						iLikeIt : true,
					},
				],
			}
		},
		{
			name: "Ciobanu Laura",
			birthday: {
				year: 1996,
				month: 10,
				day: 15,
			},
			location: {
				country: "Romania",
				city: "Iasi",
			},
			codingLevel: {
				level: 60
			},
			favorites: {
				favMovies: [
					{
					title: "The Breakfast Club",
					year: 1985,
					rating: 7.8,
					description: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
					directors: ["John Hughes"],
					writers: ["John Hughes"],
					stars: ["Emilio Estevez", "Judd Nelson", "Molly Ringwald"],
					genres: ["comedy", "drama"],
				},
				{
					title: "American Beauty",
					year: 1999,
					rating: 8.4,
					description: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
					directors: ["Sam Mendes"],
					writers: ["Alan Ball"],
					stars: ["Kevin Spacey", "Annette Bening", "Thora Birch"],
					genres: ["drama"]
				},
				{
					title: "Inglourious Basterds",
					year: 2009,
					rating: 8.3,
					description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
					directors: ["Quentin Tarantino"],
					writers: ["Quentin Tarantino"],
					stars: ["Brad Pitt", "Diane Kruger", "Eli Roth"],
					genres: ["adventure", "drama", "war"],
				},
				{
					title: "Frozen",
					year: 2013,
					rating: 7.4,
					description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
					directors: ["Chris Buck", "Jennifer Lee"],
					writers: ["Jennifer Lee (screenplay)", "Hans Christian Andersen (story inspired by 'The Snow Queen'"],
					stars: ["Kristen Bell(voice)", "Idina Menzel(voice)", "Jonathan Groff(voice)"],
					genres: ["animation", "adventure", "comedy"]
				}, 
			],
				favBooks:  [
					{
					title: "Jane Eyre ",
					author: "Charlotte Brontë",
					year: 1847,
					isNewerThan2000: false,
					age: 176,
					characters: ["Jane Eyre", "Mrs Sarah Reed", "Bertha Mason", "Grace Poole", "St. John Rivers", "Edward Rochester", "Edward Rochester", "Mr. Brocklehurst", "Blanche Ingram"]
				},
				{
					title: "Uncle Tom's Cabin",
					author : "Harriet Beecher Stowe",
					year: 1852,
					isNewerThan2000: false,
					age: 171,
					characters: ["Uncle Tom", "Miss Ophelia", "Augustine St. Clare", "Emily Shelby", "Eliza", "Quimbo", "Simon Legree", "Evangeline St. Clare", "Arthur Shelby", "George Shelby", "Topsy"]
				},
			],
				favSongs: [
				{
					artist: "Lana del Rey",
					title: "Yes to heaven",
					year: 2013,
					genres: ["dream pop", "indie rock"],
				},
				{
					artist: "Tiesto",
					title: "10:35",
					year: 2023,
					genres: ["dance", "electro pop", "electronic"],
				},
		]
			}
		},
		{
			name:"Cojocaru Dan",
			birthday: {
				year: 1990,
				month: 6, 
				day: 20,
			},
			location: {
				country: "Romania",
				city: "Bucuresti",
			},
			codingLevel: {
				level: 82
			},
			favorites: {
				favMovies:[
					{
						title: "Forrest Gump",
						year: 1994,
						rating: 8.8,
						description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
						directors: ["Robert Zemeckis"],
						writers: ["Winston Groom", "Eric Roth"],
						stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
						genres: ["Drama", "Comedy", "Romance"]
					},
					{
						title: "The Silence of the Lambs",
						year: 1991,
						rating: 8.6,
						description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
						directors: ["Jonathan Demme"],
						writers: ["Thomas Harris", "Ted Tally"],
						stars: ["Jodie Foster", "Anthony Hopkins", "Lawrence Bonney"],
						genres: ["Thriller", "Horror", "Mystery"]
					},
					{
						title: "Se7en",
						year: 1995,
						rating: 8.6,
						description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
						directors: ["David Fincher"],
						writers: ["Andrew Kevin Walker"],
						stars: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
						genres: ["Thriller", "Mystery", "Crime"]
					},
					{
						title: "The Usual Suspects",
						year: 1995,
						rating: 8.5,
						description: "The authorities in New York arrest five guys with one of the most dubious reputations, suspected of having participated in the robbery of a truck. The police investigations will trigger a carousel of violence that will end in a carnage with 27 dead bodies and a quantity of cocaine worth 91 million dollars missing.",
						directors: ["Bryan Singer"],
						writers: ["Christopher McQuarrie"],
						stars: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
						genres: ["Mystery", "Crime", "Drama"]
					}
				],
				favBooks:[
					{
						title: "The Namesake",
						author: "Jhumpa Lahiri",
						year: 2003,
						isNewerThan2000: true,
						age: 20,
						characters: ["Ashoke", "Gogol", "Sonia", "Maxine"]
					},
					{
						title: "Norse Mythology",
						author: "Neil Gaiman",
						year: 2017,
						isNewerThan2000: true,
						age: 6,
						characters: ["Odin", "Thor", "Loki", "Freya"]
					}
				],
				favSongs: [
					{
						artist: "Tracy Chapman",
						title: "Tracy Chapman",
						year: 1988,
						genres: ["folk rock", "indie rock"],
						sale: 20000000
					},
					{
						artist: "Eagles",
						title: "Their Greatest Hits (1971 - 1975)",
						year: 1976,
						genres: ["country rock", "soft rock", "folk rock"],
						sale: 44000000,
					}
				],
			}
		}
	]
}

// Seniority

for (const member of ourTeam.members) {
	if (member.codingLevel.level < 50) {
		member.codingLevel.seniority = "junior";
	} else if (member.codingLevel.level >= 50 && member.codingLevel.level <= 75) {
		member.codingLevel.seniority = "medior";
	} else if (member.codingLevel.level > 75) {
		member.codingLevel.seniority = "senior";
	}
}

for (const member of ourTeam.members) {
	console.log(member.codingLevel);
}


// Add new keys and values and remove a few one
  

delete ourTeam["members"][0].favorites["favMovies"][0]["description"];

console.log (ourTeam.members[0].favorites.favMovies);

// review Movie
for (const addRev of ourTeam.members) {
	for (let i = 0; i < addRev.favorites.favMovies.length; i++){
		if(addRev.favorites.favMovies[i].title == "The Usual Suspects"){
			addRev.favorites.favMovies[i].review = "The movie presents an attempt by the authorities to catch people involved in a robbery. Among the suspects is a highly intelligent man gifted with a special talent for devising ingenious plans to mislead bankers and the police.";
		}else if(addRev.favorites.favMovies[i].title == "Se7en"){
			addRev.favorites.favMovies[i].review = "A serial killer with a brilliant mind acts with the 7 deadly sins as reasons for committing crimes and starts playing with two detectives who are trying to catch him.";
		}else if(addRev.favorites.favMovies[i].title == "The Silence of the Lambs"){
			addRev.favorites.favMovies[i].review = "It is a psychological movie with a manipulative cannibal killer who helps catch another serial killer. During the movie, a series of clues appear that force you to think.";
		}else if(addRev.favorites.favMovies[i].title == "Forrest Gump"){
			addRev.favorites.favMovies[i].review = "The film depicts the events in the life of an Alabama man with an IQ of 75, whose only wish is to be reunited with his childhood girlfriend. It's a good movie for any age and the main character acted almost perfectly and got the Oscar for this role.";
		}else if(addRev.favorites.favMovies[i].title == "The Fate of the Furious"){
			addRev.favorites.favMovies[i].review = "The Fate of the Furious wallows in inanities with about the same frequency as it delivers excitement, and it largely succeeds as a breezy and engaging lark.";
		}else if(addRev.favorites.favMovies[i].title == "Need for Speed"){
			addRev.favorites.favMovies[i].review = "This movie delivers exactly what it set out to deliver. If you like fast and beautiful cars, this one is for you!";
		}else if(addRev.favorites.favMovies[i].title == "Baby Driver"){
			addRev.favorites.favMovies[i].review = "baby Driver is an utterly addictive whimsical comedy that is (in my personal opinion) the best movie facing 2017 so far!";
		}else if(addRev.favorites.favMovies[i].title == "Our Last Summer"){
			addRev.favorites.favMovies[i].review = "The Last Summer is an enjoyable experience, after the movie I am left with a good feeling of joy.It is a summer movie for everyone to watch and highly recommended for this summer vacation";
		}else if(addRev.favorites.favMovies[i].title == "The Breakfast Club"){
			addRev.favorites.favMovies[i].review = "This movie is one of the chillest and most straight forward movies ever.";
		}else if(addRev.favorites.favMovies[i].title == "American Beauty"){
			addRev.favorites.favMovies[i].review = "No matter how hard life, you can always find its hidden beauty. ";
		}else if(addRev.favorites.favMovies[i].title == "Inglourious Basterds"){
			addRev.favorites.favMovies[i].review = "An absolutely marvelous film. I could watch it countless times and never become bored of the ingenious storyline. ";
		}else if(addRev.favorites.favMovies[i].title == "Frozen"){
			addRev.favorites.favMovies[i].review = "Based on the fairy tale “The Snow Queen” by Hans Christian Anderson and is a project in the works since the beginnings of Disney. This is hands down one of the best musicals Disney has created.";
	}	
  }
}

// review Books
for (const addRev of ourTeam.members) {
	for (let i = 0; i < addRev.favorites.favBooks.length; i++){
		if(addRev.favorites.favBooks[i].title == "Urzeala tronurilor"){
			addRev.favorites.favBooks[i].review = "Game of Thrones (1996) is the first book in the A Song of Ice and Fire series, a fantasy epic written by George R.R. Martin.";
		}else if(addRev.favorites.favBooks[i].title == "Stăpânul inelelor"){
			addRev.favorites.favBooks[i].review = "It's the kind of reading we all need to have in our library. Children, adults, teenagers, it doesn't matter which category you fall into, you can read this book at any time and at any time that will keep you hooked.";
		}else if(addRev.favorites.favBooks[i].title == "Jane Eyre"){
			addRev.favorites.favBooks[i].review = "Certainly one of the best novels ever written."
		}else if(addRev.favorites.favBooks[i].title == "Uncle Tom's Cabin"){
			addRev.favorites.favBooks[i].review = "Excellent book! Wish I had read earlier in life. A must read for all. Illuminating."
		}else if(addRev.favorites.favBooks[i].title == "The Namesake"){
			addRev.favorites.favBooks[i].review = "The Namesake tells the story of the Ganguli family. Most of the novel centers on Gogol and his life as he tries to come to terms with his identity. For most of his childhood and adolescence, he struggles with accepting his name.";
		}else if(addRev.favorites.favBooks[i].title == "Norse Mythology"){
			addRev.favorites.favBooks[i].review = "Norse mythology consists of nine worlds all surrounding a central cosmological tree, Yggdrasil. All beings live in these nine circles - the Viking gods live in the celestial realm of Asgard, humanity lives in Midgard, and the other worlds are inhabited by beings such as elves, giants, and dwarves.";
	}
  }
}

// Songs review
for (const addRev of ourTeam.members) {
	for (let i = 0; i < addRev.favorites.favSongs.length; i++){
		if(addRev.favorites.favSongs[i].title == "The River Flows In You"){
			addRev.favorites.favSongs[i].review = "If you're an aspiring pianist or just enjoy the sound of a simple, beautiful melody, you will have likely come across Yiruma's lyrical piano piece, 'River Flows in You' (2001)!";
		}else if(addRev.favorites.favSongs[i].title == "Dreamer"){
			addRev.favorites.favSongs[i].review = "This song is a motivation to dream, not to give up on your dreams : I can promise you, Yes, I am a dreamer too. We are dreamers together, Always and forever!";
		}else if(addRev.favorites.favSongs[i].title == "Yes to heaven"){
			addRev.favorites.favSongs[i].review = "This song sounds like a summer day."
		}else if(addRev.favorites.favSongs[i].title == "10:35"){
			addRev.favorites.favSongs[i].review = "It's energizing!"
		}else if(addRev.favorites.favSongs[i].title == "Tracy Chapman"){
			addRev.favorites.favSongs[i].review = "I like this kind of music and especially Tracy Chapman for her simplicity, vocal ability and lyrical content.";
		}else if(addRev.favorites.favSongs[i].title == "Their Greatest Hits (1971 - 1975)"){
			addRev.favorites.favSongs[i].review = "The songs in the compilation are melodic, immediately engaging, and lyrically consistent, so, these songs make up a collection consistent in mood and identity.";
	}
  }
}

// The isNewerThan2000 and age keys of the books and the description keys of the movies are removed
for (const iterator of ourTeam.members) {
	for (const item of iterator.favorites.favMovies) {
		delete item.description;
	}
}

for (const iterator of ourTeam.members) {
	for (const item of iterator.favorites.favBooks) {
		delete item.isNewerThan2000;
		delete item.age;
	}
}
console.log(ourTeam.members[0].favorites.favBooks);
console.log(ourTeam.members[0].favorites.favMovies);
console.log(ourTeam.members[0].favorites.favSongs);
// console.log(ourTeam.members[0].favorites.favBooks);

// Average Age

/*
let totalAge = 0;
for (const age of ourTeam.members) {
	if (age.name === "Buzila Ionut") {
	let year = 2023 - age.birthday.year;
	totalAge += year;
	} else if 
	(age.name === "Ciobanu Laura") {
	let year = 2023 - age.birthday.year;
	totalAge += year;
	} else if 
	(age.name === "Cojocaru Dan") {
	let year = 2023 - age.birthday.year;
	totalAge += year;
}
}
let averageAge = totalAge / 3;
console.log(totalAge);
*/

let averageAge = 0;

for ( let i = 0; i < ourTeam.members.length; i ++) {
	averageAge += (2023 - ourTeam.members[i].birthday.year) / 3;
}

console.log("Our team average age is:", Math.floor(averageAge));

// Average coding level

let averageCodingLevel = 0;
let totalLevel = 0;
let string = "";
for ( let i = 0; i < ourTeam.members.length; i ++) {
	totalLevel += ourTeam.members[i].codingLevel.level;
	averageCodingLevel = totalLevel / 3;
	if (averageCodingLevel < 50) {
		string = "Our team coding level is junior: ";
	} else if (averageCodingLevel >= 50 && averageCodingLevel <= 75) {
		string = "Our team coding level is medior: ";
	} else if (averageCodingLevel > 75) {
		string ="Our team coding level is senior: ";
	}
}
averageCodingLevel = Math.floor(averageCodingLevel);
console.log(averageCodingLevel);

// youngestMember
let youngestMember = ourTeam.members[0];

for (let i = 0; i < ourTeam.members.length; i++) {
	if (ourTeam.members[i].birthday.year > youngestMember.birthday.year) {
		youngestMember = ourTeam.members[i];
	}
}
 console.log("The youngest member of our team is:", youngestMember.name);

// oldestMember
let oldestMember = ourTeam.members[0];

for (let i = 0; i < ourTeam.members.length; i++) {
	if (ourTeam.members[i].birthday.year < oldestMember.birthday.year) {
		oldestMember = ourTeam.members[i];
	}
}
console.log("The oldest member of our team is:", oldestMember.name);

// From the same location
 let location = {
	Nasaud: "",
	Iasi: "",
	Bucuresti: "",
};

for (let i = 0; i < ourTeam.members.length; i++) {
	let city = ourTeam.members[i].location.city ;
	if (city === "Nasaud") {
		location.Nasaud += ourTeam.members[i].name + "  ";
	}else if (city === "Iasi") {
		location.Iasi += ourTeam.members[i].name + " ";
	}else if (city === "Bucuresti") {
		location.Bucuresti += ourTeam.members[i].name + " ";
	}
	
}
console.log("Din Nasaud: " + location.Nasaud);
console.log("Din Iasi: " + location.Iasi);
console.log("Din Bucuresti: " + location.Bucuresti);

// Common music style
let commonGenres = {};

for (let i = 0; i < ourTeam.members.length; i++) {
	const favSong = ourTeam.members[i].favorites.favSongs;
	for (let j = 0; j < favSong.length; j++) {
		const favGenre = favSong[j].genres;
		for (let k = 0; k < favGenre.length; k++) {
			const genre = favGenre[k];
			if (commonGenres.hasOwnProperty(genre)) {
				commonGenres[genre]++;
			}else 
			commonGenres[genre] = 1;
		}
	}
	
}
console.log(commonGenres);


// Choose theme for each Member


const ionutColor = {
	primary: {
		red: 255, 
		green: 255,
		blue: 0,
	},
	secondary: {
		red: 209, 
		green: 88,
		blue: 201,
	}
}

const lauraColor = {
	primary: {
		red: 76, 
		green: 0,
		blue: 153,
	},
	secondary: {
		red: 255, 
		green: 204,
		blue: 255,
	}
}

const danColor = {
	primary: {
		red: 106, 
		green: 251,
		blue: 148,
	},
	secondary: {
		red: 0, 
		green: 0,
		blue: 84,
	}
}

for (let i = 0; i < ourTeam.members.length; i++) {
	if (ourTeam.members[i].name == "Buzila Ionut") {
		ourTeam.members[i].colors = ionutColor;
	}else if (ourTeam.members[i].name == "Ciobanu Laura") {
		ourTeam.members[i].colors = lauraColor;
	}else if (ourTeam.members[i].name == "Cojocaru Dan") {
		ourTeam.members[i].colors = danColor;
	}
	console.log(ourTeam.members[i].colors);
}



	// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	//{ourTeam, averageAge, youngestMember, location, }
	toExport = [
		{ name: "ourTeam", content: ourTeam, type: "object" },
		{ name: "averageAge", content: averageAge, type: "number" },
		{ name: "averageCodingLevel", content: averageCodingLevel, type: "number" },
		{ name: "youngestMember", content: youngestMember, type: "string" },
		{ name: "oldestMember", content: oldestMember, type: "string" },
		{ name: "location", content: location, type: "object" },
		{ name: "commonGenres", content: commonGenres, type: "object" },
	]

} catch (error) {
	toExport = { error: error.message }
}

export { toExport };