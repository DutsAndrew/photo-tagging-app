import React, { useState, useEffect } from "react";
import LevelsSnapshot from "./levels/LevelsSnapshot";
import Level from './levels/Level';
import { levelData } from '../data/levelData';
import { initializeApp } from "firebase/app";
import { getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';
import LoadingBar from "./LoadingBar";
import LeaderboardSnap from "./Leaderboard/LeaderboardSnap";

const MainPage = (): JSX.Element => {

  const [currentLevel, setCurrentLevel] = useState({
    level: 0,
  });

  const [dbQuery, setDbQuery] = useState({
    status: false,
  });

  const [level1Leaderboards, setLevel1Leaderboards] = useState({});
  const [level2Leaderboards, setLevel2Leaderboards] = useState({});
  const [level3Leaderboards, setLevel3Leaderboards] = useState({});
  const [level4Leaderboards, setLevel4Leaderboards] = useState({});
  const [level5Leaderboards, setLevel5Leaderboards] = useState({});
  const [level6Leaderboards, setLevel6Leaderboards] = useState({});


  const handleLevelSelection = (levelNumber: number): void => {
    setCurrentLevel({
      level: levelNumber,
    });
  };

  const returnToMain = (): void => {
    setCurrentLevel({
      level: 0,
    });
  };

  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyD34yDJ04Py9lOKIJOm8G8m83nhzSiaqiA",
      authDomain: "photo-tagging-app-f39ec.firebaseapp.com",
      projectId: "photo-tagging-app-f39ec",
      storageBucket: "photo-tagging-app-f39ec.appspot.com",
      messagingSenderId: "722301117573",
      appId: "1:722301117573:web:44652e9fdd2675a00cb5ec"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const totalLevels = 6;

    (async function fetchLevelLeaderboard() {
      for (let i = 1; i < totalLevels + 1; i++) {
        const leaderboardsRef = doc(db, 'leaderboards', i.toString());
        const leaderboardSnap = await getDoc(leaderboardsRef);
        const leaderboardData: any = leaderboardSnap.data();

        const convertedArray: any = Object.entries(leaderboardData);
        const sortedData = convertedArray.sort(function(a: any, b: any) { 
          return a[1][1] - b[1][1]
        });
        
        switch (i) {
          case 1:
            setLevel1Leaderboards({
              sortedData,
            });
            continue;
          case 2:
            setLevel2Leaderboards({
              sortedData,
          });
          continue;
          case 3:
            setLevel3Leaderboards({
              sortedData,
            });
            continue;
          case 4:
            setLevel4Leaderboards({
              sortedData,
          });
          continue;
          case 5:
            setLevel5Leaderboards({
              sortedData,
            });
            continue;
          case 6:
            setLevel6Leaderboards({
              sortedData,
            });
            // must remain in last db query for levels in game
            setDbQuery({
              status: true,
            });
            continue;
          default: 
            return null;
        };
      };
    })();
  }, []);

  function pageRenderer(level: number): JSX.Element {
    const leaderboardArray: any[] = [];
    switch(level) {
      case 0:
        leaderboardArray.push(level1Leaderboards, level2Leaderboards, level3Leaderboards, level4Leaderboards, level5Leaderboards, level6Leaderboards);
        return <LevelsSnapshot handleLevelSelection={handleLevelSelection} leaderboards={leaderboardArray} />
      case 1:
        return <Level returnToMain={returnToMain} levelData={levelData[0]} leaderboard={level1Leaderboards} />;
      case 2:
        return <Level returnToMain={returnToMain} levelData={levelData[1]} leaderboard={level2Leaderboards} />
      case 3:
        return <Level returnToMain={returnToMain} levelData={levelData[2]} leaderboard={level3Leaderboards} />
      case 4:
        return <Level returnToMain={returnToMain} levelData={levelData[3]} leaderboard={level4Leaderboards} />
      case 5:
        return <Level returnToMain={returnToMain} levelData={levelData[4]} leaderboard={level5Leaderboards} />
      case 6:
        return <Level returnToMain={returnToMain} levelData={levelData[5]} leaderboard={level6Leaderboards} />
      case 7:
        leaderboardArray.push(level1Leaderboards, level2Leaderboards, level3Leaderboards, level4Leaderboards, level5Leaderboards, level6Leaderboards);
        return <LeaderboardSnap returnToMain={returnToMain} leaderboard={leaderboardArray} />
      default:
        return <p>Error, please try again</p>
    };
  };

  const currentPage: JSX.Element = pageRenderer(currentLevel.level);
  if (dbQuery.status === true) {
    return currentPage;
  } else {
    return (
      <LoadingBar />
    )
  }
};

export default MainPage;