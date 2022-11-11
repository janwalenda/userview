export default function handler(req, res) {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
          res.status(200).json(user.results);
    });
}