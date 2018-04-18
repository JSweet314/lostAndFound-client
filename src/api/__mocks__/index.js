export const reverseGeoCode = jest.fn().mockImplementation(() => ({
  results: [{formatted_address: 'Turing'}]
}));