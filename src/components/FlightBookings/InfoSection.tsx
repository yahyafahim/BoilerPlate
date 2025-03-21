import React from "react"
import { View, Text } from "react-native"
import type { LocationDetails } from "./types"
import styles from "./styles"

const InfoSection = ({
  origin,
  pnr,
  destination,
}: {
  origin: LocationDetails
  pnr: string
  destination: LocationDetails
}) => (
  <View style={styles.infoSection}>
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>Terminal</Text>
      <Text style={styles.infoValue}>{origin.terminal}</Text>
    </View>
    <View style={styles.infoItemCenter}>
      <Text style={styles.infoLabel}>PNR</Text>
      <Text style={styles.infoValue}>{pnr}</Text>
    </View>
    <View style={styles.infoItemRight}>
      <Text style={styles.infoLabel}>Gate No.</Text>
      <Text style={styles.infoValue}>{destination.gate}</Text>
    </View>
  </View>
)

export default InfoSection

