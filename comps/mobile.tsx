import styles from '../styles/mobile.module.css'

import stratege from '../public/Strategy 1.png'
import weapons from '../public/Customisable Weapons.svg'
import flexibility from '../public/Flexibility.svg'
import playToEarn from '../public/Play to earn.svg'
import dot from '../public/dot.png'
import lua from '../public/lua.png'
import tomochain from '../public/tomochain.png'
import frame from '../public/LineCol.png'

import RoadMapTime from "./RoadMapTime";
import RoadMapGoal from "./RoadMapGoal"
import UniqueMobile from "./UniqueMobile";
import OurTeamItem from "./OurTeamItem";
import ourTeamIcon from "../public/Polygon 8.png";
import {useEffect, useState} from "react";
import gift from "../public/ezgif.com-gif-maker.gif"
import videoFooter from "../public/bannerFooter.png";

const Mobile = () => {
    const [isIos, setIos] = useState(false);
    useEffect( () => {
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
    })
    return (
            <div className={styles.bodyContent}>
                {isIos ? (
                    <img className={styles.banner} src={gift} />
                ) : (
                    <video autoPlay loop muted className={styles.banner}>
                        <source src='/ShortVideoF3.mp4' type='video/mp4' />
                    </video>
                )}
                <div id={"intro"} className={styles.gameIntro}>
                    <img className={styles.videoFooter} src={videoFooter}/>
                    <div className={styles.gameIntroText}>
                        <div className={styles.title}>Game Introduction</div>
                        <div className={styles.content}>Starbots is the first-ever robot battle NFT game where players
                            gain GEAR tokens through strategically assembling their own robots, winning battles,
                            completing missions, and conquering new lands.
                        </div>
                    </div>
                    <img className={styles.gameIntroImg} src={"/Game Introduction.png"}/>
                </div>
                <div className={styles.trailer} id={"trailer"}>
                    <div className={styles.trailerText}>
                        <div className={styles.title}>Trailer</div>
                        <div className={styles.content}>The constant sounds of metals crashing and grenades exploding
                            won't stop until there's only one left standing - the one to conquer all lands.
                        </div>
                    </div>
                    <div className={styles.trailerVideo}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/A-lKEJKhYKo"/>
                    </div>
                </div>
                <div className={styles.feature} id={"feature"}>
                    <div className={styles.featureText}>
                        <div className={styles.title}>Unique Feature</div>
                        <div className={styles.unique}>
                            <div>
                                <UniqueMobile imgUrl={playToEarn} title={"Play to earn"}
                                        content={"Gain GEAR tokens while exploring planets full of battles and missions."}/>
                            </div>
                            <div>
                                <UniqueMobile imgUrl={weapons} title={"Customisable Weapons"}
                                        content={"Customize your battle robots to your own liking using a diverse selection of body parts."}/>
                            </div>
                            <div>
                                <UniqueMobile imgUrl={flexibility} title={"Flexibility"}
                                        content={"Upgrade, repair and disassemble your fighting robot at any given time."}/>
                            </div>
                            <div><UniqueMobile imgUrl={stratege} title={"Strategy"}
                                         content={"Logically combine different weapons and body parts to produce a robot with the winning principle of operation. es."}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.roadmap} id={"map"}>
                    <div className={styles.roadmapText}>
                        <div className={styles.title}>Roadmap</div>
                        <div className={styles.content}>Game Play & Whitepaper Release</div>
                    </div>
                    <div className={styles.roadmapContent}>
                        <div className={styles.roadmapLeft}>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapTime months={"Dec"} year={"2021"}/>
                                <div className={styles.roadmapStarCol}>
                                    <img src={dot}/>
                                </div>
                            </div>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapGoal text={"BOT token introduction & IDO"}/>
                                <div className={styles.roadmapStarCol}>
                                    <img src={dot}/>
                                </div>
                            </div>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapTime months={"Q1"} year={"2022"}/>
                                <div className={styles.roadmapStarCol}>
                                    <img src={dot}/>
                                </div>
                            </div>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapGoal text={"PvE StoryMode Release"}/>
                                <div className={styles.roadmapStarCol}>
                                    <img src={dot}/>
                                </div>
                            </div>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapTime months={"Q1"} year={"2023"}/>
                                <div className={styles.roadmapStarCol}>
                                    <img src={dot}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.roadmapArtCol}>
                            <img src={frame}/>
                        </div>
                        <div className={styles.roadmapRight}>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapGoal text={"BOT NFT Sale"}/>
                            </div>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapTime months={"Jan"} year={"2022"}/>
                            </div>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapGoal text={"PvP Mode Release"}/>
                            </div>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapTime months={"Q3"} year={"2022"}/>
                            </div>
                            <div className={styles.roadmapBodyCol}>
                                <RoadMapGoal text={"Universe Map Release (Planet Sale)"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sponsored} id={"sponsored"}>
                    <div className={styles.sponsoredText}>
                        <div className={styles.title}>Sponsored By</div>
                    </div>
                    <div className={styles.sponsoredIcon}>
                        <img className={styles.sponsoredImage} src={lua}/>
                        <img className={styles.sponsoredImage} src={tomochain}/>
                    </div>
                </div>
                <div className={styles.ourTeam} id={"team"}>
                    <div className={styles.ourTeamIntro}>
                        <div className={styles.title}>Our Team</div>
                        <div className={styles.content}>
                            All the distinctive gaming features revolving around our ecosystem
                        </div>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={ourTeamIcon} title={"Lorem ipsum"}
                                     content={"Vivamus tempor aliquet congue. Integer ac neque in."}/>
                    </div>
                </div>
            </div>
    )
}

export default Mobile
