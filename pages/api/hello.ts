// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import Popper from "popper.js";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  var rs = await fetch('http://192.168.1.198:3000/game/get-card-used')
  const data = await rs.json()
  data.count
}
