module.exports = app => {
	return {
		findAll: (params, callback) => {
			return callback([
				{ title: "Tarefa 1" },
				{ title: "Tarefa 2" },
				{ title: "Tarefa 3" },
				{ title: "Tarefa 4" },
				{ title: "Tarefa 5" },
				{ title: "Tarefa 6" },
				{ title: "Tarefa 7" },
				{ title: "Tarefa 8" },
				{ title: "Tarefa 9" },
			]);
		}
	};
};