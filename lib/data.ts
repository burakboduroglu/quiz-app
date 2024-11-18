import axios from 'axios';

interface Question {
  id: number;
  title: string;
  body: string;
  answers: string[];
  correctAnswer: string;
}

const headersList = {
  Accept: '*/*',
  'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
};

async function fetchQuestions() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: headersList,
    params: {
      per_page: 10,
    },
  });

  const data = response.data;

  const fetchedQuestions = data.map((question: Question) => ({
    question: question?.title || 'Placeholder question',
    answers: [
      `A) ${question.body.split(' ', 3)}`,
      `B) ${question.body.split(' ').slice(3, 5).join(' ')}`,
      `C) ${question.body.split(' ').slice(5, 8).join(' ')}`,
      `D) ${question.body.split(' ').slice(8, 10).join(' ')}`,
    ],
    correctAnswer: (['A', 'B', 'C', 'D'] as string[])[Math.floor(Math.random() * 4)],
  }));

  return fetchedQuestions;
}

fetchQuestions().then((fetchedQuestions) => {
  console.log(fetchedQuestions);
});

export default fetchQuestions;
