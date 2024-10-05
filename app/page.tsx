import React from 'react';

import { Metadata } from 'next';

import AnimatedWrapper from '_core/components/AnimatedWrapper';
import HomeHeader from '_core/components/HomeHeader';
import Tile from '_core/components/Tile';

import styles from './page.module.scss';
import ContactTile from '_core/components/ContactTile';

type TPageData = {
    title: string;
    desc: string | JSX.Element | JSX.Element;
};

type TContactData = {
    name: string;
    email: string;
    linkedin: string;
    img: string;
};




function Description(desc: string | JSX.Element) {
    const formattedDesc = (desc as string).split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
            <br />
        </span>
    ));

    return <div>{formattedDesc}</div>;
}

const HomePage = async () => {
    const ExploreData: TPageData = {
        title: 'Explore Exovision',
        desc: "Welcome to Exovision, your launchpad to an epic adventure across the stars! Get ready to blast off into the unknown and explore the far reaches of the universe in this thrilling educational game. Strap in, future astronauts! now's your chance to dive into the world of space exploration. Discover mysterious planets, navigate the galaxy, and unlock the secrets of NASA’s most cutting-edge missions—all through immersive, interactive gameplay! Are you ready to embark on a journey like no other? The universe is waiting!",
    };

    const AboutData: TPageData = {
        title: 'About',
        desc: Description(
            'Exploring the Universe with NASA Exovision was born out of the excitement and innovation of the NASA Space Apps Challenge, a global hackathon that brings together bright minds to tackle real-world space challenges. Inspired by NASA’s ongoing missions and the boundless mysteries of the cosmos, our team set out to create an interactive, educational game that puts space exploration at your fingertips. \n In Exovision, you’re not just exploring familiar planets within our solar system—you’re venturing far beyond, to distant worlds that NASA and astronomers have only recently begun to uncover. Get ready to chart your course through some of the most exciting exoplanets discovered to date. Here are just a few of the fascinating destinations waiting for you: \n 51 Pegasi b: The First Discovered Exoplanet \nIn 1995, astronomers made a groundbreaking discovery: 51 Pegasi b, the first planet ever found orbiting a sun-like star outside our solar system. Known as a “hot Jupiter,” this gas giant orbits extremely close to its star, making it scorchingly hot and wildly different from any planets in our system. While it might not be habitable, its discovery opened the door to finding countless other exoplanets. \nEpsilon Eridani b: A Neighboring Gas Giant \nOne of the closest known exoplanets, Epsilon Eridani b is a gas giant located just 10.5 light-years away in the constellation Eridanus. Discovered in 2000, it orbits its star in a path similar to Jupiter’s, making it a fascinating target for scientists looking for solar systems like ours. It’s surrounded by a dust disk, hinting at the possibility of even more planets within its system. \nIn Exovision, you’ll visit 51 Pegasi b and Epsilon Eridani band and learn about discovering how astronomers study nearby exoplanets and the potential for more hidden worlds in our galactic neighborhood. \n Chart Your Own Course \nThese are just a few of the destinations waiting for you in the game. As you continue your journey, you’ll uncover more distant exoplanets, each with its own mysteries and wonders. From scorching gas giants to potentially habitable super-Earths, the universe is full of worlds to explore—and it’s all within your reach. \nReady to start your interstellar journey? The stars are waiting for you.',
        ),
    };

    const ContactData: TPageData = {
        title: 'Contact',
        desc: "We are a team of enthusiastic engineers from Egypt, driven by our fascination with space exploration. ExoVision was developed as our contribution to NASA's International Space Apps Challenge, with the aim of applying our skills and knowledge while igniting a shared passion for the cosmos.",
    };

    const IbrahimData: TContactData = {
        name: 'Ibrahim Hamada',
        email: "ibrahimhamada439@gmail.com",
        linkedin: "https://www.linkedin.com/in/ibrahim-hamada-158669218/",
        img: require('_core/assets/ibrahim.jpg').default,
    };

    const AyaData: TContactData = {
        name: 'Aya Hossam',
        email: "ayahm1@uci.edu",
        linkedin: "https://www.linkedin.com/in/aya-hussam-eldin-356938209/",
        img: require('_core/assets/aya.jpeg').default,
    };

    const KareemData: TContactData = {
        name: 'Kareem Morsi',
        email: "kreemmorsy2001@gmail.com",
        linkedin: "https://www.linkedin.com/in/kreemmorsy/",
        img: require('_core/assets/kareem.jpeg').default,
    };

    const RehandData: TContactData = {
        name: 'Rehand Mohamed',
        email: "rehandabdelhady@gmail.com",
        linkedin: "https://www.linkedin.com/in/rehand-abdelhady-5150a1206/",
        img: require('_core/assets/rehand.jpeg').default,
    };

    const RehabData: TContactData = {
        name: 'Rehab Yehia',
        email: "rehabyehia282002@gmail.com",
        linkedin: "https://www.linkedin.com/in/rehabyehia/",
        img: require('_core/assets/rehab.jpeg').default,
    };



    return (
        <AnimatedWrapper>
            <div className={styles.container}>
                <div className={styles.tileContainer}>
                    <Tile data={ExploreData} margin='70px'/>
                    <Tile data={AboutData} margin='70px'/>
                    <Tile data={ContactData} margin='70px'/>

                <div className={styles.tileCtr}>

                    <ContactTile data={IbrahimData}  margin='24px' maxWidth='468px'/>
                    <ContactTile data={AyaData} margin='24px' maxWidth='468px'/>
                    <ContactTile data={KareemData} margin='24px' maxWidth='468px'/>
                    <ContactTile data={RehandData} margin='24px' maxWidth='468px'/>
                </div>

                    <div className={styles.oneCard}>
                    <ContactTile data={RehabData} margin='24px' maxWidth='468px'/>
                    </div>



                </div>
            </div>
        </AnimatedWrapper>
    );
};
export const generateMetadata = async () => {
    const metadata: Metadata = {};
    metadata.title = 'Home';
    metadata.description = 'Lighthouse homepage with links to various pages.';

    return metadata;
};

export default HomePage;
