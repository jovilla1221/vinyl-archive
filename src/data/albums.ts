export type Album = {
  id: string
  title: string
  artist: string
  album: string
  year: number
  genre: string
  cover: string
  audio: string
  tracks: Track[]
}

export type Track = {
  id: string
  title: string
  duration: string
}

export const ALBUMS: Album[] = [
  {
    id: '1',
    title: 'Come Together',
    artist: 'The Beatles',
    album: 'Abbey Road',
    year: 1969,
    genre: 'Rock',
    cover: 'abbey-road.jpg',
    audio: 'abbey-road.mp3',
    tracks: [
      { id: 't1', title: 'Come Together', duration: '4:20' },
      { id: 't2', title: 'Something', duration: '3:03' },
      { id: 't3', title: 'Maxwell\'s Silver Hammer', duration: '3:22' },
    ],
  },
  {
    id: '2',
    title: 'Thriller',
    artist: 'Michael Jackson',
    album: 'Thriller',
    year: 1982,
    genre: 'Pop',
    cover: 'thriller.jpg',
    audio: 'thriller.mp3',
    tracks: [
      { id: 't4', title: 'Wanna Be Startin\' Somethin\'', duration: '6:03' },
      { id: 't5', title: 'Thriller', duration: '5:56' },
      { id: 't6', title: 'Beat It', duration: '4:18' },
    ],
  },
  {
    id: '3',
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    album: 'The Dark Side of the Moon',
    year: 1973,
    genre: 'Rock',
    cover: 'dark-side.jpg',
    audio: 'dark-side.mp3',
    tracks: [
      { id: 't7', title: 'Speak to Me', duration: '1:45' },
      { id: 't8', title: 'Breathe', duration: '2:42' },
      { id: 't9', title: 'On the Run', duration: '3:29' },
    ],
  },
  {
    id: '4',
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    album: 'Rumours',
    year: 1977,
    genre: 'Rock',
    cover: 'rumours.jpg',
    audio: 'rumours.mp3',
    tracks: [
      { id: 't10', title: 'Monday Morning', duration: '4:24' },
      { id: 't11', title: 'Songbird', duration: '3:21' },
      { id: 't12', title: 'Go Your Own Way', duration: '3:42' },
    ],
  },
]