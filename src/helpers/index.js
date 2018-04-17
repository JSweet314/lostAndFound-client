export const geoCodeWrangler = response => 
  response.results[0].geometry.location;