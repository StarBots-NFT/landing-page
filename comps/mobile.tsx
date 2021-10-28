import styles from '../styles/mobile.module.css'

import stratege from '../public/Strategy 1.png'
import weapons from '../public/Customisable Weapons.png'
import flexibility from '../public/Flexibility.png'
import playToEarn from '../public/Play to earn.png'
import dot from '../public/dot.png'
import lua from '../public/lua.png'
import tomochain from '../public/tomochain.png'
import gamee from '../public/gamee-logo-01.png'
import defi from '../public/defi.png'
import frame from '../public/LineCol.png'

import RoadMapTime from "./RoadMapTime";
import RoadMapGoal from "./RoadMapGoal"
import UniqueMobile from "./UniqueMobile";
import OurTeamItem from "./OurTeamItem";
import { useEffect, useState } from "react";
import videoFooter from "../public/bannerFooter.png";
import kien from "../public/kien_vuong.png";
import hung from "../public/hung_nguyen.png";
import hong from "../public/hong_nguyen.png";
import tu_chu from "../public/tu_chu.png";
import quang from "../public/quang_nguyen.png";
import anh from "../public/anh_cong.png";
import giang from "../public/giang_nguyen.png";
import truong from "../public/truong_nguyen.png";
import long from "../public/long_vuong.png";
import anhNg from "../public/anh_nguyen.png";
import Image from 'next/image'

import AOS from "aos";
import "aos/dist/aos.css";

const Mobile = () => {
    const [isIos, setIos] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        AOS.refresh();
        if (typeof window != "undefined") window.scrollTo(0, 1);
        function detectIos() {
            const toMatch = [
                /webOS/i,
                /iPhone/i,
            ];

            return toMatch.some((toMatchItem) => {
                return navigator.userAgent.match(toMatchItem);
            });
        }
        setIos(detectIos)
    }, [])
    return (
        <div className={styles.bodyContent}>
            <div id={"home"}>
                <video autoPlay loop muted playsInline className={styles.banner}>
                    <source src='/ShortVideoF3.mp4' type='video/mp4' />
                </video>
            </div>
            <div id={"intro"} className={styles.gameIntro}>
                <img className={styles.videoFooter} src={videoFooter} />
                <div className={styles.gameIntroText} data-aos="zoom-in">
                    <div className={styles.title}>Game Introduction</div>
                    <div className={styles.content}>Starbots is the first-ever robot battle NFT game where players
                        gain GEAR tokens through strategically assembling their own robots, winning battles,
                        completing missions, and conquering new lands.
                    </div>
                </div>
                <Image width="100%" height="50%" layout="responsive" objectFit="contain" className={styles.gameIntroImg} src={"/game_introduction.png"} />
            </div>
            <div className={styles.trailer} id={"trailer"} >
                <div className={styles.trailerText} data-aos="fade-up">
                    <div className={styles.title}>Trailer</div>
                    <div className={styles.content}>The constant sounds of metals crashing and grenades exploding
                        won't stop until there's only one left standing - the one to conquer all lands.
                    </div>
                </div>
                <div className={styles.trailerVideo}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fPQBve0SMes" />
                </div>
            </div>
            <div className={styles.feature} id={"feature"}>
                <div className={styles.featureText}>
                    <div className={styles.title} data-aos="fade-up">Unique Features</div>
                    <div className={styles.unique}>
                        <div data-aos="fade-up">
                            <UniqueMobile imgUrl={playToEarn} title={"Play to earn"}
                                content={"Gain GEAR tokens while exploring planets full of battles and missions."} />
                        </div>
                        <div data-aos="fade-up">
                            <UniqueMobile imgUrl={weapons} title={"Customisable Weapons"}
                                content={"Customize your battle robots to your own liking using a diverse selection of body parts."} />
                        </div>
                        <div data-aos="fade-up">
                            <UniqueMobile imgUrl={flexibility} title={"Flexibility"}
                                content={"Upgrade, repair and disassemble your fighting robot at any given time."} />
                        </div>
                        <div data-aos="fade-up">
                            <UniqueMobile imgUrl={stratege} title={"Strategy"}
                                content={"Logically combine different weapons and body parts to produce a robot with the winning principle of operation."} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.roadmap} id={"map"}>
                <div className={styles.roadmapText}>
                    <div className={styles.title} data-aos="fade-up">Roadmap</div>
                </div>
                <div className={styles.roadmapContent}>
                    <div className={styles.roadmapLeft}>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up" >
                            <RoadMapTime months={"Oct"} year={"2021"} />
                            <div className={styles.roadmapStarCol} >
                                <img src={dot} />
                            </div>
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up" >
                            <RoadMapGoal text={"BOT NFT Slae"} />
                            <div className={styles.roadmapStarCol}>
                                <img src={dot} />
                            </div>
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up">
                            <RoadMapTime months={"Jan"} year={"2022"} />
                            <div className={styles.roadmapStarCol}>
                                <img src={dot} />
                            </div>
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up" >
                            <RoadMapGoal text={"PvP Mode Release"} />
                            <div className={styles.roadmapStarCol}>
                                <img src={dot} />
                            </div>
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up">
                            <RoadMapTime months={"Q3"} year={"2022"} />
                            <div className={styles.roadmapStarCol}>
                                <img src={dot} />
                            </div>
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up" >
                            <RoadMapGoal text={"Starbots Universe"} />
                            <div className={styles.roadmapStarCol}>
                                <img src={dot} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.roadmapArtCol}>
                        <img src={frame} />
                    </div>
                    <div className={styles.roadmapRight}>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up">
                            <RoadMapGoal text={"Gameplay & Whitepaper Release"} />
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up">
                            <RoadMapTime months={"Dec"} year={"2021"} />
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up">
                            <RoadMapGoal text={"BOT token introduction & IDO"} />
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up">
                            <RoadMapTime months={"Q2"} year={"2022"} />
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up">
                            <RoadMapGoal text={"PvE StoryMode Release"} />
                        </div>
                        <div className={styles.roadmapBodyCol} data-aos="fade-up">
                            <RoadMapTime months={"\n"} year={"2023"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sponsored} id={"sponsored"}>
                <div className={styles.sponsoredText} data-aos="fade-up">
                    <div className={styles.title}>Partners & Investors</div>
                </div>
                <div className={styles.sponsoredIcon} data-aos="fade-up">
                    <img className={styles.sponsoredImage} src={gamee} />
                    <img className={styles.sponsoredImage} src={defi} />
                    <img className={styles.sponsoredImage} src={tomochain} />
                    <img className={styles.sponsoredImage} src={lua} />
                </div>
            </div>
            <div className={styles.ourTeam} id={"team"}>
                <div className={styles.ourTeamIntro} data-aos="fade-up">
                    <div className={styles.title}>Our Team</div>
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={kien} title={"Kien Vuong"}
                        content={"CEO"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={hung} title={"Hung Nguyen"}
                        content={"Creative Director"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={hong} title={"Hong Nguyen"}
                        content={"Head of Communications"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={tu_chu} title={"Tu Chu"}
                        content={"Head of Engineering"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={quang} title={"Quang Nguyen"}
                        content={"Game Developer"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={truong} title={"Truong Nguyen"}
                        content={"Fullstack Developer"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={anh} title={"Anh Cong"}
                        content={"Concept Artist"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={giang} title={"Giang Nguyen"}
                        content={"Game Advisor"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={long} title={"Long Vuong"}
                        content={"Strategic Advisor"} />
                </div>
                <div data-aos="fade-up">
                    <OurTeamItem imgUrl={anhNg} title={"Anh Nguyen"}
                        content={"Founding Partner"} />
                </div>
            </div>
        </div>
    )
}

export default Mobile
