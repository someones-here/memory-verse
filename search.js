export async function search(queryInput) {
    if (!queryInput.checkValidity()) {
        queryInput.reportValidity();
        return [];
    }

    const query = queryInput.value.trim().toLowerCase();

    const memoryVerses = await fetchJSON("./data/json/memory-verses.json");

    const results = memoryVerses.filter(obj =>
        Object.values(obj).some(value =>
            typeof value === 'string' &&
            value.toLowerCase().includes(query)
        )
    );

    return results;
}

export async function fetchJSON(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch JSON:", error);
      throw error;
    }
}