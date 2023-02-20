
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
			codingLevel: 66,
			favorites: {
				favMovies:[
					{ 
						title: ["The Fate of the Furious"],
					yearOfRelease: 2017, 
					imbdRating: 6.6 ,
					shortDescription: "Dominic Toreto,he has to betray his team to save his child from the hands of an enemy, he has to work for him, in the end the team helps him recover the child and liquidate the criminals!",
					directors:["F.Gary Gray"],
					writers: ["Chris Morgan"],
					stars: ["Vin Diesel", "Dwayne Johnson", "Jason Statham "],
					genres: ["Action", "Adventure", "Thriller"]
				},{
						title: "Need for Speed",
					yearOfRelease: 2014,
					imbdRating: 6.4,
					shortDescription: "Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross-country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins.",
					directors: ["Scott Waugh"],
					writers: ["George Gatins", "John Gatins."],
					stars: ["Aaron Paul", "Imogen Poots", "Dominic Cooper"],
					genres: ["Open-world"]
				},{
						title: "Baby Driver",	
					yearOfRelease: 2017,	
					imbdRating: 7.6,	
					shortDescription: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
					directors: ["Edgar Wright"],
					writers: ["Edgar Wright"],
					stars: ["Ansel Elgort", "Jon Bernthal", "Eiza González"],
					genres: ["Action","Adventure","Thriller", "Drama"]
				},{
						title: "Our Last Summer",
					yearOfRelease: 2018,
					imbdRating: 7.5,
					shortDescription: "A group of college graduates go on one final vacation together. Just before the trip, Nathan gets dumped by his girlfriend and gets tricked in to going on the trip without knowing she'll be there. Hilarity ensues.",
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
			codingLevel: 55,
			favorites: {
				favMovies:0,
				favBooks:0,
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
			codingLevel: 70,
			favorites: {
				favMovies:0,
				favBooks:0,
			}
	}
]
	}


// Team Members







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
