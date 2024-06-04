import {TwitterTweetEmbed} from "react-twitter-embed";
import React from "react";
import Loading from "@/app/landing/Loading";



const tweetId = process.env.NEXT_PUBLIC_TWETTER_ID || '1';

export default function TwitterEmbed() {
    return (
        <div>
            <TwitterTweetEmbed
                tweetId={tweetId}
                placeholder={<Loading/>}
            />
        </div>

    )
}