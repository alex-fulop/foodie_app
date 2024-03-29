import axios from "axios";
import {Video} from "../types";
import React from "react";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import {BASE_URL} from "../utils";

interface IProps {
    videos: Video[]
}

const Home = ({videos}: IProps) => {
    return (
        <h1 className="flex flex-col gap-10 videos h-full">
            {videos.length ? (videos.map((video: Video) => (
                    <VideoCard post={video} key={video._id}/>
                ))
            ) : (
                <NoResults text={'No Videos'}/>
            )}
        </h1>
    );
}

export const getServerSideProps = async ({query: {topic}}: { query: { topic: string } }) => {
    let response;

    if (topic) response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
    else response = await axios.get(`${BASE_URL}/api/post`);

    return {
        props: {
            videos: response.data
        }
    }
};

export default Home