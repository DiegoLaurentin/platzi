const helloWorld = () => {
	const hello = 'Hello';
	console.log(hello);
}

helloWorld();

var scope = 'I am global'

const functionScope = () => {
	var scope = 'I am just a local'
	const func = () => {
		return scope
	}
	console.log(func())
}

functionScope()

