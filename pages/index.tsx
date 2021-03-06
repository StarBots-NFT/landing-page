import Head from 'next/head'
import styles from '../styles/Home.module.css'

import stratege from '../public/Strategy 1.png'
import weapons from '../public/Customisable Weapons.png'
import flexibility from '../public/Flexibility.png'
import playToEarn from '../public/Play to earn.png'
import line from '../public/Line.png'
import dot from '../public/dot.png'
import lua from '../public/lua.png'
import tomochain from '../public/tomochain.png'
import gamee from '../public/gamee-logo-01.png'
import defi from '../public/defi.png'
import bigcoin from '../public/bigcoin_logo.png'
import impo_logo from '../public/impo.png'
import kyros from '../public/kyros.png'
import parsiq from '../public/parsiq.png'
import kyber_logo from '../public/kyber_logo.svg'
import solar_logo from '../public/solar_logo.png'
import solscan_logo from '../public/solscan_logo.svg'
import good_game_logo from '../public/good_game_logo.png'
import ex_logo from '../public/ex_logo.png'
import hub_logo from '../public/hub_logo.png'
import tkv from '../public/TKV_logo.png'
import kien from '../public/kien_vuong.png'
import hung from '../public/hung_nguyen.png'
import hong from '../public/hong_nguyen.png'
import tu_chu from '../public/tu_chu.png'
import quang from '../public/quang_nguyen.png'
import anh from '../public/anh_cong.png'
import giang from '../public/giang_nguyen.png'
import truong from '../public/truong_nguyen.png'
import long from '../public/long_vuong.png'
import anhNg from '../public/anh_nguyen.png'
import frame from '../public/LineCol.png'
import videoFooter from '../public/bannerFooter.png'

import Unique from '../comps/Unique';
import RoadMapTime from "../comps/RoadMapTime";
import RoadMapGoal from "../comps/RoadMapGoal"
import OurTeamItem from "../comps/OurTeamItem";
import Mobile from "../comps/mobile"

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css";

function Home(props) {
    const [isMobile, setMobile] = useState(false);
    const router = useRouter()

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        AOS.refresh();
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

        const navheight = document.getElementById("navbar").getBoundingClientRect().height
        let dropdownH = 0;
        if (document.getElementById("dropdownBlock") != null) {
            dropdownH = document.getElementById("dropdownBlock").getBoundingClientRect().height
        }
        if (router.query.id == 'home') {
            window.scrollTo(0, 0)
        }
        if (router.query.id == 'intro') {
            setTimeout(() => {
                let Y = document.getElementById("intro").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }, 100)
        }
        if (router.query.id == 'trailer') {
            setTimeout(() => {
                let Y = document.getElementById("trailer").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }, 100)
        }
        if (router.query.id == 'feature') {
            setTimeout(() => {
                let Y = document.getElementById("feature").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }, 100)
        }
        if (router.query.id == 'map') {
            setTimeout(() => {
                let Y = document.getElementById("map").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }, 100)
        }
        if (router.query.id == 'sponsored') {
            setTimeout(() => {
                let Y = document.getElementById("sponsored").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }, 100)
        }
        if (router.query.id == 'team') {
            setTimeout(() => {
                let Y = document.getElementById("team").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }, 100)
        }
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
    const isBreakpointPc = useMediaQuery(1350)
    const isBreakpointMb = useMediaQuery(680)

    function feature() {
        if (!isBreakpointPc) {
            return (
                <div className={styles.feature} id={"feature"}>
                    <div className={styles.featureText}>
                        <div className={styles.title} data-aos="fade-up">Unique Features</div>
                        <div className={styles.unique} data-aos="fade-up">
                            <Unique imgUrl={playToEarn} title={"Play to earn"}
                                content={"Gain GEAR tokens while exploring planets full of battles and missions."} />
                            <Unique imgUrl={weapons} title={"Customisable Weapons"}
                                content={"Customize your battle robots to your own liking using a diverse selection of body parts."} />
                            <Unique imgUrl={flexibility} title={"Flexibility"}
                                content={"Upgrade, repair and disassemble your fighting robot at any given time."} />
                            <Unique imgUrl={stratege} title={"Strategy"}
                                content={"Logically combine different weapons and body parts to produce a robot with the winning principle of operation."} />
                        </div>
                    </div>
                </div>
            )
        } else if (isBreakpointPc && !isBreakpointMb) {
            return (
                <div className={styles.feature} id={"feature"}>
                    <div className={styles.featureText}>
                        <div className={styles.title} data-aos="fade-up">Unique Features</div>
                        <div className={styles.unique} data-aos="fade-up">
                            <table className={styles.uniqueLayout}>
                                <tbody>
                                    <tr className={styles.featureTr}>
                                        <th>
                                            <Unique imgUrl={playToEarn} title={"Play to earn"}
                                                content={"Gain GEAR tokens while exploring planets full of battles and missions."} />
                                        </th>
                                        <th>
                                            <Unique imgUrl={weapons} title={"Customisable Weapons"}
                                                content={"Customize your battle robots to your own liking using a diverse selection of body parts."} />
                                        </th>
                                    </tr>
                                    <tr className={styles.featureTr}>
                                        <th>
                                            <Unique imgUrl={flexibility} title={"Flexibility"}
                                                content={"Upgrade, repair and disassemble your fighting robot at any given time."} />
                                        </th>
                                        <th>
                                            <Unique imgUrl={stratege} title={"Strategy"}
                                                content={"Logically combine different weapons and body parts to produce a robot with the winning principle of operation."} />
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.feature} id={"feature"}>
                    <div className={styles.featureText}>
                        <div className={styles.title} data-aos="fade-up">Unique Features</div>
                        <div className={styles.unique} data-aos="fade-up">
                            <div>
                                <Unique imgUrl={playToEarn} title={"Play to earn"}
                                    content={"Gain GEAR tokens while exploring planets full of battles and missions."} />
                            </div>
                            <div >
                                <Unique imgUrl={weapons} title={"Customisable Weapons"}
                                    content={"Customize your battle robots to your own liking using a diverse selection of body parts."} />
                            </div>

                            <div >
                                <Unique imgUrl={flexibility} title={"Flexibility"}
                                    content={"Upgrade, repair and disassemble your fighting robot at any given time."} />
                            </div>

                            <div >
                                <Unique imgUrl={stratege} title={"Strategy"}
                                    content={"Logically combine different weapons and body parts to produce a robot with the winning principle of operation."} />
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
                <div className={styles.roadmap} id={"map"} >
                    <div className={styles.roadmapText}>
                        <div className={styles.title} data-aos="fade-up">Roadmap</div>
                    </div>
                    <div className={styles.roadmapContent} data-aos="fade-up">
                        <div className={styles.roadmapTop}>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapTime months={"Oct"} year={"2021"} />
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapGoal text={"BOT token introduction & IDO"} />
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapTime months={"Feb"} year={"2022"} />
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapGoal text={"PvP Mode Release"} />
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapTime months={"Q3"} year={"2022"} />
                            </div>
                            <div className={styles.roadmapBodyTop}>
                                <RoadMapGoal text={"Starbots Universe"} />
                            </div>
                        </div>
                        <div className={styles.roadmapArt}>
                            <img src={line} />
                        </div>
                        <div className={styles.roadmapBot}>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapGoal text={"Gameplay & Whitepaper Release"} />
                                <div className={styles.roadmapStar}>
                                    <img src={dot} />
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapTime months={"Jan"} year={"2022"} />
                                <div className={styles.roadmapStar}>
                                    <img src={dot} />
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapGoal text={"NFT Sale"} />
                                <div className={styles.roadmapStar}>
                                    <img src={dot} />
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapTime months={"Q2"} year={"2022"} />
                                <div className={styles.roadmapStar}>
                                    <img src={dot} />
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapGoal text={"PvE StoryMode Release"} />
                                <div className={styles.roadmapStar}>
                                    <img src={dot} />
                                </div>
                            </div>
                            <div className={styles.roadmapBodyBot}>
                                <RoadMapTime months={""} year={"2023"} />
                                <div className={styles.roadmapStar}>
                                    <img src={dot} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.roadmap} id={"map"} >
                    <div className={styles.roadmapText}>
                        <div className={styles.title} data-aos="fade-up">Roadmap</div>
                    </div>
                    <div className={styles.roadmapContent}>
                        <div className={styles.roadmapLeft}>
                            <div className={styles.roadmapBodyCol} data-aos="fade-up">
                                <div className={styles.roadmapBodyCol}>
                                    <RoadMapTime months={"Oct"} year={"2021"} />
                                </div>
                                <div className={styles.roadmapStarCol}>
                                    <img src={dot} />
                                </div>
                            </div>
                            <div className={styles.roadmapBodyCol} data-aos="fade-up">
                                <RoadMapGoal text={"BOT token introduction & IDO"} />
                                <div className={styles.roadmapStarCol}>
                                    <img src={dot} />
                                </div>
                            </div>
                            <div className={styles.roadmapBodyCol} data-aos="fade-up">
                                <RoadMapTime months={"Feb"} year={"2022"} />
                                <div className={styles.roadmapStarCol}>
                                    <img src={dot} />
                                </div>
                            </div>
                            <div className={styles.roadmapBodyCol} data-aos="fade-up">
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
                            <div className={styles.roadmapBodyCol} data-aos="fade-up">
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
                                <RoadMapTime months={"Jan"} year={"2022"} />
                            </div>
                            <div className={styles.roadmapBodyCol} data-aos="fade-up">
                                <RoadMapGoal text={"NFT Sale"} />
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
            )
        }
    }

    function team() {
        if (!isBreakpointPc) {
            return (
                <div className={styles.ourTeam} id={"team"} >
                    <div className={styles.ourTeamIntro}>
                        <div className={styles.title} data-aos="fade-up">Our Team</div>
                    </div>
                    <table className={styles.ourTeamLayout}>
                        <tbody>
                            <tr data-aos="fade-up">
                                <th>
                                    <OurTeamItem imgUrl={kien} title={"Kien Vuong"}
                                        content={"CEO"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={hung} title={"Hung Nguyen"}
                                        content={"Creative Director"} />

                                </th>
                                <th>
                                    <OurTeamItem imgUrl={hong} title={"Hong Nguyen"}
                                        content={"Head of Communications"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={tu_chu} title={"Tu Chu"}
                                        content={"Head of Engineering"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={quang} title={"Quang Nguyen"}
                                        content={"Game Developer"} />
                                </th>
                            </tr>
                            <tr data-aos="fade-up">
                                <th>
                                    <OurTeamItem imgUrl={truong} title={"Truong Nguyen"}
                                        content={"Fullstack Developer"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={anh} title={"Anh Cong"}
                                        content={"Concept Artist"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={giang} title={"Giang Nguyen"}
                                        content={"Game Advisor"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={long} title={"Long Vuong"}
                                        content={"Strategic Advisor"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={anhNg} title={"Anh Nguyen"}
                                        content={"Operation Advisor"} />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else if (isBreakpointPc && !isBreakpointMb) {
            return (
                <div className={styles.ourTeam} id={"team"}>
                    <div className={styles.ourTeamIntro}>
                        <div className={styles.title} data-aos="fade-up">Our Team</div>
                    </div>
                    <table className={styles.ourTeamLayout}>
                        <tbody>
                            <tr data-aos="fade-up">
                                <th>
                                    <OurTeamItem imgUrl={kien} title={"Kien Vuong"}
                                        content={"CEO"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={hung} title={"Hung Nguyen"}
                                        content={"Creative Director"} />
                                </th>
                            </tr>
                            <tr data-aos="fade-up">
                                <th>
                                    <OurTeamItem imgUrl={hong} title={"Hong Nguyen"}
                                        content={"Head of Communications"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={tu_chu} title={"Tu Chu"}
                                        content={"Head of Engineering"} />
                                </th>
                            </tr>
                            <tr data-aos="fade-up">
                                <th>
                                    <OurTeamItem imgUrl={quang} title={"Quang Nguyen"}
                                        content={"Game Developer"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={truong} title={"Truong Nguyen"}
                                        content={"Fullstack Developer"} />
                                </th>
                            </tr>
                            <tr data-aos="fade-up">
                                <th>
                                    <OurTeamItem imgUrl={anh} title={"Anh Cong"}
                                        content={"Concept Artis"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={giang} title={"Giang Nguyen"}
                                        content={"Game Advisor"} />
                                </th>
                            </tr>
                            <tr data-aos="fade-up">
                                <th>
                                    <OurTeamItem imgUrl={long} title={"Long Vuong"}
                                        content={"Strategic Advisor"} />
                                </th>
                                <th>
                                    <OurTeamItem imgUrl={anhNg} title={"Anh Nguyen"}
                                        content={"Operation Advisor"} />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div className={styles.ourTeam} id={"team"} >
                    <div className={styles.ourTeamIntro}>
                        <div className={styles.title} data-aos="fade-up">Our Team</div>
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
                            content={"Concept Artis"} />
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
                            content={"Operation Advisor"} />
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <Head>
                <title>Starbots | The first-ever robot battle NFT game</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
                <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
            </Head>
            {isMobile ? (
                <Mobile />
            ) : (
                <div className={styles.bodyContent}>
                    <div id={"home"} className={styles.videoBanner}>
                        <video autoPlay loop muted className={styles.banner}>
                            <source src='/ShortVideoF3.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div id={"intro"} className={styles.gameIntro}>
                        <img className={styles.videoFooter} src={videoFooter} />
                        <div className={styles.gameIntroText} data-aos="fade-up">
                            <div className={styles.title}>Game Introduction</div>
                            <div className={styles.content}>Starbots is the first-ever robot battle NFT game where
                                players
                                gain GEAR tokens through strategically assembling their own robots, winning battles,
                                completing missions, and conquering new lands.
                            </div>
                        </div>
                        <img className={styles.gameIntroImg} src={"/game_introduction.png"} />
                    </div>
                    <div className={styles.trailer} id={"trailer"}>
                        <div className={styles.trailerText} data-aos="fade-up">
                            <div className={styles.title}>Trailer</div>
                            <div className={styles.content}>The constant sounds of metals crashing and grenades
                                exploding
                                won't stop until there's only one left standing - the one to conquer all lands.
                            </div>
                        </div>
                        <div className={styles.trailerVideo}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fPQBve0SMes" />
                        </div>
                    </div>
                    {feature()}
                    {map()}
                    <div className={styles.sponsored} id={"sponsored"}>
                        <div className={styles.sponsoredText} data-aos="fade-up">
                            <div className={styles.title}>Partners & Investors</div>
                        </div>
                        <div className={styles.sponsoredIcon} data-aos="fade-up">
                            <a href="https://www.defialliance.co/" target={'_blank'}>
                                <img className={styles.sponsoredImage} src={defi} />
                            </a>
                            <a href="https://impossible.finance/" target={'_blank'}>
                                <img className={styles.sponsoredImage} src={impo_logo} />
                            </a>
                            <a href="https://tomochain.com/" target={'_blank'}>
                                <img className={styles.sponsoredImage} src={tomochain} />
                            </a>
                            <a href="https://gameestudio.com/" target={'_blank'}>
                                <img className={styles.sponsoredImage} src={gamee} />
                            </a>
                            <a href="https://www.solarecofund.com/" target="_blank">
                                <img className={styles.sponsoredImage} src={solar_logo} />
                            </a>
                            <a href="https://kyros.ventures/" target="_blank">
                                <img className={styles.sponsoredImage} src={kyros} />
                            </a>
                            <a href="https://goodgamesguild.com/" target="_blank">
                                <img className={styles.sponsoredImage} src={good_game_logo} />
                            </a>
                            <a href="https://solscan.io/" target="_blank">
                                <img className={styles.sponsoredImage} src={solscan_logo} />
                            </a>
                            <a href="https://www.parsiq.net/" target="_blank">
                                <img className={styles.sponsoredImage} src={parsiq} />
                            </a>
                            <a href="https://kyber.network/" target="_blank">
                                <img className={styles.sponsoredImage} src={kyber_logo} />
                            </a>
                            <a href="https://www.luaventures.xyz/" target="_blank">
                                <img className={styles.sponsoredImage} src={lua} />
                            </a>
                            <a href="https://bigcoincapital.org/" target="_blank">
                                <img className={styles.sponsoredImage} src={bigcoin} />
                            </a>
                            <a href="https://tk.ventures/" target="_blank">
                                <img className={styles.sponsoredImage} src={tkv} />
                            </a>
                            <a href="https://exnetworkcapital.com/" target="_blank">
                                <img className={styles.sponsoredImage} src={ex_logo} />
                            </a>
                            <a href="https://www.hubglobal.io/" target="_blank">
                                <img className={styles.sponsoredImage} src={hub_logo} />
                            </a>
                        </div>
                    </div>
                    {team()}
                </div>)}
        </>
    )
}

export default Home
