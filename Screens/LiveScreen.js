import React, {useState, useEffect} from 'react';
//redux connect
import {connect} from 'react-redux';
//player
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Stylesheet
import Commonstyle from './Styles/Commonstyle';
//
import {fetchLiveData} from '../Redux';
const {width, height} = Dimensions.get('window');

const tracks = [
  {
    id: 1,
    url: 'http://103.160.144.210:8000/radio.mp3',
    artwork:
      'https://res.cloudinary.com/dik4mzdta/image/upload/v1651740848/live_day_imgs/superhit_sunday_r8klo8.jpg',
    title: 'Avaritia',
    artist: 'deadmau5',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00',
    album: 'while(1<2)',
  },
];

const LiveScreen = props => {
  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [Capability.Play, Capability.SkipToNext],
      });
      await TrackPlayer.add(tracks);
    } catch (e) {
      console.log(e);
    }
  };

  const togglePlayback = async playbackState => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack != null) {
      if (playbackState == State.Ready) {
        await TrackPlayer.play();
      } else if (playbackState == State.Playing) {
        await TrackPlayer.pause();
      } else if (playbackState == State.Paused) {
        await TrackPlayer.play();
      }
    }
  };

  const playbackState = usePlaybackState();

  useEffect(() => {
    props.fetchLiveData();

    // setUpTrackPlayer();
    // return () => TrackPlayer.destroy();
  }, []);
  console.log('##################', props.liveData);
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* backgroundImg */}
      <View style={{backgroundColor: '#080002'}}>
        <ImageBackground
          source={require('../assets/images/superhit_sunday.jpg')}
          resizeMode="stretch"
          style={LiveScreenStyles.livBgImg}></ImageBackground>
      </View>

      {/* CenterImg */}
      <View style={LiveScreenStyles.liveCentrImgCotnr}>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/superhit_sunday.jpg')}
            style={LiveScreenStyles.centrImg}
          />
        </TouchableOpacity>
        {/* {
          liveData.map(user =><View>
            <Text style={LiveScreenStyles.imgTitle}>{user.name}</Text>
            <Text style={LiveScreenStyles.imgTxt}>Every Sunday 12 am - 12pm</Text></View>
     )} */}
        {/* <Text style={LiveScreenStyles.imgTitle}>{liveData.name}</Text>
        <Text style={LiveScreenStyles.imgTxt}>{liveData.phone}</Text> */}
        {/* playcontrols */}
        <View style={LiveScreenStyles.playControlcntr}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-back-outline"
              size={35}
              color="white"
              style={{marginTop: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
            <Ionicons
              name={
                playbackState == State.Playing
                  ? 'ios-pause-circle'
                  : 'ios-play-circle'
              }
              size={75}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-forward-outline"
              size={35}
              color="white"
              style={{marginTop: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  liveData: state.live.result,
});

const mapDispatchToProps = {
  fetchLiveData: fetchLiveData,
};

const LiveScreenStyles = StyleSheet.create({
  livBgImg: {
    width: '100%',
    height: '100%',
    backgroundColor: '#080002',
    opacity: 0.2,
  },
  liveCentrImgCotnr: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '70%',
  },
  centrImg: {height: 220, width: 220, borderRadius: 15, bottom: '50%'},
  imgTitle: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    margin: 20,
  },
  imgTxt: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    marginTop: -25,
  },
  playControlcntr: {
    margin: 25,
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-between',
  },
  topBrs: {
    flex: 1,
    marginTop: 30,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveScreen);
