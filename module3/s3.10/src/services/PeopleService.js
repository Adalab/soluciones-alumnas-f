
const ENDPOINT = 'https://randomuser.me/api/?results=50';

const fetchPeople = () => fetch(ENDPOINT).then(response => response.json())

export { fetchPeople };