
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
						genres: ["dance", "electonic"],
						iLikeIt : true,
					},
					{
						artist: "Axwell & Ingrosso",
						title: "Dreamer",
						year: 2017,
						genres: ["Dance-pop"],
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
					"title": "The Breakfast Club",
					"year": 1985,
					"rating": 7.8,
					"description": "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought."
				},
				{
					"title": "American Beauty",
					"year": 1999,
					"rating": 8.4,
					"description": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend."
				},
				{
					"title": "Inglourious Basterds",
					"year": 2009,
					"rating": 8.3,
					"description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."
				},
				{
					"title": "Frozen",
					"year": 2013,
					"rating": 7.4,
					"description": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
				}, 
			],
				favBooks:  [
					{
					"title": "Jane Eyre ",
					"author": "Charlotte Brontë",
					"year": 1847,
					"isNewerThan2000": false,
					"age": 176,
					"characters": ["Jane Eyre", "Mrs Sarah Reed", "Bertha Mason", "Grace Poole", "St. John Rivers", "Edward Rochester", "Edward Rochester", "Mr. Brocklehurst", "Blanche Ingram"]
				},
				{
					"title": "Uncle Tom's Cabin",
					"author" : "Harriet Beecher Stowe",
					"year": 1852,
					"isNewerThan2000": false,
					"age": 171,
					"characters": ["Uncle Tom", "Miss Ophelia", "Augustine St. Clare", "Emily Shelby", "Eliza", "Quimbo", "Simon Legree", "Evangeline St. Clare", "Arthur Shelby", "George Shelby", "Topsy"]
				},
			],
			favSongs: [
				{
					artist: "Michael Jackson",
					title: "Thriller",
					year: 1982,
					genres: ["pop", "post-disco", "funk", "rock"],
					iLikeIt : false,
				},
				{
					artist: "AC/DC",
					title: "Back in Black",
					year: 1980,
					genres: ["hard rock"],
					iLikeIt : false,
				},
			],
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
						artist: "Michael Jackson",
						title: "Thriller",
						year: 1982,
						genres: ["pop", "post-disco", "funk", "rock"],
						iLikeIt : false,
					},
					{
						artist: "AC/DC",
						title: "Back in Black",
						year: 1980,
						genres: ["hard rock"],
						iLikeIt : false,
					},
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



// review Movie
for (const addRev of ourTeam.members) {
	for (let i = 0; i < addRev.favorites.favMovies.length; i++){
		if(addRev.favorites.favMovies[i].title == "The Usual Suspects"){
			addRev.favorites.favMovies[i].review = "Usual cool"
		}else if(addRev.favorites.favMovies[i].title == "Se7en"){
			addRev.favorites.favMovies[i].review = "Se7en cool"
		}else if(addRev.favorites.favMovies[i].title == "The Silence of the Lambs"){
			addRev.favorites.favMovies[i].review = "The Silence of the Lambs cool"
		}else if(addRev.favorites.favMovies[i].title == "Forrest Gump"){
			addRev.favorites.favMovies[i].review = "Forrest Gump cool"
		}else if(addRev.favorites.favMovies[i].title == "The Fate of the Furious"){
			addRev.favorites.favMovies[i].review = "The Fate of the Furious wallows in inanities with about the same frequency as it delivers excitement, and it largely succeeds as a breezy and engaging lark."
		}else if(addRev.favorites.favMovies[i].title == "Need for Speed"){
			addRev.favorites.favMovies[i].review = "This movie delivers exactly what it set out to deliver. If you like fast and beautiful cars, this one is for you!"
		}else if(addRev.favorites.favMovies[i].title == "Baby Driver"){
			addRev.favorites.favMovies[i].review = "baby Driver is an utterly addictive whimsical comedy that is (in my personal opinion) the best movie facing 2017 so far!"
		}else if(addRev.favorites.favMovies[i].title == "Our Last Summer"){
			addRev.favorites.favMovies[i].review = "The Last Summer is an enjoyable experience, after the movie I am left with a good feeling of joy.It is a summer movie for everyone to watch and highly recommended for this summer vacation"
		}else if(addRev.favorites.favMovies[i].title == "The Breakfast Club"){
			addRev.favorites.favMovies[i].review = "The Breakfast Club cool"
		}else if(addRev.favorites.favMovies[i].title == "American Beauty"){
			addRev.favorites.favMovies[i].review = "American Beauty cool"
		}else if(addRev.favorites.favMovies[i].title == "Inglourious Basterds"){
			addRev.favorites.favMovies[i].review = "Inglourious Basterds cool"
		}else if(addRev.favorites.favMovies[i].title == "Frozen"){
			addRev.favorites.favMovies[i].review = "Frozen cool"
	}	
  }
}

// review Books
for (const addRev of ourTeam.members) {
	for (let i = 0; i < addRev.favorites.favBooks.length; i++){
		if(addRev.favorites.favBooks[i].title == "Urzeala tronurilor"){
			addRev.favorites.favBooks[i].review = "Game of Thrones (1996) is the first book in the A Song of Ice and Fire series, a fantasy epic written by George R.R. Martin."
		}else if(addRev.favorites.favBooks[i].title == "Stăpânul inelelor"){
			addRev.favorites.favBooks[i].review = "It's the kind of reading we all need to have in our library. Children, adults, teenagers, it doesn't matter which category you fall into, you can read this book at any time and at any time that will keep you hooked."
		}else if(addRev.favorites.favBooks[i].title == "Jane Eyre"){
			addRev.favorites.favBooks[i].review = "Jane Eyre cool book"
		}else if(addRev.favorites.favBooks[i].title == "Uncle Tom's Cabin"){
			addRev.favorites.favBooks[i].review = "Uncle Tom's Cabin cool book"
		}else if(addRev.favorites.favBooks[i].title == "The Namesake"){
			addRev.favorites.favBooks[i].review = "The Namesake cool book"
		}else if(addRev.favorites.favBooks[i].title == "Norse Mythology"){
			addRev.favorites.favBooks[i].review = "Norse Mythology cool book"
	}
  }
}

// Songs review
for (const addRev of ourTeam.members) {
	for (let i = 0; i < addRev.favorites.favSongs.length; i++){
		if(addRev.favorites.favSongs[i].title == "The River Flows In You"){
			addRev.favorites.favSongs[i].review = "If you're an aspiring pianist or just enjoy the sound of a simple, beautiful melody, you will have likely come across Yiruma's lyrical piano piece, 'River Flows in You' (2001)!"
		}else if(addRev.favorites.favSongs[i].title == "Dreamer"){
			addRev.favorites.favSongs[i].review = "This song is a motivation to dream, not to give up on your dreams : I can promise you, Yes, I am a dreamer too. We are dreamers together, Always and forever!"
		}else if(addRev.favorites.favSongs[i].title == "Song1"){
			addRev.favorites.favSongs[i].review = "Jane Eyre cool book"
		}else if(addRev.favorites.favSongs[i].title == "Uncle Tom's Cabin"){
			addRev.favorites.favSongs[i].review = "Uncle Tom's Cabin cool book"
		}else if(addRev.favorites.favSongs[i].title == "The Namesake"){
			addRev.favorites.favSongs[i].review = "The Namesake cool book"
		}else if(addRev.favorites.favSongs[i].title == "Norse Mythology"){
			addRev.favorites.favSongs[i].review = "Norse Mythology cool book"
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
