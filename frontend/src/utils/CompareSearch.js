function compareSearch (filmName, searchQuery) {
  return filmName.toLowerCase().includes(searchQuery.toLowerCase())
}

export default compareSearch;