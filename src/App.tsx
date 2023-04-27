import {SafeAreaView, Text, View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App(): JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <SafeAreaView>
      <QueryClientProvider client={queryClient}>
        <View>
          <Text>Company Portal App</Text>
        </View>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
