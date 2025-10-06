import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Amplify } from 'aws-amplify';
import auth from '@react-native-firebase/auth';
import { generateClient } from 'aws-amplify/api';
import { listIncidents } from './graphql/queries';
import { createIncident } from './graphql/mutations';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  TextInput,
  RefreshControl,
} from 'react-native';

const amplifyconfig = {
  aws_project_region: "us-east-1",
  aws_appsync_graphqlEndpoint: "https://r3qmxgj26rhxrdin45pmc5rbkq.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-q2r467p4gnbshjdfhnswzi3obu"
};

Amplify.configure(amplifyconfig);
const client = generateClient();

type Role = 'ADMIN' | 'OFFICER' | 'CLIENT';

type User = {
  id: string;
  email: string;
  name: string;
  role: Role;
};

type Incident = {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  location?: string;
  reportedById: string;
  createdAt: string;
};

type AuthContextValue = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  signInUser: (email: string, password: string) => Promise<void>;
  signUpUser: (email: string, password: string, name: string) => Promise<void>;
  signOutUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
          role: 'OFFICER',
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInUser = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to sign in');
    }
  };

  const signUpUser = async (email: string, password: string, name: string) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName: name });
    } catch (error: any) {
      throw new Error(error.message || 'Failed to sign up');
    }
  };

  const signOutUser = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const value = useMemo<AuthContextValue>(
    () => ({ 
      isAuthenticated: !!user, 
      isLoading, 
      user, 
      signInUser, 
      signUpUser,
      signOutUser 
    }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function AuthPage({ navigation }: any) {
  const { signInUser, signUpUser } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    if (mode === 'signin') {
      if (!email || !password) {
        Alert.alert('Error', 'Please enter email and password');
        return;
      }
      setIsLoading(true);
      try {
        await signInUser(email, password);
        navigation.replace('Main');
      } catch (error: any) {
        Alert.alert('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      if (!email || !password || !name) {
        Alert.alert('Error', 'Please fill all fields');
        return;
      }
      setIsLoading(true);
      try {
        await signUpUser(email, password, name);
        navigation.replace('Main');
      } catch (error: any) {
        Alert.alert('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.authContent}>
        <Text style={styles.logoText}>Security Ops</Text>
        
        <View style={styles.modeToggle}>
          <TouchableOpacity
            style={[styles.modeButton, mode === 'signin' && styles.modeButtonActive]}
            onPress={() => setMode('signin')}
          >
            <Text style={[styles.modeButtonText, mode === 'signin' && styles.modeButtonTextActive]}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeButton, mode === 'signup' && styles.modeButtonActive]}
            onPress={() => setMode('signup')}
          >
            <Text style={[styles.modeButtonText, mode === 'signup' && styles.modeButtonTextActive]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {mode === 'signup' && (
          <>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your name"
              value={name}
              onChangeText={setName}
            />
          </>
        )}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="your@email.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.primaryButton, isLoading && styles.buttonDisabled]}
          onPress={handleAuth}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.primaryButtonText}>
              {mode === 'signin' ? 'Sign In' : 'Sign Up'}
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function OfficerDashboard({ navigation }: any) {
  const { signOutUser, user } = useAuth();
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadIncidents();
  }, []);

  const loadIncidents = async () => {
    try {
      const result: any = await client.graphql({ query: listIncidents });
      setIncidents(result.data.listIncidents.items);
    } catch (error) {
      console.error('Error loading incidents:', error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadIncidents();
    setRefreshing(false);
  };

  const handleLogout = async () => {
    await signOutUser();
    navigation.replace('Auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Incidents</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      >
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('CreateIncident')}
          >
            <Text style={styles.createButtonText}>+ Report New Incident</Text>
          </TouchableOpacity>

          {incidents.map((incident) => (
            <View key={incident.id} style={styles.incidentCard}>
              <Text style={styles.incidentTitle}>{incident.title}</Text>
              <Text style={styles.incidentDetail}>
                Status: {incident.status} | Priority: {incident.priority}
              </Text>
              {incident.location && (
                <Text style={styles.incidentDetail}>Location: {incident.location}</Text>
              )}
              <Text style={styles.incidentDate}>
                {new Date(incident.createdAt).toLocaleDateString()}
              </Text>
            </View>
          ))}

          {incidents.length === 0 && (
            <Text style={styles.emptyText}>No incidents reported yet</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CreateIncidentScreen({ navigation }: any) {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [priority, setPriority] = useState('MEDIUM');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }

    setIsLoading(true);
    try {
      await client.graphql({
        query: createIncident,
        variables: {
          input: {
            title,
            description,
            location,
            priority,
            status: 'OPEN',
            reportedById: user!.id,
          },
        },
      });
      Alert.alert('Success', 'Incident reported');
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report Incident</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Title *</Text>
        <TextInput
          style={styles.input}
          placeholder="What happened?"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Provide details..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Where did this occur?"
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Priority</Text>
        <View style={styles.priorityButtons}>
          {['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].map((p) => (
            <TouchableOpacity
              key={p}
              style={[styles.priorityButton, priority === p && styles.priorityButtonActive]}
              onPress={() => setPriority(p)}
            >
              <Text style={[styles.priorityButtonText, priority === p && styles.priorityButtonTextActive]}>
                {p}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.primaryButton, isLoading && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.primaryButtonText}>Submit Report</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={OfficerDashboard} />
      <Stack.Screen name="CreateIncident" component={CreateIncidentScreen} />
    </Stack.Navigator>
  );
}

function App() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthPage} />
        ) : (
          <Stack.Screen name="Main" component={MainNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  content: {
    padding: 20,
  },
  authContent: {
    padding: 40,
    paddingTop: 100,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  modeToggle: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modeButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  modeButtonText: {
    color: '#6B7280',
  },
  modeButtonTextActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  createButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  incidentCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  incidentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  incidentDetail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  incidentDate: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
  },
  emptyText: {
    textAlign: 'center',
    color: '#6B7280',
    marginTop: 40,
  },
  priorityButtons: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  priorityButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  priorityButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  priorityButtonText: {
    fontSize: 12,
    color: '#6B7280',
  },
  priorityButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});