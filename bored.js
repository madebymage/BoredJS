// Function to fetch a random activity from the Bored API
async function getRandomActivity() {
  try {
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json();
    return data.activity;
  } catch (error) {
    console.error('Error fetching activity:', error);
    return 'Unable to fetch activity at the moment.';
  }
}

// Example usage
async function handleBoredom() {
  const randomActivity = await getRandomActivity();
  console.log('Random Activity:', randomActivity);
}

// Call the function to get a random activity suggestion
handleBoredom();

