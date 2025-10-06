// src/components/client/ClientDashboard.tsx

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { Incident, EscortRequest } from '../../types';

interface ClientDashboardProps {
  navigation: any;
}

export function ClientDashboard({ navigation }: ClientDashboardProps) {
  const { signOutUser, user } = useAuth();
  const [activeTab, setActiveTab] = useState<'report' | 'escort' | 'status' | 'archive'>('status');
  
  // Mock data - replace with AWS AppSync queries
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [escorts, setEscorts] = useState<EscortRequest[]>([]);

  // Incident Report Form State
  const [incidentType, setIncidentType] = useState<'emergency' | 'security' | 'medical' | 'other'>('security');
  const [incidentPriority, setIncidentPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [incidentLocation, setIncidentLocation] = useState('');

  // Escort Request Form State
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [escortTime, setEscortTime] = useState('');
  const [escortNotes, setEscortNotes] = useState('');

  const handleLogout = async () => {
    await signOutUser();
    navigation.replace('Auth');
  };

  const clientIncidents = incidents.filter(i => 
    i.clientName === user?.name || i.clientPhone === user?.phone
  );
  
  const clientEscorts = escorts.filter(e => 
    e.clientName === user?.name || e.clientPhone === user?.phone
  );

  const activeIncidents = clientIncidents.filter(i => 
    ['pending', 'assigned', 'in-progress'].includes(i.status)
  );
  
  const activeEscorts = clientEscorts.filter(e => 
    ['pending', 'assigned', 'in-progress'].includes(e.status)
  );

  const completedIncidents = clientIncidents.filter(i => i.status === 'resolved');
  const completedEscorts = clientEscorts.filter(e => e.status === 'completed');

  const handleSubmitIncident = async () => {
    if (!incidentDescription || !incidentLocation) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // TODO: Create incident via AWS AppSync mutation
    const newIncident: Incident = {
      id: Date.now().toString(),
      type: incidentType,
      priority: incidentPriority,
      description: incidentDescription,
      location: {
        lat: 0,
        lng: 0,
        address: incidentLocation,
      },
      clientName: user?.name || '',
      clientPhone: user?.phone || '',
      status: 'pending',
      timestamp: new Date().toISOString(),
    };

    setIncidents([...incidents, newIncident]);
    Alert.alert('Success', 'Incident report submitted successfully');
    
    // Reset form
    setIncidentDescription('');
    setIncidentLocation('');
    setActiveTab('status');
  };

  const handleSubmitEscort = async () => {
    if (!fromLocation || !toLocation || !escortTime) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // TODO: Create escort request via AWS AppSync mutation
    const newEscort: EscortRequest = {
      id: Date.now().toString(),
      clientName: user?.name || '',
      clientPhone: user?.phone || '',
      fromLocation: {
        lat: 0,
        lng: 0,
        address: fromLocation,
      },
      toLocation: {
        lat: 0,
        lng: 0,
        address: toLocation,
      },
      requestedTime: escortTime,
      notes: escortNotes,
      status: 'pending',
      timestamp: new Date().toISOString(),
    };

    setEscorts([...escorts, newEscort]);
    Alert.alert('Success', 'Escort request submitted successfully');
    
    // Reset form
    setFromLocation('');
    setToLocation('');
    setEscortTime('');
    setEscortNotes('');
    setActiveTab('status');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return '#FEF3C7';
      case 'assigned': return '#DBEAFE';
      case 'in-progress': return '#E9D5FF';
      case 'resolved':
      case 'completed': return '#D1FAE5';
      default: return '#F3F4F6';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'pending': return '#92400E';
      case 'assigned': return '#1E40AF';
      case 'in-progress': return '#6B21A8';
      case 'resolved':
      case 'completed': return '#065F46';
      default: return '#374151';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Client Portal</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'report' && styles.activeTab]}
          onPress={() => setActiveTab('report')}
        >
          <Text style={[styles.tabText, activeTab === 'report' && styles.activeTabText]}>
            Report
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'escort' && styles.activeTab]}
          onPress={() => setActiveTab('escort')}
        >
          <Text style={[styles.tabText, activeTab === 'escort' && styles.activeTabText]}>
            Escort
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'status' && styles.activeTab]}
          onPress={() => setActiveTab('status')}
        >
          <Text style={[styles.tabText, activeTab === 'status' && styles.activeTabText]}>
            Active ({activeIncidents.length + activeEscorts.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'archive' && styles.activeTab]}
          onPress={() => setActiveTab('archive')}
        >
          <Text style={[styles.tabText, activeTab === 'archive' && styles.activeTabText]}>
            Archive
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Report Incident Tab */}
        {activeTab === 'report' && (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Report Incident</Text>

            <Text style={styles.label}>Type</Text>
            <View style={styles.radioGroup}>
              {(['emergency', 'security', 'medical', 'other'] as const).map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.radioButton, incidentType === type && styles.radioButtonSelected]}
                  onPress={() => setIncidentType(type)}
                >
                  <Text style={[styles.radioText, incidentType === type && styles.radioTextSelected]}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Priority</Text>
            <View style={styles.radioGroup}>
              {(['high', 'medium', 'low'] as const).map((priority) => (
                <TouchableOpacity
                  key={priority}
                  style={[styles.radioButton, incidentPriority === priority && styles.radioButtonSelected]}
                  onPress={() => setIncidentPriority(priority)}
                >
                  <Text style={[styles.radioText, incidentPriority === priority && styles.radioTextSelected]}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Description *</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Describe the incident..."
              value={incidentDescription}
              onChangeText={setIncidentDescription}
              multiline
              numberOfLines={4}
            />

            <Text style={styles.label}>Location *</Text>
            <TextInput
              style={styles.input}
              placeholder="Building name, room number, or address"
              value={incidentLocation}
              onChangeText={setIncidentLocation}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitIncident}>
              <Text style={styles.submitButtonText}>Submit Incident Report</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Escort Request Tab */}
        {activeTab === 'escort' && (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Request Escort</Text>

            <Text style={styles.label}>From Location *</Text>
            <TextInput
              style={styles.input}
              placeholder="Starting location"
              value={fromLocation}
              onChangeText={setFromLocation}
            />

            <Text style={styles.label}>To Location *</Text>
            <TextInput
              style={styles.input}
              placeholder="Destination"
              value={toLocation}
              onChangeText={setToLocation}
            />

            <Text style={styles.label}>Requested Time *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., 3:00 PM or ASAP"
              value={escortTime}
              onChangeText={setEscortTime}
            />

            <Text style={styles.label}>Additional Notes</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Any special instructions or information..."
              value={escortNotes}
              onChangeText={setEscortNotes}
              multiline
              numberOfLines={3}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitEscort}>
              <Text style={styles.submitButtonText}>Submit Escort Request</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Active Requests Tab */}
        {activeTab === 'status' && (
          <View>
            {/* Active Incidents */}
            {activeIncidents.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Active Incident Reports ({activeIncidents.length})
                </Text>
                {activeIncidents.map((incident) => (
                  <View key={incident.id} style={styles.card}>
                    <View style={[styles.priorityBar, { backgroundColor: getPriorityColor(incident.priority) }]} />
                    <View style={styles.cardContent}>
                      <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>{incident.description}</Text>
                        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(incident.status) }]}>
                          <Text style={[styles.statusText, { color: getStatusTextColor(incident.status) }]}>
                            {incident.status}
                          </Text>
                        </View>
                      </View>
                      <Text style={styles.cardSubtitle}>
                        {incident.type} - {incident.priority} priority
                      </Text>
                      <Text style={styles.cardDetail}>📍 {incident.location.address}</Text>
                      <Text style={styles.cardDetail}>🕐 {new Date(incident.timestamp).toLocaleString()}</Text>
                      <Text style={styles.cardDetail}>ID: IR-{incident.id.slice(-6)}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* Active Escorts */}
            {activeEscorts.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Active Escort Requests ({activeEscorts.length})
                </Text>
                {activeEscorts.map((escort) => (
                  <View key={escort.id} style={styles.card}>
                    <View style={styles.cardContent}>
                      <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Escort Service</Text>
                        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(escort.status) }]}>
                          <Text style={[styles.statusText, { color: getStatusTextColor(escort.status) }]}>
                            {escort.status}
                          </Text>
                        </View>
                      </View>
                      <Text style={styles.cardDetail}>From: {escort.fromLocation.address}</Text>
                      <Text style={styles.cardDetail}>To: {escort.toLocation.address}</Text>
                      <Text style={styles.cardDetail}>🕐 Requested: {escort.requestedTime}</Text>
                      <Text style={styles.cardDetail}>ID: ER-{escort.id.slice(-6)}</Text>
                      {escort.notes && (
                        <View style={styles.notesBox}>
                          <Text style={styles.notesText}>{escort.notes}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* No Active Requests */}
            {activeIncidents.length === 0 && activeEscorts.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateTitle}>No Active Requests</Text>
                <Text style={styles.emptyStateText}>
                  You don't have any pending incident reports or escort requests.
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Archive Tab */}
        {activeTab === 'archive' && (
          <View>
            {/* Completed Incidents */}
            {completedIncidents.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Completed Incidents ({completedIncidents.length})
                </Text>
                {completedIncidents.map((incident) => (
                  <View key={incident.id} style={[styles.card, styles.completedCard]}>
                    <View style={styles.cardContent}>
                      <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>{incident.description}</Text>
                        <View style={styles.completedBadge}>
                          <Text style={styles.completedBadgeText}>Resolved</Text>
                        </View>
                      </View>
                      <Text style={styles.cardSubtitle}>
                        {incident.type} - {incident.priority} priority
                      </Text>
                      <Text style={styles.cardDetail}>📍 {incident.location.address}</Text>
                      <Text style={styles.cardDetail}>🕐 {new Date(incident.timestamp).toLocaleString()}</Text>
                      {incident.completionNotes && (
                        <View style={styles.completionNotesBox}>
                          <Text style={styles.completionNotesLabel}>Resolution:</Text>
                          <Text style={styles.completionNotesText}>{incident.completionNotes}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* Completed Escorts */}
            {completedEscorts.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Completed Escorts ({completedEscorts.length})
                </Text>
                {completedEscorts.map((escort) => (
                  <View key={escort.id} style={[styles.card, styles.completedCard]}>
                    <View style={styles.cardContent}>
                      <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Escort Service</Text>
                        <View style={styles.completedBadge}>
                          <Text style={styles.completedBadgeText}>Completed</Text>
                        </View>
                      </View>
                      <Text style={styles.cardDetail}>From: {escort.fromLocation.address}</Text>
                      <Text style={styles.cardDetail}>To: {escort.toLocation.address}</Text>
                      <Text style={styles.cardDetail}>🕐 {escort.requestedTime}</Text>
                      {escort.completionNotes && (
                        <View style={styles.completionNotesBox}>
                          <Text style={styles.completionNotesLabel}>Notes:</Text>
                          <Text style={styles.completionNotesText}>{escort.completionNotes}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* No Completed Requests */}
            {completedIncidents.length === 0 && completedEscorts.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateTitle}>No Completed Requests</Text>
                <Text style={styles.emptyStateText}>
                  Your completed requests will appear here.
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Emergency Notice */}
        <View style={styles.emergencyNotice}>
          <Text style={styles.emergencyTitle}>⚠️ Emergency Protocol</Text>
          <Text style={styles.emergencyText}>
            For life-threatening emergencies, call 911 immediately. Use this system for security-related incidents and escort requests.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
  },
  logoutText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  radioGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  radioButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },
  radioButtonSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  radioText: {
    fontSize: 14,
    color: '#6B7280',
  },
  radioTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  priorityBar: {
    width: 4,
  },
  cardContent: {
    flex: 1,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  cardDetail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  notesBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  notesText: {
    fontSize: 14,
    color: '#374151',
  },
  completedCard: {
    backgroundColor: '#F9FAFB',
  },
  completedBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  completedBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#065F46',
  },
  completionNotesBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginTop: 8,
  },
  completionNotesLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  completionNotesText: {
    fontSize: 14,
    color: '#6B7280',
  },
  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  emergencyNotice: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FCA5A5',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  emergencyTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#991B1B',
    marginBottom: 4,
  },
  emergencyText: {
    fontSize: 13,
    color: '#B91C1C',
  },
});