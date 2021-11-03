export const play = (gesture: string) => {
  return fetch('/api/rounds', {
    method: 'POST',
    body: JSON.stringify({ gesture }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
