// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {uuid} from "uuidv4";
import {client} from "../../utils/client";

type Data = {
    name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'PUT') {
        const {userId, postId, like} = req.body;

        const data = like ? await client.patch(postId)
                .setIfMissing({likes: []})
                .insert('after', 'likes[-1]', [
                    {
                        _key: uuid(),
                        _ref: userId
                    }
                ])
                .commit()
            : await client
                .patch(postId)
                .unset([`likes[_ref=="${userId}"]`])
                .commit();

        res.status(200).json(data);
    }
}


