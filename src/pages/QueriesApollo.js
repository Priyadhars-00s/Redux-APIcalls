import { useQuery, gql, ApolloProvider, ApolloClient,
    InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache()
  });
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function Exchange() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log("Test",data);
  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

function Test() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Exchange />
        </div>
      </ApolloProvider>
    );
  }
  
  export default Test;