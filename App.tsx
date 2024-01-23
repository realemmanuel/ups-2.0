import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rondondopara.stepzen.net/api/ups-backend/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apikey rondondopara::stepzen.io+1000::8b05bb67e901f9ff980ba7b4aed8644d1ba27b6927d066bb1ebdd37861565e5d",
  },
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
