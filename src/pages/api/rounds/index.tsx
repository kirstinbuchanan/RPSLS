import { playGame } from '../../../helpers/api/rounds';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { gesture } = JSON.parse(req.body);

  const result = playGame({ playerGesture: gesture });

  res.statusCode = 200;
  res.json({ result });
};
