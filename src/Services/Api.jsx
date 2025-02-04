const apiRequest = async (method, endpoint, data = null) => {
    const baseUrl = "http://localhost:26566/api";
    const url = `${baseUrl}/${endpoint}`;
    const options = {
      method: method.toUpperCase(),
    };
  
    if (data) {
      options.body = data; 
    }
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };
  export default apiRequest;
  