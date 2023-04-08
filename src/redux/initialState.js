import postsReducer from "./postsRedux";

const initialState = {
    posts:[
        {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '02-02-2022',
      author: 'John Doe'
        },
        {
      id: '2',
      title: 'Wild Nature',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '18-02-2024',
      author: 'MMrilyn Monroe'
        },
        {
      id: '3',
      title: 'The War',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '08-04-2023',
      author: 'Audrey Hepburn'
        }
    ],
};

export default initialState; 

