# Cadence Tunes

Cadence Tunes is an application that enables runners to create playlists with songs that match the target cadence they're aiming to run at. The application connects to the Spotify API to retreive music data and export playlists to the user's Spotify account. 

The program asks the user to provide their desired running cadence (number of steps the runner takes per minute). The user is then asked to select up to 5 of Spotify's seed genres that they would like to run to.

Using the target song tempo and seed genres, the program displays recommended songs from Spotify along with basic information and the ability to add to a playlist. Once the playlist is complete, the user can export it and save it to their Spotify account. 

# Context 

Runners typically want to maintain a high step count during their runs (even the slow ones!) as a higher foot turnover can naturally improve running form which lowers the chance of injury.

Have you ever found yourself running faster when listening to an upbeat song? One of the easiest ways to change your running cadence is to listen to songs with a tempo that correlates to your steps — just run to the beat!

# Development Evolution

This project is the third evolution in the Cadence Tunes series. [Cadence Tunes v1](https://github.com/brownjer3/cadence-tunes) was a CLI application written in Ruby. [v2](https://github.com/brownjer3/cadence-tunes-v2) increased usability by transforming the program into a single-page web application written in vanilla JavaScript with a Ruby on Rails backend. 

The goal for v3 is to rewrite the frontend using React. 