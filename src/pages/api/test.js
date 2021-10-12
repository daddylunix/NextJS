export default async function handler (req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    res.status(200).send(data)
  }
  