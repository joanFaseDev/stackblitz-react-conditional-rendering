import React from 'react';
import './style.css';
import Entry from './Entry.js';
import { sortNewEntries } from './utilities.js';

export default function App() {
  const entries = [
    <Entry
      content={{
        text: 'I set up the application using StackBlitz and created an Entry component.',
        date: '2023/07/14 14:25',
      }}
      status={'new'}
    />,
    <Entry
      content={{
        text: 'I converted my wonderful application in retro space shooter video game, replacing the player ship by a cow in pixel art.',
        date: '2023/07/14 14:34',
      }}
      status={'del'}
    />,
    <Entry
      content={{
        text: 'I grew fond of my pixelated cow and build a farming simulation where humans are gathered in herds controlled by cows, chickens and a very lazy cat.',
        date: '2023/07/14 15:35',
      }}
      status={'del'}
    />,
    <Entry
      content={{
        text: 'I killed my fantasies and dream of building the next "Stardew Valley". I reverted my application back to test React conditional rendering. I also an utility function to test my various entries.',
        date: '2023/07/14 15:42',
      }}
      status={'new'}
    />,
  ];
  const entriesSorted = sortNewEntries(entries);
  const newEntries = entriesSorted.new;
  const delEntries = entriesSorted.del;
  return (
    <div>
      {
      newEntries.map(entry => entry)
      }
      {
      delEntries.map(entry => entry)
      }
    </div>
  );
}
