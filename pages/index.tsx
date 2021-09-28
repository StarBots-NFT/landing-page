import Head from 'next/head'
import styles from '../styles/Home.module.css'

import stratege from '../public/Strategy 1.png'
import weapons from '../public/Customisable Weapons.svg'
import flexibility from '../public/Flexibility.svg'
import playToEarn from '../public/Play to earn.svg'
import line from '../public/Line.png'
import dot from '../public/dot.png'
import lua from '../public/lua.png'
import tomochain from '../public/tomochain.png'
import gamee from '../public/gamee-logo-01.png'
import kien from '../public/kien_vuong.png'
import hung from '../public/hung_nguyen.png'
import hong from '../public/hong_nguyen.png'
import cuong from '../public/cuong_nguyen.png'
import quang from '../public/quang_nguyen.png'
import anh from '../public/anh_cong.png'
import cuong_ph from '../public/cuong_phung.png'
import truong from '../public/tr_nguyen.png'
import long from '../public/long_vuong.png'
import anhNg from '../public/anh_nguyen.png'
import frame from '../public/LineCol.png'
import videoFooter from '../public/bannerFooter.png'

import Unique from '../comps/Unique';
import RoadMapTime from "../comps/RoadMapTime";
import RoadMapGoal from "../comps/RoadMapGoal"
import OurTeamItem from "../comps/OurTeamItem";
import Mobile from "../comps/mobile"

import {useCallback, useEffect, useState} from 'react'

function Home(props) {
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
        function detectMob() {
            const toMatch = [
                /Android/i,
                /webOS/i,
                /iPhone/i,
                /BlackBerry/i,
                /Windows Phone/i
            ];

            return toMatch.some((toMatchItem) => {
                return navigator.userAgent.match(toMatchItem);
            });
        }

        setMobile(detectMob)
    })


    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addListener(updateTarget);

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
                setTargetReached(true);
            }
            return () => media.removeListener(updateTarget);
        }, []);

        return targetReached;
    };
    const isBreakpointPc = useMediaQuery(1250)
    const isBreakpointMb = useMediaQuery(680)

    function feature() {
        if (!isBreakpointPc) {
            return (
                <div className={styles.feature} id={"feature"}>
                    <div className={styles.featureText}>
                        <div className={styles.title}>Unique Feature</div>
                        <div className={styles.unique}>
                            <Unique imgUrl={playToEarn} title={"Play to earn"}
                                    content={"Gain GEAR tokens while exploring planets full of battles and missions."}/>
                            <Unique imgUrl={weapons} title={"Customisable Weapons"}
                                    content={"Customize your battle robots to your own liking using a diverse selection of body parts."}/>
                            <Unique imgUrl={flexibility} title={"Flexibility"}
                                    content={"Upgrade, repair and disassemble your fighting robot at any given time."}/>
                            <Unique imgUrl={stratege} title={"Strategy"}
                                    content={"Logically combine different weapons and body parts to produce a robot with the winning principle of operation. es."}/>
                        </div>
                    </div>
                </div>
            )
        } else if (isBreakpointPc && !isBreakpointMb) {
            return (
                <div className={styles.feature} id={"feature"}>
                    <div className={styles.featureText}>
                        <div className={styles.title}>Unique Feature</div>
                        <div className={styles.unique}>
                            <table className={styles.uniqueLayout}>
                                <tr className={styles.featureTr}>
                                    <th>
                                        <Unique imgUrl={playToEarn} title={"Play to earn"}
                                                content={"Gain GEAR tokens while exploring planets full of battles and missions."}/>
                                    </th>
                                    <th>
                                        <Unique imgUrl={weapons} title={"Customisable Weapons"}
                                                content={"Customize your battle robots to your own liking using a diverse selection of body parts."}/>
                                    </th>
                                </tr>
                                <tr className={styles.featureTr}>
                                    <th>
                                        <Unique imgUrl={flexibility} title={"Flexibility"}
                                                content={"Upgrade, repair and disassemble your fighting robot at any given time."}/>
                                    </th>
                                    <th>
                                        <Unique imgUrl={stratege} title={"Strategy"}
                                                content={"Logically combine different weapons and body parts to produce a robot with the winning principle of operation. es."}/>
                                    </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.feature} id={"feature"}>
                    <div className={styles.featureText}>
                        <div className={styles.title}>Unique Feature</div>
                        <div className={styles.unique}>
                            <div>
                                <Unique imgUrl={playToEarn} title={"Play to earn"}
                                        content={"Gain GEAR tokens while exploring planets full of battles and missions."}/>
                            </div>
                            <div>
                                <Unique imgUrl={weapons} title={"Customisable Weapons"}
                                        content={"Customize your battle robots to your own liking using a diverse selection of body parts."}/>
                            </div>

                            <div>
                                <Unique imgUrl={flexibility} title={"Flexibility"}
                                        content={"Upgrade, repair and disassemble your fighting robot at any given time."}/>
                            </div>

                            <div><Unique imgUrl={stratege} title={"Strategy"}
                                         content={"Logically combine different weapons and body parts to produce a robot with the winning principle of operation. es."}/>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }

    function map() {
        if (!isBreakpointPc) {
            return (
                <div className={styles.roadmap} id={"map"}>
                    <div className={styles.roadmapText}>
                        <div className={styles.title}>Roadmap</div>
                        <div className={styles.content}>Game Play & Whitepaper Release</div>
                    </div>
                    <div className={styles.roadmapContent}>
                        <div className={styles.roadmapTop}>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapTime months={"Dec"} year={"2021"}/>
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapGoal text={"BOT token introduction & IDO"}/>
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapTime months={"Q1"} year={"2022"}/>
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapGoal text={"PvE StoryMode Release"}/>
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapTime months={"Q1"} year={"2023"}/>
                            </div>
                        </div>
                        <div className={styles.roadmapArt}>
                            <img src={line}/>
                        </div>
                        <div className={styles.roadmapBot}>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapGoal text={"BOT NFT Sale"}/>
                                <div className={styles.roadmapStar}>
                                    <img src={dot}/>
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapTime months={"Jan"} year={"2022"}/>
                                <div className={styles.roadmapStar}>
                                    <img src={dot}/>
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapGoal text={"PvP Mode Release"}/>
                                <div className={styles.roadmapStar}>
                                    <img src={dot}/>
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapTime months={"Q3"} year={"2022"}/>
                                <div className={styles.roadmapStar}>
                                    <img src={dot}/>
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapGoal text={"Universe Map Release (Planet Sale)"}/>
                                <div className={styles.roadmapStar}>
                                    <img src={dot}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
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
            )
        }
    }

    function team() {
        if (!isBreakpointPc) {
            return (
                <div className={styles.ourTeam} id={"team"}>
                    <div className={styles.ourTeamIntro}>
                        <div className={styles.title}>Our Team</div>
                        <div className={styles.content}>
                            All the distinctive gaming features revolving around our ecosystem
                        </div>
                    </div>
                    <table className={styles.ourTeamLayout}>
                        <tr>
                            <th>
                                <OurTeamItem imgUrl={kien} title={"Kien Vuong"}
                                             content={"CEO"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={hung} title={"Hung Nguyen"}
                                             content={"Creative Director"}/>

                            </th>
                            <th>
                                <OurTeamItem imgUrl={hong} title={"Hong Nguyen"}
                                             content={"Head of Communications"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={cuong} title={"Cuong Nguyen"}
                                             content={"Art Lead"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={quang} title={"Quang Nguyen"}
                                             content={"Game Developer"}/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <OurTeamItem imgUrl={anh} title={"Anh Cong"}
                                             content={"Concept Artist"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={cuong_ph} title={"Cuong Phung"}
                                             content={"Character Artist"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={truong} title={"Truong Nguyen"}
                                             content={"Fullstack Developer"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={long} title={"Long Vuong"}
                                             content={"Strategic Advisor"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={anhNg} title={"Anh Nguyen"}
                                             content={"Marketing & Operation Advisor"}/>
                            </th>
                        </tr>
                    </table>
                </div>
            )
        } else if (isBreakpointPc && !isBreakpointMb) {
            return (
                <div className={styles.ourTeam} id={"team"}>
                    <div className={styles.ourTeamIntro}>
                        <div className={styles.title}>Our Team</div>
                        <div className={styles.content}>
                            All the distinctive gaming features revolving around our ecosystem
                        </div>
                    </div>
                    <table className={styles.ourTeamLayout}>
                        <tr>
                            <th>
                                <OurTeamItem imgUrl={kien} title={"Kien Vuong"}
                                             content={"CEO"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={hung} title={"Hung Nguyen"}
                                             content={"Creative Director"}/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <OurTeamItem imgUrl={hong} title={"Hong Nguyen"}
                                             content={"Head of Communications"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={cuong} title={"Cuong Nguyen"}
                                             content={"Art Lead"}/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <OurTeamItem imgUrl={quang} title={"Quang Nguyen"}
                                             content={"Game Developer"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={anh} title={"Anh Cong"}
                                             content={"Concept Artist"}/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <OurTeamItem imgUrl={cuong_ph} title={"Cuong Phung"}
                                             content={"Character Artist"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={truong} title={"Truong Nguyen"}
                                             content={"Fullstack Developer"}/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <OurTeamItem imgUrl={long} title={"Long Vuong"}
                                             content={"Strategic Advisor"}/>
                            </th>
                            <th>
                                <OurTeamItem imgUrl={anhNg} title={"Anh Nguyen"}
                                             content={"Marketing & Operation Advisor"}/>
                            </th>
                        </tr>
                    </table>
                </div>
            )
        } else {
            return (
                <div className={styles.ourTeam} id={"team"}>
                    <div className={styles.ourTeamIntro}>
                        <div className={styles.title}>Our Team</div>
                        <div className={styles.content}>
                            All the distinctive gaming features revolving around our ecosystem
                        </div>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={kien} title={"Kien Vuong"}
                                     content={"CEO"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={hung} title={"Hung Nguyen"}
                                     content={"Creative Director"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={hong} title={"Hong Nguyen"}
                                     content={"Head of Communications"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={cuong} title={"Cuong Nguyen"}
                                     content={"Art Lead"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={quang} title={"Quang Nguyen"}
                                     content={"Game Developer"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={anh} title={"Anh Cong"}
                                     content={"Concept Artist"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={cuong_ph} title={"Cuong Phung"}
                                     content={"Character Artist"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={truong} title={"Truong Nguyen"}
                                     content={"Fullstack Developer"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={long} title={"Long Vuong"}
                                     content={"Strategic Advisor"}/>
                    </div>
                    <div>
                        <OurTeamItem imgUrl={anhNg} title={"Anh Nguyen"}
                                     content={"Marketing & Operation Advisor"}/>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <Head>
                <title>Starbots | The first-ever robot battle NFT game</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            {isMobile ? (
                <Mobile/>
            ) : (
                <div className={styles.bodyContent}>
                    <video autoPlay loop muted className={styles.banner}>
                        <source src='/ShortVideoF3.mp4' type='video/mp4'/>
                    </video>
                    <div id={"intro"} className={styles.gameIntro}>
                        <img className={styles.videoFooter} src={videoFooter}/>
                        <div className={styles.gameIntroText}>
                            <div className={styles.title}>Game Introduction</div>
                            <div className={styles.content}>Starbots is the first-ever robot battle NFT game where
                                players
                                gain GEAR tokens through strategically assembling their own robots, winning battles,
                                completing missions, and conquering new lands.
                            </div>
                        </div>
                        <img className={styles.gameIntroImg} src={"/game_introduction.png"}/>
                    </div>
                    <div className={styles.trailer} id={"trailer"}>
                        <div className={styles.trailerText}>
                            <div className={styles.title}>Trailer</div>
                            <div className={styles.content}>The constant sounds of metals crashing and grenades
                                exploding
                                won't stop until there's only one left standing - the one to conquer all lands.
                            </div>
                        </div>
                        <div className={styles.trailerVideo}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/A-lKEJKhYKo"/>
                        </div>
                    </div>
                    {feature()}
                    {map()}
                    <div className={styles.sponsored} id={"sponsored"}>
                        <div className={styles.sponsoredText}>
                            <div className={styles.title}>Sponsored By</div>
                        </div>
                        <div className={styles.sponsoredIcon}>
                            <img className={styles.sponsoredImage} src={gamee}/>  
                            <img className={styles.sponsoredImage} src={lua}/>
                            <img className={styles.sponsoredImage} src={tomochain}/>
                        </div>
                    </div>
                    {team()}
                </div>)}
        </>
    )
}

export default Home
