const currentUser = 'Revere Pesquera';
// Defining current user, 

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
// Defining "welcomeMessage" containing greeting and interpolation from "currentUser"

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// Defining "excitedWelcomeMessage" containing "welcomeMessage" then being capitalized using ".toUpperCase()"

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
// Defining "shortGreeting" that returns only first letter of "currentUser" using ".slice(0,1)"
