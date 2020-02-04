import axios from 'axios';

export default axios.create({
baseURl:'https://api.unsplash.com',
headers: {
  Authorization:
  'Client-ID 28de48b2f0ba6742e1e0739a6ad190a4c193c9208fd4fd59dcb99fb0a87773ee'
}
});