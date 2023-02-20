import { View, Image } from "react-native";
import React from "react";

export const TrackImage = ({ track }) => {
  console.log(track.album.images[0].url);

  const src = track.album.images[0];
  return (
    <Image
      width={200}
      height={200}
      source={{
        uri: src.url,
      }}

      // source={require("../tracker.png")}
    />
  );
};
