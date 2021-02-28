

import Head from 'next/head';

import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';

import { ExperienceBar } from "../components/ExperienceBar";
import { CountDown } from '../components/CountDown';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import React from 'react';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

//console.log('props recebidos no client', props)

  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
          <title>Move It Yourself | MiY</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

// chamada da API

/*   const user = {
    level: 1,
    currentExperience: 590,
    challengesCompleted: 3
  } */

//console.log('props recebidos no server', user)

//console.log('props recebidos no server', level, currentExperience, challengesCompleted)

  return {
    props: {
      level: Number (level ?? 1),
      currentExperience: Number (currentExperience ?? 0),
      challengesCompleted: Number (challengesCompleted ?? 0)
    }
  }
}

//getServerSideProps - manipule os dados da camada 'back end framework" para camada front end >>> ANTES de CONSTRUIR <<< 
// a camada interface do Front End

// Back End - JavaScript
// FrameWork - Next.JS (with Node.JS - JavaScript Interpreter) - FIRST CALL, BUILD FRONT END, CALLING BACK END
// Front End - React

/*
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>
      </div>
*/

/*
    <div className={styles.container}>
      <Head>
        <title>Hello NLW#04</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello NLW ! and <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
*/
