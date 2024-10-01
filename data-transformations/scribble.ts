import { port } from '..//mini-server/config.ts';
import { DataJson } from '..//mini-server/types.ts';
const fetchData = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

let dataContainer: DataJson = {
  message: 'Hello from the client!',
  items: [],
};

console.log('dataContainer before: ', dataContainer);

const writeToDataContainer: (data: DataJson) => void = (data) => {
  dataContainer = data;
};

const loadJsonData = (writeToDataContainer: (data: DataJson) => void) => {
  const data = fetchData(`http://localhost:${port}/api/data`);

  data
    .then((data) => {
      const dataObject = data as DataJson;
      writeToDataContainer(dataObject);
    })
    .then(() => {
      console.log('dataContainer after: ', dataContainer);
    });
};

loadJsonData(writeToDataContainer);
