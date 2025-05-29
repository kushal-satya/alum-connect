// Google Forms to JSON Converter
// Use this script in Google Apps Script to automatically convert form responses to JSON

async function onFormSubmit(e) {
  const formResponse = e.response;
  const itemResponses = formResponse.getItemResponses();
  
  const currentCity = getResponse(itemResponses, 'Current City');
  const coordinates = await geocodeCity(currentCity);
  
  // Map form responses to member object
  const member = {
    fullName: getResponse(itemResponses, 'Full Name'),
    lat: coordinates.lat,
    lon: coordinates.lon,
    currentCity: currentCity,
    country: getResponse(itemResponses, 'Country'),
    houseYears: [getResponse(itemResponses, 'House Years')],
    cornellYears: [getResponse(itemResponses, 'Cornell Years')],
    role: getResponse(itemResponses, 'Role')
  };
  
  // Log the JSON (copy this to add to the file)
  console.log('New member JSON:');
  console.log(JSON.stringify(member, null, 2));
  
  // Optional: Auto-create GitHub issue with the data
  createGitHubIssue(member);
}

// Geocode city name to coordinates
async function geocodeCity(cityName) {
  if (!cityName) return { lat: 0, lon: 0 };
  
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}&limit=1`;
    const response = UrlFetchApp.fetch(url);
    const data = JSON.parse(response.getContentText());
    
    if (data && data[0]) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      };
    }
  } catch (error) {
    console.log('Geocoding error:', error);
  }
  
  return { lat: 0, lon: 0 };
}

function getResponse(itemResponses, title) {
  const item = itemResponses.find(item => item.getItem().getTitle() === title);
  return item ? item.getResponse() : '';
}

function createGitHubIssue(member) {
  // You can set up GitHub API integration here to auto-create PRs
  const title = `Add new member: ${member.fullName}`;
  const body = `New member submission:\n\n\`\`\`json\n${JSON.stringify(member, null, 2)}\n\`\`\``;
  
  // This would require GitHub token and API setup
  console.log('GitHub Issue:', { title, body });
}
