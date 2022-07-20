import { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { hash } = req.query;

  const course = data.find((item) => item.hash === hash);

  if (course) {
    res.status(200).json(course);
  }
};

export default handler;
