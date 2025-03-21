import type { ViewStyle } from 'react-native';
import type { BadgeType } from '../StatusBadge';

export interface LocationDetails {
  code: string;
  city: string;
  terminal?: string;
  time: string;
  delayedTime?: string;
  gate?: string;
}

export interface FlightDurations {
  first: string;
  layover?: string;
}

export interface FlightDetails {
  origin: LocationDetails;
  destination: LocationDetails;
  date: string;
  airline: string;
  flightNumber: string;
  airlineLogo: string;
  flightStatus: BadgeType;
  flightStatusDetails: string;
  flightCode: string;
  pnr: string;
  durations: FlightDurations;
  additionalInformation?: string;
}

export interface FlightBookingsProps {
  item: FlightDetails;
  index: number;
  containerStyle?: ViewStyle;
}

export interface FlightDetailsCardProps {
  origin: LocationDetails;
  destination: LocationDetails;
  date?: string;
  flightCode?: string;
  durations: FlightDurations;
}
