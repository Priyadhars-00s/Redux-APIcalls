import { gql, useQuery, ApolloProvider, ApolloClient,
    InMemoryCache } from '@apollo/client';

    const client = new ApolloClient({
        uri: " ",
        cache: new InMemoryCache()
      });
const GET_GREETING = gql`
  query GetGreeting($language: String!) {
    greeting(language: $language) {
      message
    }
  }
`;

function Hello() {
  const { loading, error, data } = useQuery(GET_GREETING, {
    variables: { language: 'english' },
  });
  if (loading) return <p>Loading ...</p>;
  return <h1>Hello {data.greeting.message}!</h1>;
  
}
function Language() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Hello />
        </div>
      </ApolloProvider>
    );
  }
  
  export default Language;