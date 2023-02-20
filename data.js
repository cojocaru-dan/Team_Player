
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
