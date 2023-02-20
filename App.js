import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { TrackImage } from "./components/TrackImage";

const apiToken =
  "BQDx9XPzUnpeM6yOoU6K3zPbtazfJFQe-IgwRYDcsJ0csvG7WnDgjpBv7HzP5UDiwyJ1eYVW2Raw6QvRLYOIwHT-5sk9ZTpo3nTbQ9_3m4TRHi5n6v0k-Ir5vuokoia1Ruv8cFeveKAiUgDEVs0XLvkL6jgXzNFpmMBdxKHxSbpB5H-ZM2E5lIRLABsGeA";

export default function App() {
  const [text, setText] = useState("");
  const [tracks, setTracks] = useState([]);
  const [songsLoaded, setSongsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/tracks?market=FR", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + apiToken,
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log("Réponse reçue !");
        setText("Musiques reçues !");
        setTracks(responseJSON.items);
        setSongsLoaded(true);
      });
  }, []);

  if (!songsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{text}</Text>
      <Text>Nombre de musiques chargées : {tracks.length}</Text>

      <Text>La première musique est : {tracks[1].track.name}</Text>

      <TrackImage track={tracks[1].track} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
