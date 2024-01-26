import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import Header from '../components/home/Header';
import request from '../api/request';
import { formatDate, formatDateTime, formatNumber } from '../utils';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-elements';

const MyTicketScreen = () => {
  const [myTickets, setMyTickets] = useState([]);
  const navigation = useNavigation();

  const getMyTickets = async () => {
    const responseTickets = await request.getMyTickets(true);
    setMyTickets(responseTickets.data);
  };
  useEffect(() => {
    getMyTickets();
  }, []);


  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.header}>Danh sách vé đã mua tại K+ Sport</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {myTickets.map((ticket, index) => (
          <View key={index} style={styles.ticket}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Trận đấu:</Text>
              <Text style={[styles.value, styles.textUpper]}>
                {ticket.movie}
              </Text>
            </View>

            <View style={styles.labelRow}>
              <Text style={styles.label}>Mã code:</Text>
              <Text style={[styles.value, styles.textUpper]}>
                {ticket.code}
              </Text>
            </View>

            <View style={styles.labelRow}>
              <Text style={styles.label}>Ngày đặt:</Text>
              <Text style={styles.value}>
                {formatDate(ticket.created_date)}
              </Text>
            </View>

            <View style={styles.labelRow}>
              <Text style={styles.label}>Ngày diễn ra:</Text>
              <Text style={styles.value}>
                {formatDateTime(ticket.premiere)}
              </Text>
            </View>

            <View style={styles.labelRow}>
              <Text style={styles.label}>SVĐ:</Text>
              <Text style={styles.value}>{ticket.cinema}</Text>
            </View>

            <View style={styles.labelRow}>
              <Text style={styles.label}>Hàng:</Text>
              <Text style={styles.value}>{ticket.room}</Text>
            </View>

            <View style={styles.labelRow}>
              <Text style={styles.label}>Ghế:</Text>
              <Text style={styles.value}>{ticket.chairs.join(', ')}</Text>
            </View>

            <View style={styles.labelRow}>
              <Text style={styles.label}>Giá vé:</Text>
              <Text style={styles.value}>{formatNumber(ticket.value)} đ</Text>
            </View>
            <Divider width={1} color='#ccc' />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 16,
  },
  ticket: {
    marginBottom: 10,
    padding: 16,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  textUpper: {
    textTransform: 'uppercase',
  },
  value: {},
  cancelButton: {
    backgroundColor: '#990000',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
    marginBottom: 10,
  },
  receiveButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  cancelButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MyTicketScreen;
