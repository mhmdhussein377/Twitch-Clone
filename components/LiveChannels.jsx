import React from 'react'
import LiveChannel from './LiveChannel'
import Live1 from "./../public/assets/live/live1.jpeg"
import Live2 from "./../public/assets/live/live2.jpeg";
import Live3 from "./../public/assets/live/live3.jpeg";
import Live4 from "./../public/assets/live/live4.jpeg";
import Live5 from "./../public/assets/live/live5.jpeg";
import Live6 from "./../public/assets/live/live6.jpeg";
import Live7 from "./../public/assets/live/live7.jpeg";
import Live8 from "./../public/assets/live/live8.jpeg";
import Live9 from "./../public/assets/live/live9.jpeg";
import Live10 from "./../public/assets/live/live10.jpeg";
import Live11 from "./../public/assets/live/live11.jpeg";
import Live12 from "./../public/assets/live/live12.jpeg";

const LiveChannels = () => {
    return (
        <div id="live">
            <h2 className="text-xl font-bold px-2">
                <span className="text-[#9147ff]">Live Channels</span> we think you{"'"}ll like
            </h2>
            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                <LiveChannel
                    img={Live1}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/bed3ea39-265b-4632-b866-598bb8c045dd-profile_image-50x50.png"
                    title="CHARITY STREAM! Any support is ap..."
                    user="Natt"
                    game="Valorant"/>
                <LiveChannel
                    img={Live2}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-50x50.png"
                    title="Deployable shield commin in clutch"
                    user="50ZINT"
                    game="Call of Duty: Warzone"/>
                <LiveChannel
                    img={Live3}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/26fac640-e78a-49f4-8ab2-8d12b92574c6-profile_image-50x50.png"
                    title="VALORANT WITH NIJI AND FRIENDS!..."
                    user="baoo"
                    game="Valorant"/>
                <LiveChannel
                    img={Live4}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/jerma985-profile_image-447425e773e6fd5c-50x50.jpeg"
                    title="Local Streamer stuck in a cave: sings..."
                    user="Jerma985"
                    game="One Hand Clapping"/>
                <LiveChannel
                    img={Live5}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/bed3ea39-265b-4632-b866-598bb8c045dd-profile_image-50x50.png"
                    title="BIG Mario Kart session"
                    user="Bigpuffer"
                    game="Mario Kart 8 Deluxe"/>
                <LiveChannel
                    img={Live6}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3c347ed-1a7a-40a2-8bee-8a7c4426eb33-profile_image-50x50.png"
                    title="Tripod Man Gains RP | Code: MFAM | @..."
                    user="NICKMERCS"
                    game="Apex Legends"/>
                <LiveChannel
                    img={Live7}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/25911b2f-6077-4e46-b66e-25f1655f09f6-profile_image-50x50.png"
                    title="JESUS LOVES YOU!!!"
                    user="coletteleclair"
                    game="Just Chatting"/>
                <LiveChannel
                    img={Live8}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-50x50.png"
                    title="Covert_Muffin teaching Star Wars..."
                    user="JamesDoneQuick"
                    game="Star Wars: Jedi Knight II - Jedi Outcast"/>
                <LiveChannel
                    img={Live9}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-50x50.png"
                    title="Grinding"
                    user="shroud"
                    game="The Cycle: Frontier"/>
                <LiveChannel
                    img={Live10}
                    profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/958d17a9-0c82-4210-8376-7e3c00a006f5-profile_image-50x50.png"
                    title="GRILLIN / CHILLEN! Steak / Burgers..."
                    user="KennyGoodloe"
                    game="Just Chatting"/>
            </div>
        </div>
    );
}

export default LiveChannels