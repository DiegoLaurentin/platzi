const person = () => {
	var saveName = "Name";
	return {
		getName: () => {
			return saveName;
		},
		setName: () => {
			saveName = name;
		},
	};
};

newPerson = person()
console.log(newPerson.getName())

newPerson.setName('Diego')
console.log(newPerson.getName())
