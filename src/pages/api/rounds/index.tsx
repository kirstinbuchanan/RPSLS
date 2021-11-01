import { playGame } from '../../../helpers/api/rounds';

export default (req, res) => {
  const { gesture } = JSON.parse(req.body);

  const result = playGame(gesture);

  res.statusCode = 200;
  res.json({ result });
};
