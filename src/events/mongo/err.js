module.exports = {
	name: 'err',
	async execute(error) {
		console.log("[       DataBase       ] ⛔ Error!")
		console.log(error);
	},
};