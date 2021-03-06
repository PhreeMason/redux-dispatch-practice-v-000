export let state;


export function managePets(state = {pets: []}, action){
	switch(action.type){
		case 'ADD_PET':
			return {pets: [...state.pets, action.pet]}
		case 'REMOVE_PET':
		  return {pets: state.pets.filter(i => i.id !== action.id)}
		default:
		  return state
	}
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
  var list = state.pets.map(pet =>`<li>${pet.name}</li>`)
  list = list.join(' ')
  document.getElementById('container').innerHTML = `<ul>${list}</ul>` 
}
